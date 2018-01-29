import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as mqtt from 'mqtt';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  test: boolean = false;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    console.log("IN constructor")
    let client = mqtt.connect({port:8080,host:'test.mosquitto.org',username:'',password:''})
    
    client.on('connect', function () {
      client.subscribe('light')
      client.publish('light', 'Connected and Ready')
    })

    client.on('message', function (topic, message) {

      console.log(message.toString( ))
      //client.end()
    })
    
    this.on("relay1")
    this.off("relay1")
 
  }
  
 
  // this method is for switching on relays
  on(id){
    let client = mqtt.connect({port:8080,host:'test.mosquitto.org',username:'',password:''})
    
    client.on('connect', function () {
   
      client.publish(id, 'on') 
    })

  }
  
  //  //this method is for switching on relays
  off(id){
      let client = mqtt.connect({port:8080,host:'test.mosquitto.org',username:'',password:''})
          
          client.on('connect', function () {
        
            client.publish(id, 'off') 
          })
        }

}
