Meteor.startup(function () {
  if (Orders.find().count() === 0) {
    var orders = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.'},
      {'name': 'All dubstep all the time',
        'description': 'Get it on!'},
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];
    for (var i = 0; i < orders.length; i++)
      Orders.insert({name: orders[i].name, description: orders[i].description});
  }
});
