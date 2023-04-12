import { useEffect, useState } from "react";
import Empresas from "../../components";
import "./index.css";
import api from "../../services/api";

function Main() {
  async function carregarEmpresas() {
    try {
      const response = await api.get('');
     ;
    } catch (error) {
      ;
    }
  }

  useEffect(() => {
    carregarEmpresas();
  }, []);

  const distribuicao = [
    {
      logo: "equatorial.jpeg",
      distribuidora: "Equatorial",
      estado: "AL",
      custo: "R$ 0,62 por KWh",
      limite: 26900,
      nClientes: "50mil clientes",
      avaliacao: "4.2/5",
    },
    {
      logo: "amazonas-energia.png",
      distribuidora: "Amazonas",
      estado: "AM",
      custo: "R$ 0,83 por KWh",
      limite: 20900,
      nClientes: "6.2 bilhões de clientes",
      avaliacao: "3.2/5",
    },
    {
      logo: "enel.png",
      distribuidora: "Enel",
      estado: "RJ",
      custo: "R$ 0,75 por KWh",
      limite: 26900,
      nClientes: "4.9 bilhões de clientes",
      avaliacao: "4.2/5",
    },
    {
      logo: "copel.png",
      distribuidora: "Copel",
      estado: "PR",
      custo: "R$ 0,72 por KWh",
      limite: 45050,
      nClientes: "5.6 bilhões de clientes",
      avaliacao: "3.9/5",
    },
    {
      logo: "neoenergia.png",
      distribuidora: "Neo",
      estado: "DF",
      custo: "R$ 0,84 por KWh",
      limite: 40000,
      nClientes: "10 bilhões de clientes",
      avaliacao: "4.8/5",
    },
    {
      logo: "LogoEnergisa.png",
      distribuidora: "Energisa",
      estado: "SE",
      custo: "R$ 0,55 por KWh",
      limite: 10000,
      nClientes: "3.7 bilhões de clientes",
      avaliacao: "4.3/5",
    },
    {
      logo: "cemig-logo.png",
      distribuidora: "Cemig",
      estado: "MG",
      custo: "R$ 0,62 por KWh",
      limite: 30000,
      nClientes: "8.7 bilhões de clientes",
      avaliacao: "4.7/5",
    },
  ];

  const [filtro, setFiltro] = useState("");
  const fornecedoresFiltrados = distribuicao.filter(
    (empresa) => empresa.limite <= filtro
  );

  return (
    <div className="container">
      <h1 className="titulo">Faça agora uma simulação</h1>

      <form>
        <input
          type="text"
          onChange={(event) => setFiltro(event.target.value)}
          placeholder="Consulmo mensal em KWh"
          value={filtro}
        />
      </form>

      <div className="box-empresas">
        <Empresas fornecedores={fornecedoresFiltrados} />
      </div>
    </div>
  );
}

export default Main;
