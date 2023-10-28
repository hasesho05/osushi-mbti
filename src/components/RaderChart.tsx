import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box } from '@mui/system';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type RadarChartProps = {
  scores: {
    energy: number;
    information: number;
    decision: number;
    lifeStyle: number;
  };
};

const RadarChart = ({ scores }: RadarChartProps) => {
  const attributes = {
    直感力: 70 - (scores.energy + scores.information) / 2,
    創造力: 70 - (scores.information + scores.lifeStyle) / 2,
    活動力: (scores.energy + scores.information) / 2,
    管理力: (scores.energy + scores.decision) / 2,
    実行力: (scores.energy + scores.lifeStyle) / 2,
    思考力: (scores.decision + scores.lifeStyle) / 2,
    外交力: (scores.energy + scores.decision) / 2,
    感性: 70 - (scores.information + scores.decision) / 2,
  };

  const data = {
    labels: Object.keys(attributes),
    datasets: [
      {
        label: '診断結果',
        data: Object.values(attributes),
        fill: true,
        backgroundColor: 'rgba(51, 164, 116, 0.2)',
        borderColor: 'rgb(51, 164, 116)',
        pointBackgroundColor: 'rgb(51, 164, 116)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(51, 164, 116)',
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto', mb: 2 }}>
      <Radar
        data={data}
        options={{
          responsive: true,
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 56,
              ticks: {
                display: false,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default RadarChart;
