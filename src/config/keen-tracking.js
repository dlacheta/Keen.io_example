import KeenTracking from 'keen-tracking';

const client = new KeenTracking({
  projectId: '5c162b27c9e77c0001f4d5dc',
  writeKey:
    '0C535EA3D6C0B248ECF24624051920F2F2EBBD66DCAF0B462A6096C769BD2180FEB72ADC40657A0A844D26B3FF885474E95AA4E92DF68A98C06FA73A0D91E617FC25BF3B64BC61F50AF9B0F1872DE59ECF0D0E256765003A3F3463A66490C57E',
});

const helpers = KeenTracking.helpers;
const utils = KeenTracking.utils;

const sessionCookie = utils.cookie('rename-this-example-cookie');
if (!sessionCookie.get('guest_id')) {
  sessionCookie.set('guest_id', helpers.getUniqueId());
}

// optional
client.extendEvents(() => ({
  page: {
    title: document.title,
    url: document.location.href,
    info: {
      /* Enriched */
    },
  },
  time: helpers.getDatetimeIndex(),
  visitor: {
    guest_id: sessionCookie.get('guest_id'),
    /* Include additional visitor info here */
  },
  keen: {
    addons: [
      {
        name: 'keen:url_parser',
        input: {
          url: 'page.url',
        },
        output: 'page.info',
      },
    ],
  },
}));

export default client;
