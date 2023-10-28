import { Button } from '@mui/material';
import { authenticateAnonymously, saveResults } from '../firebase';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useRouter } from 'next/router';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
type Props = {
  typeScores: { [type: string]: number };
};

const Result: React.FC<Props> = ({ typeScores }) => {
  const router = useRouter();
  const attributes = {
    直感力: (typeScores.energy + typeScores.information) / 2,
    創造力: (typeScores.information + typeScores.lifeStyle) / 2,
    活動力: (typeScores.energy + typeScores.information) / 2,
    管理力: (typeScores.energy + typeScores.decision) / 2,
    実行力: (typeScores.energy + typeScores.lifeStyle) / 2,
    思考力: (typeScores.decision + typeScores.lifeStyle) / 2,
    外交力: (typeScores.energy + typeScores.decision) / 2,
    感性: (typeScores.information + typeScores.decision) / 2,
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

  const personality = 'テスト';
  const handleSubmit = async () => {
    try {
      await authenticateAnonymously();
      const docId = await saveResults(personality, typeScores);

      // router.push(`/result/${docId}`);
    } catch (error) {
      // エラーハンドリング
      console.log(error);
    }
  };

  return (
    <div>
      <Radar
        data={data}
        options={{
          responsive: true,
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 40,
              ticks: {
                display: false,
              },
            },
          },
        }}
      />

      <Button variant="contained" onClick={handleSubmit}>
        ボタン
      </Button>
    </div>
  );
};

export default Result;
