import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { IsSubmit } from '../is-submit';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, IsSubmit {
  submit = false;
  bookFormGroup = this.fb.group({
    name: this.fb.control([]),
    isbn: this.fb.control([]),
  });

  constructor(private fb: FormBuilder) {}

  isSubmit(): boolean {
    return this.bookFormGroup.dirty && this.submit;
  }

  onSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {}
}
