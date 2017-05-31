angular
    .module('PlayersApp')
    .factory('PlayersFactory', PlayersFactory);

function PlayersFactory($http) {

var service = {
        loadPlayers: loadPlayers,
        postPlayer: postPlayer
    }

 return service;


 function loadPlayers(){
    	return $http.get("players.json");
    }

function postPlayer(player){
		console.log("gets here")
    	return $http.post("/newPlayer", player);
    }

}