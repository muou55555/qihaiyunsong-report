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
    labels: data.map(d => d.name),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: 'rgba(0, 0, 0, 0.2)' as any,
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 24,
          usePointStyle: true,
          pointStyle: 'circle',
          color: 'rgba(255, 255, 255, 0.9)' as any,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)' as any,
        padding: 16,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            const item = data[context.dataIndex];
            return [` ${item.name}: ${item.value}户`, ` 比例: ${item.percentage}%`];
          },
        },
      },
    },
  };

  return (
    <div style={{ height: `${height}px` }}>
      {title && (
        <h4 className="text-center text-lg font-semibold mb-4 text-white/90">{title}</h4>
      )}
      <Pie data={chartData} options={options} />
    </div>
  );
}