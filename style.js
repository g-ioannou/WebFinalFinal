$(document).ready(function () {
	$(".drp-menu").fadeOut(200);
	$("#upload").fadeOut(200);
	$("#stats").fadeOut(200);
	$("#heatmap").fadeOut(200);

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

	let currentSection = "#faq";

	$(".inner-menu-btn").click(function (e) {
		e.preventDefault();
		if ($(this).attr("id") == "upload-btn") {
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

