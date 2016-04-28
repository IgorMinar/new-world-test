

import {Parse5DomAdapter} from '@igorminar/platform-server';
Parse5DomAdapter.makeCurrent();


import {provide, ComponentRef, enableProdMode} from '@igorminar/core';
enableProdMode();

import {DOCUMENT} from '@igorminar/platform-browser/src/dom/dom_tokens';
import {DomSharedStylesHost, SharedStylesHost} from '@igorminar/platform-browser/src/dom/shared_styles_host';
import {DomRootRenderer} from '@igorminar/platform-browser/src/dom/dom_renderer';
import {RootRenderer} from '@igorminar/core/src/render/api';
import {bootstrap} from '@igorminar/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS_PROD_MODE} from '@igorminar/platform-browser/src/dom/debug/ng_probe';


import {
  serializeDocument,
  parseDocument,
  NodeDomRootRenderer_,
  NodeSharedStylesHost
} from './node-platform';

import {HelloWorldComponent} from './app/hello_world';


const document = `
<!doctype html>
<html lang="en">
  <head>
    <title>Universal</title>
  </head>
  <body>
    <hello-world>
      Loading...
    <hello-world>
  </body>
</html>
`;


import {AnimationBuilder} from '@igorminar/platform-browser/src/animate/animation_builder';
import {EventManager} from '@igorminar/platform-browser/src/dom/events/event_manager';

export function main() {
  return bootstrap(HelloWorldComponent, [
      provide(DOCUMENT, {
        useFactory: (domSharedStylesHost: DomSharedStylesHost) => {
          var doc: any = parseDocument(document);
          domSharedStylesHost.addHost(doc.head);
          return doc;
        },
        deps: [DomSharedStylesHost]
      }),

      provide(DomRootRenderer, {useClass: NodeDomRootRenderer_}),
      provide(RootRenderer, {useExisting: DomRootRenderer}),

      NodeSharedStylesHost,
      provide(SharedStylesHost, {useExisting: NodeSharedStylesHost}),
      provide(DomSharedStylesHost, {useExisting: NodeSharedStylesHost}),

      ELEMENT_PROBE_PROVIDERS_PROD_MODE

    ])
    .then((cmpRef: ComponentRef) => {
      return serializeDocument(cmpRef.injector.get(DOCUMENT));
    });
};


main().then(html => {
  console.log('\nPRERENDER HTML\n\n' + html + '\n');
});
