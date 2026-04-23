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
          const opacity = 1 - (i * 0.12);
          return color.replace(')', `, ${Math.max(opacity, 0.5)})`).replace('rgb', 'rgba');
        }),
        borderColor: color,
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: color,
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
        color: 'rgba(255, 255, 255, 0.9)' as any,
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)' as any,
        padding: 16,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            const item = sortedData[context.dataIndex];
            return [` 数量: ${item.count}户`, ` 比例: ${item.percentage}%`];
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' as any,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)' as any,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' as any,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)' as any,
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