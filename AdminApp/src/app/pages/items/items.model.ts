import { Categories } from '../categories/categories.model';
export interface Items {
    _id: string;
    ItemName: string;
    ItemDescription: string;
    ItemCategory: Categories;
    ItemCategoryID: string;
    ItemPicList: string;
    IsOutOfInventory: boolean;
    MaxOrderCount: number;
    ItemPrice: number;
    ItemCurrency: string;
    IsDeleted: boolean;
    Shop: string;
    CreatedBy: string;
    UpdatedBy: string;
}
