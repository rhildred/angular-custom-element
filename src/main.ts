import 'zone.js'
import {createApplication} from '@angular/platform-browser';
import {appConfig} from './main.config';
import {createCustomElement} from '@angular/elements';
import { HelloWorld } from './app/hello-world/hello-world';
import { ApplicationRef } from '@angular/core';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const helloWorld = createCustomElement(HelloWorld, {injector: app.injector});
  customElements.define('hello-world', helloWorld);
})();