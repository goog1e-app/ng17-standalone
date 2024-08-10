import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
	imports: [
		CommonModule,
		FormsModule,
		IonContent,
		IonHeader,
		IonTitle,
		IonToolbar
	],
	selector: 'app-map',
	standalone: true,
	styleUrls: ['./map.page.scss'],
	templateUrl: './map.page.html',
})
export class MapPage implements OnInit {

	params!: Params;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.params = this.route.snapshot.params;
	}
}
