$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });



    $('#NavMenubar').click(function() {
        sideNavOpenClose();
    });
    
    $('#ContentOverLayID').click(function() {
        sideNavOpenClose();
    });
    
    function sideNavOpenClose(){
        let sideNavID = $('#sideNavID');
            let ContentOverLayID = $('#ContentOverLayID')
            let menutext = $('.menutext');
            if(sideNavID.hasClass('sideNavClose')){
                sideNavID.removeClass('sideNavClose');
                sideNavID.addClass('sideNavOpen');
                menutext.removeClass('d-none');
                ContentOverLayID.addClass('ContentOverLay');
                ContentOverLayID.removeClass('ContentOverLayClose')
            }else{
                sideNavID.removeClass('sideNavOpen');
                sideNavID.addClass('sideNavClose');
                menutext.addClass('d-none');
                ContentOverLayID.addClass('ContentOverLayClose');
                ContentOverLayID.removeClass('ContentOverLay')
    
            }
    }
    