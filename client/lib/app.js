angular.module('kManagementSystem', ['angular-meteor', 'ui.router']);

function onReady() {
  angular.bootstrap(document, ['kManagementSystem']);
}
 
if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);