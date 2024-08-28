import {CommonModule} from '@angular/common';
import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from "@ionic/angular";

import * as L from 'leaflet';
import {LatLng} from 'leaflet';

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
	private currentStop!: LatLng;
	private northernMostLatLng: L.LatLng = L.latLng(
		25.299815972944256,
		121.53703879839925
	);
	private easternMostLatLng: L.LatLng = L.latLng(
		25.01150097516682,
		122.00709690393556
	);
	private southernMostLatLng: L.LatLng = L.latLng(
		21.897796556175226,
		120.85787659646024
	);
	private westernMostLatLng: L.LatLng = L.latLng(
		23.10548388080526,
		120.0362505632334
	);
	private map!: L.Map;
	private latLngBounds!: L.LatLngBounds;
	public title: string = '地圖';

	constructor() {
	}

	ngAfterViewInit() {
		this.currentStop = L.latLng(
			22.99681,
			120.21295
		);
		this.latLngBounds = L.latLngBounds(
			L.latLng(
				25.299815972944256,
				120.0362505632334
			),
			L.latLng(
				21.897796556175226,
				122.00709690393556
			)
		);
		this.map = L
			.map(
				'map',
				{
					// zoomControl: false,
					doubleClickZoom: false,
					// dragging: false,
					maxBounds: this.latLngBounds
				}
			)
			.setView(
				this.currentStop,
				10
			);
		L
			.tileLayer(
				'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=a9e57e44-3faa-4572-b1eb-55d7a7ac0f19',
				{
					attribution: '&#169; <A href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</A> &#169; <A href="https://openmaptiles.org/" target="_blank">OpenMapTiles</A> &#169; <A href="https://www.openstreetmap.org/copyright">OpenStreetMap</A> contributors',
					minZoom: 0,
					maxZoom: 19,
					detectRetina: true
				}
			)
			.addTo(this.map);
		L
			.rectangle(
				this.latLngBounds,
				{
					color: '#FF7800',
					weight: 1
				}
			).addTo(this.map);
		this.map.on(
			'zoomend',
			(event) => {
				// this.map.flyTo([
				// 	22.99681,
				// 	120.21295
				// ]);
				this.title = `${event.target.getZoom()}`;
			}
		);
		new ResizeObserver(
			() => {
				window.setTimeout(
					() => {
						this.map.invalidateSize()
					},
					500
				);
			}
		).observe(
			this.map.getContainer()
		);
		let northernMostMarker: L.Marker = L.marker(this.northernMostLatLng).addTo(this.map);
		let easternMostMarker: L.Marker = L.marker(this.easternMostLatLng).addTo(this.map);
		let southernMostMarker: L.Marker = L.marker(this.southernMostLatLng).addTo(this.map);
		let westernMostMarker: L.Marker = L.marker(this.westernMostLatLng).addTo(this.map);
		let currentStopMarker: L.Marker = L.marker(this.currentStop).addTo(this.map);
	}
}
