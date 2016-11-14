/*
	file: 	letter.js
	desc: 	simple script that generates a (skeleton) letter
			based on Christopher Stratchey's Love Letters idea. This script
			though generates complaint letters.
	author: Eva Buijs
	date: 	14/11/16

THIS CODE WORKS: IT GIVES OUTPUT. DON'T CHANGE.
*/

var program =  require('commander');

var chance = require('chance').Chance();

var wrap = require('word-wrap');

const second = ['CABBAGE', 'CAULIFLOWER', 'DONKEY', 'EGG', 'IDIOT', 'OVERCOOKED CHICKEN', 'PEAR', 'TURNIP'];

const goodadjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'AVID', 'BREATHLESS', 'BURNING', 'CRAVING', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'HAPPY', 'LOVEABLE', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'WISHFUL'];

const goodnouns = ['ADORATION', 'AFFECTION', 'AMBITION', 'APPETITE', 'BIDDING','CHARM', 'COMPASSION', 'DESIRE', 'DEVOTION', 'EAGERNESS', 'ENCHANTMENT', 'ENTHUSIASM', 'FRIENDLINESS', 'FONDNESS', 'HEART', 'HOPE', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'PASSION', 'SYMPATHY', 'WISH', 'WORSHIP'];

const badadjectives = ['ANNOYING', 'BAD', 'BLOODY', 'DIFFICULT', 'DISGUSTING', 'DUMB', 'EXCRUCIATING', 'IDIOTIC', 'INSENSITIVE', 'JEALOUS', 'JUNKY', 'OVERSENSITIVE', 'PAINFUL', 'PASSIVE', 'PETTY', 'ROTTEN', 'SILLY', 'SMELLY', 'STINKY', 'STUPID', 'THIEVING', 'UNFASIONABLE', 'UNKIND', 'UNORIGINAL'];

const badnouns = ['BEHAVIOUR', 'CHEWING', 'CONDUCT', 'COOKING', 'CLEANING', 'EATING', 'MANNERS', 'MONEY', 'SUGGESTIONS', 'STEALING', ];

const adverbs = ['GRUMPILY', 'HATEFULLY', 'CRAZILY', 'MADDINGLY', 'THRUTHFULLY', 'UNFORTUNATELLY', 'IRRITABLY', 'SADLY']; 

const youverbs = ['ANNOY', 'ARE HUNG UP ON MY', 'DEMOLISHED', 'DESTROY', 'DETEST', 'DISRESPECT', 'HARRASS', 'HATE', 'HURT', 'IGNORE', 'IMPAIR', 'INSULT', 'JEOPARDIZE', 'MADDEN', 'MISJUDGE', 'HAVE MISTRUSTED', 'MOCK', 'OBLITERATE', 'PERISH', 'RUIN', 'SCAR', 'SHOCK', 'SLAUGHTERED', 'SPOIL', 'TORTURE', 'VIOLATE']; 

const iverbs = ['AM SADDENED BY', 'DONT LIKE', 'DONT UNDERSTAND', 'AM DISILLUSIONED BY', 'AM DISPLEASED WITH', 'AM DISSATIFIED WITH', 'AM DISTURBED BY', 'AM DUMBFOUNDED BY', 'AM DERANGED BY', 'AM PATRONISED BY', 'FEEL WORRIED ABOUT'];

const itverbs = ['SUCKS', 'IS VERY SAD', 'IS RIDICULOUS', 'IS UNLIKELY', 'IS DISGUSTING', 'IT IS OUTRAGING', 'IS PAINFUL TO SEE', 'IS PERPLEXING TO SEE', 'IS RETARDED', 'IS REPULSIE', 'IS SAD', 'IS DISTURBING', 'IS HURTFUL'];

const greeting = ['UNKIND', 'WORST', 'PISSED OFF', 'SAD', 'DISAPPOINTED', 'NO'];

program
.version('0.0.1')
.option('-w, --width [value]', 'The width of the letter', 'empty')
.option('-s, --sentence [value]', 'The number of sentences', 'empty')
.parse(process.argv);

parseInt(program)

function choice(array) {
	var index =  chance.natural({'min': 0, 'max': array.length - 1}); 
	return array[index]; 
}

function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}

function intro() {
	return 'YOU ' + maybe(badadjectives) + ' ' + choice(second) + ', \n';
}

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
	return 'IT ' + choice(itverbs) + ' THAT YOU ARE SO ' + maybe(badadjectives) + '. \n';
}

function end() {
return 'WITH ' + choice(greeting) + ' REGARDS, \n' + 'U.V.A.';	
}

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index];
}

function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}

console.log('\n\n'); 

var text = '';

for(var i = 0; i < 7; i++) {
}
text += long();

var text1 = intro();
var text2 = second_sentence() + first_sentence() + third_sentence() + fourth_sentence() + fifth_sentence();
var text3 = end();	

console.log('\n\n'); 

//console.log(program.width);

console.log(wrap(text1, {'width': 40}));

console.log(wrap(text2, {'width': 65}));

console.log(wrap(text3, {'width': 40}));

