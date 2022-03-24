import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { MenuService } from 'src/app/services/menu.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  studentTtile = 'Students';
  menu : Menu[] = []
  
  constructor(private _menuService : MenuService,
    private _sharedService : SharedService) { 

  }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(){
    this._menuService.getMenu().subscribe(data => {
      console.log(data);
      this.menu = data;
    })
  }

  sendStudentTitle(){
    this._sharedService.changeStudentTitle(this.studentTtile);
  }

}
