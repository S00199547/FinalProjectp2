import { Component, Input, OnInit } from '@angular/core';
import { Stationery } from 'src/app/stationery';

@Component({
  selector: 'app-stationery-row',
  templateUrl: './stationery-row.component.html',
  styleUrls: ['./stationery-row.component.css']
})
export class StationeryRowComponent implements OnInit {
@Input() stationery? :Stationery;
  constructor() { }

  ngOnInit(): void {
  }

}
