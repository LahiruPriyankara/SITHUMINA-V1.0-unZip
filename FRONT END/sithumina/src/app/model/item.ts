export class Item {
  /*id: number;
  name: string;
  price: number;
  unit: string;
  image?: string;
  description?: string;*/

  item_id: number;
  item_name?: string;
  item_image?: string;
  unit_price?: number = 0;
  category_id: number;
  branch_id: number;
  brand_id: number;
  created_user: string;
}
