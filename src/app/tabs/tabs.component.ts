import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

import {IonicModule} from "@ionic/angular";
import {settings} from "ionicons/icons";

@Component({
	imports: [
		IonicModule,
		RouterLink
	],
	standalone: true,
	styleUrls: ['./tabs.component.scss'],
	templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

	ngOnInit() {
	}
}
