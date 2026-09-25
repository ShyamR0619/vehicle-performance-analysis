import React, { useState } from 'react';

const sampleVehicles = [
  { id: 1, name: 'Royal Enfield Bullet 350', capacity: 350, price: 145000, brand: 'Royal Enfield' },
  { id: 2, name: 'Honda CB350 RS', capacity: 350, price: 195000, brand: 'Honda' },
  { id: 3, name: 'Bajaj Pulsar 150', capacity: 150, price: 85000, brand: 'Bajaj' },
  { id: 4, name: 'TVS Apache RTR 160', capacity: 160, price: 105000, brand: 'TVS' },
  { id: 5, name: 'Hero Xpulse 200', capacity: 200, price: 125000, brand: 'Hero MotoCorp' },
];

export default function MotorcycleList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const filteredVehicles = sampleVehicles.filter(item => {
    const matchesName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    return matchesName && matchesBrand;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Consumer Vehicle Catalog</h2>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by bike name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <select onChange={(e) => setSelectedBrand(e.target.value)} style={{ padding: '8px' }}>
          <option value="All">All Brands</option>
          <option value="Royal Enfield">Royal Enfield</option>
          <option value="Honda">Honda</option>
          <option value="Bajaj">Bajaj</option>
          <option value="TVS">TVS</option>
          <option value="Hero MotoCorp">Hero MotoCorp</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {filteredVehicles.map(bike => (
          <div key={bike.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{bike.name}</h3>
            <p><strong>Price:</strong> ₹{bike.price.toLocaleString()}</p>
            <p><strong>Engine:</strong> {bike.capacity} cc</p>
            <p><strong>Brand:</strong> {bike.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
