function selecionar(qualBotao) {
  switch (qualBotao) {
    case "IMC":
      document.getElementById("botaoSelecionado").innerHTML = "IMC";
      function mostrarFormulario() {
        var btn = document.getElementById("btn_form");
        var form = document.getElementById("my_form");
      
        btn.addEventListener("click", function () {
          if (form.style.display != "block") {
            form.style.display = "block";
            return;
          }
          form.style.display = "none";
        });
      }
      function CalculoImc(){
        var peso = parseFloat(document.formImc.peso.value);
        var altura = parseFloat(document.formImc.altura.value);
        var imc = peso/(altura*altura);
        document.formImc.resultado.value = imc.toFixed(2);
            
        }
      
      break;
    case "Velocidade":
      document.getElementById("botaoSelecionado").innerHTML = "Velocidade";
      break;
    case "Consume De gasolina":
      document.getElementById("botaoSelecionado").innerHTML =
        "Consume de Gasolina";
      break;
    case "Calcular salario":
      document.getElementById("botaoSelecionado").innerHTML =
        "Calcular Salario";
      break;
    default:
      document.getElementById("botaoSelecionado").innerHTML = "erro";
  }
}

