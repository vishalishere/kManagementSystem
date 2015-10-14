Meteor.startup(function () {
  if (Orders.find().count() === 0) {
    var orders = [
      {'table': 'Стол 1',
        'description': 'Fast just got faster with Nexus S.'},
      {'name': 'Стол 4',
        'description': 'Get it on!'},
      {'name': 'Закрытвя З',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];
    for (var i = 0; i < orders.length; i++)
      Orders.insert({name: orders[i].name, description: orders[i].description});
  }
});
