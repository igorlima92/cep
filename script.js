function buscarCEP() {
    var cep = document.getElementById("cepInput").value;
    if (cep.length != 8 || isNaN(cep)) {
        alert("CEP inválido. Por favor, insira um CEP válido com 8 dígitos numéricos.");
        return;
    }

    // Requisição para a API dos Correios
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            if (!response.erro) {
                var endereco = response.logradouro + ", " + response.bairro + ", " + response.localidade + " - " + response.uf;
                document.getElementById("resultado").innerText = endereco;
            } else {
                document.getElementById("resultado").innerText = "CEP não encontrado.";
            }
        },
        error: function() {
            alert("Erro ao buscar o CEP. Por favor, tente novamente mais tarde.");
        }
    });
}
