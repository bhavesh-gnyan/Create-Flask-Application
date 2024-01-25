import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'; // Import your app module here

enableProdMode();
// Start the Angular application with platformBrowserDynamic and pass in the AppModule
platformBrowserDynamic().bootstrapModule(AppModule);