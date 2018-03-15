import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import * as mqtt from 'mqtt';


declare var Paho: any;
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
  
mqtt;
reconnectTimeout = 2000;
//host="test.mosquitto.org";
host="broker.hivemq.com"; //change this
//var host="iot.eclipse.org"
//var port=80
 port=8000;

  constructor(public navCtrl: NavController) {
    console.log("INside  the  constructor")
//this.MQTTconnect() ;
    let client = mqtt.connect({port:8080,host:"test.mosquitto.org",username:"",
    password:"",onSuccess:function () 
    { console.log("in callback")
      client.subscribe('light')
      client.publish('light','Connected and Ready')
    }
})

    console.log(client);

    
  
    client.on('connect', function () {
      console.log("in callback")
      client.subscribe('light')
      client.publish('light','Connected and Ready')
    })
 
    client.on('message', function (topic, message) {
      console.log("message recieved")
      console.log(message.toString())
      client.end()
    })

    //this.on("relay1")
    // this.off("relay1")

  }





//  onFailure(message) {
// console.log("Connection Attempt to Host "+this.host+"Failed");
// setTimeout(this.MQTTconnect, this.reconnectTimeout);
//         }

//  onMessageArrived(msg){
// let out_msg="Message received "+msg.payloadString+"<br>";
// out_msg=out_msg+"Message received Topic -->"+msg.destinationName;
// console.log(out_msg);

// }
//  onConnect() {
//  // Once a connection has been made, make a subscription and send a message.
// console.log("Connected ");
// this.mqtt.subscribe("sensor/nathan/#");
// let message = new Paho.MQTT.Message("Hello World version 3");
// message.destinationName = "sensor/nathan/1";
// this.mqtt.send(message);
// console.log(message);
//  }
//   MQTTconnect() {
// //    var connectionOptions = {
// // userName:"",
// // password:"",
// // hosts:["test.mosquitto.org"],
// // port:[8000]
// // }
// console.log("connecting to "+ this.host +" "+ this.port);
// this.mqtt = new Paho.MQTT.Client(this.host,this.port, "clinetjs");
// //document.write("connecting to "+ host);
// var options = {
// timeout: 3,
// onSuccess: this.onConnect,
// onFailure: this.onFailure,
// };
// this.mqtt.onMessageArrived = this.onMessageArrived
// this.mqtt.connect(options); //connect
// console.log(this.mqtt);
// }
 
// ngOnInit():void{
//  //let client = mqtt.connect({ port:8080,host:'test.mosquitto.org',username:'',password:''})
//  let client = mqtt.connect({port:8080,host:"test.mosquitto.org",username:"",
//     password:"",onSuccess:function () 
//     { console.log("in callback")
//       client.subscribe('light')
//       client.publish('light','Connected and Ready')
//     }
// })
//   console.log("in Ng");
//   console.log(client);
// }
  // this method is for switching on relays
  // on(id) {
  //     let client = mqtt.connect({port:8081,host:'test.mosquitto.org',username:'',password:''})
  //   //let client = mqtt.connect({ port: 34336, host: 'm14.cloudmqtt.com', username: 'ywprfblm', password: 'MBfWngfGx1-g' })

  //   client.on('connect', function () {

  //     client.publish(id, 'on')
  //   })

  // }
  // //  //this method is for switching on relays
  // off(id) {
  //  // let client = mqtt.connect({ port: 34336, host: 'm14.cloudmqtt.com', username: 'ywprfblm', password: 'MBfWngfGx1-g' })
  //  let client = mqtt.connect({port:8080,host:'test.mosquitto.org',username:'',password:''})

  //   client.on('connect', function () {

  //     client.publish(id, 'off')
  //   })

 // }



}
