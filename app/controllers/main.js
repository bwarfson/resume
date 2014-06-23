/**
 * Created by Brad on 6/17/2014.
 */

app.controller('MainController', function($scope){
    $scope.data = {
        header: {
            name:'Brad  Wight',
            title: 'Web Developer',
            bio: '5+ years of web development experience across multiple platforms and has been working specifically with SharePoint since 2009.  Specialties include JavaScript, HTML, CSS, SharePoint, web performance, and learning new skills quickly.  Strong interpersonal skills, detail oriented, self-motivated, and very passionate about learning technology and providing value.',
            phone: '801-201-2736',
            website: 'bradwight.com',
            url: 'http://bradwight.com',
            email: 'wight.brad@gmail.com',
            location: 'Lehi, UT',
            twitter: 'https://twitter.com/bwarfson',
            facebook: 'https://www.facebook.com/brad.wight.71',
            google: 'https://plus.google.com/u/0/+BradWight1980/',
            linkedin: 'www.linkedin.com/in/bradwight/',
            github: 'https://github.com/bwarfson',
            image: 'assets/img/bww-105-blackwhite.jpg'
        },
        skills: {
            programming: [
                {
                    title: 'JavaScript/jQuery',
                    content:'3 years experience'
                },
                {
                    title: 'HTML/HTML5',
                    content:'5 years experience'
                },
                {
                    title: 'CSS/CSS3',
                    content:'5 years experience'
                },
                {
                    title: 'C#',
                    content:'4 years experience'
                },
                {
                    title: 'XML',
                    content:'4 years experience'
                },
                {
                    title: 'NodeJS',
                    content:'1 year experience'
                },
                {
                    title: 'JSON',
                    content:'3 years experience'
                }
            ],
            libframe:[
                {
                    title: 'SharePoint',
                    content:'5 years experience'
                },
                {
                    title: 'AngularJS',
                    content:'1 year experience'
                },
                {
                    title: 'ASP.Net',
                    content:'3 years experience'
                },
                {
                    title: 'Web API',
                    content:'2 years experience'
                },
                {
                    title: 'SQL Server',
                    content:'3 years experience'
                },
                {
                    title: 'Visual Studio',
                    content:'4 years experience'
                }
            ]
        },
        education: {
            degree: 'Bachelor of Science',
            year: '2008 - 2011',
            university: 'Boise State University',
            major: 'Information Technology'
        },
        experience: [
            {
                title: 'Consultant',
                company: 'JourneyTEAM',
                date: 'January 2014 - Present',
                items: [
                    {
                        title: 'Create custom applications for SharePoint using JavaScript, AngularJS, and ASP.Net.'
                    },
                    {
                        title: 'Create custom branding for company intranets using JavaScript, AngularJS, HTML5, CSS3, and responsive design. '
                    },
                    {
                        title: 'Assisting in architectural design of custom web applications.  '
                    },
                    {
                        title: 'Design robust data visualizations using HTML5, JavaScript and AngularJS.'
                    },
                    {
                        title: 'Gather technical requirements from various sources.'
                    },
                    {
                        title: 'Improve on clients existing intranet strategy.'
                    },
                    {
                        title: 'Solve complex business and technical problems using SharePoint and software engineering.  '
                    },
                ]
            },
            {
                title: 'Web Developer',
                company: 'LDS Church',
                date: 'August 2011 - December 2013',
                items: [
                    {
                        title: 'Assisting in project development, defining technical requirements, and developing solutions.'
                    },
                    {
                        title: 'On-going support for applications, designing and customizing solutions.'
                    },
                    {
                        title: 'Overseeing architectural design and integration of content management systems, portals, business processes and other solutions.  '
                    },
                    {
                        title: 'Troubleshooting and debugging SharePoint sites'
                    }
                ]
            },
            {
                title: 'Systems Engineer',
                company: 'SuperValu Inc.',
                date: 'April 2009 - August 2011',
                items: [
                    {
                        title: 'Managed large-scale enterprise MOSS environment with 4 farms, 25,000+ users, 1,000+ site collections, and over 1TB of data. '
                    },
                    {
                        title: 'Assisted in the development of a vendor tracking application the saved that company thousands of dollars.  Our team was given an award for the application. '
                    },
                    {
                        title: 'Designed business solutions leveraging work flow, quest web parts, SSRS, light UI design, and jQuery. '
                    },
                    {
                        title: 'Worked with various service applications such as Search, SSRS, Excel Services, InfoPath form services, and PowerPivot.  '
                    }

                ]
            }
        ],
        certifications:[
            {
                title:'Programming in HTML5 with JavaScript and CSS3'
            },
            {
                title:'TS: Microsoft SharePoint 2010, Application Development'
            },
        ],
        interests:[
            {
                title: 'Family, ',
                description:''
            },
            {
                title: 'Learning, ',
                description:''
            },
            {
                title: 'Movies, ',
                description:''
            },
            {
                title: 'MMA',
                description:''
            }
        ]
    };
});