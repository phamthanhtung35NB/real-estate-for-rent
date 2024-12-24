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
          <p></p>
          <div className="range-section">
            <div className="price-range">
              <h3>Price Range</h3>
              <input type="range" min="0" max="100" />
            </div>
            <div className="area-range">
              <h3>Area Range</h3>
              <input type="range" min="0" max="500" />
            </div>
          </div>

          <div className="area-section">
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