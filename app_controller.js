angular
    .module('PlayersApp')
    .controller('PlayersController', PlayersController);

function PlayersController($scope, PlayersFactory) {

    $scope.playersList = [];

    $scope.AllTiers = [
    	{"name": "Bronze", "img": "icons/tier_bronze.svg"},
    	{"name": "Silver", "img": "icons/tier_silver.svg"},
    	{"name": "Gold", "img": "icons/tier_gold.svg"}
    ]

    $scope.AllSexes = [
    	{"name": "Male", "img":"icons/icon_male.svg"},
    	{"name": "Female", "img":"icons/icon_female.svg"}
    ]

    initializePlayers();

    function initializePlayers() {
        PlayersFactory.loadPlayers()
            .then(function(response) {
                $scope.playersList = response.data.players;
            }, function(response) {
                console.log("fail: " + response);
            });
    };

   $scope.playerPopUp = function(){
	var popup = document.getElementById("playerPopup");
    	popup.classList.toggle("show");
    }

    $scope.addNewPlayer = function (){
    	PlayersFactory.postPlayer($scope.player)
    	.then(function(response) {
    		console.log("HERE");
               initializePlayers(); 
               $scope.cancelPlayer();
               //DOESNT WORK COME BACK  TO
            }, function(response) {
                console.log("fail: " + response);
            });

    }

    $scope.cancelPlayer = function(){
    	$scope.player= {};
    	$scope.playerPopUp();
    }

}
