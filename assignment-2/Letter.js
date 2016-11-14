/*
	file: 	letter.js
	desc: 	simple script that generates a (skeleton) letter
			based on Christopher Stratchey's Love Letters idea. This script
			though generates complaint letters.
	author: Eva Buijs
	date: 	14/11/16
*/

var program =  require('commander');

var chance = require('chance').Chance();

var wrap = require('word-wrap');


//vocabulary for the complaint letter
const second = ['CABBAGE', 'CAULIFLOWER', 'DONKEY', 'EGG', 'IDIOT', 'OVERCOOKED CHICKEN', 'PEAR', 'TURNIP'];

const goodadjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'AVID', 'BREATHLESS', 'BURNING', 'CRAVING', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'HAPPY', 'LOVEABLE', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'WISHFUL'];

const goodnouns = ['ADORATION', 'AFFECTION', 'AMBITION', 'APPETITE', 'BIDDING','CHARM', 'COMPASSION', 'DESIRE', 'DEVOTION', 'EAGERNESS', 'ENCHANTMENT', 'ENTHUSIASM', 'FRIENDLINESS', 'FONDNESS', 'HEART', 'HOPE', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'PASSION', 'SYMPATHY', 'WISH', 'WORSHIP'];

const badadjectives = ['ANNOYING', 'BAD', 'BLOODY', 'CLUMSY', 'DETESTABLE', 'DIFFICULT', 'DISGUSTING', 'DUMB', 'EXCRUCIATING', 'IDIOTIC', 'IGNORANT', 'INSENSITIVE', 'JEALOUS', 'JUNKY', 'OVERSENSITIVE', 'PAINFUL', 'PASSIVE', 'PETTY', 'ROTTEN', 'SILLY', 'SMELLY', 'STINKY', 'STUPID', 'THIEVING', 'UNFASIONABLE', 'UNKIND', 'UNORIGINAL'];

const badnouns = ['BEHAVIOUR', 'CHEWING', 'CONDUCT', 'CRITISM', 'COOKING', 'CLEANING', 'EATING', 'MANNERS', 'MONEY', 'PLAYING', 'RAMBLING', 'SPEAKING', 'CHATIING', 'CONVERSATIONS', 'SUGGESTIONS', 'STORIES', 'STEALING', 'DRIVING', 'CHOMPING', 'DEMEANOUR', 'FOOD', 'WASHING', 'PLANS', 'SINGING'];

const adverbs = ['GRUMPILY', 'HATEFULLY', 'CRAZILY', 'FRANTICALLY', 'ILLOGICALLY', 'HONESTLY', 'MADDINGLY', 'TRUTHFULLY', 'UNFORTUNATELY', 'REGRETTABLY', 'IRRITABLY', 'SADLY', 'ANGRILY', 'IMPATIENTLY', 'UNHAPPILY', 'MISAREBLY', 'SORROWFULLY', 'UNFAIRLY']; 

const youverbs = ['ANNOY', 'ARE HUNG UP ON MY', 'DEMOLISHED', 'DESTROY', 'DETEST', 'DISRESPECT', 'EVAPORATE', 'EXTINGUISH', 'HARRASS', 'HATE', 'HURT', 'IGNORE', 'IMPAIR', 'INSULT', 'JEOPARDIZE', 'MADDEN', 'MISJUDGE', 'HAVE MISTRUSTED', 'MOCK', 'OBLITERATE', 'PERISH', 'RUIN', 'SCAR', 'SHOCK', 'SLAUGHTERED', 'SPOIL', 'TORTURE', 'VIOLATE']; 

const iverbs = ['AM SADDENED BY', 'DISSAPPROVE OF', 'DONT LIKE', 'DONT UNDERSTAND', 'AM DISILLUSIONED BY', 'AM DISPLEASED WITH', 'AM DISSATIFIED WITH', 'AM DISTURBED BY', 'AM DUMBFOUNDED BY', 'AM DERANGED BY', 'AM PATRONISED BY', 'FEEL WORRIED ABOUT', 'AM HURT', 'AM RUINED BY', 'AM SHOCKED', 'FEEL VIOLETED BY'];

const itverbs = ['SUCKS', 'IS VERY SAD', 'DRIVES ME CRAZY', 'IS RIDICULOUS', 'IS UNLIKELY', 'IS DISGUSTING', 'IS OUTRAGING', 'IS PAINFUL TO SEE', 'IS PERPLEXING TO SEE', 'FEELS RETARDED', 'IS REPULSED', 'IS SAD', 'IS DISTURBING', 'IS HURTFUL', 'IS STUPID', 'IS MEAN', 'IS AWFUL', 'IS HORRIBLE'];

const greeting = ['UNKIND', 'WORST', 'PISSED OFF', 'SAD', 'DISAPPOINTED', 'NO', 'ANGRY', 'ANNOYED', 'UNPLEASANT'];

program
.version('Complaintletters 1.0')
.option('-w, --width [value]', 'The width of the sentences in the letter', 'empty')
.option('-s, --sentence [value]', 'The amount of sentences in the letter', 'empty')
.parse(process.argv);

//Picks a random element from an array
function choice(array) {
	var index =  chance.natural({'min': 0, 'max': array.length - 1}); 
	return array[index]; 
}

//Randomly picks or not a random element from an array
function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}

//generates the greeting
function intro() {
	return 'YOU ' + maybe(badadjectives) + ' ' + choice(second) + ', \n';
}

//generates different sentence structures that will be used in the loop later
function first_sentence() {
	return 'YOU ' + maybe(adverbs) + ' ' + choice(youverbs) + ' MY ' + maybe(goodadjectives) + ' ' + choice(goodnouns) + '. ';
}

function second_sentence() {
	return 'I ' + choice(iverbs) + ' ' + 'YOUR ' + maybe (badadjectives) + ' ' + choice(badnouns) + '. ';
}

function third_sentence() {
	return 'I, AS I ' + choice(iverbs) + ' ' + 'YOUR ' + choice(badnouns) + ', ' + choice(iverbs) + ' SUCH ' + maybe(badadjectives) + ' ' + choice(badnouns) + '. ';
}

function fourth_sentence() {
	return 'MY ' + maybe(goodadjectives) + ' ' + choice(goodnouns) + ' ' + choice(itverbs) + ' BECAUSE OF YOUR ' + maybe(badadjectives) + ' ' + choice(badnouns) + '. ';
}

function fifth_sentence() {
	return 'IT ' + choice(itverbs) + ' THAT YOU ARE SO ' + choice(badadjectives) + '. ';
}

//generates a goodbye
function end() {
return '\n WITH ' + choice(greeting) + ' REGARDS, \n' + 'U.V.A.';	
}

console.log('\n\n'); // adds 2x newline ('\n')

parseInt(program.width)
parseInt(program.sentence)

var text = '';

text += intro()

//loop that generates a random order of the different sentencestructures created above. program.sentence allows you to choose 
//the amount of sentences you want generated in the loop in the letter in the terminal
for(var i = 0; i < program.sentence; i++) {
		var c = choice(['first', 'second', 'third', 'fourth', 'fifth']);
		if(c == 'first') {
    		text += first_sentence();
		} 
		else if (c == 'second') {
    		text += second_sentence();
		} 
		else if(c == 'third') {
    		text += third_sentence();
    	}
    	else if(c == 'fourth') {
    		text += fourth_sentence();
    	}
    	else if(c == 'fifth') {
    		text += fifth_sentence();
    	}
}

text += end();

console.log('\n\n'); // adds 2x newline ('\n')

//enables you to choose the width of the letter in the terminal.
console.log(wrap(text, {'width': program.width}));