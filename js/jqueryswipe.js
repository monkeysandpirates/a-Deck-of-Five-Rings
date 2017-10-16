  // hide and show on search
    $(function(){
      $('[data-role="list-divider"]').toggle(function(){
        $('.'+$(this).attr('data-link')).addClass('show');
        $(this).children().removeClass('ui-icon-plus').addClass('ui-icon-minus');
        
      },function(){
        $('.'+$(this).attr('data-link')).removeClass('show');
        $(this).children().removeClass('ui-icon-minus').addClass('ui-icon-plus');
      });
    });
    
	// expand collapse buttons
  $(document).on("click", ".collapseExpand", function () {
    var collapseAll = this.id == "btnCollapse";
    if (collapseAll) {
        $(".ui-li-divider .ui-icon-minus").click();
		    $(".hidden").removeClass('show');
			jQuery.mobile.silentScroll( '0' );
    } else {
        $(".ui-li-divider .ui-icon-plus").click();
			jQuery.mobile.silentScroll( '0' );
    }
});
		    
	// expansions menu header functions
	$(document).bind('pageinit', function() {
    $('#expansionsmenu').click(function() {
 	$(".hidden").removeClass('show');
    $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	$(".ui-li-divider .ui-icon-minus").click();
      });
}); 


// collapse and hide on search X cancel
$(document).on('click', '.ui-input-clear', function () {
	   var collapseAll = this.id == "btnCollapse";
        $(".ui-li-divider .ui-icon-minus").click();
		    $(".hidden").removeClass('show');
//     $("#expansionsmenu").click();
});
    
// collapse and hide on searchbar select cancel
$(document).on('click', '.ui-input-text', function () {
	   var collapseAll = this.id == "btnCollapse";
        $(".ui-li-divider .ui-icon-minus").click();
		    $(".hidden").removeClass('show');
//     $("#expansionsmenu").click();
});

// hide page until loaded
$(document).ready(function() {
    $('#fadewrap').fadeIn();
});
	
	
// the clear button script
//$(document).on('click', '#clear-filter', function(){       
//    $('input[data-type="search"]').val('');
//    $('input[data-type="search"]').trigger("keyup");
//});

// All Cards menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkallcards').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
	$(".hidden").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
	
// Core Set menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkcore').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
	$(".hidden").removeClass('show');
	$(".packcore").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
		    
// Tears of Ameratsu menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linktoa').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packtoa").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 

// For Honor and Glory menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkfhag').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packfhag").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
// Into the Forbidden City menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkitfc').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packitfc").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
// The Chrysanthemum Throne menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linktct').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packtct").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
// Fate has no Secrets menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkfhns').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packfhns").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
// Meditations on the Ephemeral menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
  $('#linkmote').click(function() {
// collapse the expansions menu
     $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$(".packmote").addClass('show');
// clear the search, and trigger a blank search
   $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	});
 
}); 
