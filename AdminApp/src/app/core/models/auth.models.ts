import { Shop } from '../../pages/shops/shops.model';
export interface User {
    _id: string,
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    Password: string;
    Phone: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Address: string;
    IsEmployee: boolean;
    Shop: string;
    ShopDetail: Shop;
    accessToken?: string;
    createdAt: Date;
}

export class UserModel {
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    Password: string;
    Phone: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Address: string;
}