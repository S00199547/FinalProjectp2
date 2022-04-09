import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stationery } from 'src/app/stationery';
import { StationeryService } from 'src/app/stationery.service';

@Component({
  selector: 'app-stationery-form',
  templateUrl: './stationery-form.component.html',
  styleUrls: ['./stationery-form.component.css']
})
export class StationeryFormComponent implements OnInit {

  @Input() stationery?: Stationery;
  @Output() stationeryFormClose = new EventEmitter<Stationery>();
  message:string="";
  stationeryForm? : FormGroup= new FormGroup({});

  constructor(private stationeryservice:StationeryService) { }

  ngOnInit(): void {

    this.stationeryForm= new FormGroup({
      name: new FormControl(
        this.stationery?.name,
        [Validators.required,Validators.minLength(3)]
      ),
      price:new FormControl(this.stationery?.price,
         [Validators.required,Validators.maxLength(1)]
      ),
      brandname:new FormControl(this.stationery?.brandname,
          [Validators.required,Validators.minLength(1)]
         ),
         quantity:new FormControl(this.stationery?.quantity
          ,[Validators.required,Validators.minLength(1)]
         )

    })
  }
  onSubmit(stationery:any){
    console.log('forms submitted with');
    console.table(this.stationeryForm?.value);
    this.stationeryservice.addStationery(stationery)
    this.stationeryFormClose.emit(this.stationeryForm?.value)
  }
  get name(){
    return this.stationeryForm?.get('name');
  }
  get price(){
    return this.stationeryForm?.get('price');
  }
  get brandname(){
    return this.stationeryForm?.get('brandname');
  }
  get quantity(){
    return this.stationeryForm?.get('quantity')
  }

  closeForm(){
    this.stationeryFormClose.emit(undefined)
  }

}
