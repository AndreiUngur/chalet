var ENG;
var FR;
var RO;
var lang_data = {"EN":"","FR":"","RO":""};
var language="EN";

//Set-up on document start
$(document).ready(function() {
	$.ajaxSetup({ cache: false });
});

$.ajaxSetup({
	cache: false
});

//Get data from english JSON file
$.getJSON( "./js/languages/english.json"+'?', { cache: false},function() {})
.done(function( data ) {
	ENG = data;
	lang_data.EN = ENG;
})
.fail( function(d, textStatus, error) {
	console.error("getJSON failed, status: " + textStatus + ", error: "+error)
})
.always(function() {
});

//Get data from french JSON file
$.getJSON( "./js/languages/french.json"+'?', { cache: false},function() {})
.done(function( data ) {
	FR = data;
	lang_data.FR=FR;
})
.fail( function(d, textStatus, error) {
	console.error("getJSON failed, status: " + textStatus + ", error: "+error)
})
.always(function() {
});

//Get data from romanian JSON file
$.getJSON( "./js/languages/romanian.json"+'?', { cache: false},function() {})
.done(function( data ) {
	RO = data;
	lang_data.RO=RO;
})
.fail( function(d, textStatus, error) {
	console.error("getJSON failed, status: " + textStatus + ", error: "+error)
})
.always(function() {
});


//Write data based on user selection
$('#ENG-select').click(function($e){
	$e.preventDefault();
	writeData("EN");
});

$('#FR-select').click(function($e){
	$e.preventDefault();
	writeData("FR");
});

$('#RO-select').click(function($e){
	$e.preventDefault();
	writeData("RO");
});

//Defines which id's map to which spots in the JSON file
function writeData(lang){
	language = lang;
	//About
	for(var i=0; i < lang_data[lang].about.length; i++){
		$('#AboutText' + i).text(lang_data[lang].about[i]);
	}

	$('#PleaseNote').text(lang_data[lang].please_note);
	$('#ThankYou').text(lang_data[lang].thank_you);
	$('#AboutLink').text(lang_data[lang].about_title);
	$('#AboutTitle').text(lang_data[lang].about_title);

	for(var i=0; i < lang_data[lang].includes.length; i++){
		$('#includes' + i).text(lang_data[lang].includes[i]);
	}

	//Images
	$('#ImagesText').text(lang_data[lang].images);
	$('#ImagesLink').text(lang_data[lang].images_title);
	$('#ImagesTitle').text(lang_data[lang].images_title);	
	
	//Reservations
	$('#ReservationsText').text(lang_data[lang].reservations);
	$('#ReservationsLink').text(lang_data[lang].reservations_title);
	$('#ReservationsTitle').text(lang_data[lang].reservations_title);
	$('#ReservationSpec').text(lang_data[lang].reservations_spec);
	$('#ReservationText').text(lang_data[lang].reservations_text);

	for(var i=0; i < lang_data[lang].restrictions.length; i++){
		$('#restrictions' + i).text(lang_data[lang].restrictions[i]);
	}

	//Title
	$('#main-title').text(lang_data[lang].title);

	$('#establishment').text(lang_data[lang].establishment);
}
