import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  value: any;

  constructor(private common: CommonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.value =this.common.content;
  }
  editForm = this.fb.group({
    id :['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
    name :['',Validators.required],
    uname :['',[Validators.required,Validators.minLength(5)]],
    email :['',[Validators.required,Validators.email]]
  })

  submit() {
    this.editForm.valid
      console.log(this.editForm);
    }
  }

