import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCrudComponent } from '../../shared/header-crud/header-crud.component';

@Component({
  selector: 'app-home-crud',
  standalone: true,
  imports: [RouterOutlet, HeaderCrudComponent],
  templateUrl: './home-crud.component.html',
  styleUrl: './home-crud.component.css'
})
export class HomeCrudComponent {

}
