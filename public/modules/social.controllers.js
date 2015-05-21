"use strict";

angular.module('app')
.controller('SocialCtrl', SocialCtrl);

SocialCtrl.$inject = ['$timeout'];

function SocialCtrl($timeout) {
    var vm = this;
    vm.carousel = carousel;
    vm.currentIndex = 0;
    vm.images = [
        'public/images/pitino.jpg',
        'public/images/back_jersey.jpg',
        'public/images/ducks.jpg',
        'public/images/petrino.jpg',
        'public/images/blue_dress.jpg',
        'public/images/kobe.jpg',
        'public/images/turiaf.jpg',
        'public/images/blue_purple.jpg',
        'public/images/golf.jpg',
        'public/images/trout.jpg',
        'public/images/kristineandkg.jpg',
    ];

    $timeout(function() {
        vm.carousel();
    }, 3000);

    function carousel() {
        if (vm.currentIndex > 8) {
            vm.currentIndex = 0;
        } else {
            vm.currentIndex++;
        }
        $timeout(function() {
            vm.carousel();
        }, 3000);
    }
}