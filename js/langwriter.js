var ENG;
var FR;
var RO;
var lang_data = {"EN":"","FR":"","RO":""};
var language;

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
	$('#AboutTitle').text(lang_data[lang].abouttitle);

	//Images
	$('#ImagesText').text(lang_data[lang].images);
	$('#ImagesTitle').text(lang_data[lang].imagestitle);	
	
	//Reservations
	$('#ReservationsText').text(lang_data[lang].reservations);
	$('#ReservationsTitle').text(lang_data[lang].reservationstitle);

	//Title
	$('#main-title').text(lang_data[lang].title);
}