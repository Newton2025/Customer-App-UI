import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {masterModule} from './customerApp/master/customerApp.masterModule';

platformBrowserDynamic().bootstrapModule(masterModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
