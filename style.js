$(document).ready(function () {
	$(".drp-menu").hide();
	$("#upload").hide();
	$("#stats").hide();
	$("#heatmap").hide();

	$("#menu-btn").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeIn();
	});

	$("#close-menu").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeOut();
	});

	$("#faq-btn").click(function (e) {
		e.preventDefault();
		$("#faq").show();
	});

	$(".inner-menu-btn").click(function (e) {
		e.preventDefault();
		$(".drp-menu").fadeOut();
	});

	let currentSection = "#faq";

	$(".inner-menu-btn").click(function (e) {
		e.preventDefault();
		if ($(this).attr("id") == "upload-btn") {
			$(currentSection).hide();
			$("#upload").show();
			currentSection = "#upload";
		}

		if ($(this).attr("id") == "stats-btn") {
			$(currentSection).hide();
			$("#stats").show();
			currentSection = "#stats";
		}

		if ($(this).attr("id") == "heatmap-btn") {
			$(currentSection).hide();
			$("#heatmap").show();
			currentSection = "#heatmap";
		}

		if ($(this).attr("id") == "faq-btn") {
			$(currentSection).hide();
			$("#faq").show();
			currentSection = "#faq";
		}
	});
});

