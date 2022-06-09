import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <label [class.danger]="foodWarning">Has food allergy.</label>
    <input type="checkbox" [(ngModel)]="foodWarning" />
    <label [class.green]="greenWarning">Vegges</label>
    <input type="checkbox" [(ngModel)]="greenWarning"/>
    `,
    styles: [`
              .danger {
                  color:orange;
                  font-weight:bold;
               }
               .green{
                 color: green;
                 font-weight: bold;
               }`
            ]
})
export class AppComponent {
foodWarning:Boolean
greenWarning:Boolean
constructor() {
  // Set default value to false.
  this.foodWarning = false;
  this.greenWarning = false;
}
}