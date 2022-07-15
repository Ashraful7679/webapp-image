function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  // .setTitle("WebApp")
  // .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  // .setXFrameOptionsMode(HtmlService,XFrameOptionsMode,ALLOWALL)
  ;
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  // var spreadSheetId = "1W_vWLUUJnudP05IXSGE99r6fbBj6Q6IwiL5-0rB1Ifg"; //CHANGE
  // var dataRange     = "Data!A2:F"; //CHANGE
 
  // var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  // var values  = range.values;
 
  // return values;
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Data');
  let data = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
  let newData = data.map(d => [d[0],d[1],d[2],d[3],d[4],d[5].replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=sharing/g, "https://drive.google.com/uc?export=view&id=$1")])
  console.log(newData);
  // return newData;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
