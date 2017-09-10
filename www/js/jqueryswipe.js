function navnext( next ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
        transition: "none"
    });
}
function navprev( prev ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
        transition: "none",
        reverse: true
    });
}

$.event.special.swipe.scrollSupressionThreshold = 10; // More than this horizontal displacement, and we will suppress scrolling.
$.event.special.swipe.horizontalDistanceThreshold = 30; // Swipe horizontal displacement must be more than this.
$.event.special.swipe.durationThreshold = 500;  // More time than this, and it isn't a swipe.
$.event.special.swipe.verticalDistanceThreshold = 75; // Swipe vertical displacement must be less than this.

// load html menus into divs
$("div[id^=menu]").each(function() {
    var match = this.id.match(/\w+$/)[0];
    $(this).load('menus/' + match + '.html');
});

$("div[id^=library]").each(function() {
    var match = this.id.match(/\w+$/)[0];
    $(this).load('library/' + match + '.html');
});

// load the card data into the front page search - hidden. Last one needs the extra lines.
$.get('menus/data-crab.html',function(data) {
   $('#search-all').append( data );  
});

$.get('menus/data-crane.html',function(data) {
   $('#search-all').append( data );
});

$.get('menus/data-dragon.html',function(data) {
   $('#search-all').append( data );
});

$.get('menus/data-lion.html',function(data) {
   $('#search-all').append( data );
});

$.get('menus/data-phoenix.html',function(data) {
   $('#search-all').append( data ); 
});

$.get('menus/data-scorpion.html',function(data) {
   $('#search-all').append( data );
});

$.get('menus/data-unicorn.html',function(data) {
   $('#search-all').append( data );
});

$.get('menus/data-neutral.html',function(data) {
   $('#search-all').append( data );
   $( "ul#search-all li" ).addClass( "ui-screen-hidden" );
//   $( "ul#search-all li" ).addClass( "ui-li-static" );
   $( "ul#search-all li" ).not(".dontchange").addClass( "ui-body-inherit" );   
});


// load the card data into the clan pages - not hidden
$.get('menus/data-crab.html',function(data) {
   $('#search-crab').append( data ); 
});

$.get('menus/data-crane.html',function(data) {
   $('#search-crane').append( data ); 
});

$.get('menus/data-dragon.html',function(data) {
   $('#search-dragon').append( data ); 
});

$.get('menus/data-lion.html',function(data) {
   $('#search-lion').append( data ); 
});

$.get('menus/data-phoenix.html',function(data) {
   $('#search-phoenix').append( data ); 
});

$.get('menus/data-scorpion.html',function(data) {
   $('#search-scorpion').append( data ); 
});

$.get('menus/data-unicorn.html',function(data) {
   $('#search-unicorn').append( data ); 
});

$.get('menus/data-neutral.html',function(data) {
   $('#search-neutral').append( data ); 
});




// start of the script to allow popups across pages

// Instantiate the popup on DOMReady, and enhance its contents
$( function() {
    $( "#floatnavpopup" ).enhanceWithin().popup();
});

// end of the script to allow popups across pages


$( document ).one( "pagecreate", "#page1", function() {
    // Handler for navigating to the next page
    // Navigate to the next page on swipeleft
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $( this ).jqmData( "next" );
        if ( next ) {
            navnext( next );
        }
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );
        if (prev) {
            navprev( prev );
        }
    });
});