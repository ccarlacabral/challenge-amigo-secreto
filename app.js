// array para armazenar nomes
let amigos = [];

// Capturar o valor do campo de entrada: 
// Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
// Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
// Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
// Atualizar o array de amigos: Se o valor for válido, 
// adicione-o ao array que armazena os nomes dos amigos usando o método .push().
// Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

function adicionarAmigo(){
    let nomeAdicionado = document.getElementById('amigo').value;

    if (nomeAdicionado == ""){ 
        alert ('Por favor, insira um nome.');
        return;
        } else { 
            amigos.push(nomeAdicionado);
            document.getElementById('amigo').value = '';
            listarAmigos();
            console.log (amigos);
    }
           
 }
             
function listarAmigos(){

    // Obter o elemento da lista: Utilize document.getElementById() 
    let lista = document.getElementById('listaAmigos');

    // Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    lista.innerHTML = "";

    // Percorrer o array: Use um loop for para percorrer o array amigos
    for(let i = 0; i < amigos.length; i++){

    // criar elementos de lista (<li>) para cada nome
        let listaAmigos = document.createElement("li");

    // Definir o texto do elemento <li> como o nome do amigo atual
        listaAmigos.textContent = amigos[i];

    // Adicionar o elemento <li> à lista
        lista.appendChild(listaAmigos);

    }
}

function sortearAmigo (){

        // Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
        // amigos.length gera um número entre 0 e tamanho do array
        // Math.floor() arredonda esse número para obter um índice válido.
        // Assim: Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        

        // Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
        let amigoSorteado = amigos[indiceAleatorio];
        console.log (amigoSorteado);

        // Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() 
        // Utilizar innerHTML para exibir o amigo sorteado.
         let amigoSecreto = document.getElementById('resultado').textContent = `Amigo secreto sorteado: ${amigoSorteado}`;


        if (amigos.length == ''){
            alert ('Por favor, insira um nome.');
            return;
         } else {
            amigoSecreto;
         }
        }

inclusao de comandos para sortear o amigo secreto