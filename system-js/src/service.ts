import {Injectable} from '@angular/core'

@Injectable()
export class NameService {
	name: string;
	constructor(){
		this.name = 'New World!'
	}
}
