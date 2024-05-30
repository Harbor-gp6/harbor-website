import React from "react";
import { Chart } from "react-google-charts";

// Dados mockados para diferentes componentes do dashboard
const totalAtendimentos = 30;
const receitaTotal = 4500; // em R$
const novosClientes = 5;
const clientesRecorrentes = 25;

export const atendimentosPorHorarioData = [
  ["Horário", "Atendimentos"],
  ["08:00", 2],
  ["09:00", 3],
  ["10:00", 4],
  ["11:00", 3],
  ["12:00", 2],
  ["13:00", 3],
  ["14:00", 5],
  ["15:00", 4],
  ["16:00", 2],
  ["17:00", 2],
];

export const atendimentosPorHorarioOptions = {
  title: "Atendimentos por Horário",
  hAxis: { title: "Horário" },
  vAxis: { title: "Atendimentos" },
  legend: { position: "bottom" },
};

export const servicosPopularesData = [
  ["Serviço", "Quantidade"],
  ["Corte de Cabelo", 15],
  ["Barba", 10],
  ["Corte + Barba", 5],
];

export const servicosPopularesOptions = {
  title: "Serviços Mais Populares",
  legend: { position: "bottom" },
};



export function ChartCustom() {
  return (
    <div className="w-full h-full flex flex-col sm:flex justify-start items-start gap-4 justify-between items-center">
      <div className="w-full">
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={atendimentosPorHorarioData}
          options={atendimentosPorHorarioOptions}
        />
      </div>
      <div className="w-full">
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={servicosPopularesData}
          options={servicosPopularesOptions}
        />
      </div>
    </div>
  );
}
