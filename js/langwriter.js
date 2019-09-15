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
	$('#AboutText').text(lang_data[lang].about);
	$('#PleaseNote').text(lang_data[lang].please_note);
	$('#ThankYou').text(lang_data[lang].thank_you);
	$('#AboutLink').text(lang_data[lang].about_title);
	$('#AboutTitle').text(lang_data[lang].about_title);

	$('#includes1').text(lang_data[lang].includes1);
	$('#includes2').text(lang_data[lang].includes2);
	$('#includes3').text(lang_data[lang].includes3);
	$('#includes4').text(lang_data[lang].includes4);

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

	$('#restrictions1').text(lang_data[lang].restrictions1);
	$('#restrictions2').text(lang_data[lang].restrictions2);
	$('#restrictions3').text(lang_data[lang].restrictions3);
	$('#restrictions4').text(lang_data[lang].restrictions4);

	//Title
	$('#main-title').text(lang_data[lang].title);
}