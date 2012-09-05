'/news'
'Get news information'
'request'
// user info come from cookies
{
  isForward: true,
  startId: 11,
  length: 5
}
'response'
[{
  id: 10,
  isBookmarked: false,
  createAt: 9837291, // seconds to now
  updateAt: 2342355, // seconds to now
  imageUrl: 'http://imageUrl',
  summary: '经典鞋款⋯⋯',
  thumbUp: 314,
  thumbDown: 27,
  isThumbUp: false,
  isThumbDown: false,
  product: {
    id: 1,
    name: 'Insta Pump Fury',
    variation: {
      id: 1,
      name: '雪豹 别注鞋款'
    },
    serie: {
      id: 1,
      name: 'Insta Pump Fury',
      isLiked: false
    },
    brands: [{
      id: 1,
      name: 'Reebok',
      isLiked: false
    }, {
      id: 2,
      name: 'atmos',
      isLiked: false
    }]
  },
  comments: [{
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
}, {
  id: 7
}, {
  id: 5
}, {
  id: 2
}, {
  id: 1
}]