var loadSpeed = 1;

var loadMultiplier = 1 / loadSpeed;

mynameisben = "My name is Ben.".split('')

function loadPage(callback){
    $('body').addClass('loaded').removeClass('loading');
    $('#nameisben').hide();
    if(callback)callback();
};

$(document).ready(function() {
    addLetter = function(){
        letter = mynameisben.shift();
        $('#nameisben').text($('#nameisben').text() + letter);
        if(mynameisben.length >= 1){
            setTimeout(addLetter,60 * loadMultiplier);
        } else {
            setTimeout(loadPage,2000 * loadMultiplier);             
        }
    }
    addLetter()
    
    $(window).scroll(function(){
        var dis = $(window).scrollTop(),
            nib = $('#nameisben2'),
            nibc = $('#nameisbencontainer')
        console.log(dis)
        if(dis >= 200){
            nib.text("Hello! My Name is Ben!")
            nibc.removeClass('col-md-2')
                .removeClass('col-sm-3')
                .addClass('col-sm-11 col-md-8')
        } else if(dis >= 50){
            nib.text("Hello! My Name")
            nibc.removeClass('col-md-2')
                .removeClass('col-sm-3')
                .addClass('col-sm-7 col-md-5')
        } else {
            nib.text("Hello")
        }
    })
});