import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateRef]'
})
export class TemplateRefDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
