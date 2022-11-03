import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  value: any;

  constructor(private common: CommonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.value =this.common.content;
    
  }
  editForm = this.fb.group({
    id :['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
    name :['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
    email :['',[Validators.required,Validators.email]]
  })

}
