import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbc-jelkada';
  hideBtn = false;

  private router = inject(Router);

  onBtnClick() {
    this.hideBtn = true;
    this.router.navigateByUrl('/books');
  }
}

