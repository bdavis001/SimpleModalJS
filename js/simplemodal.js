
// Run when document is loaded in the browser
$(document).ready(function(){
    // On Click of any element with class modal
    modalstatus = "default";
    simpleModal();
});
       

function simpleModal(){  
    $("body").click(function(){
        clearModal();
    });
    $(".s-modal").click(function(){
        // Determine type of modal
        var clicked = $(this);
        ifAlert(clicked);
        ifMessage(clicked);
        ifBigView(clicked);
        ifModal(clicked);
    }); 
    
}
    
function ifAlert(element){
    if ($(element).hasClass("modal-alert")){
        var modalmessage = $(element).attr("data-message");
        modalOverlay();
        modalContent(modalmessage);
        modalstatus = "alert";
    }
}

function ifMessage(element){
    if ($(element).hasClass("modal-message")){
        //alert("Thisisa Message");
        var modalmessage = $(element).attr("data-message");
        modalOverlay();
        modalContent(modalmessage);
        modalstatus = "message";
    }
}

function ifBigView(element){
    if ($(element).hasClass("modal-bigview")){
        //alert("Thisisa Big View");
        modalstatus = "bigview";
    }
}

function ifModal(element){
    if (modalstatus == "default"){
       //     alert("This is a modal");
        }
    modalstatus = "default";
}

function modalOverlay(){
    $(".s-overlay").remove();
    $("body").append('<div class="s-overlay"><div class="modal"><div class="modal--text"></div></div></div>');
    $(".s-overlay").fadeIn(300);
}

function modalContent(element){
    
    $.getJSON( "json/modal.json", function( data ) {
  var items = [];
        console.log(element);
  $.each( data, function( key, val ) {
    if (element == key){
        $(".modal--text").html("<span>" + val + "</span>");
    }   
  });
});
}

function clearModal(){
    $(".s-overlay").remove();
}