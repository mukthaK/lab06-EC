// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('How much do you want to invest?'));
    if (isNaN(investment)){
        alert('Investment should be a numeric value');
    } else {
        break;
    }
} while (true);
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if(isNaN(rate) || rate < 0 || rate > 6) {
        alert('Rate should be a numeric value between 0 and 6%');
    } else {
        break;
    }
} while (true);
do {
    years = parseInt(prompt('How many years do you want to invest for?'));
    if (isNaN(years) || years < 1 || years > 30) {
        alert('Years should be a numeric value between 1 and 30');
    } else {
        break;
    }
} while (true);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);