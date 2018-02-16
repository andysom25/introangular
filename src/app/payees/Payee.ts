export interface Payee {
  id: string | number;
  payeeName: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  categoryId: string | number;
  category?: {
    id: string|number;
    categoryName: string;
    categoryType: string;
  };
  image?: string;
  motto?: string;
  active: boolean;

}
