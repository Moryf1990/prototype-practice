// 1. Write a method called shout on the String prototype that returns the
// string in all capital letters and adds 5 exclamation points.

// write your code here
String.prototype.shout = function() {
    return this.toUpperCase() + '!!!!!';
}  


Object.prototype.toString = function() {
  var obj = this;
  var keyMap = Object.keys(obj);
  var keyAndValue = keyMap.map(function(key) {
    return key + ': ' + obj[key];
  });
  return keyAndValue.join(', ');
}
// shout();
console.assert('I like unicorns'.shout() === 'I LIKE UNICORNS!!!!!', 'expected to really like unicorns')
console.assert('Aaron likes nutella'.shout() === 'AARON LIKES NUTELLA!!!!!', 'expected to aaron to really like nutell')
console.assert('Prototypes make sharing easy'.shout() === 'PROTOTYPES MAKE SHARING EASY!!!!!', 'expected prototypes to share really well')

// 2. Overwrite the 'toString' method on all objects so that it returns keys
// and values on that object.

var aSimpleObject = {color: 'pink', number: 57}
var aUnicorn = {color: 'irridescent', hornType: 'rainbow', age: 23926094 }
console.assert(aSimpleObject.toString() === 'color: pink, number: 57');
console.assert(aUnicorn.toString() === 'color: irridescent, hornType: rainbow, age: 23926094');

// 3. Write a constructor that allows you to create Characters for a fictional
// video game. Each character should have a name, a health (number), and a
// special skill (string).
function VideoGame (name, skill) {
	this.name = name;
	this.health = 50;
	this.skill = skill;
}



// 4. Add a method to your Character prototype that enables the created
// characters to heal themselves (aka, their health value goes up)
VideoGame.prototype.heal=function() {
	return this.health += 20;
}

// 5. Add a method to your Character prototype that enables the created
// characters to attack another character. The method should accept one
// argument, which should be a created character. It should decrease the health
// number of that other character. 
VideoGame.prototype.attack = function(attacker) {
	if(this !== attacker) {
		return attacker.health -= Math.ceil(25);
	}
	else {
		console.log('not so fast');
	}
}


// 6. Create a constructor that creates a Super Character. It should inherit
// all the properties of a normal character, and should be able to use all
// methods on the Character prototype

function Annihilator (name, skill) {
	VideoGame.call(this, name, skill);
};

Annihilator.prototype = Object.create(Character.prototype);

// 7. Add a method to the Super Character prototype that allows it to destroy
// another character in one fell swoop. It should accept one argument (a
// character) and reduce their health to zero, no matter what their health was
// going in. This method SHOULD NOT be available for normal characters, only
// super characters.

Annihilator.prototype.destroy = function(smite) {
	if (this !== smite) {
		return smite.health = 0;
	} else {
		console.log('no no no');
	}
}







