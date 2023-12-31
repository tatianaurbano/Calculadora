/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/ 

// get the result element
let result  = document.getElementById("result");

// Input numbers by key pressed
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Calculator logic
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Error! Adicione valores válidos.")
    }
}

// Reset button
function reset(){
    result.value = "";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== TOGGLE THEME ===================
    ====================================================
*/

// All colors for differents themes
const theme = {
    defaul(){
        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
    }
}

// Get the root element
var root = document.querySelector(':root');

// Checking the user themes preference
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// changing the theme with the results above
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "2";
    theme.light();    
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();    
}

// Create a function for recive the value of range input
function myFunction_set(val) {
    // receiving the input type range value
    document.getElementById('btnTheme').value = val; 

    // changing the theme with the results above
    if(val == 1){
        theme.defaul();
    } 
     
    else if(val == 2){
        theme.light();
    }
    
    else{
        theme.dark();
    } 
  
}


function ocultarFunc(){
    unidades = document.getElementById("unidades");
    unidades.classList.toggle("d-none");
}


// funcionalidad temperatura
function num1to2T() {
    // celsius a fahrenheit
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2");
    resultado = (numero1 * 9 / 5) + 32;

    numero2.value = resultado;
}

function num2to1T() {
    // fahrenheit a celsius
    numero1 = document.getElementById("numero1");
    numero2 = document.getElementById("numero2").value;
    resultado = (numero2 - 32) * 5 / 9;

    numero1.value = resultado;
}


// funcionalidad presion
function num1to2P() {
    // pascal a bar
    numero1 = document.getElementById("numero1P").value;
    numero2 = document.getElementById("numero2P");
    resultado = numero1 / 100000;
    
    numero2.value = resultado;
}

function num2to1P() {
    // bar a pascal
    numero1 = document.getElementById("numero1P");
    numero2 = document.getElementById("numero2P").value;
    resultado = numero2 * 100000;
    
    numero1.value = resultado;
}


//funcionalidad masa
function num1to2M() {
    // kilogramo a gramo
    numero1 = document.getElementById("numero1M").value;
    numero2 = document.getElementById("numero2M");
    resultado = numero1 * 1000;

    numero2.value = resultado;
}

function num2to1M() {
    // gramo a kilogramo
    numero1 = document.getElementById("numero1M");
    numero2 = document.getElementById("numero2M").value;
    resultado = numero2 / 1000;

    numero1.value = resultado;
}


//funcionalidad longitud
function num1to2L() {
    // metro a centimetro
    numero1 = document.getElementById("numero1L").value;
    numero2 = document.getElementById("numero2L");
    resultado = numero1 * 100;

    numero2.value = resultado;
}

function num2to1L() {
    // centimetro a metro
    numero1 = document.getElementById("numero1L");
    numero2 = document.getElementById("numero2L").value;
    resultado = numero2 / 100;

    numero1.value = resultado;
}
