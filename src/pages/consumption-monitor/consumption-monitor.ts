import { Component, ViewChild} from '@angular/core';
import {Http, Response } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import {storage, initializeApp} from 'firebase';
import {AngularFireDatabase } from 'angularfire2/database'
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import { TotalConsumption } from '../../modules/totalConsumption';

@IonicPage()
@Component({
  selector: 'page-consumption-monitor',
  templateUrl: 'consumption-monitor.html',
})

export class ConsumptionMonitorPage {
  @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    numbers:string[][];
    barChart: any;
    lineChart: any;
    doughnutChart: any;
    result:any;
    times:any;
    ttConsumption = {} as TotalConsumption;
    dates:any;
    data:any;
    //data =  [800, 650, 590, 700, 589, 545, 840];
    labels = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider,public http: Http) {
  
    // this.addReport();
    this.getdata();

  }
addReport(){ 
 this.firebaseService.addReport(
     {
    "Consumption":"2539",
    "Time taken":"19:30",
    "Date": "29/01/2018"
     
     //"Consumption": this.ttConsumption.Consumption,
    //"Time":this.ttConsumption.Time,
   //"Date": this.ttConsumption.Date
  
   }
  );
}




  ionViewDidLoad() {
    

    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","July"],
                datasets: [{
                    label: 'Monthly Cosumption',
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Appliance Contribution to total consumption',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
 
         
     console.log('ionViewDidLoad ConsumptionMonitorPage');
  
  }


getdata(){

let url = "http://localhost/phpMQTT/phpServerSide/ionicDbloader.php?action=query";

    
   this.http.get(url).map((res:Response) => res.json()).subscribe(data => {
   
    this.times=data[0][0];
    this.dates=data[0][1];
    this.data =data[0][2];
    console.log(this.data);

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: this.times,
                datasets: [
                    {
                        label: "Electricity Consumed",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.data,
                        spanGaps: false,
                    }
                ]
            }
 
        });
  },
    err => {
      console.log(err);
     
    }); 


}



}
