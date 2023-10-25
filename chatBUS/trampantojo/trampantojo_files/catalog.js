function cambiaTab(obj){ (function($){
	var $orig = $('#tab_container_tabs > ul > .selected');
	var $dest = $(obj);
	var $list = $('#tab_container_body').children();
	
	if($orig[0]!=$dest[0]) {
		$orig.removeClass('selected');
		$dest.addClass('selected');

		$list.eq($orig.index()).fadeToggle('fast', function(){
			$list.eq($dest.index()).hide().removeClass('element-invisible').fadeToggle('slow');
		})
	}
})(jQuery); }

function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
	// Get all elements with class="tab-pane" and hide them
	tabcontent = document.getElementsByClassName("tab-pane");
	
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("bib-buscador-all");
	
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	// Show the current tab, and add an "active" class to the link that opened the tab
	
	document.getElementById(cityName).style.display = "block";
	
	evt.currentTarget.className += " active";
}
