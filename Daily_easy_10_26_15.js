//node javascript solution of /r/dailyprogrammer challenge

var consonant = "bcdfghjklmnpqrstvwxyz";
var vowel = "aeiou";
//var prompt = require('prompt');


function getRandomChar(string) {
	return string.charAt( ( Math.floor(Math.random() * 100 )) % string.length);
}

function parseString(string) {
	var processed = "";
	for (var i = 0; i< string.length ; i++) {
		if (string.charAt(i).toLowerCase() === 'c') {
			processed += getRandomChar(consonant);
		}
		else {
			processed += getRandomChar(vowel);
		}
	}
	return processed;
}

function assertCorrectLettering(string) {
	for (var i = 0; i < string.length ; i++ ){
		if (!(string.charAt(i).toLowerCase() === 'c' || string.charAt(i).toLowerCase() === 'v')){
			console.log(i + " : " + string.charAt(i) );			
			return false;	
		}
	}
	return true;
}

function properlyCapitalize(original, parsed) { 
	var capitalized = "";
	for ( var i = 0 ; i < original.length ; i++ ) {
		if (original.charAt(i) === 'C' || original.charAt(i) === 'V')
			capitalized += parsed.charAt(i).toUpperCase();
		else
			capitalized += parsed.charAt(i);
	}
	return capitalized;
}

var cv = process.argv[2];
if (assertCorrectLettering(cv)) {
	var newWord = parseString(cv);
	newWord = (cv, newWord);
	console.log("Made-up word is " + newWord);
}
else { console.log("Invalid argument!"); }
