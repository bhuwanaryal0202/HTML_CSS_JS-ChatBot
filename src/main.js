function talk() {
    var know = {
        "Hi" : "Hello",
        "Who are you" : "Hello, I am Bhuwan Aryal",
        "How are you": "Good :)",
        "What can i do for you" : "Search bhuwanaryal.com and check my other work",
        "ok": "Thank you so much!",
        "Bye": "Okay! will meet soon...",
        "hi" : "Hello",
        "who are you" : "Hello, I am Bhuwan Aryal",
        "how are you": "Good :)",
        "what can i do for you" : "Search bhuwanaryal.com and check my other work",
        "ok": "Thank you so much!",
        "bye": "Okay! will meet soon...",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know){
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    }else
        {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
        }
    
}