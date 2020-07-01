import React from 'react';
import SurvivalSummary from './SurvivalSummary';
import SurvivalData from './SurvivalData';

const Survival = () => {
  return (
    <div class="flex flex-col bg-gray-300">
      <div class="bg-gray-100 shadow-md">
        <h1 class="font-semibold text-2xl px-4 py-4">Example: Survival Analysis</h1>
      </div>
      <SurvivalSummary/>
      <SurvivalData/>
    </div>
  );
};

export default Survival;
