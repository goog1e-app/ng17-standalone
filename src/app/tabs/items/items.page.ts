import {ActivatedRoute, Params} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from "@ionic/angular";

@Component({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule
	],
	standalone: true,
	styleUrls: ['./items.page.scss'],
	templateUrl: './items.page.html'
})
export class ItemsPage implements OnInit {

	// params!: Params;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		// this.params = this.route.snapshot.params;
	}
}
