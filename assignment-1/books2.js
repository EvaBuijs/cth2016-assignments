var program =  require('commander');

var book1_title  = "Wise Blood";
var book1_author = "Flannery Oconnor";
var book1_price = 17.95; 
var book1_kind = "Paperback";

var book2_title  = "Edgar Allen Poe & the Jukebox";
var book2_author = "Elizabeth Bishop";
var book2_price = 21.50; 
var book2_kind = "Paperback";

var book3_title = "Juliana";
var book3_author = "Jolande Withuis";
var book3_price = 39.99; 
var book3_kind = "Paperback";

var book4_title = "Uproot";
var book4_author = "Jace Clayton";
var book4_price = 18.95; 
var book4_kind = "Paperback";

var book5_title = "Naming Thy Name";
var book5_author = "Elaine Scarry";
var book5_price = 28.95; 
var book5_kind = "Hardcover";

program
.version('0.0.1')
.option('-t, --title [value]', 'Title', 'empty')
.option('-a, --author [value]', 'Author', 'empty')
.option('-p, --price [value]', 'Price', 'empty')
.option('-k, --kind [value]', 'Kind', 'empty')
.parse(process.argv);

console.log('You looked for information on:');

//console.log(program.title);

switch(program.title)
{
	case book1_title:
		console.log("Title: " + book1_title);
		console.log("Author: " + book1_author);
		console.log("Price: " + book1_price);
		console.log("Kind: " + book1_kind);
		break;
	case book2_title:
		console.log("Title: " + book2_title);
		console.log("Author: " + book2_author);
		console.log("Price: " + book2_price);
		console.log("Kind: " + book2_kind);
		break;
	case book3_title:
		console.log("Title: " + book3_title);
		console.log("Author: " + book3_author);
		console.log("Price: " + book3_price);
		console.log("Kind: " + book3_kind);
		break;
	case book4_title:
		console.log("Title: " + book4_title);
		console.log("Author: " + book4_author);
		console.log("Price: " + book4_price);
		console.log("Kind: " + book4_kind);
		break; 
	case book5_title:
		console.log("Title: " + book5_title);
		console.log("Author: " + book5_author);
		console.log("Price: " + book5_price);
		console.log("Kind: " + book5_kind);
		break; 
	case "empty":
		break;
	default:
		console.log('no match...');
		break
}

//console.log(program.author);

switch(program.author)
{
	case book1_author:
		console.log("Title: " + book1_title);
		console.log("Author: " + book1_author);
		console.log("Price: " + book1_price);
		console.log("Kind: " + book1_kind);
		break;
	case book2_author:
		console.log("Title: " + book2_title);
		console.log("Author: " + book2_author);
		console.log("Price: " + book2_price);
		console.log("Kind: " + book2_kind);
		break;
	case book3_author:
		console.log("Title: " + book3_title);
		console.log("Author: " + book3_author);
		console.log("Price: " + book3_price);
		console.log("Kind: " + book3_kind);
		break;
	case book4_author:
		console.log("Title: " + book4_title);
		console.log("Author: " + book4_author);
		console.log("Price: " + book4_price);
		console.log("Kind: " + book4_kind);
		break;
	case book5_author:
		console.log("Title: " + book5_title);
		console.log("Author: " + book5_author);
		console.log("Price: " + book5_price);
		console.log("Kind: " + book5_kind);
		break;
	case "empty":
		break;
	default:
		console.log('no match...');
		break
}

ParseFloat(program);

console.log(price);

switch(program.price)
{
	case book1_price:
		console.log("Title: " + book1_title);
		console.log("Author: " + book1_author);
		console.log("Price: " + book1_price);
		console.log("Kind: " + book1_kind);
		break;
	case book2_price:
		console.log("Title: " + book2_title);
		console.log("Author: " + book2_author);
		console.log("Price: " + book2_price);
		console.log("Kind: " + book2_kind);
		break;
	case book3_price:
		console.log("Title: " + book3_title);
		console.log("Author: " + book3_author);
		console.log("Price: " + book3_price);
		console.log("Kind: " + book3_kind);
		break;
	case book4_price:
		console.log("Title: " + book4_title);
		console.log("Author: " + book4_author);
		console.log("Price: " + book4_price);
		console.log("Kind: " + book4_kind);
		break; 
	case book5_price:
		console.log("Title: " + book5_title);
		console.log("Author: " + book5_author);
		console.log("Price: " + book5_price);
		console.log("Kind: " + book5_kind);
		break;
	case "empty":
		break; 
	default:
		console.log('no match...');
		break
}
//console.log(program.kind);

switch(program.kind)
{
	case book1_kind:
		console.log("Title: " + book1_title);
		console.log("Author: " + book1_author);
		console.log("Price: " + book1_price);
		console.log("Kind: " + book1_kind);
		//break;
	case book2_kind:
		console.log("Title: " + book2_title);
		console.log("Author: " + book2_author);
		console.log("Price: " + book2_price);
		console.log("Kind: " + book2_kind);
		//break;
	case book3_kind:
		console.log("Title: " + book3_title);
		console.log("Author: " + book3_author);
		console.log("Price: " + book3_price);
		console.log("Kind: " + book3_kind);
		//break;
	case book4_kind:
		console.log("Title: " + book4_title);
		console.log("Author: " + book4_author);
		console.log("Price: " + book4_price);
		console.log("Kind: " + book4_kind);
		//break; 
	case book5_kind:
		console.log("Title: " + book5_title);
		console.log("Author: " + book5_author);
		console.log("Price: " + book5_price);
		console.log("Kind: " + book5_kind);
		break; 
	case "empty":
		break;
	default:
		console.log('no match...');
		break
} 