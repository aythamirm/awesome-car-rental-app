import { Component, OnInit } from '@angular/core';
import { Vehicle } from './models/vehicle.model';
import { VehiclesService } from './services/vehicles.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  
  vehicles: Array <Vehicle>;

  constructor(public vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(
      response => {
        this.vehicles = response;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log ('Finished!');
      }
    );
  }

}
