
import { Payee } from '../payees/Payee';

export interface Transaction {
        id: string;
        payeeId: string;
        'payee'?: Payee;
        personId: string;
        categoryId: string;
        category: {
          id: string;
          categoryName: string;
          categoryType: string;
        };
        accountId: string;
        txType: string;
        txDate: string | Date;
        amount: number;

}
