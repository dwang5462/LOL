var apiKey = "fb83f974-bb7e-4fb5-a0a1-5b0036b8e57d";
var getChamps = function() {
	$.ajax({ 
         type: "GET",
         url: "https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=false" +
	           "&api_key=" + apiKey + "&botEnabled=false",
	      success: function(data){        
	         console.log(data);
	         window.alert(data);
	         idToChamp(data);
         },
         failure: function(data){
            console.log("Failure");
         }
   });
}

var idToChamp = function(data) {
	$.ajax({ 
         type: "GET",
         url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/21?api_key=" + apiKey,
	      success: function(data){        
	         console.log(data);
         },
         failure: function(data){
            console.log("Failure");
         }
   });
}