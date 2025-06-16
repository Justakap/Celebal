import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 15000, 10000, 18000, 14000],
      backgroundColor: '#4F46E5',
    },
  ],
};

export function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <Bar data={data} />
      </div>
    </div>
  );
}
