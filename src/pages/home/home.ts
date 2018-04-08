import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import * as mqtt from 'mqtt';

let client;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public lamp:boolean; public switch1:boolean; public switch2 :boolean;public mains :boolean;
mqtt;
 @ViewChild('lineCanva') lineCanva;
  lineChart: any;
  public reading: string = "5090";
  t1 = 'Lights';
  t2 = 'Switch 1';
  t3 = 'Switch 2';
  t4 = 'Main Power';
  data =  [65, 59, 80, 81, 56, 55, 40];

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  
    client = mqtt.connect({port:8080,host:"test.mosquitto.org",username:"",password:""});
 
  
    client.on('connect', function () {
      console.log("in callback")
      client.subscribe('King/MaMaison/light')
      client.subscribe('King/MaMaison/switch1')
      client.subscribe('King/MaMaison/switch2')
      client.subscribe('King/MaMaison/mains')
      client.subscribe('King/MaMaison/')
       client.subscribe("King/MaMaison/overallReading");

      client.publish('King/MaMaison/','Connected and Ready')

      
    })
 
    client.on('message', function (topic, message) {
      console.log("message recieved")
      var messageq = message.toString();
      console.log(messageq)
      
      if (topic == "King/MaMaison/overallReading"){
          this.reading = messageq;
          console.log( this.reading )
      }
    })

 
  }

 lampTrigger(){
 
   if(this.lamp ==true){
    console.log("lamp on");
     client.publish('King/MaMaison/light','ON');
     
   }else{
      console.log("lamp off ");
       client.publish('King/MaMaison/light','OFF');
       
   }
 }


     
 switch1Trigger(){
 
   if(this.switch1 ==true){
    console.log("Switch1 is on");
     client.publish('King/MaMaison/switch1','ON');
     
   }else{
      console.log("Switch1 off ");
       client.publish('King/MaMaison/switch1','OFF');
       
   }
 }



 switch2Trigger(){
 
   if(this.switch2 ==true){
    console.log("Switch2 is on");
     client.publish('King/MaMaison/switch2','ON');
     
   }else{
      console.log("switch2 off ");
       client.publish('King/MaMaison/switch2','OFF');
       
   }
 }
 mainsTrigger(){
 
   if(this.mains ==true){
    console.log("MAINS is on");
     client.publish('King/MaMaison/mains','ON');
     
   }else{
      console.log("MAINS off ");
       client.publish('King/MaMaison/mains','OFF');
       
   }
 }



  ionViewDidLoad() {

     this.lineChart = new Chart(this.lineCanva.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
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
  }

}
