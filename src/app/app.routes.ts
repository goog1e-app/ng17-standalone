import {Routes} from '@angular/router';
import {MapPage} from "./tabs/map/map.page";
import {SettingsPage} from "./tabs/settings/settings.page";
import {TabsComponent} from "./tabs/tabs.component";

export const routes: Routes = [
	{
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'map.asp'
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
