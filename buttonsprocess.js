const realFileBtn = document.getElementById("real-file"); //pairnoyme to id tou antikeimenou real-file kai to apothikeuoyme sto realFileBtn
const customBtn = document.getElementById("custom-button");//pairnoyme to id tou antikeimenou custom-button kai to apothikeuoyme sto customBtn
const customTxt = document.getElementById("custom-text"); //pairnoyme to id tou antikeimenou custom-text kai to apothikeuoyme sto  customTxt
document.getElementById("save-button").addEventListener('click',exportJson);//pairnoyme to id tou antikeimenou save-button kai to apothikeuoyme sto saveBtn sto opoio prosthetoume kai event listener on click dhladh otan pathsoume to koumpi ayto tha trexei to function exportJson

customBtn.addEventListener("click", function() {//Otan patietai to customBtn patietai kai to realFileBtn
  realFileBtn.click();
});
 var reg= /[\/\\]([\w\d\s\.\-\(\)]+)$/;
 var a=[];
 var fileName;
 var save_data =[];
 
 realFileBtn.addEventListener("change", function() {//edw xrhsimopoioume event listener on change dhladh molis allaxei to No file chosen,yet. Tha ginoun ta parakatw.
   
    if (realFileBtn.value)
     {
      customTxt.innerHTML = realFileBtn.value.match(reg)[1];// otan epilexoume ena arxeio pou theloume na anevasoyme to onoma toy arxeioy emfanizetai sth thesi to no file chose,yet.
      fileName= realFileBtn.value.match(reg)[1];//apothikeuoyme to onoma toy arxeioy sth metavliti fileName
      
     }
    
    else 
    {
        customTxt.innerHTML = "No file chosen, yet.";
    }
    

    fetch(fileName)//Kanei fetch gia na boresoyme na exoyme ta data toy fileName
    .then(response => response.json()) 
    .then(data=> {
       console.log(data);

       data=processJSON(data.log.entries);//Kaloyme thn synarthsh processJson gia na epexergastei ta data
      a.push(data);// Pernaei ta data ston pinaka a
      console.log(a);

    })

});
function processJSON(obj){//gia na mh grafoyme synexeia . . . pername ws orisma to obj kai tha to xeiristoume analoga


let newObject = {};

console.log(newObject);
for(let i=0; i<obj.length;i++)
{

  let requestHeaders={table:[]};//dhlwsh metavlitis poy anaparista ta request Headers
  for(let j=0; j<obj[i].request.headers.length;j++)
  {
let requestHeader={};
let flag=0;

if(obj[i].request.headers[j].name == "Content-Type")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name == "content-type")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="Cache-Control")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="cache-control")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
  else if(obj[i].request.headers[j].name=="Pragma")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="pragma")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="Expires")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="expires")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="Age")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="age")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="Last-Modified")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="last-modified")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="Host")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
else if(obj[i].request.headers[j].name=="host")
{
  requestHeader={"name":obj[i].request.headers[j].name, "value":obj[i].request.headers[j].value};
  flag=1;
}
if(flag)//Xrhsimopoioyme ta flags giati otan den epilegei kapoio apo ta headers names poy exei to arxeio evaze {} sth thesi tou kai twra me ta flags den exoyme ayto to thema
requestHeaders.table.push(requestHeader);
}


  let responseHeaders={table:[]};
  for(let j=0; j<obj[i].response.headers.length;j++)
  {
let responseHeader={};
let flag=0;

if(obj[i].response.headers[j].name=="Content-Type")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="content-type")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="Cache-Control")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if
(obj[i].response.headers[j].name=="cache-control")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}

else if(obj[i].response.headers[j].name=="Pragma")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="pragma")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}

else if(obj[i].response.headers[j].name=="Expires")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="expires")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="Age")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="age")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="Last-Modified")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="last-modified")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="Post")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
else if(obj[i].response.headers[j].name=="post")
{
  responseHeader={"name":obj[i].response.headers[j].name, "value":obj[i].response.headers[j].value};
  flag=1;
}
if(flag)
responseHeaders.table.push(responseHeader);
}

re=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

let input=
{ 
 
  "serverIpAddress":obj[i].serverIPAddress,
  "startedDateTime":obj[i].startedDateTime,
  "timings":{
    "wait":obj[i].timings.wait},

 
  
 "request":{
      "method":obj[i].request.method,
      "url":obj[i].request.url.match(re)[0],
      "headers":requestHeaders.table
          },

 "response":{
  "status":obj[i].response.status,
  "statusText": obj[i].response.statusText,
  "headers": responseHeaders.table
}
}
newObject["entry"+i] =input;
console.log(newObject);
/*pinakas.table.push(input); *///pername ston pinaka mas ta data tou input.

}
return newObject;
}




function exportJson(){
 
  save_data = a[0];
  console.log(save_data);

  var fileName1 = fileName;

  // Create a blob of the data
  var fileToSave = new Blob([JSON.stringify(save_data)], {
      type: 'application/json',
      name: fileName1
  });

  // Save the file
  saveAs(fileToSave, fileName1);


}

