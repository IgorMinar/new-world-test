var HelloWorldComponent = ng.core.Component({
  selector: 'hello-world',
  //template: 'hello world!!!'
  templateUrl: 'hello-world.html'
}).Class({
  constructor: function() {
    this.x = 3;
  },

  add: function() {
    this.x++;
  }

});



ng.platformBrowserDynamic.bootstrap(HelloWorldComponent);
