import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public flat = true;

  constructor() { }

  public openNav() {
    document.getElementById('mySidebar').style.width = '350px';
    document.getElementById('main').style.marginLeft = '350px';
    this.flat = !this.flat;
}

public closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.flat = !this.flat;
}

  ngOnInit(): void {
  }

}
