import React from 'react';
import { Chart } from 'react-charts';

const SurvivalStatistics = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  )

  return (
    <div class="flex-1 bg-gray-100 p-4 mr-2 rounded-md shadow-md">
      <h2 class="border-b border-gray-500 text-lg font-medium">Statistics</h2>
      <div class="w-56 h-56 mt-2" >
        <Chart data={data} axes={axes} />
      </div>
    </div>
  );
};

export default SurvivalStatistics;
