import "./index.css";

function Empresas({ fornecedores }) {
  return (
    <div className="box-individual">
      {fornecedores.map((fornecedor) => (
        <>
          <div className="alinhamento-info">
            <div className="logotipo">
              <img src={fornecedor.logo} />
            </div>
            <div>
              <h1>{fornecedor.distribuidora}</h1>
              <h4>UF: {fornecedor.estado}</h4>
              <h4>{fornecedor.custo}</h4>
              <h4>Limite mínimo: {fornecedor.limite}</h4>
              <h4>{fornecedor.nClientes}</h4>
              <h4>Avaliação: {fornecedor.avaliacao}</h4>
            </div>
            <button>Contratar</button>
          </div>
        </>
      ))}
    </div>
  );
}

export default Empresas;
