'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
  app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = {
        header: {
            name:'Brad  Wight',
            title: 'Web Developer',
            bio: '',
            phone: '801-201-2736',
            website: 'bradwight.com',
            url: 'http://bradwight.com',
            email: 'wight.brad@gmail.com',
            location: 'Lehi, UT',
            resumeDownload: '',
            image:''
        },
        skills: {},
        education: {},
        experience: {},
        timeline:{},
        awards:{},
        interests:{}
    };
  });
