import { Component, OnInit } from '@angular/core';
import { Stationery } from '../../stationery';
import { StationeryService } from 'src/app/stationery.service';
import { valid } from 'joi';


@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css']
})
export class StationeryListComponent implements OnInit {
  stationeryList:Stationery[] =[];
  message:string="";
  
  showStationeryForm:boolean=false;
 currentStationery?:Stationery = undefined;
  constructor(private stationeryService:StationeryService) { }

  ngOnInit(): void {

    this.stationeryService.getStationery().subscribe({
      next: (value: Stationery[])=> this.stationeryList= value, 
      complete: () => console.log('Stationery service finished'),
      error: (mess)=> this.message= mess
    })



  }

  clicked(stationery: Stationery): void{
    this.currentStationery = stationery;
    //console.table(this.currentDevice)
  }
  isSelected(stationery: Stationery):boolean{
    if(!stationery || !this.currentStationery){
      return false;
    }
    else{
      return stationery._id === this.currentStationery._id;
    }
  }
   openAddStationery(): void{
     this.currentStationery=undefined;
     this.showStationeryForm= true;
   }
 openEditStationery() :void{
   this.showStationeryForm=true;
 }
addNewStationery(newStationery: Stationery): void{
  console.log('adding new device'+ JSON.stringify(newStationery));
  this.stationeryService.addStationery({...newStationery})
  .subscribe({
    next: device=> {
      console.log(JSON.stringify(device) +'has been added');
      this.message = "new device has been added";
    },
    error: (err) => this.message=err
    
  });

  this.stationeryService.getStationery().subscribe({
    next: (value: Stationery[]) => this.stationeryList =
    value,
    complete: ()=> console.log('Stationery service finished'),
   error: (mess) => this.message = mess
    
  })
}
updateStationery(id: string, stationery:Stationery) : void{
  console.log('updating' + JSON.stringify(stationery));
  this.stationeryService.updateStationery(id, stationery)
  .subscribe({
    next: stationery => {
      console.log(JSON.stringify(stationery)+ 'has been updated');
      this.message= "Stationery has been updated ";
    },
    error:(err)=>this.message=err
  });
  this.stationeryService.getStationery().subscribe({
    next: (value: Stationery[])=> this.stationeryList= value,
    complete: ()=> console.log('Stationery service finished'),
    error: (mess)=> this.message=mess
    
  })
}
stationeryFormClose(stationery?: Stationery): void{
   this.showStationeryForm=false;
   console.log('stationery FormClose')
   console.table(stationery);
   console.table(this.currentStationery)
   if(stationery == null){
     this.message="form closed without saving";
     this.currentStationery=undefined
   }
   else if(this.currentStationery == null){
     this.addNewStationery(stationery);
   }
   else{
     this.updateStationery(this.currentStationery._id,stationery)
   }
 }

 deleteStationery(){
   console.log('deleting  a stationery');
   if(this.currentStationery){
     this.stationeryService.deleteStationery(this.currentStationery._id).subscribe({
       next: stationery =>{
         console.log(JSON.stringify(stationery)+'has been added ');
         this.message = "stationery has been deleted"
       },
       error: (err) => this.message=err
     });
   }

   this.stationeryService.getStationery().subscribe({
     next:(value: Stationery[]) => this.stationeryList=value,
     complete: () => console.log('stationery service finished'),
     error: (mess) => this.message= mess
     
   })
 }



  dismissAlert(){
    this,this.message="";
  }

}
