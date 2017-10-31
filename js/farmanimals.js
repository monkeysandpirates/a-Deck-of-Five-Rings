 // hide and show on search
    $(function(){
      $('[data-role="list-divider"]').toggle(function(){
        $('.'+$(this).attr('data-link')).addClass('show');
        $(this).children().removeClass('ui-icon-plus').addClass('ui-icon-minus');
$(".lazy.show").each(function(idx){    
    var $img = $(this).find("img");
    var src = $img.data("src");
    $img.prop("src", src);
	$(this).removeClass('lazy');
  });

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
    $('#expansionsmenu').click(function() {
 	$(".hidden").removeClass('show');
    $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	$(".ui-li-divider .ui-icon-minus").click();
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

// All Expansion menu functions
	$(document).bind('pageinit', function() {
// When link is clicked
	$("div[id^=pack]").click(function() {
	var id = $(this).attr("id");
// collapse the expansions menu
    $("#expansionsmenu").click();
// hide everything except this expansion
	$(".hidden").removeClass('show');
	$('.' + this.id).addClass('show');
// trigger the lazy load
	$(".lazy.show").each(function(idx){    
    var $img = $(this).find("img");
    var src = $img.data("src");
    $img.prop("src", src);
	$(this).removeClass('lazy');
  });
// clear the search, and trigger a blank search
	$('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	$.mobile.silentScroll(160);
});
});

// Spoiler Expansion menu functions
	$(document).bind('pageinit', function() {
	$("div[id^=pack][class=spoilpack]").click(function() {
	var id = $(this).attr("id");
    $("#expansionsmenu").click();
	$(".hidden").removeClass('show');
	$('.' + this.id).addClass('show');
	$(".lazy.show").each(function(idx){    
    var $img = $(this).find("img");
    var src = $img.data("src");
    $img.prop("src", src);
	$(this).removeClass('lazy');
  });
	$('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
	$.mobile.silentScroll(440);
});
});