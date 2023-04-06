import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
})
export class Header {
  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['.'], { fragment: 'contact' });
  }
  title = 'Angular';
}
