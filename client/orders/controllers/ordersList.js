angular.module("kManagementSystem").controller("OrdersListCtrl", ['$meteor', '$state', '$scope', '$location',
  function ($meteor, $state, $scope, $location) {
    $scope.goToOrder = function(orderId){
        $location.path('/orders/' + orderId);
    };
  }
]);