import { AfterViewInit, Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AppComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
count = 0;
totalSlides = 3;

ngAfterViewInit() {
setInterval(() => {
this.nextImage();
}, 3000);
}

nextImage() {
this.count = (this.count + 1) % this.totalSlides;
}
}