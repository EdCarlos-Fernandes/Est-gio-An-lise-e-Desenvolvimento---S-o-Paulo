// Função para mostrar a resposta selecionada
function showResponse(responseId) {
  const responses = document.querySelectorAll('.response');
  responses.forEach(response => {
    response.classList.add('d-none');
  });
  document.getElementById(responseId).classList.remove('d-none');
}


// Função para calcular a SOMA (Resposta 1)
function calculateSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  document.getElementById('somaResult').innerText = `O valor da SOMA é ${SOMA}.`;
}


// Função para verificar se um número pertence à sequência de Fibonacci (Resposta 2)
function checkFibonacci() {
  const number = parseInt(document.getElementById('fibonacciNumber').value, 10);
  let a = 0,
    b = 1,
    c = 0;
  let isFibonacci = false;

  if (number === 0 || number === 1) {
    isFibonacci = true;
  } else {
    while (c < number) {
      c = a + b;
      a = b;
      b = c;
      if (c === number) {
        isFibonacci = true;
        break;
      }
    }
  }

  const result = isFibonacci ? 'O número pertence à sequência de Fibonacci.' : 'O número não pertence à sequência de Fibonacci.';
  document.getElementById('fibonacciResult').innerText = result;
}


// Função para salvar e processar o faturamento diário (Resposta 3)
function saveAndProcessBilling() {
  const billingData = [];
  const days = document.querySelectorAll('[id^="day"]');
  days.forEach(day => {
    const value = parseFloat(day.value);
    if (!isNaN(value) && value > 0) {
      billingData.push(value);
    }
  });

  if (billingData.length === 0) {
    document.getElementById('billingResult').innerText = 'Nenhum dado de faturamento fornecido.';
    return;
  }

  const total = billingData.reduce((sum, value) => sum + value, 0);
  const average = total / billingData.length;
  const min = Math.min(...billingData);
  const max = Math.max(...billingData);
  const aboveAverageCount = billingData.filter(value => value > average).length;

  const result = `
    Menor valor de faturamento: R$${min.toFixed(2)}<br>
    Maior valor de faturamento: R$${max.toFixed(2)}<br>
    Número de dias com faturamento superior à média: ${aboveAverageCount}
  `;
  document.getElementById('billingResult').innerHTML = result;
}


// Função para calcular o percentual de faturamento por estado (Resposta 4)
function calculatePercentage() {
  const totalBilling = 67_836.43 + 36_678.66 + 29_229.88 + 27_165.48 + 19_849.53;
  const stateValues = {
    SP: 67_836.43,
    RJ: 36_678.66,
    MG: 29_229.88,
    ES: 27_165.48,
    Outros: 19_849.53
  };

  let resultHtml = '<ul>';
  for (const [state, value] of Object.entries(stateValues)) {
    const percentage = (value / totalBilling * 100).toFixed(2);
    resultHtml += `<li>${state}: ${percentage}%</li>`;
  }
  resultHtml += '</ul>';

  document.getElementById('percentageResult').innerHTML = resultHtml;
}


// Função para inverter uma string (Resposta 5)
function reverseString() {
  const str = document.getElementById('stringInput').value;
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  document.getElementById('stringResult').innerText = `String invertida: ${reversed}`;
}