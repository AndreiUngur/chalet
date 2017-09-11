function sendEmail(form){

	//Make sure the mandatory fields are filled

	if(!form.email.value){
		$('#email-label').css('color','red');
		$('#alternative-text').text("Please enter an e-mail we may reach out to.");
		return;
	}
	$('#email-label').css('color','black');

	if(!form.startdate.value){
		$('#startdate-label').css('color','red');
		$('#alternative-text').text("A start date do your reservation is mandatory.");
		return;
	}
	$('#startdate-label').css('color','black');

	if(!form.enddate.value){
		$('#enddate-label').css('color','red');
		$('#alternative-text').text("An end date to your reservation is mandatory.");
		return;
	}
	$('#enddate-label').css('color','black');

	var startsplit = form.startdate.value.split('-');
	var endsplit = form.enddate.value.split('-');

	var startdate = new Date(startsplit[0],startsplit[1]-1,startsplit[2]);
	var enddate = new Date(endsplit[0],endsplit[1]-1,endsplit[2]);

	var errorIndex = errorHandlingDate(startdate,enddate);
	if(errorIndex!=0){
		switch(errorIndex){
			case 1:
				$('#startdate-label').css('color','red');
				$('#alternative-text').text("Beginning of reservation must be before the end.");
				return;
			case 2:
				$('#startdate-label').css('color','red');
				$('#enddate-label').css('color','red');
				$('#alternative-text').text("Reservation must be of at least 3 days.");
				return;
			case 3:
				$('#startdate-label').css('color','red');
				$('#enddate-label').css('color','red');
				$('#alternative-text').text("Reservations can not be made in the past.");
				return;
		}
	}

	$('#startdate-label').css('color','black');
	$('#enddate-label').css('color','black');
				

	startdate = startdate.toString().split(' ')[0]+" "+startdate.toString().split(' ')[1]+" "+startdate.toString().split(' ')[2]+" "+startdate.toString().split(' ')[3];
	enddate = enddate.toString().split(' ')[0]+" "+enddate.toString().split(' ')[1]+" "+enddate.toString().split(' ')[2]+" "+enddate.toString().split(' ')[3];
	
	//No errors, send e-mail
	var subject = "Reservation -- "+startdate+" to "+enddate+" by "+form.email.value;
	var body="Hi,\nI would like to make a reservation from "+startdate+" to "+enddate+".\nYou may reach me at "+form.email.value+".\n";
	if(form.message.value){
		body+=message+"\n";
	}

	body+="Thank you";
	if(form.name.value){
		body+=",\n"+form.name.value;
	}

	$('#alternative-text').text("Please send the following e-mail to romeo_horvath@yahoo.ca:\n"+body);

	document.location.href = "mailto:test@hotmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);

}

function errorHandlingDate(startdate, enddate){
	var today = new Date();

	if(enddate<startdate){
		return 1; //Error type 2
	}

	if(daysFromStart(startdate,enddate)<2){
		return 2; //Error type 1
	}

	if(enddate<today || startdate<today){
		return 3; //Error type 3
	}

	return 0;
}

function daysFromStart(startdate,enddate){
	return Math.round((enddate-startdate)/(1000*60*60*24));
}