import { Component, OnInit, ContentChild, ElementRef, TemplateRef, Input, OnChanges } from '@angular/core';
import { TemplateRefDirective } from '../directives/template-ref.directive';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnChanges {
  @ContentChild('input', {static: true}) input: TemplateRef<any>;
  @ContentChild('text', {static: true}) text: TemplateRef<any>;
  @Input() parentForm: FormGroup;
  @Input() value: any;
  public valueObject = {};
  public isObject = false;
  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("TemplateComponent -> ngOnChanges -> changes", changes)
    if(changes.value && changes.value.currentValue !== undefined){
      if(typeof(changes.value.currentValue) === 'string'){
        this.isObject = false;
        this.valueObject['value'] = changes.value.currentValue
      }else{
        this.isObject = true
      }
    }
    console.log(typeof(changes.value.currentValue));
  }
  
  ngOnInit(): void {
    
  }


}