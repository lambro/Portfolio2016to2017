app.controller('formPageController', function($scope, $routeParams, $route){
    $scope.workprojects = [{
      class: "fuse",
      name: "Fuse Universal",
      description: "A re-build of the Ford Foundation custom responsive main site. I worked on front end engineering on the site which was built in Umbraco. As well as the main site sections I also worked heavily on the 'Grants Database' section of the site (work > grants database) which was built in Angular, including the graph visuals using data from the Ford Foundation api, filter, search and sort functionality.",
      image: "../images/fordfoundation.png",
      link: "http://www.fordfoundation.org/"
    },{
      class: "PMI",
      name: "P.M.I",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur",
      image: "../images/fordfoundation.png",
      link: "http://www.fordfoundation.org/" 
    }, {
      class: "Ford",
      name: "The Ford Foundation",
      description: "A re-build of the Ford Foundation custom responsive main site. I worked on front end engineering on the site which was built in Umbraco. As well as the main site sections I also worked heavily on the 'Grants Database' section of the site (work > grants database) which was built in Angular, including the graph visuals using data from the Ford Foundation api, filter, search and sort functionality.",
      image: "../images/fordfoundation.png",
      link: "http://www.fordfoundation.org/" 
    }];
  

    $scope.gaprojects = [{     
         class: "Tic",
         name: "Tic Tac Trill",
      description: "My first project on General Assembly's Web Development Immersive course. This was my first real work with Ruby and Ruby on Rails. We had a week to complete it. The project was my chance to work on using Ruby logic which at the time I had chosen because I wanted to challenge myself. This was my first experience with Github and Trello for version management and organisation.",
      image: "../images/tictactrill.png",
      link: "https://tic-tac-trill.herokuapp.com/"
    }, {
      class: "Feed",
      name: "Feed.me",
      description: "'Feed.me' was the second project on General Assembly's Web Development Immersive Course. We were tasked with making a site that displayed RSS feeds in pairs. We used Github and Trello for version management and organisation. I designed all the Front End and we also divided the Back End together.",
      image: "../images/feedme.png",
      link: "http://www.fordfoundation.org/"
    }, {
      class: "LP",
      name: "Let's Play",
      description: "This was my final project on General Assembly's three month Web Development Course. I chose to make a site to organise social gaming sessions with friends and other gamers with a name inspired by my fascination with watching other people play games. We had two weeks to complete it, and I had a really ambitious project with a large number of tables and interactions. This project was written in Ruby on Rails with Angular.Js.",
      image: "../images/letsplay.png",
      link: "http://www.fordfoundation.org/"
      }];
});