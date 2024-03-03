//TG = (((FG*FW)+(SG*SW))/(35+65)) Note: 35 and 65 are not set, they are determined by FW and SW
var FG = document.getElementById('FG');
var FW = document.getElementById('FW');
var SG = document.getElementById('SG');
var SW = document.getElementById('SW');
var resultParagraph = document.getElementById('result-paragraph');

function calculate() {
    var FG = parseFloat(document.getElementById('FG').value) || 0;
    var FW = parseFloat(document.getElementById('FW').value) || 0;
    var SG = parseFloat(document.getElementById('SG').value) || 0;
    var SW = parseFloat(document.getElementById('SW').value) || 0;
    var TG = "About " + ((((FG * FW) + (SG * SW)) / (FW + SW))) || 0;
    console.log(TG);
    resultParagraph.innerHTML = TG;
}