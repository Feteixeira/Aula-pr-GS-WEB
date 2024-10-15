// recuperando o tbody
const tbody = document.querySelector('#historico');
console.log(tbody);

// pegar o form - atribuir um listener - criar uma função - cancelar o envio do formulário

document.querySelector('form').addEventListener('submit', function(e){
    //cancelar o envio do formulário
    e.preventDefault();
   
    //pegar os campos do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta'),
    ];

 // criar uma linha da tabela
 const tr = document.createElement('tr')

 // percorreer o array  para cada elemento criar uma td
 campos.forEach(campo => {

    //criar uma td
    const td = document.createElement('td')

    //passar para a td o valor do campo

    td.textContent= campo.value

    // colocar a td dentro da tr
    tr.appendChild(td)
})
    //colocar a linha criada dento do tbody
    tbody.appendChild(tr)

    //limpar o formulário
    this.reset()



})