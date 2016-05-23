$(document).ready(function() {

    $("form#myForm").on("submit",function(event){

        event.preventDefault();

        var userData = $(".user-data").val();
        if ( userData != '' ) {
            // do stuff here...
            $("ul").append("<li class=\"openItem\"><img class=\"checkbx unchecked\" src=\"./img/unchecked_checkbox.png\" alt=\"unchecked checkbox\" height=\"17\" width=\"17\">" + userData + "<img class=\"trash\" src=\"./img/trash_recyclebin_empty_closed.png\" alt=\"trash can\" height=\"17\" width=\"17\"></li>");
        } else {
            alert('you did not enter an item to add');
        }

        $('#myForm')[0].reset();


    });

  console.log($('ul').on('click', '.checkbx', function( event ) {
      $( event.target ).closest( "li" ).toggleClass( "openItem closedItem" );
      $( event.target ).closest( "img" ).toggleClass( "unchecked checked" );
      $( event.target ).closest('.unchecked').attr('src','./img/unchecked_checkbox.png').attr('alt','unchecked checkbox');
      $( event.target ).closest('.checked').attr('src','./img/checked_checkbox.png').attr('alt','checked checkbox');

  }));

    console.log($('ul').on('click', '.trash', function( event ) {
        $( event.target ).closest( "li" ).remove();
    }));



    $(".button").click(function(){
        $("li").remove();
    });

});
