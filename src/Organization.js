import React from 'react';

const brands = ['Royal Enfield', 'KTM', 'Honda', 'Yamaha', 'Suzuki', 'TVS', 'Bajaj'];

export default function Organization() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Organization Analytics Dashboard</h2>
      <p>Explore aggregate market performance and catalog updates across partner brands.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
        {brands.map((brand, idx) => (
          <div key={idx} style={{ border: '1px solid #007bff', padding: '20px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
            <h4>{brand}</h4>
            <span style={{ color: 'green', fontSize: '12px' }}>● Active Partner</span>
          </div>
        ))}
      </div>
    </div>
  );
}
