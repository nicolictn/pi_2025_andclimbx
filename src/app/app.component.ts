//teste para responsividade
// import { BreakpointObserver } from '@angular/cdk/layout';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AndClimbX';
  // isMobile = false;

  // constructor(private breakpointObserver: BreakpointObserver) {
  //   this.breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
  //     this.isMobile = result.matches;
  //   });
}
