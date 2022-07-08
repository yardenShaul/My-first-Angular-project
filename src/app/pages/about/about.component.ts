import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eveniet error accusantium inventore, cupiditate ipsa animi aperiam magnam incidunt quam esse reprehenderit aspernatur atque, voluptas doloremque blanditiis quasi possimus molestiae?'
  ngOnInit(): void {
  }

}
