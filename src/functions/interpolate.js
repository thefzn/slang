import FunctionCall from './FunctionCall';
import List from '../helpers/List';

export default class Interpolate extends FunctionCall {
	constructor(functionObject) {
		super(functionObject);
		const fromValue = this.arguments[0].next();
		const toValue = this.arguments[1].next();
		const steps = this.arguments[2].next();

		// const stepInterval = (toValue - fromValue) / (steps - 2);

		const values = [fromValue];
		for (let i = 1; i < steps; i += 1) {
			values.push((fromValue * (1 - (i / (steps - 1)))) + (toValue * (i / (steps - 1))));
		}

		this.data = new List(values);
	}
}
