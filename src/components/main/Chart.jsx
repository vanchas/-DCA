import React from 'react';

export const Chart = props => {
  const types = props.types;
  const data = props.sumsOfTypesInPercents;
  const bars = data.map((item, i) =>
    <div key={i}
      className="bar"
      style={{ width: item + '%' }}
    >
      <span className="title">{types.map((type, ind) => (i === ind) ? type.label : '' )} </span>
      &nbsp; &nbsp;
      <span className="percent"> {(isNaN(item)) ? '' : `${item} %`}</span>
    </div>
  );
  return (
    <div className="chart">
      {bars}
    </div>
  );
}