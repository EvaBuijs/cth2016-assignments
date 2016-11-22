/*
  file:   server.js
  desc:   script that configures a HTTP server that listens to incoming client connections.
          Clients are expected to send chat-like messages (see index.html) which are replied 
          to depending if certain patterns are recognised in the message (or not). The idea
          is to create a simple artificial conversation between the a human subject and the 
          script. The work is inspired by Alan Turing's Imitation Game and Joseph Weizenbaum's
          ELIZA. 
  author: Eva
  date:   22/11/16
*/

// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

/* ---------------------
  Answers & Responses
------------------------*/

// the  patterns which the script looks for when receiving message from the client
var pattern_1 = ['Goodmorning', 'Good morning', 'Goodday', 'Good day', 'Goodafternoon', 'Good afternoon', 'Goodnight', 'Good night', 'Hi there'
              , 'Hi there!', 'Hi', 'Hello', 'Hey', 'Bonjour', 'Gutentag', 'Howdy', 'Well hello', 'Greetings'];
var pattern_2 = ['How do you do?', "What's up?", 'What is up?', 'Wazzup', 'Wassup?', 'How are you doing?', 'How are you?', 'How have you been?'
              , "How's everything?", "How's everything going?",'How is everything?', 'How is everything going?', "How's it going?", 'How are things?'
              , 'How are things going?', 'How is it?', 'How is it going?', "How's it going?", 'Ça va?'];
var pattern_3 = ["I'm OK", "I'm okay", 'Good', "I'm alright", 'Pretty good', 'Not bad', 'Not too bad', 'Not too bad actually', "I'm good", "I'm fine", "Fine", "I'm doing well"
              , "I'm doing quite well", "I'm doing rather well", "I'm good", "I'm quite good", 'Quite good', 'OK', 'Okay'];
var pattern_4 = ['Not very well', 'Been better', 'Have been better', "I've been better",'Bad', 'Sad', 'Stressed', 'I feel horrible'
              , 'I feel so sad', 'I feel really sad', 'I feel really bad', "I'm so stressed", "I'm really stressed", "I'm stressed", 'I am so busy'
              , "I'm really busy", 'Busy', 'Not well', 'A bit sad', 'A bit stressed'];
var pattern_5 = ["It was lovely talking to you", "It was lovely talking to you!", "It was lovely speaking with you", "It was lovely speaking with you"
              , 'See you later', 'Speak to you later', 'I have to go', 'Gotta go', 'Gotta go!', 'Gotta run', 'Gotta run!', 'I have to leave now'
              , 'I have to go', 'I have to go now', 'Bye'];

//punctuation options
var punctuation = ['!', '.', '...'];

//Iterates through and array of clauses or words and search them inside a given sentence (msg). Returns true if the search is successful and false otherwise. 
function matches(msg, array_of_patterns) {

  var msg_lower = msg.toLowerCase();

  for(var i = 0; i < array_of_patterns.length; i++) {

    var pattern_lower = array_of_patterns[i].toLowerCase();

    if(msg_lower.search(pattern_lower) > -1) {

      return true;

    }
  }
  return false;
}

//Picks a random element from an array
function choice(array) {

  var index = chance.natural({'min': 0, 'max': array.length - 1});  // **** NOTE: 'max': array.length - 1

  return array[index];
}

//* Randomly picks or not a random element from an array
function maybe(array) {

  if( chance.bool() ) {

    return choice(array);

  } else {

    return '';

  }
}

//Constructs a randomly generate answer out of these random possibilities 
function pattern_1_answer() {
  return choice(['Goodday day to you too!', 'A good day to you too!', 'Hi there'
              , 'Hi there!', 'Hi back.', 'Hello there.', 'Hey!', 'Bonjour.', 'Gutentag.', 'Howdy!', 'Well hello there.', 'Greetings to you too.']);
}

function pattern_2_answer() {
  switch(choice([1, 2, 3])) 
  {
    case 1:
      return "I'm " + choice(['fine', 'good', 'very happy', 'happy', 'quite good', 'not bad at all', 'great', 'fabulous', 'magnificient']) 
      + ". And how are you?";
    case 2:
      return choice(['Unfortunately', 'Honestly', 'Truthfully', 'Regrettably', 'Sadly']) + ', I feel ' + choice(['hungry', 'stressed', 'lost'
        , 'dirty', 'cold', 'nervous', 'like crying', 'irritated', 'confused', 'stupid']) + ', so I am a bit ' + choice(['sad', 'down', 'grumpy', 'disappointed'
        , 'blue', 'unhappy', 'miserable', 'grouchy', 'cranky']) + choice(punctuation) + ' How are you doing?';
    case 3:
      return choice(['OK', 'Okay', 'Alright', 'Fine', 'Not bad', 'Not too bad', "I'm okay"]) + ', I guess' + choice(punctuation) + ' You?';
  }
}

function pattern_3_answer() {
  switch(choice([1, 2, 3]))
  {
    case 1:
      return "I'm " + ' ' + choice(['glad', 'pleased', 'happy', 'relieved']) + ' to hear that' + choice(punctuation);
    case 2:
      return "That's " + choice(['wonderful', 'magnificient', 'amazing', 'marvellous', 'incredible']) + ". Hopefully, you're not too "
      + choice(['stressed', 'cold', 'nervous', 'irritated', 'much in a bad mood']) + ' because of the ' + maybe(['bad', 'shitty', 'freezing'
        , 'horrible']) + ' ' + choice(['weather', 'amount of work', 'cleaning', 'cooking', 'critism lately', 'news']) 
        + choice(punctuation);
    case 3:
      return choice(['Cool', 'Wicked', 'Nice', 'Awesome', 'Sounds good', 'Fabulous', 'Sweet']) + choice(punctuation);
  }
}

function pattern_4_answer() {
  switch(choice([1, 2, 3, 4]))
  {
    case 1:
      return choice(['Ow', 'Aww', 'Ai', 'Oh honey', 'Aw sweety', 'Hmm', 'Oh no']) + ", I'm " + maybe(['very', 'so']) + " sorry to hear that" + choice(punctuation);
    case 2:
      return choice(['Ow', 'Aww', 'Ai', 'Oh honey', 'Aw sweety', 'Hmm', 'Oh no']) + ", I wish I could help. But "
      + choice(['unfortunately', 'sorrowfully', 'regrettably', 'sadly']) + ', I am ' + choice(['merely', 'just', 'nothing more than'
        , 'simply', 'only']) + ' a ' + choice(['robot', 'bot', 'chattingprogram', 'program', 'computerprogram', 'basic AI']) 
        + choice(punctuation);
    case 3:
      return 'That ' + choice(['sucks', 'is too bad', 'is unfortunate', 'is shit', 'saddens me']) + ". You should do something "
      + choice(['nice', 'exciting', 'fun', 'you enjoy', 'happy']) + ' to ' + choice(['make you feel better', 'make you happy', 'lift your spirit'
        , 'cheer you up']) + choice(punctuation);
    case 4:
      return 'Is there anybody who ' + choice(['you can ask for help', 'can talk to you', 'can help you', 'is there for you to speak to', 'is available to speak with you', 'can listen to you', 'can give you advice']) + '?';
  }
}

function pattern_5_answer() {
switch(choice([1, 2, 3]))
  {
    case 1:
      return choice(['Bye!', 'Ciao!', 'See ya!', 'I hope you have a nice day!',]);
    case 2:
      return 'Have a ' + choice(['nice', 'great', 'lovely', 'wonderful', 'good']) + " " + choice(['evening', 'day', 'time', 'rest of the day', 'weekend']) + choice(punctuation);
    case 3:
      return choice(['OK', 'Well', "I guess I'll", "Too bad! I'll"]) + " speak to you " + choice(['soon', 'later', 'next time', 'maybe tomorrow', 'in a jiffy', "when you're back"]) + choice(punctuation);
  }
}

// In case of a no match, it generates a single random answer

function default_answer() {
  return choice(['Sorry, come again?', "I don't understand.", 'Can you try saying that differently?', 'Can you please repeat?', 'What do you mean?'
                  , 'No comprendo...', 'Ne me quitte pas!', 'Pardon me?']);
}

// Matches a message to the above patterns (pattern_1, pattern_2, pattern_3, pattern_4, pattern_5) and calls their respective answers 
//(functions patter_1_answer, patter_2_answer, etc.)

function answer(msg) {

  if(matches(msg, pattern_1)) { 

    return pattern_1_answer();

  } else if(matches(msg, pattern_2)) {

    return pattern_2_answer();

  } else if(matches(msg, pattern_3)) {

    return pattern_3_answer();

  }  else if(matches(msg, pattern_4)) {

    return pattern_4_answer();

  } else if(matches(msg, pattern_5)) {

    return pattern_5_answer();

  } else {

    return default_answer();

  }
}

/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  // and call the function answer to produce a response
  socket.on('message from human', function(msg) {

  	console.log('got a human message: ' + msg);

  	io.emit('message from robot', answer(msg));      /// <--- call of the function answer defined above 

  });

  socket.on('disconnet', function() {

  	console.log('got a disconnection');
  	
  });
});

/* -------------------
	Start the server
----------------------*/
// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});