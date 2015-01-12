
$ ("document").ready(function(){
  //  $(".MTGzSquad").css("background-color", "yellow");
//    $("div p:last-child").css("background-color", "cyan");
//    $("div p:nth-child(1)").css("background-color", "cyan");
    $('p:gt(1)').css('border-style', 'solid');
    $('p:first').css({'background-color':'cyan', 'color':'white'});
    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe); 
    $('h1').bind('click',mouseclick); 
    $('#replaceWText').bind('click', replaceWText);
    $('#randpara').bind('click', removeApara);
    
});

function mouseOverMe(){
    $("h1").html("this  is easy suker");
}
function mouseOutMe (){
    $('h1').html('MTGz Squad');
}

function mouseclick(){
    $('p').html('tryrteytryteytyeyetyteytrytrytrytrytr');
}
function replaceWtext(){
    $('#replaceWText').'text'('replaced!');
}
 