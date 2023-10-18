import { Component } from '@angular/core';
import { Child1Component } from "./child1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h3>App Component burasıdır kardeşim</h3>
  
    <app-child1>
    Merhabalarssssss <br>
    <input type="text" #exampleInput>

    </app-child1>

  `,
    imports: [Child1Component]
})
export class AppComponent {
  title = 'ContentChild-ContentChildren';
}
//ViewChild selector içindeki nesneleri referans edemez. selector'un referans ederken verildiyse olabilir fakat onun arasında birşeyi tutamaz......Bu yüzden ContentChild kullanıyoruz


//Burada selector arasına yazılanları child tarafına ng-content ile göndermiş oluyoruz. 