function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .setTitle("WebApp")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  // .setXFrameOptionsMode(HtmlService,XFrameOptionsMode,ALLOWALL);
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Data');
  // let data = sheet.getDataRange().getDisplayValue().slice(1);
  let data = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getDisplayValues();
   var newData = data.map(function(val, index){
                // val[8] = "https://drive.google.com/uc?export=view&id=$1";
                val[8] = val[8].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1");
                val[7] = val[7].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1");
                val[6] = val[6].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1");
                val[5] = val[5].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1");
                 return val;

        });
console.log(newData);
        // let newData = data.map(d =>[d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1")])
  return newData;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
