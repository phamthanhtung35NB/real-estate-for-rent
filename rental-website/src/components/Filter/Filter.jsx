import React from 'react';
import './Filter.css';

const Filter = () => {
  const districts = [
    'Cau Giay District',
    'Hoang Mai District',
    'Dong Da District',
    'Hoan Kiem District',
    'Ha Dong District',
    'Thanh Xuan District'
  ];

  return (
      <div className="filter">
        <h2>FILTER</h2>
        <div className="filter-container">
          <div className="price-range">
            <h3>Price Range</h3>
            <input type="range" />
          </div>
          <div className="area-filter">
            <h3>AREA</h3>
            <div className="districts">
              {districts.map((district) => (
                  <div key={district} className="district-item">
                    <input type="checkbox" id={district} />
                    <label htmlFor={district}>{district}</label>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Filter;