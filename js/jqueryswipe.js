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


$("div[id^=menu]").each(function() {
    var match = this.id.match(/\w+$/)[0];
    $(this).load('menus/' + match + '.html');
});

$("div[id^=library]").each(function() {
    var match = this.id.match(/\w+$/)[0];
    $(this).load('library/' + match + '.html');
});

// start of the script to allow popups across pages

// Instantiate the popup on DOMReady, and enhance its contents
$( function() {
    $( "#menupopup" ).enhanceWithin().popup();
});
$( function() {
    $( "#popambush" ).enhanceWithin().popup();
});
$( function() {
    $( "#popbestow" ).enhanceWithin().popup();
});
$( function() {
    $( "#popinsight" ).enhanceWithin().popup();
});
$( function() {
    $( "#popintimidate" ).enhanceWithin().popup();
});
$( function() {
    $( "#poplimited" ).enhanceWithin().popup();
});
$( function() {
    $( "#popnoattach" ).enhanceWithin().popup();
});
$( function() {
    $( "#poppillage" ).enhanceWithin().popup();
});
$( function() {
    $( "#poprenown" ).enhanceWithin().popup();
});
$( function() {
    $( "#popstealth" ).enhanceWithin().popup();
});
$( function() {
    $( "#popterminal" ).enhanceWithin().popup();
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