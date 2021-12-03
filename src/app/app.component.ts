import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { TextZoom } from '@capacitor/text-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'text-zoom-bug';

  constructor() {
    this.setTextZoom(100);
  }


  async setTextZoom(percentage: number) {
    if (!(Capacitor.getPlatform() !== 'web' && Capacitor.isPluginAvailable('text-zoom'))) {
      console.log('web, do not use textzoom!');
      return;
    }

    await TextZoom.set({ value: percentage / 100 });
  }

}
