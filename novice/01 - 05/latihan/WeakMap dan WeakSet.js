let messages = [
    {text : "hallo", from : "Budi"},
    {text : "apa kabar ?", from : "Budi"},
    {text : "sampai jumapa", from : "Nadia"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add (messages[0]);
readMessages.add (messages[1]);
// readMessages has 2 elements

// let's read the frist message again 
readMessages.add (messages[0]);
// readMessagesstill has 2 unique elements

// answer : was the messages [0] read
alert ("Read messages 0: " + readMessages.has(messages[0]));
// true

messages.shift();