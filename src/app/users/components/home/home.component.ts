import { LoaderService } from '../../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  
  value ='Home';
  constructor(private common: CommonService, private route: Router, private loader: LoaderService) { }

  ngOnInit() {
    this.common.getApi().subscribe((resp) => {
      this.data =resp;
    })
  }
  edit(item:any){
    
    this.common.content = item;
    this.route.navigateByUrl('usersedit',item);
  }
  admin(){
    this.route.navigateByUrl('passadmin');
  }

}
