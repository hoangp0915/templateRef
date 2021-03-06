import { Component, Directive } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive({
  selector: '[suggestion]',
})
export class SuggestionDirective { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  form: FormGroup;
  totalEstimate = 10;
    ctx = {estimate: this.totalEstimate};
  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      value: ['asd']
    })
  }
}

