const GenerateQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = quotes =>{
    const Quotes = document.getElementById('quotes');
    Quotes.innerText =  quotes.quote;

}