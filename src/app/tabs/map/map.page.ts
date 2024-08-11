import {CommonModule} from '@angular/common';
import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from "@ionic/angular";

import * as L from 'leaflet';

@Component({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule
	],
	standalone: true,
	styleUrls: ['./map.page.scss'],
	templateUrl: './map.page.html',
})
export class MapPage implements AfterViewInit {
	private map!: L.Map;
	public title: string = '地圖';

	constructor() {
	}

	ngAfterViewInit() {
		this.map = L
			.map(
				'map',
				{
					// zoomControl: false,
					doubleClickZoom: false,
					dragging: false,
				}
			)
			.setView(
				[
					23.973837,
					120.97969
				],
				10
			);
		L
			.tileLayer(
				'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=a9e57e44-3faa-4572-b1eb-55d7a7ac0f19',
				{
					attribution: '&#169; <A href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</A> &#169; <A href="https://openmaptiles.org/" target="_blank">OpenMapTiles</A> &#169; <A href="https://www.openstreetmap.org/copyright">OpenStreetMap</A> contributors',
					minZoom: 10,
					maxZoom: 19
				}
			)
			.addTo(this.map);
		this.map.on(
			'zoomend',
			(event) => {
				this.map.flyTo([
					23.973837,
					120.97969
				]);
				this.title = `${event.target.getZoom()}`;
			}
		);
		const resizeObserver = new ResizeObserver(() => {
			window.setTimeout(
				() => {
					this.map.invalidateSize()
				},
				500
			);
		});
		resizeObserver.observe(
			this.map.getContainer()
		);
	}
}
