'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registre os componentes do Chart.js que você vai usar
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface NpsScoreChartProps {
  distribution: { [key: number]: number };
}

export function NpsScoreChart({ distribution }: NpsScoreChartProps) {
  const labels = Object.keys(distribution);
  const dataValues = Object.values(distribution);

  const data = {
    labels,
    datasets: [
      {
        label: 'Quantidade de Respostas',
        data: dataValues,
        backgroundColor: (context: any) => {
          // Solução: Usa o dataIndex para acessar o rótulo da nota no array de labels
          const note = parseInt(labels[context.dataIndex]);

          if (note <= 6) return 'rgba(255, 99, 132, 0.8)'; // Detratores (vermelho)
          if (note >= 9) return 'rgba(75, 192, 192, 0.8)'; // Promotores (verde)
          return 'rgba(255, 205, 86, 0.8)'; // Passivos (amarelo)
        },
        borderColor: (context: any) => {
          const note = parseInt(labels[context.dataIndex]);
          if (note <= 6) return 'rgba(255, 99, 132, 1)';
          if (note >= 9) return 'rgba(75, 192, 192, 1)';
          return 'rgba(255, 205, 86, 1)';
        },
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = `Respostas: ${context.formattedValue}`;
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Número de Respostas',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Nota',
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}