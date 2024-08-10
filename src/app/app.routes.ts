import {Routes} from '@angular/router';
import {MapPage} from "./tabs/map/map.page";
import {SettingsPage} from "./tabs/settings/settings.page";
import {TabsComponent} from "./tabs/tabs.component";
import {ItemsPage} from "./tabs/items/items.page";

export const routes: Routes = [
	{
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'map.asp'
			},
			{
				component: ItemsPage,
				path: 'items.asp'
			},
			{
				component: MapPage,
				path: 'map.asp'
			},
			{
				component: SettingsPage,
				path: 'settings.asp'
			}
		],
		component: TabsComponent,
		path: ''
	}
];
