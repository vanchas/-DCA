import React from 'react';

export const Chart = props => {
  const data = props.data;
  const bars = data.map((item, i) =>
    <div key={i}
      className="bar"
      style={{
        width: item + '%'
      }}
    >
      {(isNaN(item)) ? 0 : item} %
    </div>
  );
  return (
    <div>
      {bars}
    </div>
  );
}