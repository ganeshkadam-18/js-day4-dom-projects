let jokes =[
    "Why do programmers hate nature? It has too many bugs!",
    "I told my computer I needed a break… it said ‘No problem, I'll go to sleep’",
    "Why was the JavaScript developer sad? Because he didn't know how to ‘null’ his feelings."
];

document.getElementById("jokeBTN").onclick = function(){
     let random = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[random];
}