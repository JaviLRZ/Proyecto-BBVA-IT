import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
  <div class="search __input">
  <input class="form-control me-2" type="search" placeholder="City.."  aria-label="Search" [formControl]="inputSearch">
  </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputSearch = new FormControl('');
  @Output() submited = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void{
    this.inputSearch.valueChanges
    .pipe(
      map((search)=> search!.trim()),
      debounceTime(850),
      distinctUntilChanged(),
      filter((search : string)=>search !== ''),
      tap((search: string )=> this.submited.emit(search))
    )
    .subscribe()

  }
}
