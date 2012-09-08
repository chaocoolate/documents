'/articles'
'Get articles information'
'request'
// user info come from cookies
{
  isForward: true,
  startId: 11,
  length: 5,
  locale: 'zhCN'
}
'response' 
[{
  id: 10,
  isBookmarked: false,
  title: 'atmos x Reebok INSTA PUMP FURY 雪豹 別注鞋款',
  updateAt: 2342355,
  // seconds to now
  updateAtString: '二天前',
  photos: [{
    url: 'http://imageUrl1',
    caption: 'xxx'
  }, {
    url: 'http://imageUrl2',
    caption: 'yyy'
  }],
  summary: '经典鞋款⋯⋯',
  thumbUp: 314,
  thumbDown: 27,
  isThumbUp: false,
  isThumbDown: false,
  about: {
    id: 1,
    name: 'Insta Pump Fury',
    type: {
      type: 1
      name: 'product'
    },
    varations: [{}],
    serie: {},
    product: {
      id: 3
      name: 'C350'
      isSubscribed: false
    },
    brands: [{
      id: 1,
      name: 'Reebok',
      isSubscribed: false
    }, {
      id: 2,
      name: 'atmos',
      isSubscribed: false
    }]
  },
  totalComments: 15
}, {
  id: 7
}, {
  id: 5
}, {
  id: 2
}, {
  id: 1
}]

'/comments'
'Get comments information'
'request'
// user info come from cookies
{
  articleId: 1
}
'response'
[{
  id: 1,
  createAt: 123123,
  updateAt: 8032980,
  userId: 1,
  content: 'Good!'
}, {
  id: 2,
  createAt: 423423,
  updateAt: 43534,
  userId: 2,
  content: 'I like it!'
}]