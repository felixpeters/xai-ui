import React from 'react';

const SurvivalSummary = () => {
  return (
    <div class="flex flex-row m-4 items-stretch justify-center">
      <div class="flex-1 bg-gray-100 p-2 mr-2 rounded-md shadow-md">
        <h2>Model summary</h2>
      </div>
      <div class="flex-1 bg-gray-100 p-2 mx-2 rounded-md shadow-md">
        <h2>Data summary</h2>
      </div>
      <div class="flex-1 bg-gray-100 p-2 ml-2 rounded-md shadow-md">
        <h2>Summary statistics</h2>
      </div>
    </div>
  );
};

export default SurvivalSummary;
