export interface Payee {
    id: string;
    payeeName: string | number;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    categoryId: string | number;
    image?: string;
    motto?: string;
    active: boolean;

}


