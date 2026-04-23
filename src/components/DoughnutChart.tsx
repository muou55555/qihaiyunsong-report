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
    labels: data.map(d => d.name),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: 'rgba(0, 0, 0, 0.2)' as any,
        borderWidth: 3,
        cutout: '65%',
        hoverOffset: 10,
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
        const fontSize = 24;
        ctx.font = `bold ${fontSize}px Plus Jakarta Sans`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
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
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
}