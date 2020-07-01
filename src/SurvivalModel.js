import React from 'react';

const SurvivalModel = () => {
  return (
    <div class="flex-1 bg-gray-100 p-4 mr-2 rounded-md shadow-md">
      <h2 class="border-b border-gray-500 text-lg font-medium">Model</h2>
      <div class="flex flex-wrap content-start mt-2 text-base">
        <div class="w-1/3 font-semibold py-1">Developed by</div>
        <div class="w-2/3 py-1">Felix Peters Consulting</div>
        <div class="w-1/3 font-semibold py-1">Version</div>
        <div class="w-2/3 py-1">0.1.0</div>
        <div class="w-1/3 font-semibold py-1">Release date</div>
        <div class="w-2/3 py-1">2020-07-01</div>
        <div class="w-1/3 font-semibold py-1">Intended use</div>
        <div class="w-2/3 py-1">Decision support for survival prognosis</div>
        <div class="w-1/3 font-semibold py-1">Target group</div>
        <div class="w-2/3 py-1">Physicians</div>
        <div class="w-1/3 font-semibold py-1">Task</div>
        <div class="w-2/3 py-1">tbd</div>
        <div class="w-1/3 font-semibold py-1">Algorithm</div>
        <div class="w-2/3 py-1">tbd</div>
        <div class="w-1/3 font-semibold py-1">Performance</div>
        <div class="w-2/3 py-1">AUC X.XX<br/>Precision XX.X%<br/>Recall XX.X%</div>
      </div>
    </div>
  );
};

export default SurvivalModel;
