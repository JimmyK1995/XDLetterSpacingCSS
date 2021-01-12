let fontSize = document.querySelector(".fontSizeValue");
let letterSpacing = document.querySelector(".letterSpacingValue");
let submit = document.querySelector(".button1");

function fontSizeLength(){
    return fontSize.value.length;
}

function letterSpacingLength(){
    return letterSpacing.value.length;
}

function addResult(){
    
    var result = document.querySelector(".result");
    let thousand = 1000;
    result.innerHTML = fontSize.value * letterSpacing.value / thousand;
    fontSize.value = "";
    letterSpacing.value = "";
    console.log(result)
}


submit.addEventListener("click", addResult)

