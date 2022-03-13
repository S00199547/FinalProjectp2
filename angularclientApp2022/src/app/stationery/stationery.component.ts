import { Component, OnInit } from '@angular/core';
import { Stationery } from '../stationery';
import { StationeryService } from '../stationery.service';
@Component({
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {


stationeries: Stationery[]=[];
message:String='';




  constructor(private stationeryService : StationeryService) { }

  ngOnInit(): void {
    this.stationeryService.getStationery().subscribe({
      next: (value: Stationery[]) => this.stationeries = value,
      complete: () => console.log('Stationery service finished'),
      error: (message) => this.message =message

    }) 

  }

}
