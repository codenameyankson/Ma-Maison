import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { AboutPage } from '../pages/about/about';
import { ConsumptionMonitorPage } from '../pages/consumption-monitor/consumption-monitor';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
//import { AppComponent } from 'app.component';


const firebaseConfig = {
    apiKey: "AIzaSyAUX4lqoGePA8RuW58GRMSpiCoLGlV6ONg",
    authDomain: "mamaison-15a79.firebaseapp.com",
    databaseURL: "https://mamaison-15a79.firebaseio.com",
    projectId: "mamaison-15a79",
    storageBucket: "mamaison-15a79.appspot.com",
    messagingSenderId: "136130538145"
  };



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LandingPage,
    ConsumptionMonitorPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
    HttpClientModule,
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsumptionMonitorPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider ,
    HttpModule
  ]
})
export class AppModule {}
