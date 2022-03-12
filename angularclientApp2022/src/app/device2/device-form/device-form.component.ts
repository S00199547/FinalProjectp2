import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/device';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  @Input() device?: Device;
  @Output() deviceFormClose = new EventEmitter<Device>();
  message:string="";
  deviceForm : FormGroup= new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    this.deviceForm= new FormGroup({
      name: new FormControl(
        this.device?.name,
        [Validators.required,Validators.minLength(3)]
      ),
      price:new FormControl(this.device?.price,
         [Validators.required,Validators.maxLength(3)]
      ),
      companyname:new FormControl(this.device?.companyname,
          [Validators.required,Validators.minLength(1)]
         )

    })
  }
  onSubmit(){
    console.log('forms submitted with');
    console.table(this.deviceForm?.value);
    this.deviceFormClose.emit(this.deviceForm?.value)
  }
  get name(){
    return this.deviceForm?.get('name');
  }
  get price(){
    return this.deviceForm?.get('price');
  }
  get companyname(){
    return this.deviceForm?.get('companyname');
  }

  closeForm(){
    this.deviceFormClose.emit(undefined)
  }

}
