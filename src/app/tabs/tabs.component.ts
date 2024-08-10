import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {settings} from "ionicons/icons";

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
	standalone: true,
	imports: [
		IonicModule,
		RouterLink
	]
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

	protected readonly settings = settings;
}
