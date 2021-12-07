var btntranslater = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/hodor.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text

}
function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server! try again after sometime")
}

function clickHandler(){
    // outputdiv.innerText="kjhujhuj" +textinput.value;
    var InputText = txtinput.value;
    fetch(getTranslationURL(InputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputdiv.innerText =   translatedText ; 
        })
    .catch(errorHandler)
};
btntranslater.addEventListener("click",clickHandler)