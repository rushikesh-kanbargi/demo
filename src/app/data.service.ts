// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/data';

  constructor(private http: HttpClient) { }

  fetchData(page: number, sortBy: string) {
    const url = `${this.apiUrl}?page=${page}&sortBy=${sortBy}`;
    return this.http.get(url);
  }
}

