
var failMsg = "Failure, probably exceeding API limit";

var getChamps = function() {
	$.ajax({
         type: "GET",
         url: "https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=false" +
	           "&api_key=" + riot_apiKey + "&botEnabled=false",
	      success: function(data){
	         console.log(data);
	         idToChamp(21);
         },
         failure: function(data){
            console.log(failMsg + " " + data);
         }
   });
}

var idToChamp = function(champId) {
	$.ajax({
         type: "GET",
         // Currently getting champion id = 21 (MIss Fortune)
         url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + champId + "?api_key=" + riot_apiKey,
	      success: function(data){
	         // console.log(data);
         },
         failure: function(data){
            console.log(failMsg + " " + data);
         }
   });
}

var lastTenGames = function(data) {
	$.ajax({
         type: "GET",
         url: "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/" +
         "34901603?seasons=SEASON2015&beginIndex=0&endIndex=10&api_key=" + riot_apiKey,
	      success: function(data){
	         console.log(data);
         },
         failure: function(data){
            console.log(failMsg + " " + data);
         }
      });
}
