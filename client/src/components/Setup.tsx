// src/components/Setup.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  fetchSetupData,
  setPollingEnabled,
  setPollingInterval,
  setTrackedCryptoCodes,
  setCurrency,
  updateSetupData,
} from "../redux/setupSlice";

const Setup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setup = useSelector((state: RootState) => state.setup);
  const [localSetup, setLocalSetup] = useState(setup);

  useEffect(() => {
    dispatch(fetchSetupData());
  }, [dispatch]);

  useEffect(() => {
    setLocalSetup(setup);
  }, [setup]);

  const handleSave = () => {
    dispatch(updateSetupData(localSetup));
  };

  return (
    <div>
      <h1>Setup</h1>
      <div>
        <label>Polling Enabled</label>
        <input
          type="checkbox"
          checked={localSetup.pollingEnabled}
          onChange={(e) => setLocalSetup({ ...localSetup, pollingEnabled: e.target.checked })}
        />
      </div>
      <div>
        <label>Polling Interval (seconds)</label>
        <input
          type="number"
          value={localSetup.pollingInterval}
          onChange={(e) =>
            setLocalSetup({ ...localSetup, pollingInterval: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <label>Tracked Crypto Codes</label>
        <input
          type="text"
          value={localSetup.trackedCryptoCodes.join(",")}
          onChange={(e) =>
            setLocalSetup({ ...localSetup, trackedCryptoCodes: e.target.value.split(",") })
          }
        />
      </div>
      <div>
        <label>Currency</label>
        <input
          type="text"
          value={localSetup.currency}
          onChange={(e) => setLocalSetup({ ...localSetup, currency: e.target.value })}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Setup;
