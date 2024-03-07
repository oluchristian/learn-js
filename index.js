/**
 * hello
 */
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
	
}

function checkObj(checkProp)
{
	if (myObj.hasOwnProperty(checkProp))
	{
		return myObj[checkProp];
	}
}
console.log(checkObj("gift"));