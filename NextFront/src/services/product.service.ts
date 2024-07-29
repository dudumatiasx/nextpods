import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5059/api/produtos'; // Atualize com a URL da sua API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> { // Mudança aqui para garantir que retornamos um array
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
