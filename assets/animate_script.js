var factionState = 0;
var arr = [1,2,3,4,5,6,7,8,9,10,11,12];

$(window).ready(function(){
    updateScreen(0)
    
    $('#sylvenTab').click(function(){
        if(factionState != 1) {
            factionState = 1;
        }
        else {
            factionState = 0;
        }
        updateScreen();
        if(factionState == 1) {
            slyAnim()
        }
    });
    
    $('#arcanumTab').click(function(){
        if(factionState != 2) {
            factionState = 2;
        }
        else {
            factionState = 0;
        }
        updateScreen();
        
        if(factionState == 2) {
            arcAnim();
        }
    });
    
    $('#imperiumTab').click(function(){
        if(factionState != 3) {
            factionState = 3;
        }
        else {
            factionState = 0;
        }
        updateScreen(); 
        
        if(factionState == 3) {
            impAnim();
        }
    });
    
    $('#steelTab').click(function(){ 
        if(factionState != 4) {
            factionState = 4;
        }
        else {
            factionState = 0;
        }
        updateScreen();     
        if(factionState == 4) {
            steelAnim();
        }
    });
});

function updateScreen() {
    if(factionState == 0) {
        $('#factionAnimations').children().slideUp();
        $('#factionAnimations').css('height','auto');
        $('#factionInfo').children().slideUp();
        $('#choose').slideDown();
    }
    if(factionState == 1) {
        $('#factionAnimations').children().slideUp();
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp();
        $('#sylvenAnimation').slideDown();
        $('#sylvenInfo').slideDown();
    }
    if(factionState == 2) {
        $('#factionAnimations').children().slideUp();
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp();
        $('#arcanumAnimation').slideDown();
        $('#arcanumInfo').slideDown();
    }
    if(factionState == 3) {
        $('#factionAnimations').children().slideUp();
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp();
        $('#imperiumAnimation').slideDown();
        $('#imperiumInfo').slideDown();
    }
    if(factionState == 4) {
        $('#factionAnimations').children().slideUp();
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp();
        $('#steelAnimation').slideDown();
        $('#steelInfo').slideDown();
    }
}

function updateScreen(time) {
    if(factionState == 0) {
        $('#factionAnimations').children().slideUp(time);
        $('#factionAnimations').css('height','auto');
        $('#factionInfo').children().slideUp(time);
        $('#choose').slideDown(time);
    }
    if(factionState == 1) {
        $('#factionAnimations').children().slideUp(time);
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp(time);
        $('#sylvenAnimation').slideDown(time);
        $('#sylvenInfo').slideDown(time);
    }
    if(factionState == 2) {
        $('#factionAnimations').children().slideUp(time);
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp(time);
        $('#arcanumAnimation').slideDown(time);
        $('#arcanumInfo').slideDown(time);
    }
    if(factionState == 3) {
        $('#factionAnimations').children().slideUp(time);
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp(time);
        $('#imperiumAnimation').slideDown(time);
        $('#imperiumInfo').slideDown(time);
    }
    if(factionState == 4) {
        $('#factionAnimations').children().slideUp(time);
        $('#factionAnimations').css('height','820px');
        $('#factionInfo').children().slideUp(time);
        $('#steelAnimation').slideDown(time);
        $('#steelInfo').slideDown(time);
    }
}

function slyAnim() {
    $('[id^="slybox"]').animate({
        width: '5%'
    }, 0);
    
    for(var i = 1; i < 11; i++) {
        var divide = Math.floor(Math.random() * 85 + 1)
        $('#slybox' + i + 'a').delay(50 * i).animate({
            width: (divide) + '%'
        }, 10 * divide)
        $('#slybox' + i + 'b').delay(50 * i).animate({
            width: (95 - divide) + '%'
        }, 10 * (95 - divide))
    }
}

function arcAnim() {
    $('[id*=arcbox]').css('width','50px');
    $('#arcflare').animate({
        opacity: '0',
        width: '500px',
        height: '500px',
        top: '130px'
    },0)
    
    $('#arcbox3').delay(50).animate({
        width: '50%'
    }, 600);
    $('#arcbox2').delay(150).animate({
        width: '70%'
    }, 700);
    $('#arcbox1').delay(250).animate({
        width: '90%'
    }, 800);
    $('#arcflare').delay(100).fadeIn(1500);
    $('#arcflare').delay(100).animate({
        opacity: '0.85',
        width: '700px',
        height: '700px',
        margin: 'auto',
        top: '30px'
    }, 1800, function(){
        $('#arcflare').delay(800).animate({
            opacity: '0.1'
        },1800);
    });
}

function impAnim() {
    //randomize list
    arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    for(var i = 0; i < 100; i++) {
        swap(Math.floor(Math.random() * 12),Math.floor(Math.random() * 12));
    }
    //display list
    impDisplay();
    //sort list
    impSort();
}

function swap(in1, in2) {
    var temp = arr[in1];
    arr[in1] = arr[in2];
    arr[in2] = temp;
}

function impDisplay() {
    for(var i = 0; i < 12; i++) {
        var blockHeight = ((arr[i] / 12) * 100) - 5 + '%'
        $('#impbox' + i).animate({
            height: blockHeight
        })
        $('#impbox' + i).html(arr[i] + '')
    }
}

function impSort() {
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] < arr[j+1]) {
                swap(j,j+1);
                impDisplay();
            }
        }
    }
}

function steelAnim() {
    $('[id*=steelbox]').animate({
        height: '10%'
    },0)
    
    for(var i = 0; i < 6; i++) {
        var barHeight = 97 / (i/2 + 1)
        $('#steelbox' + i).delay(i * 100).animate({
           height: barHeight + '%' 
        });
        $('#steelbox' +(11 - i)).delay(i * 100).animate({
           height: barHeight + '%' 
        });
    }
}


