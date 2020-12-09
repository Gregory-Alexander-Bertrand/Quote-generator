let btn = document.getElementById('btn');
let quotetext = document.getElementById('quotetext');
let quotes = [
    "Dreams are the touchstones of our characters.",
    "Do not be too moral. You may cheat yourself out of much life so. Aim above morality. Be not simply good, be good for something.",
    "Rather than love, than money, than fame, give me truth.",
    "The greatest compliment that was ever paid me was when one asked me what I thought, and attended to my answer.",
    "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
    "The question is not what you look at, but what you see.",
    "Nothing makes the earth seem so spacious as to have friends at a distance; they make the latitudes and longitudes.",
    "I would rather sit on a pumpkin, and have it all to myself, than be crowded on a velvet cushion.",
    "Books are the treasured wealth of the world and the fit inheritance of generations and nations.",
    "Our truest life is when we are in dreams awake.",
    "I went to the woods because I wanted to live deliberately...",
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    jsquotetext.innerHTML = randomQuote;
})
