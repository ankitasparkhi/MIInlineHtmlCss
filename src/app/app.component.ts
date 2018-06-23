import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: (`<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
<label>Name:</label>
<input type="text" size="50" placeholder="Enter your text here">`),
  styles:[`input{color: blue}`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
