import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IsSubmit } from '../is-submit';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit, IsSubmit {
  submit = false;
  characterFormGroup = this.fb.group({
    name: this.fb.control([]),
    aliases: this.fb.control([]),
  });

  constructor(private fb: FormBuilder) {}
  isSubmit(): boolean {
    return this.characterFormGroup.dirty && this.submit;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submit = true;
  }
}
