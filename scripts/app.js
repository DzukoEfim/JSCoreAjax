'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.controller',
	'myApp.service',
	'myApp.config'
])
.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/allTechtolks', {
				templateUrl : 'views/allTechtalks.html',
				controller: 'allTechtolkCtrl',
			})
			.when('/addTechtolks', {
				templateUrl : 'views/addTechtalks.html',
				controller: 'addTechtolkCtrl',
			})
}])