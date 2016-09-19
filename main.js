angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo').controller('DropdownCtrl', function ($scope, $log) {

  $scope.fatherSkin = 'Pick';
  $scope.motherSkin = 'Pick';

  $scope.fatherEar = 'Pick';
  $scope.motherEar = 'Pick';

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

  // $scope.fatherHairy = 'Pick';
  // $scope.motherHairy = 'Pick';

  $scope.status = {
    isopen: false
  };








// skin
  $scope.fatherSkinColor = function(color, value) {
    $scope.fatherSkin = color
    $scope.fatherSkinValue = value
  }

  $scope.motherSkinColor = function(color, value) {
    $scope.motherSkin = color
    $scope.motherSkinValue = value
  }

  $scope.skinComparison = function (){
    if ($scope.fatherSkinValue > $scope.motherSkinValue){
      $scope.skinValue = $scope.fatherSkinValue
    } else {
      $scope.skinValue = $scope.motherSkinValue
    }
    console.log($scope.skinValue)
    if ($scope.skinValue === 1){
      var dominantSkin = angular.element( document.querySelector( '#skin' ) );
      dominantSkin.addClass('skinOlive');
    } else {
      var recessiveSkin = angular.element( document.querySelector( '#skin' ) );
      recessiveSkin.addClass('skinPale');
    }
  }

// EarLobes
  $scope.fatherEarLobes = function(apperience, value) {
    $scope.fatherEar = apperience
    $scope.fatherEarValue = value
  }

  $scope.motherEarLobes = function(apperience, value) {
    $scope.motherEar = apperience
    $scope.motherEarValue = value
  }

   $scope.earComparison = function (){
    if ($scope.fatherEarValue > $scope.motherEarValue){
      $scope.earValue = $scope.fatherEarValue
    } else {
      $scope.earValue = $scope.motherEarValue
    }
    console.log($scope.earValue)
  }


// Brows
  $scope.fatherBrowsConnection = function(connection, value) {
    $scope.fatherBrows = connection
    $scope.fatherBrowsValue = value
  }

  $scope.motherBrowsConnection = function(connection, value) {
    $scope.motherBrows = connection
    $scope.motherBrowsValue = value
  }

  $scope.browsComparison = function (){
    if ($scope.fatherBrowsValue > $scope.motherBrowsValue){
      $scope.browsValue = $scope.fatherBrowsValue
    } else {
      $scope.browsValue = $scope.motherBrowsValue
    }
    console.log($scope.browsValue)
    if ($scope.browsValue === 1){
      var dominantBrows = angular.element( document.querySelector( '#brows' ) );
      dominantBrows.addClass('seperated');
    } else {
      var recessiveBrows = angular.element( document.querySelector( '#brows' ) );
      recessiveBrows.addClass('joined');
    }
  }

// eyecolor
  $scope.fatherEyeColor = function(color, value) {
    $scope.fatherEye = color
    $scope.fatherEyeValue = value
  }

  $scope.motherEyeColor = function(color, value) {
    $scope.motherEye = color
    $scope.motherEyeValue = value
  }

  $scope.eyeComparison = function (){
    if ($scope.fatherEyeValue > $scope.motherEyeValue){
      $scope.eyeValue = $scope.fatherEyeValue
    } else {
      $scope.eyeValue = $scope.motherEyeValue
    }
    console.log($scope.eyeValue)
    if ($scope.eyeValue === 1){
      var dominantEye = angular.element( document.querySelector( '#eye' ) );
      dominantEye.addClass('eyeBrown');
    } else {
      var recessiveEye = angular.element( document.querySelector( '#eye' ) );
      recessiveEye.addClass('eyeBlue');
    }
  }

// lash
  $scope.fatherLashLength = function(length, value) {
    $scope.fatherLash = length
    $scope.fatherLashValue = value
  }

  $scope.motherLashLength = function(length, value) {
    $scope.motherLash = length
    $scope.motherLashValue = value
  }

  $scope.lashComparison = function (){
    if ($scope.fatherLashValue > $scope.motherLashValue){
      $scope.lashValue = $scope.fatherLashValue
    } else {
      $scope.lashValue = $scope.motherLashValue
    }
    console.log($scope.lashValue)
  }

// Dimples
  $scope.fatherDimplesApperience = function(apperience, value) {
    $scope.fatherDimples = apperience
    $scope.fatherDimplesValue = value
  }

  $scope.motherDimplesApperience = function(apperience, value) {
    $scope.motherDimples = apperience
    $scope.motherDimplesValue = value
  }

  $scope.dimplesComparison = function (){
    if ($scope.fatherDimplesValue > $scope.motherDimplesValue){
      $scope.dimplesValue = $scope.fatherDimplesValue
    } else {
      $scope.dimplesValue = $scope.motherDimplesValue
    }
    console.log($scope.dimplesValue)
  }

// Freckles
  $scope.fatherFrecklesApperience = function(apperience, value) {
    $scope.fatherFreckles = apperience
    $scope.fatherFrecklesValue = value
  }

  $scope.motherFrecklesApperience = function(apperience, value) {
    $scope.motherFreckles = apperience
    $scope.motherFrecklesValue =value
  }

  $scope.frecklesComparison = function (){
    if ($scope.fatherFrecklesValue > $scope.motherFrecklesValue){
      $scope.frecklesValue = $scope.fatherFrecklesValue
    } else {
      $scope.frecklesValue = $scope.motherFrecklesValue
    }
    console.log($scope.frecklesValue)
  }

// HairType
  $scope.fatherHairType = function(type, value) {
    $scope.fatherHair = type
    $scope.fatherHairValue = value
  }

  $scope.motherHairType = function(type, value) {
    $scope.motherHair = type
    $scope.motherHairValue = value
  }

   $scope.hairComparison = function (){
    if ($scope.fatherHairValue > $scope.motherHairValue){
      $scope.hairValue = $scope.fatherHairValue
    } else {
      $scope.hairValue = $scope.motherHairValue
    }
    console.log($scope.hairValue)
  }

// WidowsPeak
  $scope.fatherWidowsPeak = function(apperience, value) {
    $scope.fatherPeak = apperience
    $scope.fatherPeakValue = value
  }

  $scope.motherWidowsPeak = function(apperience, value) {
    $scope.motherPeak = apperience
    $scope.motherPeakValue = value
  }

  $scope.peakComparison = function (){
    if ($scope.fatherPeakValue > $scope.motherPeakValue){
      $scope.peakValue = $scope.fatherPeakValue
    } else {
      $scope.peakValue = $scope.motherPeakValue
    }
    console.log($scope.peakValue)
  }

// HairColor
  $scope.fatherHairColors = function(color, value) {
    $scope.fatherHairColor = color
    $scope.fatherHairColorValue = value
  }

  $scope.motherHairColors = function(color, value) {
    $scope.motherHairColor = color
    $scope.motherHairColorValue = value
  }

  $scope.hairColorComparison = function (){
    if ($scope.fatherHairColorValue > $scope.motherHairColorValue){
      $scope.hairColorValue = $scope.fatherHairColorValue
    } else {
      $scope.hairColorValue = $scope.motherHairColorValue
    }
    console.log($scope.hairColorValue)
  }

// // Hairy
//   $scope.fatherHairyPerson = function(apperience, value) {
//     $scope.fatherHairy = apperience
//     $scope.fatherHairyValue = value
//   }

//   $scope.motherHairyPerson = function(apperience, value) {
//     $scope.motherHairy = apperience
//     $scope.motherHairyValue = value
//   }

//   $scope.hairyComparison = function (){
//     if ($scope.fatherHairyValue > $scope.motherHairyValue){
//       $scope.hairyValue = $scope.fatherHairyValue
//     } else {
//       $scope.hairyValue = $scope.motherHairyValue
//     }
//     console.log($scope.hairyValue)
//   }



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
