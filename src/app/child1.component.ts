import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  <h3>Child Component burasıdır kardeşim</h3>
  
  <ng-content></ng-content>
  

  `,
  providers: [{provide: 'Example Provider', useValue : 'Example Value - Child1' }]
})
export class Child1Component {

  @ContentChild("exampleInput") _exampleInput : ElementRef;

  ngAfterViewInit(){
    this._exampleInput.nativeElement.value = "merhabalars"
  }
//burada yazdığımz ngcontent sayesinde parent componentte ki bu componentin selectoru içindeki html nesnesine ulaşabiliyoruz...
}
