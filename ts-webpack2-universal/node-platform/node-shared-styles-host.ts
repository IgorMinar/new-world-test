import {Parse5DomAdapter} from '@igorminar/platform-server';
Parse5DomAdapter.makeCurrent();
var DOM: any = Parse5DomAdapter;



import {Inject, Injectable} from '@igorminar/core';
import {SetWrapper} from '@igorminar/platform-server/src/facade/collection';
import {SharedStylesHost} from '@igorminar/platform-browser/src/dom/shared_styles_host';

@Injectable()
export class NodeSharedStylesHost extends SharedStylesHost {
  private _hostNodes = new Set<Node>();
  constructor() {
    super();
  }
  /** @internal */
  _addStylesToHost(styles: string[], host: Node) {
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      DOM.appendChild(host, DOM.createStyleElement(style));
    }
  }
  addHost(hostNode: Node) {
    this._addStylesToHost((<any>this)._styles, hostNode);
    this._hostNodes.add(hostNode);
  }
  removeHost(hostNode: Node) {
    SetWrapper.delete(this._hostNodes, hostNode);
  }

  onStylesAdded(additions: string[]) {
    this._hostNodes.forEach((hostNode) => {
      this._addStylesToHost(additions, hostNode);
    });
  }
}
