var imageList = new Array("assets/asteriod_explore_opt.png", 
                          "assets/cargo_shuttle_opt.jpg", 
                          "assets/cruiser_opt.png",
                          "assets/fighter_opt.png",
                          "assets/gasgiant_station_opt.jpg",
                          "assets/gremlin_opt.png",
                          "assets/headquarters_opt.png",
                          "assets/moon_base_opt.jpg",
                          "assets/reaper_opt.jpg",
                          "assets/shuttle_opt.jpg",
                          "assets/starship_gasgiant_opt.jpg",
                          "assets/steller_combat_opt.jpg",
                          "assets/walker_opt.png"
                         );

var widthList = new Array(943,
                          733,
                          943,
                          1177,
                          391, 
                          861,
                          1058,
                          840,
                          776,
                          600,
                          462,
                          464,
                          463
                         );

var captionList = new Array("A view of a planet with an asteroid belt with starships in the distance, as well as a planet.",
                            "Deep Space Cargo Shuttle",
                            "large military Star Cruiser",
                            "Star Fighter Interceptor",
                            "Gas Giant Mining Station drawing",
                            "The Gremlin Class Starship Destroyer",
                            "A large Planetary Headquarters Bustling with Life",
                            "An Astronaut viewing a mineral rich surface chasm on an alien world",
                            "A monstrous alien create known as The Reaper",
                            "Another Cargo Shuttle",
                            "A cargo ship visiting a gas giant orbital outpost",
                            "Two Starship engage in combat in orbit of a volcanic alien world and moon",
                            "A Military Grade Bipedal Walker"
                           );

var attributionList = new Array("Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Luke Seeley",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Christopher Hayes",
                                "Created by Luke Seeley",
                                "Created by Luke Seeley",
                                "Created by Christopher Hayes",
                               );

var index = 0;
var timer;

window.addEventListener("load", addListeners);

function addListeners() {
    document.getElementById("galleryNext").addEventListener("click", nextImage);
    document.getElementById("galleryPrevious").addEventListener("click", previousImage);
    document.getElementById("galleryPlay").addEventListener("click", function() {
        clearInterval(timer);
        timer = setInterval("nextImage()", 5000);
    });
    document.getElementById("galleryStop").addEventListener("click", function(){
        clearInterval(timer);
    });
}

function updateGallery() {
    document.getElementById("galleryImg").src = imageList[index];
    document.getElementById("galleryImg").width = widthList[index];
    document.getElementById("galleryCaption").innerHTML = captionList[index];
    document.getElementById("galleryAttribution").innerHTML = attributionList[index];
}

function nextImage() {
    if(index < imageList.length - 1) {
        ++index;
    }
    else {
        index = 0;
    }
    updateGallery();
}

function previousImage() {
    if(index > 0) {
        --index;
    }
    else {
        index = imageList.length -1;
    }
    updateGallery();
}