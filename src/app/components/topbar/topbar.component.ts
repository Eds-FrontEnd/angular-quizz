import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit{
   constructor(){}

   ngOnInit(): void {
  }

  reStart(){
    location.reload();
  }
}
