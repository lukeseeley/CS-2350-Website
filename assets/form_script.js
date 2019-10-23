window.addEventListener("load", addListeners);

function addListeners() {
    document.getElementById("pc").addEventListener("change", function(){
        if(document.getElementById("pc").checked) {
            document.getElementById("pcPlatforms").style.display = "block";
        } 
        else {
            document.getElementById("pcPlatforms").style.display = "none";
        }
    });
    
    document.getElementById("productChoice").addEventListener("change", function(){
         if(document.getElementById("justGames").checked) {
             document.getElementById("gameAccesories").value = "0.00";
             document.getElementById("gameHardware").value = "0.00";
             document.getElementById("gameMerchandise").value  = "0.00";
             document.getElementById("gameDLC").value = "0.00";
             
             document.getElementById("games").style.display = "block";
             document.getElementById("otherProducts").style.display = "none";
             document.getElementById("totals").style.display = "block";
         }
         else if(document.getElementById("allProducts").checked){
             document.getElementById("games").style.display = "block";
             document.getElementById("otherProducts").style.display = "block";
             document.getElementById("totals").style.display = "block";
         }
         else {
             document.getElementById("games").style.display = "none";
             document.getElementById("otherProducts").style.display = "none";
             document.getElementById("totals").style.display = "none";
             
             document.getElementById("gameAccesories").value = "0.00";
             document.getElementById("gameHardware").value = "0.00";
             document.getElementById("gameMerchandise").value  = "0.00";
             document.getElementById("gameDLC").value = "0.00";
             
             document.getElementById("AAAstdPre").value = "0";
             document.getElementById("AAAsplPre").value = "0";
             document.getElementById("AAAstd").value = "0";
             document.getElementById("AAAspl").value = "0";
             document.getElementById("indiePre").value = "0";
             document.getElementById("indie").value = "0";
             document.getElementById("AAAstdPreTotal").value = "0";
             document.getElementById("AAAsplPreTotal").value = "0";
             document.getElementById("AAAstdTotal").value = "0";
             document.getElementById("AAAsplTotal").value = "0";
             document.getElementById("indiePreTotal").value = "0";
             document.getElementById("indieTotal").value = "0";
         }
         updateTotal();
    });
    
    document.getElementById("games").addEventListener("change", function(){
        updateGame(event.target.id);
        updateTotal();
    });
    
    document.getElementById("otherProducts").addEventListener("change", updateTotal);
}

function updateTotal() {
    var numGames = parseInt(document.getElementById("AAAstdPre").value) +
        parseInt(document.getElementById("AAAsplPre").value) +
        parseInt(document.getElementById("AAAstd").value) +
        parseInt(document.getElementById("AAAspl").value) +
        parseInt(document.getElementById("indiePre").value) +
        parseInt(document.getElementById("indie").value);
        
    var spentGames = parseFloat(document.getElementById("AAAstdPreTotal").value) +
        parseFloat(document.getElementById("AAAsplPreTotal").value) +
        parseFloat(document.getElementById("AAAstdTotal").value) +
        parseFloat(document.getElementById("AAAsplTotal").value) +
        parseFloat(document.getElementById("indiePreTotal").value) +
        parseFloat(document.getElementById("indieTotal").value);
    
    var spentOther = parseFloat(document.getElementById("gameAccesories").value) +
        parseFloat(document.getElementById("gameHardware").value) +
        parseFloat(document.getElementById("gameMerchandise").value) +
        parseFloat(document.getElementById("gameDLC").value);
    
    var total = spentGames + spentOther
    
    document.getElementById("totalGames").value = numGames;
    document.getElementById("totalGamesSpent").value = spentGames;
    document.getElementById("totalOther").value = spentOther.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}

function updateGame(gameID) {
    var costID = gameID + "Cost";
    var totalID = gameID + "Total";
    
    var copies = parseInt(document.getElementById(gameID).value);
    document.getElementById(gameID).value = copies;
    var price = document.getElementById(costID).innerHTML;
    price = price.replace('$','');
    price = parseInt(price);
    if(isNaN(copies)) {
        document.getElementById(gameID).value = 0;
        document.getElementById(totalID).value = 0;
    }
    else {
        var total = copies * price;
        document.getElementById(totalID).value = total;
    }
}
