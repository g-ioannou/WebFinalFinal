let fileList      = [];
let uploadedFiles = [];  //files that will be processed
//TODO: MAKE IT CLEANER NO NEED FOR uploadbtn
//TODO: MAKE UPLOADED FILES AN ARRAY OF OBJECTS CONTAINING THE ID, NAME AND CONTENTS OF FILE

$("#fake-upload").click(function (e) {
   e.preventDefault();
   $("#input-files").click();
});
 
//when the 'choose file' button is clicked...
$("#input-files").change(function () {
   //file or files that the user chooses to upload
   const files    = $("#input-files");  //the chosen files are assigned to a variable...
         fileList = this.files;         //each file will be an array object
   checkIfHar(fileList);
});

//display the uploaded files and their options
function displayUploadedFiles() {
   for (let i = 0; i < uploadedFiles.length; i++) {
      const file    = uploadedFiles[i];
            cleared = JSON.stringify(file, null, "\t");
            cleared = JSON.stringify(file, null, 4);

      //create a string resource identifier. this will be used to append data to the anchor below
      let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file, null, 4));
      //make a new list item for every file on fileList
      let listFile = $(
         '<li><i class="fas fa-file-import"></i>Download <a class="btn download " href="data:' +
            data +
            '" download="data.json">download JSON</a> <button id="' +
            i +
            '" class="btn delete ">Discard file </button></li>'
      )
         .appendTo("#file-list")
         .on("click");
   }
}

//if delete is clicked, file is deleted and not displayed anymore
$("#file-list").on("click", ".delete", function () {
   $(this).parent().fadeOut(300);
   let fileID = this.id;
   uploadedFiles.splice(fileID, 1);
});

$("#upload").on("drop", (e) => {
   e.stopPropagation();
   e.preventDefault();
   if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
      fileList = e.originalEvent.dataTransfer.files;  //this is already an array
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
         fileList = [];     //move to the next upload
         flag     = false;
         break;
      } else {
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

function pushToUploadedFiles() {
   for (let i = 0; i < fileList.length; i++) {
      let   fr        = new FileReader();  //used to convert the object's content to string format
      const file      = fileList[i];
            fr.onload = function () {
         try {
            //check if parsing is successfull
            fileContents = JSON.parse(fr.result);  //transform every file to a JSON object...
            uploadedFiles.push(fileContents); // this array will be displayed to the user
         } catch (error) {
            alert(fileList[i].name + " could not be loaded. Maybe its contents are damaged.");
         }
         if (i == fileList.length - 1) {
            $("#file-list").empty();
            displayUploadedFiles();
         }
      };
      fr.readAsBinaryString(file);
   }
}
