angular
    .module('PlayersApp')
    .controller('PlayersController', PlayersController);

function PlayersController($scope, PlayersFactory) {

    $scope.playersList = [];

    // $scope.Tiers = [
    // 	,
    // 	{name: "Silver", img: "tier_silver.svg"},
    // 	{name: "Gold", img: "tier_gold.svg"},
    // ]

    init();

    function init() {
        PlayersFactory.loadPlayers()
            .then(function(response) {
                $scope.playersList = response.data.players;
            }, function(response) {
                console.log("fail: " + response);
            });
    };

    // function getTierImg(playerTier){
    // 	for (i = 0; i < $scope.Tiers.length; i++) { 
    // 		if(playerTier = $scope.Tiers[i].name){
    // 			return $scope.Tiers[i].img
    // 		}
    // 	}
    // };

}
