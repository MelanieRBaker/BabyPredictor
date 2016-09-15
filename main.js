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

  $scope.fatherFreckles = 'Pick';
  $scope.motherFreckles = 'Pick';

  $scope.fatherHair = 'Pick';
  $scope.motherHair = 'Pick';

  $scope.fatherPeak = 'Pick';
  $scope.motherPeak = 'Pick';

  $scope.fatherHairColor = 'Pick';
  $scope.motherHairColor = 'Pick';


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
  $scope.fatherDimplesApperience = function(apperience) {
    $scope.fatherDimples = apperience
  }

  $scope.motherDimplesApperience = function(apperience) {
    $scope.motherDimples = apperience
  }

// Freckles
  $scope.fatherFrecklesApperience = function(apperience) {
    $scope.fatherFreckles = apperience
  }

  $scope.motherFrecklesApperience = function(apperience) {
    $scope.motherFreckles = apperience
  }

// HairType
  $scope.fatherHairType = function(type) {
    $scope.fatherHair = type
  }

  $scope.motherHairType = function(type) {
    $scope.motherHair = type
  }

// WidowsPeak
  $scope.fatherWidowsPeak = function(apperience) {
    $scope.fatherPeak = apperience
  }

  $scope.motherWidowsPeak = function(apperience) {
    $scope.motherPeak = apperience
  }

// HairColor
  $scope.fatherHairColors = function(color) {
    $scope.fatherHairColor = color
  }

  $scope.motherHairColors = function(color) {
    $scope.motherHairColor = color
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
