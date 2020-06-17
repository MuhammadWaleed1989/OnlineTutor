import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Items } from '../../app/pages/items/items.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    constructor(private http: HttpClient) { }

    getAllItemsList() {
        return this.http.get<Items[]>(`${environment.apiUrl}/Item/`);
    }

    saveItem(item: any) {
        return this.http.post(`${environment.apiUrl}/Item`, item);
    }

    updateItem(item: any, id: any) {
        return this.http.put(`${environment.apiUrl}/Item/` + id, item);
    }

    deleteItem(id: string) {
        return this.http.delete(`${environment.apiUrl}/Item/${id}`);
    }
}