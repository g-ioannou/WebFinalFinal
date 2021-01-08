let stats;

console.log(
	$.ajax({
		type: "GET",
		url: "https://api.ipgeolocation.io/ipgeo?apiKey=f6e4175f338647a58ddbe082d8b92916",

		success: function (response) {
			stats = response;
			console.log(stats);
		},
	})
);
