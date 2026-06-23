// Essa função faz toda a calculadora de IMC funcionar
function calculadoraIMC() {

    // Pega o formulário da página
    const form = document.querySelector('form');

    // Fica esperando o usuário clicar em "enviar" no formulário
    form.addEventListener('submit', function (evento) {

        // Impede a página de recarregar quando enviamos o formulário
        evento.preventDefault();

        // Pega os campos de altura e peso que o usuário preencheu
        const inputAltura = evento.target.querySelector('#alturaForm');
        const inputPeso = evento.target.querySelector('#pesoForm');

        // Transforma o que foi digitado (texto) em número
        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);

        // Se a altura estiver vazia ou for inválida, mostra um aviso e para aqui
        if (!altura) {
            mostrarResultado('Altura invalida!');
            return;
        };

        // Se o peso estiver vazio ou for inválido, mostra um aviso e para aqui
        if (!peso) {
            mostrarResultado('Peso Inválido!');
            return;
        };

        // Calcula o IMC usando a altura e o peso
        const imc = calcularIMC(altura, peso);

        // Resultado 
        // Mostra na tela o IMC e o nível (ex: peso normal, sobrepeso etc)
        mostrarResultado(`Seu IMC é de ${imc} e seu nível é: ${nivelIMC(imc)}`);

    });

    // Essa função recebe o IMC e diz em qual nível a pessoa está
    function nivelIMC(imc) {
        const nivel = ['Abaixo do Peso!', 'Peso Normal!', 'Sobrepeso!', 'Obesidade Grau Um!', 'Obesidade Grau Dois!', 'Obesidade Grau Três!'];

        // Vai testando do maior pro menor pra achar o nível certo
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    };

    // Essa função calcula o IMC mesmo (peso dividido pela altura ao quadrado)
    function calcularIMC(altura, peso) {
        return (peso / (altura ** 2)).toFixed(2);
    };

    // Cria um parágrafo vazio, pra gente usar depois
    function criarParagrafo() {
        const p = document.createElement('p');
        return p;
    }

    // Essa função pega a mensagem (resultado ou erro) e mostra na tela
    function mostrarResultado(mensagem, validade) {
        const resultadoForm = form.querySelector('#resultadoForm');

        // Limpa o que tinha antes ali
        resultadoForm.innerHTML = ' ';

        // Cria o parágrafo, coloca a mensagem dentro e adiciona na tela
        const p = criarParagrafo();
        p.innerHTML = mensagem;
        resultadoForm.appendChild(p);
    };

};

// Chama a função pra calculadora começar a funcionar
calculadoraIMC();