"use strict";

angular.module('app')
.controller('VideoCtrl', VideoCtrl);

VideoCtrl.$inject = ['$sce'];

function VideoCtrl($sce) {
    var vm = this;
    vm.videos = [
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://www.youtube.com/embed/d6-VwtCW6Vo'),
            imageUrl: 'https://i.ytimg.com/vi/d6-VwtCW6Vo/hqdefault.jpg',
            title: "On the Sidelines of March Madness"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://www.youtube.com/embed/AjnfoBVVnHs'),
            imageUrl: 'https://i.ytimg.com/vi/AjnfoBVVnHs/hqdefault.jpg',
            title: "Kristine Reports from USC Opener"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('http://whatever.com'),
            imageUrl: 'http://whatever.com',
            title: "TITLE"
        },
    ]
}