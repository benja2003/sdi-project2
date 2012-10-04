//Name: Elizabeth
//Course: SDI 1210
//Assignment: Project 2
//Story: Christmas present shopping plans.

//VARIABLES
var kids = ["Nico", "Jon", "Alyssa"];
var presents = [1, 1, 1];
var maxpresents = 3

//FUNCTIONS
//Procedure
var getPresentValue = function (getPresentValue) {
	var presentValue = 50;
	if (presentValue > getPresentAmount) {
	} else {
		console.log('"It is the most wonderful time of year, except when school starts again in the fall!" Bill said.');
	}
};

//Number Function
var getPresentValue = function (presentAmount) {
	var presentValue = 50;	
	while (presentValue > 100) {
		console.log('Bill said, "I will spend no more than ' + presentValue + ' dollars." Bill said "There is a "' + (present - presentValue) + '" dollars limit on each person."');
		presentValue-= 20;
	}
	var kidsPresent = ('Bill said "Ok, the limit on the presents for the children is ' + presentValue + ' dollars." Bill said "The children get more presents then the adults so you can spend less on the gift but get them more!"');
	return kidsPresent;
};

//String Function
var getMood = function (mood1, mood2) {
	var exclamation = ("He exclaimed " + mood1 + mood2);
	return exclamation;
};

//Boolean Function
var getPresent = function (walletMoney, kidsPresent) {
	if ((walletMoney > 50) && ((kidsPresent === "toy") || (kidsPresent === "video game"))) {
		console.log('"I think I got everything I need for the kids."');
		return true;
	} else {
		console.log('"Oh, that stinks. Looks like I can\'t get presents today."');
		return false;
	}
};

//Array Function
var getPresent = function (present, presentValue) {
	var presentValue = [];
	for (var i = 0; i < present.presentValue; i++) {
		var math = (presentValue - present[i])
		presentValue.push(math)
	}
	return presentValue;
};

//OUTPUT
console.log("Bill walked into the store and said he needed to get some presents for his three kids.");
console.log('"Will you help me find something for them?');
getKidsPresent(30);

console.log('Another guy came up to Bill and asked if he wanted to buy the video game he just bought because it was the last on on the shelf and he had bought it. Bill really wanted it because Nico asked for it from Santa. Bill asked "How much?"');
var finalPresentValue = getPresentValue(200);
console.log(finalPresentValue);

console.log("Bill was so happy he was able to get the game for Nico.")
var fullexcitement = getMood('"I am so excited!', ', I got the game for Nico that he asked for!"');
console.log(fullexcitement);

console.log("Bill made it to the cash register and was able to get the rest of the presents for the other two kids.");
console.log('The store manager said "The total of your purchase is $50, we only take cash because the cash registers are offline for some reason. Would you like me to gift wrap these for you?"');
getPresent(60, "kidsPresent")

console.log("After Bill purchased his gifts, he went home and hid them away in the attic.");
var kidsPresent = presentValue(present, presentValue);
for (var i = 0; i < presentValue.length; i++) {
	present.log(guests[i] + " received " + presents[i] + ". It was " + present[i] + " away from the best Christmas ever for the kids.");
};

console.log('"I guess next year I will have to plan a little better, or let the wife do the shopping!" Bill said.');