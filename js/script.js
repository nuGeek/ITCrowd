$(function() {
	var url = 'api.petfinder.com/shelter.getPets?key=UbtXXsWmUpbazCtkxyVJCrTfpNJ60fnTUPyQVEJMUapOTFrqmE&id=WI22&status=A&output=full&format=json';
	$.ajax({
		url: url,
		dataType: 'jsonp',
		crossDomain: true
	  })
	  .done(function(data) {
		console.log(
		  data
		  .petfinder
		  .pets
		  .pet[0]
		  .media
		  .photos
		  .photo[0]['$t']
		);
	  });
  });