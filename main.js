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
    var skin = angular.element( document.querySelector( '#skin' ) );
    if ($scope.skinValue === 1){
      skin.addClass('skinOlive');
      skin.removeClass('skinPale');
    } else {
      skin.addClass('skinPale');
      skin.removeClass('skinOlive');
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

   $scope.earComparison = function () {
    if ($scope.fatherEarValue > $scope.motherEarValue){
      $scope.earValue = $scope.fatherEarValue
    } else {
      $scope.earValue = $scope.motherEarValue
    }
    console.log($scope.earValue)
    var ear = angular.element( document.querySelector( '#ear' ) );
    if ($scope.earValue === 1){ // if ear is unattached
      if ($scope.skinValue === 1) {  // if skin is olive
        ear.addClass('earUnattachedOlive');
        ear.removeClass('earUnattachedPale');
        ear.removeClass('earAttachedOlive');
        ear.removeClass('earAttachedPale');
      } else { // skin is pale (ear is still unattached)
        ear.addClass('earUnattachedPale');
        ear.removeClass('earUnattachedOlive');
        ear.removeClass('earAttachedOlive');
        ear.removeClass('earAttachedPale');
      }
    } else { // ear is attached
      if ($scope.skinValue === 1) { // if skin is olive
        ear.addClass('earAttachedOlive');
        ear.removeClass('earUnattachedOlive');
        ear.removeClass('earUnattachedPale');
        ear.removeClass('earAttachedPale');
      } else { // ear is pale (ear is still attached)
        ear.addClass('earAttachedPale');
        ear.removeClass('earUnattachedOlive');
        ear.removeClass('earUnattachedPale');
        ear.removeClass('earAttachedOlive');
      }
    }
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
    var brows = angular.element( document.querySelector( '#brows' ) );
    if ($scope.browsValue === 1){
      brows.addClass('seperatedBrows');
      brows.removeClass('joinedBrows');
    } else {
      brows.addClass('joinedBrows');
      brows.removeClass('seperatedBrows');
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
    var eye = angular.element( document.querySelector( '#eye' ) );
    if ($scope.eyeValue === 1){
      eye.addClass('eyeBrown');
      eye.removeClass('eyeBlue')
    } else {
      eye.addClass('eyeBlue');
      eye.removeClass('eyeBrown')
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
    var lash = angular.element( document.querySelector( '#lash' ) );
    if ($scope.lashValue === 1){
      lash.addClass('longLash');
      lash.removeClass('shortLash')
    } else {
      lash.addClass('shortLash');
      lash.removeClass('longLash')
    }
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
    var dimples = angular.element( document.querySelector( '#dimples' ) );
    if ($scope.dimplesValue === 1){
      dimples.addClass('hasDimples');
      dimples.removeClass('noDimples')
    } else {
      dimples.removeClass('hasDimples');
    }
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
    var freckles = angular.element( document.querySelector( '#freckles' ) );
    if ($scope.frecklesValue === 1){
      freckles.addClass('hasFreckles');
      freckles.removeClass('noFreckles')
    } else {
      freckles.removeClass('hasFreckles');
    }
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
    var hair = angular.element( document.querySelector( '#hair' ) );
    if ($scope.hairColorValue === 1){
      hair.addClass('hairBlack');
      hair.removeClass('hairBrown');
    } else {
      hair.addClass('hairBrown');
      hair.removeClass('hairBlack');
    }
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
    var hairType = angular.element( document.querySelector( '#hairType' ) );
    if ($scope.hairValue === 1){ // if hair is curly
      if ($scope.hairColorValue === 1) {  // if hair is black
        hairType.addClass('hairBlackCurlyNoPeak');
        hairType.removeClass('hairBrownCurlyNoPeak hairBlackStraightNoPeak hairBrownStraightNoPeak')
      } else { // hair is brown (hair is still curly)
        hairType.addClass('hairBrownCurlyNoPeak');
        hairType.removeClass('hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownStraightNoPeak')
      }
    } else { // hair is straight
      if ($scope.hairColorValue === 1) { // if hair is black
        hairType.addClass('hairBlackStraightNoPeak');
        hairType.removeClass('hairBlackCurlyNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak')
      } else { // hair is brown (hair is still straight)
        hairType.addClass('hairBrownStraightNoPeak');
        hairType.removeClass('hairBlackCurlyNoPeak hairBrownCurlyNoPeak hairBlackStraightNoPeak')
      }
    }

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

  $scope.peakComparison = function () {
    if ($scope.fatherPeakValue > $scope.motherPeakValue){
      $scope.peakValue = $scope.fatherPeakValue
    } else {
      $scope.peakValue = $scope.motherPeakValue
    }
    console.log($scope.peakValue)
    var hairPeak = angular.element( document.querySelector( '#hairPeak' ) );
    if ($scope.peakValue === 1) { //hair has Peak
      if ($scope.hairColorValue === 1) { //Peak with black hair
        if ($scope.hairValue === 1) { //peak with black and Curly hair
          hairPeak.addClass('hairBlackCurlyPeak');
          hairPeak.removeClass('hairBlackStraightPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
        } else { // Peak, black, straight
          hairPeak.addClass('hairBlackStraightPeak');
          hairPeak.removeClass('hairBlackCurlyPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
        }
      } else { // peak with brown hair
          if ($scope.hairValue === 1){ //curly
            hairPeak.addClass('hairBrownCurlyPeak');
            hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
          }  else { //peak brown straight
            hairPeak.addClass('hairBrownStraightPeak');
            hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownCurlyPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
          }
      }
    } else { // no peak
      if ($scope.hairColorValue === 1){ //no peak black
        if ($scope.hairValue === 1){ // curly
          hairPeak.addClass('hairBlackCurlyNoPeak');
          hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
        } else { //no peak black straight
          hairPeak.addClass('hairBlackStraightNoPeak');
          hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBrownCurlyNoPeak hairBrownStraightNoPeak');
        }
      } else { //no peak brown
        if($scope.hairValue === 1) { //Curly
          hairPeak.addClass('hairBrownCurlyNoPeak');
          hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownStraightNoPeak');
        } else { //no peak, brown, straight
          hairPeak.addClass('hairBrownStraightNoPeak');
          hairPeak.removeClass('hairBlackCurlyPeak hairBlackStraightPeak hairBrownCurlyPeak hairBrownStraightPeak hairBlackCurlyNoPeak hairBlackStraightNoPeak hairBrownCurlyNoPeak');
        }
      }
    }
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
