import React from 'react';
import LoadingSkeleton from '../LoadingSkeleton';
import './styles.scss';

function SurveyItemLoading() {
  return (
    <tr className="assignment-items">
      <td className="loadingSkeleton__name"><LoadingSkeleton width={50} /></td>
      <td className="loadingSkeleton__due"><LoadingSkeleton width={50} /></td>
      <td className="loadingSkeleton__date"><LoadingSkeleton width={70} /></td>
      <td className="loadingSkeleton__date"><LoadingSkeleton width={100} /></td>
    </tr>
  );
}

export default SurveyItemLoading;
