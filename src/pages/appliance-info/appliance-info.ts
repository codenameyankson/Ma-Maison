import { Component,ViewChild } from '@angular/core';
import {Http, Response } from '@angular/http';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the ApplianceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appliance-info',
  templateUrl: 'appliance-info.html',
})
export class ApplianceInfoPage {
@ViewChild('lineCanvas') lineCanvas;
//Stores the url passed to it when opening the modal
applianceUrl:string;
lineChart: any;
times:any;
data:any;
dates:any;
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public event:Events) {

  
  }

  //Angular OnInit
  ngOnInit(){
     this.getdata();
     this.applianceUrl = this.navParams.get("urlData");
     console.log(this.navParams.get("urlData"));
     
  }

 //Close the modal by accessing the function on the About IonicPage
 closeModal(){
   this.event.publish("ApplianceInfoPage:CloseModal");
 }

getdata()
    {

    //let url = "http://172.20.10.3/phpMQTT/phpServerSide/ionicDbloader.php?action=query";

 this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
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
                        'rgba(253, 139, 54, 0.2)'
                        
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
 
        
    //    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    
                
    // });


    }


}
