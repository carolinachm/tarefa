function habilitaBtn () {
    var op = document.getElementById("opcao").value;

    if(op == "--")
    {
        if(!document.getElementById('avancar').disabled) document.getElementById('avancar').disabled=true;              
    }

    else if(op == "FUNCIONARIO1")
    {
        if(document.getElementById('avancar').disabled) document.getElementById('avancar').disabled=false;
    }
}
function CalculoImc(){
    var peso = parseFloat(document.formImc.peso.value);
    var altura = parseFloat(document.formImc.altura.value);
    var imc = peso/(altura*altura);
    document.formImc.resultado.value = imc.toFixed(2);
        
    }