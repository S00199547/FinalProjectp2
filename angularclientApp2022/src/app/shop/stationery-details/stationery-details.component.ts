import { Component, Input, OnInit } from '@angular/core';
import { Stationery } from 'src/app/stationery';

@Component({
  selector: 'app-stationery-details',
  templateUrl: './stationery-details.component.html',
  styleUrls: ['./stationery-details.component.css']
})
export class StationeryDetailsComponent implements OnInit {
@Input() stationery? :Stationery;

  constructor() { }

  ngOnInit(): void {
  }

}
