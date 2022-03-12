import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
@Input() device? :Device;

  constructor() { }

  ngOnInit(): void {
  }

}
