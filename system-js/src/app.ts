import {Component} from '@igorminar/core'
import {NameService} from './service'

@Component({
	selector: 'demo-app',
	template: `
	  <div>Hello {{nameService.name}}</div>
	`,
	providers: [NameService]
})
export class App {
	constructor(public nameService:NameService){}
}
