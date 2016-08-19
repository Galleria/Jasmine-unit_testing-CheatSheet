var HTMLReport = require('jasmine-xml2html-converter');
var path = require('path');
var fs = require( 'fs' );

var report_path = '../../reports';
var output_report_path = '../../reports/html';
/*
fs.readdir( report_path , (err, files) => {
  if( err ){
    console.log( "Could not list files in directory: ",err );
  }else{
    files.forEach( (f) => {
      if( f.indexOf('.xml') > -1 ){
        testConfig = {
            reportTitle: 'Test Execution Report '+f.replace('.xml',''),
            outputPath: output_report_path
        };
        new HTMLReport().from( report_path+'/'+f, testConfig);
      }
    } );
  }
} )
*/

/*
testConfig = {
    reportTitle: 'Test Execution Report '+f.replace('.xml',''),
    outputPath: output_report_path
};
new HTMLReport().from( report_path+'/'+f, testConfig);
*/
