import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { AppDispatch, RootState } from '../redux/store';
import { setCryptoData, setSortBy, setSortOrder, setCurrentPage } from '../redux/cryptoSlice';
import { setPollingEnabled, setPollingInterval, setTrackedCryptoCodes, setCurrency } from '../redux/setupSlice';
import SetupComponent from '../components/SetupComponent';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const setup = useSelector((state: RootState) => state.setup);
  const crypto = useSelector((state: RootState) => state.crypto);

  console.log({setup, crypto})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/crypto?page=${crypto.currentPage}&limit=${crypto.itemsPerPage}`);
        dispatch(setCryptoData(response.data.data));
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, [crypto.currentPage, crypto.itemsPerPage, dispatch]);

  const handleSetupChange = async () => {
    try {
      await axios.post('/api/setup', {
        pollingEnabled: setup.pollingEnabled,
        pollingIntervalInSec: setup.pollingInterval,
        trackedCryptoCodes: setup.trackedCryptoCodes,
        currency: setup.currency,
      });
    } catch (error) {
      console.error("Error updating setup:", error);
    }
  };

  

  return (
    <div>
      <SetupComponent />
      <button onClick={() => handleSetupChange()}>Setup</button>
      <div>
        <label>
          Polling Enabled
          <input
            type="checkbox"
            checked={setup.pollingEnabled}
            onChange={(e) => dispatch(setPollingEnabled(e.target.checked))}
          />
        </label>
        <label>
          Polling Interval
          <input
            type="number"
            value={setup.pollingInterval}
            onChange={(e) => dispatch(setPollingInterval(parseInt(e.target.value, 10)))}
          />
        </label>
        <label>
          Currency
          <select
            value={setup.currency}
            onChange={(e) => dispatch(setCurrency(e.target.value))}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </label>
        <label>
          Tracked Crypto Codes
          <input
            type="text"
            value={setup.trackedCryptoCodes?.join(',')}
            onChange={(e) => dispatch(setTrackedCryptoCodes(e.target.value.split(',')))}
          />
        </label>
      </div>
      <div>
        <label>
          Sort By
          <select
            value={crypto.sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          >
            <option value="name">Name</option>
            <option value="rank">Rank</option>
            <option value="rate">Rate</option>
          </select>
        </label>
        <label>
          Sort Order
          <input
            type="radio"
            value="asc"
            checked={crypto.sortOrder === 'asc'}
            onChange={() => dispatch(setSortOrder('asc'))}
          /> Ascending
          <input
            type="radio"
            value="desc"
            checked={crypto.sortOrder === 'desc'}
            onChange={() => dispatch(setSortOrder('desc'))}
          /> Descending
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Rate</th>
            <th>Volume</th>
            <th>Cap</th>
          </tr>
        </thead>
        <tbody>
          {crypto.data?.map((item) => (
            <tr key={item.code}>
              <td>{item.name}</td>
              <td>{item.rank}</td>
              <td>{item.rate}</td>
              <td>{item.volume}</td>
              <td>{item.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => dispatch(setCurrentPage(crypto.currentPage - 1))}
          disabled={crypto.currentPage <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(setCurrentPage(crypto.currentPage + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
