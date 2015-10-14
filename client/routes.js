 angular.module('kManagementSystem').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
 
      $locationProvider.html5Mode(true);
 
      $stateProvider
         .state('login', {
          url: '/login',
          templateUrl: 'client/users/views/login.ng.html',
          controller: 'LoginCtrl'
        })
        .state('orders', {
          url: '/orders',
          templateUrl: 'client/orders/views/orders-list.ng.html',
          controller: 'OrdersListCtrl'
        })
        .state('orderDetails', {
          url: '/orders/:orderId',
          templateUrl: 'client/orders/views/order-details.ng.html',
          controller: 'OrderDetailsCtrl'
        })
 
      $urlRouterProvider.otherwise("/");
    }]);