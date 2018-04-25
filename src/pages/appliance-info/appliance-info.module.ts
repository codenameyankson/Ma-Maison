import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplianceInfoPage } from './appliance-info';

@NgModule({
  declarations: [
    ApplianceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplianceInfoPage),
  ],
})
export class ApplianceInfoPageModule {}
