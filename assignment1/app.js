(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope']
 function LunchCheckController($scope) {
    $scope.foodList ='';
    $scope.message = '';
    $scope.msgColor='';

    $scope.checkIfTooMuch = function() {
      var food =  $scope.foodList.split(',');
      if(food == ''){
        $scope.message="Please enter data first";
        $scope.msgColor="red";
      }else{
        if(!validateFoodList(food)){
          $scope.message="We do NOT consider an empty item";
          $scope.msgColor="red";
        }else if (food.length <= 3) {
          $scope.message="Enjoy!";
          $scope.msgColor="green";
        }else {
          $scope.message="Too much!";
          $scope.msgColor="green";
        }
      }
   };
 }

 function validateFoodList(foodArray){
    for (var i = 0; i < foodArray.length; i++) {
      if (foodArray[i] == '') {
        return false;
      }
    }
    return true;
 }


})();
