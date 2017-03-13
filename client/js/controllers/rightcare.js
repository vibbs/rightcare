angular
  .module('app')
  .controller('rightCareController', ['$scope', '$state', 'Patient', function($scope,
      $state, Patient) {
    $scope.patient= [];
    function getPatient() {
      Patient
        .find()
        .$promise
        .then(function(results) {
          $scope.patient = results;
        });
    }
    getPatient();

    $scope.addPatient = function() {
      Patient
        .create($scope.newPatient)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.todoForm.content.$setPristine();
          $('.focus').focus();
          getPatient();
        });
    };

    $scope.removePatient = function(item) {
      Patient
        .deleteById(item)
        .$promise
        .then(function() {
          getPatient();
        });
    };
  }]);