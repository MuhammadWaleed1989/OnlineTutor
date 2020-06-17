import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { OrderStatus } from '../../app/pages/orderstatus/orderstatus.model';

@Injectable({ providedIn: 'root' })
export class OrderStatusService {
    constructor(private http: HttpClient) { }

    getAllOrderStatusList() {
        return this.http.get<OrderStatus[]>(`${environment.apiUrl}/OrderStatus/`);
    }

    saveOrderStatus(item: any) {
        return this.http.post(`${environment.apiUrl}/OrderStatus/`, item);
    }

    updateOrderStatus(item: any, id: any) {
        return this.http.put(`${environment.apiUrl}/OrderStatus/` + id, item);
    }

    deleteOrderStatus(id: string) {
        return this.http.delete(`${environment.apiUrl}/OrderStatus/${id}`);
    }
}