import React from 'react';
import SurvivalModel from './SurvivalModel';
import SurvivalData from './SurvivalData';

const SurvivalSummary = () => {
  return (
    <div class="flex flex-row m-4 items-stretch justify-center text-gray-700">
      <SurvivalModel />
      <SurvivalData />
      <div class="flex-1 bg-gray-100 p-4 mr-2 rounded-md shadow-md">
        <h2 class="border-b border-gray-500 text-lg font-medium">Statistics</h2>
      </div>
    </div>
  );
};

export default SurvivalSummary;
