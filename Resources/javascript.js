// Creating the array of quotes and authors to be used for the quote generator.
    const generateQuote = function() {
        const inspirationalQuotes = [
        {
            quote: "If I cannot do great things, I can do small things in a great way.",
            author: "Martin Luther King, Jr."
        },

        {
            quote: "Be the change that you wish to see in the world.",
            author: "Mahatma Ghandi"
        },

        {
            quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            author: "Thomas Edison"
        },

        {
            quote: "The bad news is time flies. The good news is you're the pilot.",
            author: "Michael Altshuler"
        },

        {
            quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
            author: "Jimmy Dean"
        },

        {
            quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
            author: "Queen Elizabeth II"
        },

        {
            quote: "If my mind can conceive it, if my heart can believe it, then I can achieve it.",
            author: "Muhammed Ali"
        },

        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },

        {
            quote: "The people who are crazy enough to think they can change the world are the ones who do.",
            author: "Steve Jobs"
        },

        {
            quote: "If I cannot do great things, I can do small things in a great way.",
            author: "Norman Vincent Peale"
        }
    ];

//Targetting relevant id's in HTML
let arrayIndex = Math.floor(Math.random() * inspirationalQuotes.length);
document.getElementById("quote").innerHTML = inspirationalQuotes[arrayIndex].quote;
document.getElementById("author").innerHTML = inspirationalQuotes[arrayIndex].author;
}

//Calling the generateQuote function when clicking the button
window.onload = function() {
    generateQuote();
    document.getElementById("btn").addEventListener('click', generateQuote);
}