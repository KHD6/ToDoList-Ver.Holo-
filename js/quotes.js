const quotes = [
    {
        quote: "세상에서 가장 값진 것은 변하지 않는 마음이야.",
        author: "1권의 호로"
    },
    {
        quote: "돈은 세상을 움직이는 힘이지만, 마음을 살 수는 없지.",
        author: "1권의 로렌스"
    },
    {
        quote: "지식은 힘이기도 하지만 때로는 무거운 짐이기도 하지.",
        author: "2권의 호로"
    },
    {
        quote: "욕심은 사람을 불행하게 만들기도 하지만, 때로는 더 나은 선택을 할 수 있게 만들지.",
        author: "3권의 로렌스"
    },
    {
        quote: "지금의 행복이 계속되리라 믿는 사람은 바보라네.",
        author: "4권의 호로"
    },
    {
        quote: "기회는 준비된 자만이 잡을 수 있는 법이야.",
        author: "2권의 로렌스"
    },
    {
        quote: "가장 중요한 것은 거래의 성공이 아니라 신뢰야.",
        author: "5권의 로렌스"
    },
    {
        quote: "인간은 누구나 이기적이야. 하지만 그 이기심이 때론 누군가를 구할 수도 있지.",
        author: "6권의 호로"
    },
    {
        quote: "사랑은 단순히 바라보는 것이 아니라 함께 걸어가는 거야.",
        author: "5권의 로렌스"
    },
    {
        quote: "돈이 많으면 많은 대로, 적으면 적은 대로 고충이 있는 법이야.",
        author: "7권의 호로"
    },
    {
        quote: "거래에서 가장 위험한 것은 자만심이야.",
        author: "4권의 로렌스"
    },
    {
        quote: "지혜란 알고 있는 것을 단순히 나누는 것이 아니라, 필요한 사람에게 올바르게 전하는 것이지.",
        author: "8권의 호로"
    },
    {
        quote: "모든 것은 때가 있는 법. 서두르거나 미루면 그 기회를 놓칠 수 있지.",
        author: "9권의 로렌스"
    },
    {
        quote: "상대방을 믿는 것도 위험을 감수하는 일이지. 하지만 때론 그게 가장 현명한 선택일 때도 있지.",
        author: "10권의 호로"
    },
    {
        quote: "모든 것은 마음먹기에 달려 있어. 세상은 그리 복잡하지 않지.",
        author: "11권의 로렌스"
    },
    {
        quote: "거래에서 중요한 건 가격이 아니라, 신용과 신뢰야.",
        author: "2권의 로렌스"
    },
    {
        quote: "무언가를 얻기 위해서는 무언가를 버려야 해. 그게 세상의 이치지.",
        author: "3권의 호로"
    },
    {
        quote: "약속이란 쉬이 깨질 수 있는 것이지만, 진심은 그렇지 않아.",
        author: "4권의 로렌스"
    },
    {
        quote: "세상은 내가 바라는 대로 흘러가진 않지. 하지만 내게 달린 부분도 있단다.",
        author: "5권의 호로"
    },
    {
        quote: "가장 큰 실수는 두려워서 아무것도 하지 않는 것이지.",
        author: "6권의 로렌스"
    },
    {
        quote: "모든 일에는 두 가지 면이 있지. 희망과 절망, 빛과 그림자처럼 말이야.",
        author: "7권의 호로"
    },
    {
        quote: "우정이란 거래와도 같아. 신뢰가 없으면 성립되지 않지.",
        author: "8권의 로렌스"
    },
    {
        quote: "우리가 두려워하는 것은 종종 우리의 상상 속에만 존재하는 법이지.",
        author: "9권의 호로"
    },
    {
        quote: "돈은 수단일 뿐이지, 목적이 되면 안 돼.",
        author: "10권의 로렌스"
    },
    {
        quote: "거짓말은 때로 진실보다 더 위험할 수 있지.",
        author: "11권의 호로"
    },
    {
        quote: "사는 건 언제나 불완전한 선택의 연속이야.",
        author: "12권의 로렌스"
    },
    {
        quote: "강한 자가 이기는 게 아니라, 끝까지 살아남는 자가 이기는 거야.",
        author: "13권의 호로"
    },
    {
        quote: "어떤 일이든 스스로 결정을 내리고 책임을 질 수 있어야 성숙한 거야.",
        author: "14권의 로렌스"
    },
    {
        quote: "우리가 바라보는 미래는 항상 불확실하지만, 그걸 두려워하면 아무것도 할 수 없어.",
        author: "15권의 호로"
    },
    {
        quote: "상대방을 속이려면 먼저 자신을 속여야 할 때도 있지.",
        author: "16권의 로렌스"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
const todaysQuote = quotes[Math.floor(Math.random() * 100) % quotes.length]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;