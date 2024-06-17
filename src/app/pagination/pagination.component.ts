import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;
  pages: number[] = [];

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['totalItems'] || changes['itemsPerPage'] || changes['currentPage']) {
  //     this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  //     this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  //   }
  // }
  ngOnInit(): void{
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = this.range(1, pageCount);
  }
  range(start:number , end:number): number[]{
    return [...Array(end).keys()].map(el => el + start)
  }
}