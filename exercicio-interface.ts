/*minha resolução
interface dadosAPI {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: {
    nome: string;
    fundacao: number;
    pais: string;
  };
  empresaMontadora: {
    nome: string;
    fundacao: number;
    pais: string;
  };
}*/

//resolução do curso
//ambos os objetos empresa fabricante e montadora possuem os mesmos atributos, então eles foram reutilizados para criar uma interface Empresa.
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}
/*****************************************************************************/

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>Preço: ${data.preco}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia: ${data.garantia} anos</p>
        <p>Seguro para acidentes: ${temSeguro(data.seguroAcidentes)}</p>
        <hr>
        <p>Empresa fabricante: ${data.empresaFabricante.nome}</p>
        <p>Fundação da empresa: ${data.empresaFabricante.fundacao}</p>
        <p>País de origem: ${data.empresaFabricante.pais}</p>
        <hr>
        <p>Empresa montadora: ${data.empresaMontadora.nome}</p>
        <p>Fundação da empresa: ${data.empresaMontadora.fundacao}</p>
        <p>País de origem: ${data.empresaMontadora.pais}</p>
      </div>
    `;
}

function temSeguro(data: boolean) {
  if (data === true) {
    return "sim";
  } else {
    return "não";
  }
}
