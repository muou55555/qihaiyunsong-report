
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  title?: string;
  height?: number;
}

export function PieChart({ data, title, height = 300 }: PieChartProps) {
  const chartData = {
    labels: data.map(d => `${d.name} (${d.percentage}%)`),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: data.map(d => d.color),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 14,
            family: 'Plus Jakarta Sans',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const item = data[context.dataIndex];
            return `${item.name}: ${item.value}户 (${item.percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: `${height}px` }}>
      {title && (
        <h4 className="text-center text-lg font-semibold mb-4">{title}</h4>
      )}
      <Pie data={chartData} options={options} />
    </div>
  );
}