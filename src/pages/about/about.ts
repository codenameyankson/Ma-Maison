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
    console.log("INside  the  constructor")

    //let client = mqtt.connect({ port: 8080, host: 'test.mosquitto.org', username: '', password: '' })
    let client = mqtt.connect({port:14336,host:'ws://m14.cloudmqtt.com/mqtt',username:'ywprfblm',password:'psDKcDi9TwjX'})
    console.log(client);
    
    client.on('connect', function () {
          console.log(" lflflfl INside")
      client.subscribe('light')
      client.publish('light', 'Connected and Ready')
    })

  
   
    client.on('message', function (topic, message) {
      console.log("empty message")
      console.log(message.toString())
      //client.end()
    })

    // this.on("relay1")
    //  this.off("relay1")

  }


  // this method is for switching on relays
  on(id) {
      let client = mqtt.connect({port:8080,host:'ws://test.mosquitto.org/mqtt',username:'',password:''})
    //let client = mqtt.connect({ port: 34336, host: 'm14.cloudmqtt.com', username: 'ywprfblm', password: 'MBfWngfGx1-g' })

    client.on('connect', function () {

      client.publish(id, 'on')
    })

  }
  //  //this method is for switching on relays
  off(id) {
   // let client = mqtt.connect({ port: 34336, host: 'm14.cloudmqtt.com', username: 'ywprfblm', password: 'MBfWngfGx1-g' })
   let client = mqtt.connect({port:8080,host:'test.mosquitto.org',username:'',password:''})

    client.on('connect', function () {

      client.publish(id, 'off')
    })

  }



}
