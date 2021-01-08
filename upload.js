let data;
let fileList = [];
let fileNamelist = [];
let uploadedFiles = []; //files that will be processed
let uploadMeta = {
	fileID: {
		userID: "",
		userIP: "", //access this key just before you send the uploadMeta to php inside a fetch
		dateUploaded: "",
	},
};
//geolocation API
const geolocationAPI = "https://api.ipgeolocation.io/ipgeo?apiKey=f6e4175f338647a58ddbe082d8b92916";

//this function gets data from a specified API
function fetchDataFromAPI(API_URL) {
	return fetch(API_URL)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
}

/**
 *
 * THIS PART MUST GO TO THE UPLOAD TO SERVER BTN
 *
 */
//fetch data
data = fetchDataFromAPI(geolocationAPI);

//do stuff with data inside then(...)

data.then((userMeta) => {
	console.log(userMeta);
	console.log("");
});
/**
 *
 * THIS PART MUST GO TO THE UPLOAD TO SERVER BTN
 *
 */

$("#fake-upload").click(function (e) {
	e.preventDefault();
	$("#input-files").click();
});

//when the 'choose file' button is clicked...
$("#input-files").change(function () {
	//file or files that the user chooses to upload
	const files = $("#input-files"); //the chosen files are assigned to a variable...
	fileList = this.files; //each file will be an array object
	checkIfHar(fileList);
});

$(".no-files-message").show();

$(".delete-btn").click(function (e) {
	e.preventDefault();
	//let fileID = 1;
	$(this).parent().fadeOut(300);
	// uploadedFiles.splice(1,fileID);
});

$("#upload").on("drop", (e) => {
	e.stopPropagation();
	e.preventDefault();
	if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
		fileList = e.originalEvent.dataTransfer.files; //this is already an array
		for (let i = 0; i < fileList.length; i++) {
			const file = fileList[i];
			checkIfHar(fileList);
		}
		pushToUploadedFiles();
	}
	$(".area").css("color", "#21333b");
	$("body #upload").css("border", "none");
});

$("#upload").on("dragover", (e) => {
	e.stopPropagation();
	e.preventDefault();
	$(".area").css("color", "#9d9d9d");

	$("body #upload").css("border", "3px #9d9d9d dashed");
});

$("#upload").on("dragleave", (e) => {
	$(".area").css("color", "#21333b");
	$("body #upload").css("border", "none");
});

//this function checks if the file is of .har type
function checkIfHar(fileList) {
	let flag = true;
	for (let i = 0; i < fileList.length; i++) {
		const fileName = fileList[i].name;
		if (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) != "har") {
			alert(fileName + " is not a HAR-type file. Please try again.");
			fileList = []; //move to the next upload
			flag = false;
			break;
		} else {
			console.log(fileList);
		}
	}
	if (flag == true) {
		$("#upload-btn").click();
	}
}

$("#upload-btn").on("click", function (e) {
	e.preventDefault();
	pushToUploadedFiles();
});

let fileID = 0;

function pushToUploadedFiles() {
	for (let i = 0; i < fileList.length; i++) {
		let fr = new FileReader(); //used to convert the object's content to string format
		const file = fileList[i];
		fr.onload = function () {
			try {
				//check if parsing is successfull
				fileContents = JSON.parse(fr.result); //transform every file to a JSON object...
				console.log(fileContents);
				//TODO FileContents should be the sanitized
				uploadedFiles.push(fileContents); // this object will be displayed to the user
				fileNamelist.push(file.name);
				//save the fileContents in a key under the fileID

				//save the date the file was uploaded in SQL format
				//DATETIME - format: YYYY-MM-DD HH:MI:SS
				uploadMeta.fileID["dateUploaded"] = new Date().toISOString().slice(0, 19).replace("T", " ");
			} catch (error) {
				console.log(error);
				alert(fileList[i].name + " could not be loaded. Maybe its contents are damaged.");
			}

			if (i == fileList.length - 1) {
				//otan ola ta arxeia exoun epeksergastei kai metatrapei tote ginontai push kai katharizetai to fileList - etoimoi gia epomeno upload
				$("#file-list").empty();

				displayUploadedFiles();
			}
		};
		fr.readAsBinaryString(file);
	}
}

//display the uploaded files and their options
function displayUploadedFiles() {
	console.log(fileNamelist);
	for (let i = 0; i < uploadedFiles.length; i++) {
		const file = uploadedFiles[i];
		const fileName = fileNamelist[i];
		//todo sanitize files here

		//create a string resource identifier. this will be used to append data to the anchor below
		let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file, null, 4));
		//make a new list item for every file on fileList

		let listFile =
			'<li id=' +
			'class="uploaded-file">' +
			'<i class="file-icon fal fa-file"></i>' + //file icon
			fileName +
			'<a  class="download Link" href="data:' +
			data +
			'" download="data.json" hidden>download JSON</a>' + //todo: functionality
			' <button id="' +
			i +
			'" class="delete-btn"><i class=" fal fa-trash-alt"></i> </button>' + //delete btn
			' <button id="' +
			i +
			'" class="upload-server-btn"><i class="fal fa-arrow-to-top"></i></button>' + //upload-btn
			' <button id="' +
			i +
			'" class="download-btn"><i class="fal fa-download"></i></button>' + //download-btn
			"</li>";
		$(".files-list").append(listFile);
	}
}

$;
