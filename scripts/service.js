'use strict';
angular.module('myApp.service', ['ngResource'])
    .service('allTechtolkService', ['$q', '$http', function($q, $http ) {

        var checkResponse = function(response){
        	if(!angular.isObject(response)){
        		return $q.reject('respose error')
        	}
        	return response
        }

        // functions for addTechtalks
        this.getId = function(data){
        	var request = $http.post('http://54.72.3.96:3000/techtalks', data);

        	return request.then(function(response){
        		return checkResponse(response.data)
        	})
        }

        this.getTechtolk = function(id){
        	var request = $http.get('http://54.72.3.96:3000/techtalks/' + id);

        	return request.then(function(response){
        		return checkResponse(response.data)
        	})
        }


        this.updateTechtalks = function(data, id){
        	var request = $http.put('http://54.72.3.96:3000/techtalks/' + id, data);

        	return request.then(function(response){
        		return checkResponse(response.data)
        	})
        }

        this.deleteTechtalk = function(id){

        	var request = $http.delete('http://54.72.3.96:3000/techtalks/' + id);

        	return request.then(function(response){
        		return checkResponse(response.data)
        	})
        }

        // functions for allTechtalks
        this.getTechtolksList = function(){
        	var request = $http.get('http://54.72.3.96:3000/techtalks');
            
            return request.then(function(response){
            	return checkResponse(response.data)
            })
        }

        this.getLectorsList = function(name){
        	var request = $http.get('http://54.72.3.96:3000/attendees/'+name);
        	
        	return request.then(function(response){
        		return checkResponse(response.data)
        	})
        }
}]);