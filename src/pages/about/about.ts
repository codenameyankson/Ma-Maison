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
    let client = mqtt.connect({port:14336,host:'m14.cloudmqtt.com',username:'ywprfblm',password:'MBfWngfGx1-g'})

    client.on('connect', function () {
      client.subscribe('lighting')
      client.publish('lighting', 'Hello mqtt')
    })

    client.on('message', function (topic, message) {

      console.log(message.toString())
      client.end()
    })

  }

  changeTest() {
    this.test = !this.test;
  }

}
