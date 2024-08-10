import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {IonicModule} from "@ionic/angular";
import {addIcons} from 'ionicons';
import {map, settings} from 'ionicons/icons';

@Component({
	imports: [
		IonicModule,
		RouterOutlet
	],
	selector: 'app-root',
	standalone: true,
	styleUrl: './app.component.scss',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = '臺鐵大富翁';

	constructor() {
		addIcons({
			map,
			settings
		});
	}
}
