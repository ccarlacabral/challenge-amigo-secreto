// array para armazenar nomes
let nomes = [];

// Capturar o valor do campo de entrada: 
// Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
// Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
// Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
// Atualizar o array de amigos: Se o valor for válido, 
// adicione-o ao array que armazena os nomes dos amigos usando o método .push().
// Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

function adicionarAmigo(){
    let nomeAdicionado  = document.getElementById('amigo').value;

    if (nomeAdicionado == ""){ 
        alert ('Por favor, insira um nome.');
        return;
        } else { 
            nomes.push(nomeAdicionado);
            document.getElementById('amigo').value = '';
            console.log (nomes);

        
        }
 }



