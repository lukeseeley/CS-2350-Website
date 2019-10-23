var isUp = 0; //bool flag

$(document).ready(function(){
    $('.dropdown-content').slideUp(0);
    $('#navButton').click(function(){
        if(isUp == 0) {
            isUp = 1;
            $('.dropdown-content').slideDown();
        }
        else {
            isUp = 0;
            $('.dropdown-content').slideUp();
        }
    });
});