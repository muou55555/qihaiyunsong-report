
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartData {
  label: string;
  count: number;
  percentage: number;
}

interface BarChartProps {
  data: BarChartData[];
  title?: string;
  color?: string;
  horizontal?: boolean;
  height?: number;
}

export function BarChart({ 
  data, 
  title, 
  color = '#3b82f6',
  horizontal = true,
  height = 350 
}: BarChartProps) {
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);
  
  const chartData = {
    labels: sortedData.map(d => d.label),
    datasets: [
      {
        label: '户数',
        data: sortedData.map(d => d.count),
        backgroundColor: sortedData.map((_, i) => {
          const opacity = 1 - (i * 0.15);
          return color.replace(')', `, ${Math.max(opacity, 0.4)})`).replace('rgb', 'rgba');
        }),
        borderColor: color,
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: horizontal ? 'y' as const : 'x' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: !!title,
        text: title,
        font: {
          size: 16,
          family: 'Plus Jakarta Sans',
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const item = sortedData[context.dataIndex];
            return `${item.count}户 (${item.percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 13,
            family: 'Plus Jakarta Sans',
          },
        },
      },
    },
  };

  return (
    <div style={{ height: `${height}px` }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}