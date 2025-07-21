const readline = require('readline');

// Faulty operation mapping
const faultyMap = {
  '+': '-',
  '-': '/',
  '*': '+',
  '/': '**'
};

// Function to perform the operation
function performOperation(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case '**': return a ** b;
    default: return 'Invalid operator';
  }
}

// Setup input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Collect input
rl.question('Enter first number: ', (num1) => {
  rl.question('Enter operator (+, -, *, /): ', (operator) => {
    rl.question('Enter second number: ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log('Invalid input. Please enter valid numbers.');
        rl.close();
        return;
      }

      let finalOperator = operator;
      const isFaulty = Math.random() < 0.10;

      if (isFaulty && faultyMap[operator]) {
        finalOperator = faultyMap[operator];
        console.log(`⚠️ Faulty calculator used wrong operator! (${operator} → ${finalOperator})`);
      }

      const result = performOperation(a, b, finalOperator);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
