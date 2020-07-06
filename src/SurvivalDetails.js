import React from 'react';
import { useParams } from 'react-router-dom';

const SurvivalDetails = () => {
  let { id } = useParams();

  return (
    <h1>Survival details for patient {id}</h1>
  );
}

export default SurvivalDetails;
