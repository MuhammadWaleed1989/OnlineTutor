import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Shops, Shop } from '../../app/pages/shops/shops.model';

@Injectable({ providedIn: 'root' })
export class ShopService {
    constructor(private http: HttpClient) { }

    getAllShops() {
        return this.http.get<Shop[]>(`${environment.apiUrl}/Shop/`);
    }

    saveShop(shop: any) {
        return this.http.post(`${environment.apiUrl}/Shop/`, shop);
    }

    updateShop(shop: any, id: any) {
        return this.http.put(`${environment.apiUrl}/Shop/` + id, shop);
    }

    deleteShop(id: string) {
        return this.http.delete(`${environment.apiUrl}/Shop/${id}`);
    }
}