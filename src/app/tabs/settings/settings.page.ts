import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from "@ionic/angular";

@Component({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule
	],
	standalone: true,
	styleUrls: ['./settings.page.scss'],
	templateUrl: './settings.page.html'
})
export class SettingsPage implements OnInit {

	// params!: Params;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		// this.params = this.route.snapshot.params;
	}
}
