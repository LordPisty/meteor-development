if (Meteor.isClient) {
  var img_data = [
    {
      img_src: 'meteor.jpg',
      img_alt: 'a meteor'
    },
    {
      img_src: 'planet.jpg',
      img_alt: 'a planet'
    },
    {
      img_src: 'blackhole.jpg',
      img_alt: 'a blackhole'
    }
  ];  

  Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {
  console.log('server');
}
