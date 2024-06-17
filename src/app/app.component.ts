import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'life-cycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;
  onBtnClick(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }
  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }
  currentPage: number = 1;
  changePage(page: number): void {
    this.currentPage = page;
  } 
  // totalItems: number = 100;  // Example total item count
  // itemsPerPage: number = 10;
  
  // items: any[] = []; // Replace with your data source

  // ngOnInit() {
  //   this.fetchItems();
  // }

  // fetchItems() {
  //   // Fetch your items here and update totalItems
  //   this.totalItems = this.items.length;
  //   this.updatePaginatedItems();
  // }

  // onPageChange(page: number) {
  //   this.currentPage = page;
  //   this.updatePaginatedItems();
  // }

  // updatePaginatedItems() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.paginatedItems = this.items.slice(startIndex, endIndex);
  // }
}

