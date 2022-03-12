import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Device} from'src/app/device';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  @Output() newDeviceEvent= new EventEmitter<Device>();
  message: string="";

  deviceForm:FormGroup=new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    price:new FormControl('', [Validators.required,Validators.maxLength(10)]),
    campanyname: new FormControl('',[Validators.required,Validators.maxLength(10)])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('forms submitted with');
    console.table(this.deviceForm.value);
    this.newDeviceEvent.emit(this.deviceForm.value)
  }

  get name(){
    return this.deviceForm.get('name');
  }

  get price(){
    return this.deviceForm.get('price');
  }
  get companyname(){
    return this.deviceForm.get('companyname');
  }
}
