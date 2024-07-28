export interface ISetup {
  pollingEnabled: boolean;
  pollingIntervalInSec: number;
  trackedCryptoCodes: string[];
  currency: string;
}

export interface FetchSetupResponse extends ISetup {}

export interface UpdateSetupRequest extends ISetup {}
export interface UpdateSetupResponse extends ISetup {}
