angular
  .module('mainApp', [])
  .controller('MainController', MainController)

// $http should be in service, no time for that
function  ($scope, $http) {
  $scope.firstNum = '';
  $scope.secondNum = '';
  $scope.sumResult = '';

  $scope.sendSum = sendSum;

  function sendSum() {
    const reqBody = {
      firstNum = $scope.firstNum,
      secondNum = $scope.secondNum
    };

    $http.post('http://localhost/sum', JSON.stringify(reqBody))
      .then(res => {
        $scope.sumResult = res.result;
      });

  }

}
