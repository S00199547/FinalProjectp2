import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {


devices: Device[]=[];
message:String='';




  constructor(private deviceService : DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe({
      next: (value: Device[]) => this.devices = value,
      complete: () => console.log('book service finished'),
      error: (message) => this.message =message

    }) 

  }

}
