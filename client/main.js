angular
  .module('mainApp', [])
  .controller('MainController', function ($scope, $http) {
    // $http should be in service, no time for that
    $scope.firstNum = '';
    $scope.secondNum = '';
    $scope.sumResult = '';

    $scope.sendSum = sendSum;

    function sendSum() {
      const reqBody = {
        firstNum: $scope.firstNum,
        secondNum: $scope.secondNum
      };

      $http.post('http://localhost:3000/sum', reqBody)
        .then(res => {
          console.log(res);
          $scope.sumResult = res.data.result;
        });

    }


  });
