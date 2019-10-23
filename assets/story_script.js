function printStory() {
    var lastN, adj1, adj2, adj3, adj4, nou1, nou2, nou3, lot1, lot2, lot3, 
        verb, emo1, emo2, emo3, anml, food;
    lastN = document.getElementById("capName").value;
    adj1 = document.getElementById("adj1").value;
    adj2 = document.getElementById("adj2").value;
    adj3 = document.getElementById("adj3").value;
    adj4 = document.getElementById("adj4").value;
    nou1 = document.getElementById("nou1").value;
    nou2 = document.getElementById("nou2").value;
    nou3 = document.getElementById("nou3").value;
    lot1 = document.getElementById("lot1").value;
    lot2 = document.getElementById("lot2").value;
    lot3 = document.getElementById("lot3").value;
    emo1 = document.getElementById("emo1").value;
    emo2 = document.getElementById("emo2").value;
    emo3 = document.getElementById("emo3").value;
    verb = document.getElementById("verb").value;
    anml = document.getElementById("anml").value;
    food = document.getElementById("food").value;
    
    document.getElementById("pNam1").innerHTML = lastN;
    document.getElementById("pNam2").innerHTML = lastN;
    document.getElementById("pNam3").innerHTML = lastN;
    document.getElementById("pNam4").innerHTML = lastN;
    document.getElementById("pAdj1").innerHTML = adj1;
    document.getElementById("pAdj2").innerHTML = adj2;
    document.getElementById("pAdj3").innerHTML = adj3;
    document.getElementById("pAdj4").innerHTML = adj4;
    document.getElementById("pNou1").innerHTML = nou1;
    document.getElementById("pNou2").innerHTML = nou2;
    document.getElementById("pNou3").innerHTML = nou3;
    document.getElementById("pLot1").innerHTML = lot1;
    document.getElementById("pLot2").innerHTML = lot2;
    document.getElementById("pLot3").innerHTML = lot3;
    document.getElementById("pLot4").innerHTML = lot3;
    document.getElementById("pEmo1").innerHTML = emo1;
    document.getElementById("pEmo2").innerHTML = emo2;
    document.getElementById("pEmo3").innerHTML = emo3;
    document.getElementById("pAnml").innerHTML = anml;
    document.getElementById("pFood").innerHTML = food;
    document.getElementById("pVerb").innerHTML = verb;
    
    document.getElementById("output").className = "visible";
}