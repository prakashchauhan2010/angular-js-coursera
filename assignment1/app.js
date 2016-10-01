(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.foodList ='';
  $scope.message = '';

  $scope.checkIfTooMuch = function(){
    var food =  $scope.foodList.split(',');
    console.log(food.length);


    if(food == ''){
      $scope.message="Please enter data first";
    }else{
        if(!validateFoodList(food)){
          $scope.message="you do NOT consider and empty item";
        }else if (food.length <= 3) {
          $scope.message="Enjoy!";
        }else {
          $scope.message="Too much!";
        }
    }
  }

  function validateFoodList(foodArray){
    for (var i = 0; i < foodArray.length; i++) {
      if (foodArray[i] == '') {
        return false;
      }
    }
    return true;
  }
});

})();
