import React from 'react';

const SurvivalModel = () => {
  return (
    <div className="flex-1 bg-gray-100 p-4 mb-4 sm:mb-0 sm:mr-2 rounded-md shadow-md">
      <h2 className="border-b border-gray-500 text-lg font-medium">Model</h2>
      <div className="flex flex-wrap content-start mt-2 text-base">
        <div className="w-full md:w-1/3 font-semibold py-1">Developed by</div>
        <div className="w-full md:w-2/3 md:py-1">Felix Peters Consulting</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Version</div>
        <div className="w-full md:w-2/3 md:py-1">0.1.0</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Release date</div>
        <div className="w-full md:w-2/3 md:py-1">2020-07-01</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Intended use</div>
        <div className="w-full md:w-2/3 md:py-1">Decision support for survival prognosis</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Target group</div>
        <div className="w-full md:w-2/3 md:py-1">Physicians</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Task</div>
        <div className="w-full md:w-2/3 md:py-1">tbd</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Algorithm</div>
        <div className="w-full md:w-2/3 md:py-1">tbd</div>
        <div className="w-full md:w-1/3 font-semibold py-1">Performance</div>
        <div className="w-full md:w-2/3 md:py-1">AUC X.XX<br/>Precision XX.X%<br/>Recall XX.X%</div>
      </div>
    </div>
  );
};

export default SurvivalModel;
