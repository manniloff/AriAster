import { Component, OnInit } from '@angular/core';
import { MonitoringService } from './service/service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
   providers: [MonitoringService]
})
export class MonitoringComponent implements OnInit {

  monitoringData: any;
  sizeData: any[] ;
  data: any;

  constructor(private getRequest: MonitoringService, private httpClient: HttpClient) {
    
  }

  ngOnInit() : void {
    /*
    this.httpClient.get("http://localhost:8080/rest/monitoring/endpoints").subscribe(
      data =>{
        this.monitoringData =data;
        console.log(data);
      }
    )
    */

    this.data= this.graphic();
    
  }

  graphic(): any {

    let arr= [];

    for(let i=0;i<31; i++){
      arr[i] = Math.floor(Math.random() * 50) + 1;
    }

    let data= {
      labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12', '13', '14', '15', '16', '17','18','19','20','21','22', '23', '24', '25', '26', '27','28','29','30'],
      datasets: [
        {
          label: 'Channels Activity',
          data: arr,
          fill: false,
          borderColor: '#1E88E5'
        }
      ]
  };
    return data ;
  }

  update(event: Event) {
    this.data = this.graphic();
  }

}
