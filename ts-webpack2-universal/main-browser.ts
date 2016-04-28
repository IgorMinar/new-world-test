import {bootstrap} from '@igorminar/platform-browser-dynamic';

import {HelloWorldComponent} from './app/hello_world';


export function main() {
  return bootstrap(HelloWorldComponent, [

  ]);
}

document.addEventListener('DOMContentLoaded', main);
