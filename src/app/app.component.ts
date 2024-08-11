import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {IonicModule} from "@ionic/angular";
import {addIcons} from 'ionicons';
import {map, pricetags, settings} from 'ionicons/icons';

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

	constructor() {
		addIcons({
			map,
			pricetags,
			settings
		});
	}
}
