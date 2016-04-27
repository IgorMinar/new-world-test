

import {Parse5DomAdapter} from '@igorminar/platform-server';
Parse5DomAdapter.makeCurrent();


import {provide, ComponentRef} from '@igorminar/core';
import {DOCUMENT} from '@igorminar/platform-browser/src/dom/dom_tokens';
import {DomSharedStylesHost, SharedStylesHost} from '@igorminar/platform-browser/src/dom/shared_styles_host';
import {DomRootRenderer} from '@igorminar/platform-browser/src/dom/dom_renderer';
import {bootstrap} from '@igorminar/platform-browser-dynamic';


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

export function main() {
  return bootstrap(HelloWorldComponent, [

      NodeSharedStylesHost,
      provide(DomRootRenderer, {useClass: NodeDomRootRenderer_}),
      provide(SharedStylesHost, {useExisting: NodeSharedStylesHost}),
      provide(DomSharedStylesHost, {useExisting: NodeSharedStylesHost}),

      provide(DomRootRenderer, {useClass: NodeSharedStylesHost}),
      provide(DOCUMENT, {
        useFactory: (domSharedStylesHost: DomSharedStylesHost) => {
          var doc: any = parseDocument(document);
          domSharedStylesHost.addHost(doc.head);
          return doc;
        },
        deps: [DomSharedStylesHost]
      })

    ])
    .then((cmpRef: ComponentRef) => {
      return serializeDocument(cmpRef.injector.get(DOCUMENT));
    });
};


main().then(html => {
  console.log('HTML\n' + html);
});
