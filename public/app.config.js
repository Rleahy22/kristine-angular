"use strict";

angular
    .module('app')
    .config(config);

function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('layout', {
            url: '',
            templateUrl: 'public/modules/layout.html'
        })
        .state('layout.home', {
            url: '/',
            templateUrl: 'public/modules/home.html'
        })
        .state('layout.bio', {
            url: 'bio',
            templateUrl: 'public/modules/bio.html'
        })
        .state('layout.video', {
            url: 'video',
            templateUrl: 'public/modules/video.html',
            controller: 'VideoCtrl as video'
        })
        .state('layout.social', {
            url: 'social',
            templateUrl: 'public/modules/social.html'
        })
        .state('layout.contact', {
            url: 'contact',
            templateUrl: 'public/modules/contact.html'
        })

    $urlRouterProvider.otherwise("/");
}