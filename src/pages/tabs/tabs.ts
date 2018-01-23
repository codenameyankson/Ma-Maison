import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ConsumptionMonitorPage } from '../consumption-monitor/consumption-monitor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root =  ConsumptionMonitorPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
