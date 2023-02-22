// function getWordCount(text) {
//  return text.split(/\s+/).length;
//}

function Analyse() {

    const text = document.getElementById("text");
    const operation = document.getElementById("operation");
    const todo = operation.options[operation.selectedIndex].value;
    const result = document.getElementById("result");

    if (todo == "cp") {
    
        const result1 = text.value.toUpperCase();
        result.innerHTML = "On Result : " + result1;
        
    } else if (todo == "lw") {
    
        const result2 = text.value.toLowerCase();
        result.innerHTML = "On Result : " + result2;
        
    } else if (todo == "wc") {
    
        const result3 = text.value.trim();
        const wordCount = result3.split(/\s+/).length;
        result.innerHTML = "Words Count = " + wordCount;
        // result.innerHTML = result3.length();
        
    } else if (todo == "tr") {
    
        const result4 = text.value.trim();
        result.innerHTML = "Text without extra spaces : " + result4;
        
    }
}



//Handling some responsive issues
const body = document.getElementsByTagName("body")[0];
if (body.clientHeight > 500) {
    //document.getElementsByTagName("h2")[0].style.paddingTop = '200px';
    document.getElementsByClassName("main")[0].style.marginTop = "200px";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    //document.getElementsByTagName("html")[0].style.display = 'flex';
    //document.getElementsByTagName("html")[0].style.justifyContent = 'center';
} else {
    document.getElementsByClassName("main")[0].style.marginTop = "50px";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
}

/* if (body.clientHeight > 300) {
    document.getElementsByTagName("h2")[0].style.paddingTop = '200px';
    document.getElementsByClassName("main")[0].style.marginTop = '60px';
    document.getElementsByTagName("html")[0].style.overflowY = 'hidden';
    document.getElementsByTagName("html")[0].style.display = 'flex';
    document.getElementsByTagName("html")[0].style.justifyContent = 'center';
} else {
    document.getElementsByTagName("html")[0].style.overflowY = 'hidden';
} */
