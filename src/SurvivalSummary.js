import React from 'react';
import SurvivalModel from './SurvivalModel';
import SurvivalData from './SurvivalData';
import SurvivalStatistics from './SurvivalStatistics';

const SurvivalSummary = () => {
  return (
    <div class="flex flex-col md:flex-row m-4 items-stretch justify-center text-gray-700">
      <SurvivalModel />
      <SurvivalData />
    </div>
  );
};

export default SurvivalSummary;
