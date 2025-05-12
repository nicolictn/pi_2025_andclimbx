import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//menu diva
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-crud',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-crud.component.html',
  styleUrl: './header-crud.component.css'
})
export class HeaderCrudComponent {
   menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
