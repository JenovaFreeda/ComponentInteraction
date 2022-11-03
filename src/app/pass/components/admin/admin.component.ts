import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any;
  value ='Admin';
  constructor(private common: CommonService, private route: Router) { }

  ngOnInit(){
    this.common.getAll().subscribe((resp) => {
      this.data = resp;
    })
  }
  edit(item:any){
    this.common.content = item;
    this.route.navigateByUrl('passsave',item);
  }
  home(){
    this.route.navigateByUrl('');
  }

}
