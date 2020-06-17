import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Categories } from '../../app/pages/categories/categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    constructor(private http: HttpClient) { }

    getAllCategoriesList() {
        return this.http.get<Categories[]>(`${environment.apiUrl}/ItemCategory/`);
    }

    saveCategory(item: any) {
        return this.http.post(`${environment.apiUrl}/ItemCategory/`, item);
    }

    updateCategory(item: any, id: any) {
        return this.http.put(`${environment.apiUrl}/ItemCategory/` + id, item);
    }

    deleteCategory(id: string) {
        return this.http.delete(`${environment.apiUrl}/ItemCategory/${id}`);
    }
}