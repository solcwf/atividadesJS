
let clientesDaSarao = [];


function inserirNomes() {
    let nome = prompt("Insira o nome do cliente:");

 
    clientesDaSarao.push(nome);


    let continuar = confirm("Deseja inserir mais nomes?");
    if (continuar) {
        inserirNomes();
    } else {
        
        console.log("Lista de clientes:");
        clientesDaSarao.forEach(function(cliente, index) {
            console.log((index + 1) + ". " + cliente);
        });
    }
}


inserirNomes();
