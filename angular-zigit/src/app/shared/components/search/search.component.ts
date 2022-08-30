import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent<T>{

  @Input() source!: any;
  isSearchVisible = true;

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();
  }

  openSearch() {
    this.isSearchVisible = true;
  }

  closeSearch() {
    this.source.filter = undefined;
    this.isSearchVisible = false;
  }

}