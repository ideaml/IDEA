"use strict";
var async = require("async");
var fs = require("fs");
var con = require("./constants");
var log = 1;
var files = con.files;
var keywordList=null;
var getKeywordList = function(fileName, callback) {
    if (log) {
        console.log("getKeywordList fileName:");
        console.log(fileName);
    }
    fs.readFile(fileName, function(err, data) {
        if (err) {
            return console.error(err);
        }
        keywordList = data.toString().split("\r\n");
        if (log) {
            console.log("keywordList:");
            console.log(keywordList);
        }
        callback();
    });
};

var templateData;
var getTemplateData = function(fileName,callback) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
            return console.error(err);
        }
        templateData = data.toString();
        //var templateData = data.toString().split("\r\n");
        if(log) {
          console.log("templateData:");
          console.log(templateData);
        }
        callback();
    });
};

//var outputFileName="output.txt";
var outputData="";
var formOutputData = function(callback) {
  async.eachSeries(keywordList, function(word, callback) { // Processing
      //add second word
      var regPatt2 = "####0002";
      var patt2 = new RegExp(regPatt2, "g");
      //var word2 = "testWord2";
      var word2 = getWord(word);
      var tempData2 = templateData.replace(patt2, word2);

      var regPatt = "####" ;
      var patt = new RegExp(regPatt, "g");
      var tempData = tempData2.replace(patt, word);

      outputData = outputData.concat(tempData);
      outputData = outputData.concat("\r\n");
      callback(); //need callback to loop
  }, function(err) {
      // if any of the file processing produced an error, err would equal that error
      if (err) {
          // One of the iterations produced an error.
          // All processing will now stop.
          console.log('Failed');
          callback(err);
      } else {
          if(log) {
            console.log('Write outputData:');
            console.log(outputData);
          }
          callback();
      }
  });
};

var writeData = function(fileName,callback) {
    fs.writeFile(fileName,outputData, function(err) {
        if (err) {
            return console.error(err);
        }
        if(log) {
          console.log('Write outputData:');
          console.log(outputData);
        }
        callback();
    });
};

async.eachSeries(files, function(file, callback) { // Processing
  keywordList=null;
  templateData=null;
  outputData="";
  getKeywordList(file["keywordList"],() => {
    getTemplateData(file["templateData"],() => {
      formOutputData(() => {

        writeData("output_"+file["templateData"],() => {
          callback();





        });

      });

    });

  });
}, function(err) {
    // if any of the file processing produced an error, err would equal that error
    if (err) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('Failed');
    } else {
        if(log) {
          console.log('Finish');
        }
    }
});
//capital first letter,add space between Upper case
var getWord = function(word) {
  var i = 0;
  var character = '';
  var firstLetter = word.charAt(0);
  character = firstLetter.toUpperCase();
  i=1;
  while (i <= word.length) {
      var c = '';
      c = word.charAt(i);
      if (!isNaN(c * 1)) {
          //alert('character is numric');
      } else {
          if (c == c.toUpperCase()) {
              //alert('upper case true');
              character += " ";
              character += c;

          }
          if (c == c.toLowerCase()) {
              character += c;
              //alert('lower case true');
          }
      }
      i++;
  }
  return character;
}
