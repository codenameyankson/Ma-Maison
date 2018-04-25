import { Component, OnInit} from '@angular/core';
import { NavController, ModalController, Events} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



import * as mqtt from 'mqtt';

let client;

const connectionOptions = {
userName:"",
password:"",
hosts:["test.mosquitto.org"],
port:[8000]
}
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage   {

  public name:String; 
public lamp:boolean; public switch1:boolean; public switch2 :boolean;
mqtt;

//Open modal ref
modalRef:any //Holds a reference to the opened modal;


  constructor(public navCtrl: NavController, private applianceModal:ModalController, public event:Events) {
    
    var options = {

hosts:"test.mosquitto.org",
port:8080
    }
 //userName:"",
//password:"",
    client = mqtt.connect({port:8080,host:"test.mosquitto.org",username:"",password:""});
    //client = mqtt.connect({port:34336,host:"m14.cloudmqtt.com",username:"ywprfblm",password:"psDKcDi9TwjX"});
 
    console.log(client);

    
  
    client.on('connect', function () {
      console.log("in callback")
      client.subscribe('King/MaMaison/light')
      client.subscribe('King/MaMaison/switch1')
      client.subscribe('King/MaMaison/switch2')
      client.publish('King/MaMaison/light','Connected and Ready')
    })
 
    client.on('message', function (topic, message) {
      console.log("message recieved")
      console.log(message.toString())
      
    })


  }


  //Angular OnInit
  ngOnInit(){

    //Event for closing the modal;
    this.event.subscribe("ApplianceInfoPage:CloseModal",()=>{
      this.closeModal();
    });
  }

     
   
 lampTrigger(){
 
   if(this.lamp ==true){
    console.log("lamp on");
     client.publish('King/MaMaison/light','lamp turned on');
     
   }else{
      console.log("lamp off ");
       client.publish('King/MaMaison/light','lamp turned offf');
       
   }
 }


     
 switch1Trigger(){
 
   if(this.switch1 ==true){
    console.log("Switch1 is on");
     client.publish('King/MaMaison/switch1','Switch1 turned on');
     
   }else{
      console.log("Switch1 off ");
       client.publish('King/MaMaison/switch1','Switch1 turned offf');
       
   }
 }



 switch2Trigger(){
 
   if(this.switch2 ==true){
    console.log("Switch2 is on");
     client.publish('King/MaMaison/switch2','Switch2 turned on');
     
   }else{
      console.log("switch2 off ");
       client.publish('King/MaMaison/switch2','Switch2 turned off');
       
   }
 }


//Open the modal and pass options to it.
openModal(url){

  // var url  = "www.something.com";
  this.modalRef = this.applianceModal.create("ApplianceInfoPage",{urlData : url});

  this.modalRef.present();
}

//Closes the modal
closeModal(){
  this.modalRef.dismiss();
}





  
}





