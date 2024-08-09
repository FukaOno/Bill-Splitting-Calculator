document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is loaded!");
});


function calculate() {
    const amount = parseInt(document.getElementById('amount').value);
    const people = parseInt(document.getElementById('people').value);
    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("result");


resultElement.innerHTML="1人あたり：";

if(isNaN(amount) || isNaN(people)) {
    resultElement.innerHTML += '<span class="error">金額と人数の両方を入力してください。</span>';    
    return;

}

if(amount < 1 || people < 1){
    resultElement.innerHTML += '<span class="error">1以上の数値を入力してください。</span>';
    return;
    
}


const result = amount / people;
const roundedResult = Math.floor(result);
const remainder = amount - (roundedResult * people);
                      
if (remainder === 0) {
    resultElement.textContent = `1人あたり：${roundedResult}円`;
} else {
    const shortage = people - remainder;
    resultElement.textContent = `1人あたり：${roundedResult}円で${remainder}円不足します。1人あたり${roundedResult + 1}円にすると${shortage}円余ります。`;
}
}

