const quote = [
    {
        quotes: '트랜디함을 이끄는 남자',
        auother: '- mcnsports -',
    },
    {
        quotes: '스포츠의류가 여러분을 기다리고 있습니다',
        auother: '- MCN -',
    },
    {
        quotes: '남자복 여자복 단체복 문의 가능',
        auother: '- mcncustom -',
    },
];

const quotes = document.querySelector('#quotes span:first-child');
const auother = document.querySelector('#quotes span:last-child');

const randomQuote = quote[Math.floor(Math.random() * quote.length)];

quotes.innerText = randomQuote.quotes;
auother.innerText = randomQuote.auother;