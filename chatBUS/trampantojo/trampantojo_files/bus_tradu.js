/**
 * bus_tradu - Funciones de traducción de la web
 */

function translateFireEvent(idi,accion) {
	try {
		if (document.createEvent) {
			var ev = document.createEvent("HTMLEvents");
			ev.initEvent(accion,true,true);
			idi.dispatchEvent(ev)
		} else {
			var ev = document.createEventObject();
			idi.fireEvent('on'+accion,ev)
		}
	} catch(e) {}
}

function translateBUS(idiomas) {
	if (idiomas.value) {
		idiomas = idiomas.value;
	}
	
	var nuevoidi = idiomas.split('|')[1];
	var idiopt;
	var gselector = document.getElementsByTagName('select');
	
	for (var i=0; i<gselector.length; i++) {
		if (gselector[i].className=='goog-te-combo') {
			idiopt = gselector[i];
		}
	}
		if (document.getElementById('google_translate_element2') == null
			|| document.getElementById('google_translate_element2').innerHTML.length==0
			|| idiopt.length==0 || idiopt.innerHTML.length==0) {
		setTimeout(function() {translateBUS(idiomas)},500);
	} else {
		idiopt.value=nuevoidi;
		translateFireEvent(idiopt,'change');
	}
}

function googleTranslateElementInit2() {
	new google.translate.TranslateElement(
		{pageLanguage: 'es', autoDisplay: false}, 
		'google_translate_element2');
}
