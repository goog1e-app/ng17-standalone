import {ApplicationConfig} from '@angular/core';

import {provideIonicAngular} from '@ionic/angular/standalone';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideIonicAngular({
			mode: 'ios'
		}),
		provideRouter(routes)
	]
};
