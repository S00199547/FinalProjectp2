import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Stationery} from'src/app/stationery';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  @Output() newStationeryEvent= new EventEmitter<Stationery>();
  message: string="";

  stationeryForm:FormGroup=new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    price:new FormControl('', [Validators.required,Validators.maxLength(10)]),
    brandname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    quantity: new FormControl('',[Validators.required,Validators.maxLength(10)])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('forms submitted with');
    console.table(this.stationeryForm.value);
    this.newStationeryEvent.emit(this.stationeryForm.value)
  }

  get name(){
    return this.stationeryForm.get('name');
  }

  get price(){
    return this.stationeryForm.get('price');
  }
  get brandname(){
    return this.stationeryForm.get('brandname');
  }
  get quantity(){
    return this.stationeryForm.get('quantity');
  }
}
