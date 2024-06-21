/*Sabores*/
document.querySelectorAll('.sabor').forEach(button => {
    button.addEventListener('click', () => {
        const flavor = button.classList[1];
        const imageUrl = `images/${flavor}.jpg`;
        document.querySelector('.imagem-sabor').style.backgroundImage = `url(${imageUrl})`;
    });
});

/*FAQ*/
const faqs = [
    {
        question: "O que é colágeno?",
        answer: "O colágeno é uma proteína presente no corpo humano, responsável pela firmeza e elasticidade da pele."
    },
    {
        question: "Quais são os benefícios do colágeno?",
        answer: "O colágeno ajuda a reduzir rugas, melhora a elasticidade da pele, fortalece unhas e cabelos, e pode melhorar a saúde das articulações."
    },
    {
        question: "Como devo consumir o colágeno?",
        answer: "O colágeno pode ser consumido em forma de pó misturado com água, suco, ou outras bebidas, de acordo com as instruções do fabricante."
    },
    {
        question: "Há efeitos colaterais no consumo de colágeno?",
        answer: "Em geral, o consumo de colágeno é seguro. No entanto, algumas pessoas podem experimentar sintomas digestivos leves. Consulte um médico antes de iniciar qualquer suplementação."
    },
    {
        question: "Quanto tempo leva para ver os resultados?",
        answer: "Os resultados variam, mas geralmente podem ser observados após 4 a 12 semanas de uso regular."
    }
];

const faqContainer = document.getElementById('faq');

faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const faqQuestion = document.createElement('div');
    faqQuestion.classList.add('faq-question');
    faqQuestion.textContent = faq.question;
    faqQuestion.addEventListener('click', () => {
        faqAnswer.style.display = faqAnswer.style.display === 'none' ? 'block' : 'none';
    });

    const faqAnswer = document.createElement('div');
    faqAnswer.classList.add('faq-answer');
    faqAnswer.textContent = faq.answer;

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);
    faqContainer.appendChild(faqItem);
});
