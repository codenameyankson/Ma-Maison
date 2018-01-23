import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionMonitorPage } from './consumption-monitor';

@NgModule({
  declarations: [
    ConsumptionMonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionMonitorPage),
  ],
})
export class ConsumptionMonitorPageModule {}
