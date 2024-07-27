import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemsPerPage } from '../redux/cryptoSlice';

export const RecordsPerPage = () => {
  const dispatch = useDispatch();

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    dispatch(setItemsPerPage(value));
  };

  return (
    <select onChange={handleItemsPerPageChange}>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
    </select>
  );
};
