export class Transaction {
  id: string;
  amount: number;
  uniqueCode: number;
  status: string;
  senderBank: string;
  accountNumber: string;
  beneficiaryName: string;
  beneficiaryBank: string;
  remark: string;
  createdAt: string;
  completedAt: string;
  fee: number;

  constructor(
    id: string,
    amount: number,
    uniqueCode: number,
    status: string,
    senderBank: string,
    accountNumber: string,
    beneficiaryName: string,
    beneficiaryBank: string,
    remark: string,
    createdAt: string,
    completedAt: string,
    fee: number,
  ) {
    this.id = id;
    this.amount = amount;
    this.uniqueCode = uniqueCode;
    this.status = status;
    this.senderBank = senderBank;
    this.accountNumber = accountNumber;
    this.beneficiaryName = beneficiaryName;
    this.beneficiaryBank = beneficiaryBank;
    this.remark = remark;
    this.createdAt = createdAt;
    this.completedAt = completedAt;
    this.fee = fee;
  }
}
