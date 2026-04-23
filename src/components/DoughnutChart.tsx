
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

interface DoughnutChartProps {
  data: DoughnutChartData[];
  title?: string;
  centerText?: string;
  height?: number;
}

export function DoughnutChart({ 
  data, 
  title, 
  centerText,
  height = 300 
}: DoughnutChartProps) {
  const chartData = {
    labels: data.map(d => `${d.name} (${d.percentage}%)`),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: data.map(d => d.color),
        borderWidth: 2,
        cutout: '60%',
      },
    ],
  };

  const plugins = [{
    id: 'centerText',
    beforeDraw: function(chart: any) {
      if (centerText) {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        
        ctx.restore();
        const fontSize = 20;
        ctx.font = `bold ${fontSize}px Plus Jakarta Sans`;
        ctx.fillStyle = '#1a1a2e';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const textX = width / 2;
        const textY = height / 2;
        
        ctx.fillText(centerText, textX, textY);
        ctx.save();
      }
    }
  }];

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
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
}