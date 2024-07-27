import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchSetupData, setPollingEnabled, setPollingInterval, setTrackedCryptoCodes, setCurrency } from '../redux/setupSlice';

const SetupComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const setup = useSelector((state: RootState) => state.setup);

  useEffect(() => {
    // Fetch setup data when the component mounts
    dispatch(fetchSetupData());
  }, [dispatch]);

  const handlePollingEnabledChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPollingEnabled(event.target.checked));
  };

  const handlePollingIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPollingInterval(Number(event.target.value)));
  };

  const handleTrackedCryptoCodesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.split(',').map(code => code.trim());
    dispatch(setTrackedCryptoCodes(value));
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(event.target.value));
  };

  return (
    <div className="setup-container">
      <h1>Setup</h1>
      <form>
        <div>
          <label>
            <input
              type="checkbox"
              checked={setup.pollingEnabled}
              onChange={handlePollingEnabledChange}
            />
            Polling Enabled
          </label>
        </div>

        <div>
          <label>
            Polling Interval (seconds):
            <input
              type="number"
              value={setup.pollingInterval}
              onChange={handlePollingIntervalChange}
            />
          </label>
        </div>

        <div>
          <label>
            Tracked Crypto Codes (comma-separated):
            <input
              type="text"
              value={setup.trackedCryptoCodes?.join(', ')}
              onChange={handleTrackedCryptoCodesChange}
            />
          </label>
        </div>

        <div>
          <label>
            Currency:
            <select
              value={setup.currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>

        <button type="submit">Save Setup</button>
      </form>
    </div>
  );
};

export default SetupComponent;
