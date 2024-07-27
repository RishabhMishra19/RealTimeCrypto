import React from 'react'

export const CryptoSelect = () => {
  // In a component
const handleCryptoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  // Handle the change
  console.log(event)
};

return (
  <select onChange={handleCryptoChange}>
    <option value="bitcoin">Bitcoin</option>
    <option value="ethereum">Ethereum</option>
  </select>
);

}
