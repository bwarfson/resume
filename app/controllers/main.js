/**
 * Created by Brad on 6/17/2014.
 */

app.controller('MainCtrl', function($scope){
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
            twitter: '',
            facebook: '',
            google: '',
            linkedin: 'bradwight',
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