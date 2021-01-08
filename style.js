let currentSection = "#upload";
$(document).ready(function () {
	$(".drp-menu").hide();
	$("#upload").show();
	$("#stats").hide();
	$("#heatmap").hide();
	$("#faq").hide();
	$("#profile").hide();

	//make a loading screen function
	$(window).bind("load", function () {
		let progressed = $(".progressed");
		let newWidth = 0;

		setInterval(() => {
			if (newWidth <= 100) {
				progressed.css({ width: newWidth + "%" });
			}
			newWidth++;
			if (newWidth == 100) {
				$(".loading-screen").fadeOut();
			}
		}, 10);
	});

	$("#menu-btn").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeIn();
	});

	$("#close-menu").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeOut(200);
	});

	$("#faq-btn").click(function (e) {
		e.preventDefault();
		$("#faq").fadeIn();
	});

	$(".inner-menu-btn").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeOut(200);
	});

	$("#profile-btn").click(function (e) {
		e.preventDefault();
		$(currentSection).fadeOut(200);
		$("#profile").fadeIn(200);
		currentSection = "#profile";
	});

	$(".inner-menu-btn").click(function (e) {
		e.preventDefault();
		if ($(this).attr("id") == "upload-nav") {
			$(currentSection).fadeOut(200);
			$("#upload").fadeIn();
			currentSection = "#upload";
		}

		if ($(this).attr("id") == "stats-btn") {
			$(currentSection).fadeOut(200);
			$("#stats").fadeIn();
			currentSection = "#stats";
		}

		if ($(this).attr("id") == "heatmap-btn") {
			$(currentSection).fadeOut(200);
			$("#heatmap").fadeIn();
			currentSection = "#heatmap";
		}

		if ($(this).attr("id") == "faq-btn") {
			$(currentSection).fadeOut(200);
			$("#faq").fadeIn();
			currentSection = "#faq";
		}
	});
});
