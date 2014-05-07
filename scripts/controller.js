'use strict';
var app = angular.module('myApp.controller', []);
	
	app.controller('allTechtolkCtrl', ['$scope', 'allTechtolkService', 'baseConfig', function($scope, ajaxService, config){
		
		$scope.techtockData = {};
		$scope.resultTechTolk = []
		$scope.lectorDAta = {};

		ajaxService.getTechtolksList()
			.then(function(response){

				var lectors = [];

				$scope.techtockData = response;

				for(var item in response){
					if(response[item]['lector'] && angular.isArray(response[item]['lector'])){

						$scope.resultTechTolk.push(response[item])

						var name = ''+response[item]['lector']+'';

						if(lectors.indexOf(name) == -1){
							lectors.push(name);
							(function(name){
								ajaxService.getLectorsList(name).then(function(response){
									$scope.lectorDAta[name]=response;
								})
							})(name)
							
						}					
					}
				}
			})		
	}])

	app.controller('addTechtolkCtrl', ['$scope', 'allTechtolkService', 'baseConfig', function($scope, ajaxService, config){

		if(config.data === undefined){
			throw 'Missing config.data'
		}

		$scope.requestData = config.data;

		ajaxService.getId($scope.requestData)
			.then(function(response){
				$scope.response = response;
				$scope.id = response._id;
			})
			.then(function(response){
				ajaxService.getTechtolk($scope.id)
			})
			.then(function(response){

				$scope.gettedTechtalk = response;

				var data = $scope.requestData;

				data.notes = 'adding some chagnes, like lector place';
				data.location = 'N58';

				

				ajaxService.updateTechtalks(data, $scope.id);
					
			})
			.then(function(response){
				$scope.gettedTechtalk = response;

				ajaxService.deleteTechtalk($scope.id)

			})

	}])