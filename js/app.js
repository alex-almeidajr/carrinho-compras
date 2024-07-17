let totalCarrinho = 0;

function adicionar(){
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split('-')[0];
  let valorProduto = parseInt(produto.split('R$')[1]);
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorProduto;
  let valorTotal = document.getElementById('valor-total');
  let novoItem = document.createElement('section');
  
  
  totalCarrinho = totalCarrinho + preco;
  novoItem.innerHTML = `<section class="carrinho__produtos__produto"><span class="texto-azul">${parseInt(quantidade)}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

  document.getElementById('produtos').appendChild(novoItem);
  valorTotal.textContent = `R$ ${totalCarrinho},00`;
  quantidade = "";
}

function limpar(){
  document.getElementById('quantidade').value = "";
  document.getElementById('valor-total').textContent = "R$0";
  document.getElementById('produtos').innerHTML = "";
  totalCarrinho = 0;
}