// src/components/CryptoDataTable.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchCryptoList } from "../redux/cryptoSlice";

const CryptoDataTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoData = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, [dispatch]);

  console.log({cryptoData})

  return (
    <div>
      <h1>Crypto Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Rate</th>
            <th>Volume</th>
            <th>Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.data.map((crypto) => (
            <tr key={crypto.code}>
              <td>{crypto.code}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.rank}</td>
              <td>{crypto.rate}</td>
              <td>{crypto.volume}</td>
              <td>{crypto.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoDataTable;
