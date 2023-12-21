const extendHex = (shortHex) => {
  // write your code here
	let i =shortHex.length-3, isCapital=false;
	let output="#";
	while (i<shortHex.length){
		let asciCode = shortHex[i].charAt[0];
		if(asciCode>=65 && asciCode<=90){
			isCapital=true;
		}
		output+=shortHex[i] + shortHex[i];
		i++;
	}
		return isCapital ? output.to upperCase():output;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
