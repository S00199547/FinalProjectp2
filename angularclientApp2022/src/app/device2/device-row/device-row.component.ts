import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/device';

@Component({
  selector: 'app-device-row',
  templateUrl: './device-row.component.html',
  styleUrls: ['./device-row.component.css']
})
export class DeviceRowComponent implements OnInit {
@Input() device? :Device;
  constructor() { }

  ngOnInit(): void {
  }

}
