angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo').controller('DropdownCtrl', function ($scope, $log) {

  $scope.fatherSkin = 'Pick';
  $scope.motherSkin = 'Pick';

  $scope.fatherBrows = 'Pick';
  $scope.motherBrows = 'Pick';

  $scope.fatherEye = 'Pick';
  $scope.motherEye = 'Pick';

  $scope.fatherLash = 'Pick';
  $scope.motherLash = 'Pick';

  $scope.fatherDimples = 'Pick';
  $scope.motherDimples = 'Pick';







  $scope.status = {
    isopen: false
  };








// skin
  $scope.fatherSkinColor = function(color) {
    $scope.fatherSkin = color
  }

  $scope.motherSkinColor = function(color) {
    $scope.motherSkin = color
  }

// Brows
  $scope.fatherBrowsConnection = function(connection) {
    $scope.fatherBrows = connection
  }

  $scope.motherBrowsConnection = function(connection) {
    $scope.motherBrows = connection
  }

// eyecolor
  $scope.fatherEyeColor = function(color) {
    $scope.fatherEye = color
  }

  $scope.motherEyeColor = function(color) {
    $scope.motherEye = color
  }

// lash
  $scope.fatherLashLength = function(length) {
    $scope.fatherLash = length
  }

  $scope.motherLashLength = function(length) {
    $scope.motherLash = length
  }

// Dimples
  $scope.fatherDimplesApperience = function(length) {
    $scope.fatherDimples = length
  }

  $scope.motherDimplesApperience = function(length) {
    $scope.motherDimples = length
  }




  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
