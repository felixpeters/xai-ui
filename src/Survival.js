import React from 'react';

const Survival = () => {
  return (
    <div class="flex flex-col bg-gray-300">
      <div class="bg-gray-100 shadow-md">
        <h1 class="font-semibold text-2xl px-4 py-4">Example: Survival Analysis</h1>
      </div>
      <SurvivalSummaryStatistics />
      <SurvivalData/>
    </div>
  );
};

const SurvivalSummaryStatistics = () => {
  return (
    <div class="bg-gray-100 p-2 m-4 rounded-md shadow-md">
      <h2>Summary</h2>
    </div>
  );
};

const SurvivalData = () => {
  return (
    <div class="bg-gray-100 p-2 mx-4 mb-4 rounded-md shadow-md">
      <h2>Prognoses</h2>
    </div>
  );
};

export default Survival;
