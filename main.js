document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is loaded!");
});


function calculate() {
    const amount = parseInt(document.getElementById('amount').value);
    const people = parseInt(document.getElementById('people').value);
    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("result");


resultElement.innerHTML="1人あたり： / Per person";

if(isNaN(amount) || isNaN(people)) {
    resultElement.innerHTML += '<span class="error">金額と人数の両方を入力してください。/ Please enter both the price and number of people.</span>';    
    return;

}

if(amount < 1 || people < 1){
    resultElement.innerHTML += '<span class="error">1以上の数値を入力してください。/ Please enter the number bigger than 1.</span>';
    return;
    
}


const result = amount / people;
const roundedResult = Math.floor(result);
const remainder = amount - (roundedResult * people);
                      
if (remainder === 0) {
    resultElement.textContent = `1人あたり：/ Per person${roundedResult}円`;
} else {
    const shortage = people - remainder;
    resultElement.textContent = `1人あたり：/ Per person${roundedResult}円で/ yen ${shortage}円不足します。/ yen lacks.1人あたり/ If per person${roundedResult + 1}円にすると / yen then,${remainder}円余ります。/ yen remains`;
}
}

