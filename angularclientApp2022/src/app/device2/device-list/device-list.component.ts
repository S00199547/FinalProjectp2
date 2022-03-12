import { Component, OnInit } from '@angular/core';
import { Device } from '../../device';
import { DeviceService } from 'src/app/device.service';
import { valid } from 'joi';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  deviceList:Device[] =[];
  message:string="";
  
  showDeviceForm:boolean=false;
 currentDevice?:Device = undefined;
  constructor(private deviceService:DeviceService) { }

  ngOnInit(): void {

    this.deviceService.getDevices().subscribe({
      next: (value: Device[])=> this.deviceList= value, 
      complete: () => console.log('device service finished'),
      error: (mess)=> this.message= mess
    })



  }

  clicked(device: Device): void{
    this.currentDevice = device;
    //console.table(this.currentDevice)
  }
  isSelected(device: Device):boolean{
    if(!device || !this.currentDevice){
      return false;
    }
    else{
      return device._id === this.currentDevice._id;
    }
  }
   openAddDevice(): void{
     this.currentDevice=undefined;
     this.showDeviceForm= true;
   }
 openEditDevice() :void{
   this.showDeviceForm=true;
 }
addNewDevice(newDevice: Device): void{
  console.log('adding new device'+ JSON.stringify(newDevice));
  this.deviceService.addDevice({...newDevice})
  .subscribe({
    next: device=> {
      console.log(JSON.stringify(device) +'has been added');
      this.message = "new device has been added";
    },
    error: (err) => this.message=err
    
  });

  this.deviceService.getDevices().subscribe({
    next: (value: Device[]) => this.deviceList =
    value,
    complete: ()=> console.log('Device service finished'),
   error: (mess) => this.message = mess
    
  })
}
updateDevice(id: string, device:Device) : void{
  console.log('updating' + JSON.stringify(device));
  this.deviceService.updateDevice(id, device)
  .subscribe({
    next: device => {
      console.log(JSON.stringify(device)+ 'has been updated');
      this.message= "device has been updated ";
    },
    error:(err)=>this.message=err
  });
  this.deviceService.getDevices().subscribe({
    next: (value: Device[])=> this.deviceList= value,
    complete: ()=> console.log('device service finished'),
    error: (mess)=> this.message=mess
    
  })
}
 deviceFormClose(device?: Device): void{
   this.showDeviceForm=false;
   console.log('device FormClose')
   console.table(device);
   console.table(this.currentDevice)
   if(device == null){
     this.message="form closed without saving";
     this.currentDevice=undefined
   }
   else if(this.currentDevice == null){
     this.addNewDevice(device);
   }
   else{
     this.updateDevice(this.currentDevice._id,device)
   }
 }

 deleteDevice(){
   console.log('deleting  a device');
   if(this.currentDevice){
     this.deviceService.deleteDevice(this.currentDevice._id).subscribe({
       next: device =>{
         console.log(JSON.stringify(device)+'has been added ');
         this.message = "device has been deleted"
       },
       error: (err) => this.message=err
     });
   }

   this.deviceService.getDevices().subscribe({
     next:(value: Device[]) => this.deviceList=value,
     complete: () => console.log('device service finished'),
     error: (mess) => this.message= mess
     
   })
 }



  dismissAlert(){
    this,this.message="";
  }

}
