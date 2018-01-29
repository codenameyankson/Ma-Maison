import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionMonitorPage } from './consumption-monitor';
import {AngularFireDatabase} from 'angularfire2/database'
import {AngularFireDatabaseModule} from 'angularfire2/database'

@NgModule({
  declarations: [
    ConsumptionMonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionMonitorPage),
    AngularFireDatabaseModule,
    AngularFireDatabase
  ],
})
export class ConsumptionMonitorPageModule {}
