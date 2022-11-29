import { Address } from './address';

export interface BillAccount {
  baId: string;
  baNickName: string;
  role: string;
  baStatusCd: string;
  paperlessEnable: boolean;
  paperlessEligible: boolean;
  serviceAddr: Address;
}

export interface BillAccounts {
  billAccounts: BillAccount[];
}
