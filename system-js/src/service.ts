import {Injectable} from '@igorminar/core'

@Injectable()
export class NameService {
	name: string;
	constructor(){
		this.name = 'New World!'
	}
}
