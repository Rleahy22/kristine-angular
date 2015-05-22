"use strict";

angular.module('app')
.controller('VideoCtrl', VideoCtrl);

VideoCtrl.$inject = ['$sce'];

function VideoCtrl($sce) {
    var vm = this;
    vm.videos = [
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/d6-VwtCW6Vo?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/d6-VwtCW6Vo/hqdefault.jpg',
            title: "On the Sidelines of March Madness"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/AjnfoBVVnHs?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/AjnfoBVVnHs/hqdefault.jpg',
            title: "Kristine Reports from USC Opener"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/gnUAk0qhcpc?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/gnUAk0qhcpc/hqdefault.jpg',
            title: "Kristine Interviews 7th Pick Julius Randle"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https//www.youtube.com/embed/Sltja12bPvE?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/Sltja12bPvE/hqdefault.jpg',
            title: "Make-A-Wish w/ the Galaxy"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/oNy2ZGzSa5I?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/oNy2ZGzSa5I/hqdefault.jpg',
            title: "Big Baby Talks Reuniting w/ Doc Rivers"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/FdJjlXowNnA?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/FdJjlXowNnA/hqdefault.jpg',
            title: "Sideline Wichita St. Louisville & UNLV"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/p2Bz5dszjGg?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/p2Bz5dszjGg/hqdefault.jpg',
            title: "Kristine Reports From Kings/Ducks PLayoffs"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/XUVluOMVrG8?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/XUVluOMVrG8/hqdefault.jpg',
            title: "Kristine Introduces You to the Nation's Tallest Player"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/n0Hdf3Bicp4?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/n0Hdf3Bicp4/hqdefault.jpg',
            title: "Sideline at Arizona vs. SDSU"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/KkUnDAj3iuc?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/KkUnDAj3iuc/hqdefault.jpg',
            title: "Dwight Howard Talks Criticism with Kristine (Part 1)"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/z2ZykRIoxe8?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/z2ZykRIoxe8/hqdefault.jpg',
            title: "Dwight Howard Talks Criticism with Kristine (Part 2)"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/uDmdM4slvrA?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/uDmdM4slvrA/hqdefault.jpg',
            title: "Kristine Becomes First Female to Call a Horse Race in California"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/aeimHccnB38?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/aeimHccnB38/hqdefault.jpg',
            title: "Kristine Talks to Doc Rivers on Introduction Day in LA"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/nr-iFVE5lec?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/nr-iFVE5lec/hqdefault.jpg',
            title: "Is Mike Trout the Best Player in Baseball? He Tells Kristine"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/CLB2PiqiZrk?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/CLB2PiqiZrk/hqdefault.jpg',
            title: "Kristine Gets a Hockey Lesson from Corey Perry and Ryan Getzlaf"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/239OsK2jcIs?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/239OsK2jcIs/hqdefault.jpg',
            title: "Kristine Reports from NLDS"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/AgWzKZ0R1_M?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/AgWzKZ0R1_M/hqdefault.jpg',
            title: "Lakers Kobe Bryant and Strength and Conditioning Coach Talk NBA Health with Kristine"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/NgwpNGAOGPA?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/NgwpNGAOGPA/hqdefault.jpg',
            title: "Hamilton Family Has 4 Star Brothers"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/v6V2fdIiM3U?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/v6V2fdIiM3U/hqdefault.jpg',
            title: "Inside the Drew League"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/xNYFvVCQhxA?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/xNYFvVCQhxA/hqdefault.jpg',
            title: "Pitcher's Miraculous Recovery from Broken Neck"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/gF58jhkeMss?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/gF58jhkeMss/hqdefault.jpg',
            title: "Kristine Gets a Lesson in Beach Volleyball"
        },
        {
            play: false,
            url:  $sce.trustAsResourceUrl('https://www.youtube.com/embed/Oay0maLCgGI?autoplay=1'),
            imageUrl: 'https://i.ytimg.com/vi/Oay0maLCgGI/hqdefault.jpg',
            title: "USC Center Omar Oraby's Egyptian Background"
        },
    ]
}