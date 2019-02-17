
exports.seed = (knex, Promise) => {
  return knex('beaches').del()
    .then(() => {
      return knex('beaches').insert([
        {
          name: 'Gulf Shores', 
          latitude: '30.2460° N',
          longitude: '87.7008° W',
          picture_url: 'https://media.architecturaldigest.com/photos/5823a4887427e9b76ef2f8d9/4:3/w_2044,h_1533,c_limit/gulf-shores-01.jpg'
        },
        {
          name: 'Virginia Beach', 
          latitude: '36.8529° N',
          longitude: '75.9780° W',
          picture_url: 'https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_600,q_50,w_740/v1/clients/virginiabeachva/144_3_2190_jpeg_82b41524-7f52-44b7-a113-cc0e9f4079fe.jpg'
        },
        {
          name: 'Daytona Beach', 
          latitude: '29.2108° N',
          longitude: '81.0228° W',
          picture_url: 'http://res.cloudinary.com/simpleview/image/upload/v1436487750/clients/daytonabeach/daytona-beach-day2_956aa2aa-cbc7-acb3-952da65960898d3a.jpg'
        },
        {
          name: 'Waikiki Beach', 
          latitude: '21.2850° N',
          longitude: '157.8357° W',
          picture_url: 'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/12709_0.jpg?itok=iAe4Nk6a'
        }
      ]);
    });
};
