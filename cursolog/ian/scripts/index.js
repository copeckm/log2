const frasesEleanorRoosevelt = [
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
    "Amar é como adiantar um cheque: é um gesto de confiança que não pode ser cancelado se não for honrado.",
    "Grandes mentes discutem ideias; mentes médias discutem eventos; mentes pequenas discutem pessoas.",
    "Faça o que você sente no seu coração que é certo, pois você será criticado de qualquer maneira.",
    "Você ganha força, coragem e confiança a cada experiência em que realmente para e encara o medo de frente.",
    "O que aprendemos com a história é que as pessoas não aprendem com a história.",
    "Os jovens são mais inteligentes e capazes do que pensamos. Eles são tão capazes quanto qualquer um.",
    "Seja sincero, seja gentil, seja justo.",
    "A grande força de um país reside na integridade de seus homens.",
    "A mulher é como um saquinho de chá - você nunca saberá como ela é forte até que esteja na água quente.",
    "A verdadeira democracia significa igualdade de oportunidades para todos os cidadãos.",
    "Não é justo comparar o que está acontecendo com você com o que está acontecendo com qualquer outra pessoa. Você é apenas você.",
    "Você deve fazer as coisas que acha que não pode fazer.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A amizade consigo mesmo é muito importante, porque sem isso, não podemos ser amigos de outras pessoas no mundo.",
  ];

  
  function gerarFrase() {
    var numRandomico = Math.floor(Math.random() * (frasesEleanorRoosevelt.length));
    document.getElementById('frase').innerHTML = frasesEleanorRoosevelt[numRandomico];
    }