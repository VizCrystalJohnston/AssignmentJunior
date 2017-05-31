angular
    .module('PlayersApp')
    .factory('PlayersFactory', PlayersFactory);

function PlayersFactory($http) {

var service = {
        loadPlayers: loadPlayers
    }

 return service;


 function loadPlayers(){
    	return $http.get("players.json");
    }

}