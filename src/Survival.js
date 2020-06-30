import React from 'react';

const Survival = () => {
  return (
    <div class="flex flex-col bg-gray-300 px-4 py-3 mx-auto">
      <h1 class="font-semibold text-2xl">Example: Survival Analysis</h1>
      <SurvivalSummaryStatistics />
      <SurvivalData/>
    </div>
  );
};

const SurvivalSummaryStatistics = () => {
  return (
    <div class="bg-gray-100 p-2 mt-2 rounded-md shadow-md">
      <h2>Summary</h2>
    </div>
  );
};

const SurvivalData = () => {
  return (
    <div class="bg-gray-100 p-2 mt-2 rounded-md shadow-md">
      <h2>Prognoses</h2>
    </div>
  );
};

export default Survival;
