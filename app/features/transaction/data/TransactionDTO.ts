export class TransactionDTO {
  id: string = '';
  amount: number = 0;
  unique_code: number = 0;
  status: string = '';
  sender_bank: string = '';
  account_number: string = '';
  beneficiary_name: string = '';
  beneficiary_bank: string = '';
  remark: string = '';
  created_at: string = '';
  completed_at: string = '';
  fee: number = 0;
}
