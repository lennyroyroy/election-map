var politician = {
	name: "",
	electionResults: null,
	totalVote: 0
}


var makePolitician = function(first, last, color){
    var politician = {};
    politician.name = first; 
    politician.last = last;   
    politician.partyColor = color
    politician.announcePolitician = function(){
      console.log("This politician is named: "+ this.name + " " + 
      this.last);
    };
    politician.announcePolitician();
    return politician;
};

var politician1 = makePolitician("John", "Stone", [132, 17, 11]);
var politician2 = makePolitician("Jack", "Ryan", [245, 141, 136]);

politician1.electionResults = [5,1,7,2,17,6,4,2,1,9,8,3,1,11,11,0,5,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,0,4,13,1,3,28,21,11,2,11,1,3,7,2]

politician2.electionResults = [4,2,4,4,38,3,3,1,2,28,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,27,1,2,11,2,3,1];

// // My Attempt
// function setStateResults(state){
// if (politician1.electionResults[state] > politician2.electionResults[state]){ 
// 	      theStates[state].winner = politician1;
// }else if (politician2.electionResults[state] < politician1.electionResults[state]){ 
// 		    theStates[state].winner = politician2;
//   }
//   var stateWinner = SetStateResults();
//   if (stateWinner !== null) {
//     theStates[state].rgbColor = stateWinner.partyColor;
//   }else {
//     theStates[state].rgbColor = [11,32,57];
// }
  
// }

var setStateResults = function(state){
	theStates[state].winner = null;
		if (politician1.electionResults[state] > politician2.electionResults[state]){
		theStates[state].winner = politician1;
		}
		else if (politician2.electionResults[state] > politician1.electionResults[state]){
    	theStates[state].winner = politician2;
		}

	var stateWinner = theStates[state].winner;
 		if (stateWinner !== null){
		theStates[state].rgbColor = stateWinner.partyColor;
		}
		else {
		theStates[state].rgbColor = [11, 32, 57];
		}

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var stateName =  header.children[0];
  stateName.innerText = theStates[state].nameFull;

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var stateName =  header.children[1];
  stateName.innerText = theStates[state].nameAbbrev;


  var stateInfoTable = document.getElementById('stateResults');
  var resultsArea = stateInfoTable.children[1].children[0];
  var results1 = resultsArea.children[1].innerText = politician1.electionResults[state];
  

  var stateInfoTable = document.getElementById('stateResults');
  var resultsArea = stateInfoTable.children[1].children[1];
  var results1 = resultsArea.children[1].innerText = politician2.electionResults[state];


    if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
}
}






politician1.totalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
         this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};
politician1.totalVotes();


politician2.totalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
         this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};
politician2.totalVotes();

console.log(politician2.name +" "+politician2.last + " received "+ politician2.totalVotes + " votes!")
console.log(politician1.name +" "+politician1.last + " received "+ politician1.totalVotes + " votes!")


if (politician1.totalVotes > politician2.totalVotes){
	var winner = politician1.name + " "+ politician1.last
  console.log(politician1.name + " "+ politician1.last + " is the winner!");
}else if (politician2.totalVotes > politician1.totalVotes){
	var winner = politician2.name + " "+ politician2.last
  console.log(politician2.name + " "+ politician2.last + " is the winner!");
}else{
  console.log("There was an issue with the ballot!");
}


var topTable = document.getElementById('countryResults');

topTable.children[0].children[0].children[0].innerHTML = "John Stone";
topTable.children[0].children[0].children[1].innerHTML = 297;
topTable.children[0].children[0].children[2].innerHTML = "Jack Ryan";
topTable.children[0].children[0].children[3].innerHTML = 284;
topTable.children[0].children[0].children[5].innerHTML = "John Stone";




