// src/app/data-list/data-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  data: any[];
  currentPage: number;
  totalPages: number;
  sortBy: string = 'id';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchData(1);
  }

  fetchData(page: number) {
    this.dataService.fetchData(page, this.sortBy).subscribe((response: any) => {
      this.data = response.data;
      this.currentPage = response.currentPage;
      this.totalPages = response.totalPages;
    });
  }

  changePage(page: number) {
    this.fetchData(page);
  }

  changeSort(sortBy: string) {
    this.sortBy = sortBy;
    this.fetchData(1);
  }
}