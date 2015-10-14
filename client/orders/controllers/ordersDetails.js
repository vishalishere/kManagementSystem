angular.module("kManagementSystem").controller("OrderDetailsCtrl", ['$meteor', '$scope', '$stateParams',
  function ($meteor, $scope, $stateParams) {
        $scope.orderId = $stateParams.orderId;

        $scope.table = "Стол 1";
  }
]);