'use strict';

eventsApp.controller('EventController', 
    function EventController($scope) {
        
        $scope.sortorder = 'name';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: '18 Murieston Drive',
                city: 'Livingston',
                area: 'West Lothian'
            },
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for Fun and Profit',
                    creatorName: 'Andy Laughlin',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This sessions will take a closer look at scopes, learn what they do etc',
                    upVoteCount: 0
                },
                {
                    name: 'Well-behaved Controllers',
                    creatorName: 'Ryan Christie',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Learn how controllers work and how to use them correctly!',
                    upVoteCount: 0
                }
            ]
        };
        
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);