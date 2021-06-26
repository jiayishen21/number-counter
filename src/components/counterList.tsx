import { countReset } from 'console';
import React from 'react';

import { Counter } from './counter';

interface Props {
	counters: { id: number, value: number }[]
	onIncrement: (counterId: number) => void,
	onReset: () => void,
	onDelete: (counterId: number) => void
}

export const CounterList: React.FC<Props> = (props: Props) => {

	return (
		<div>
			<button onClick={ () => props.onReset() }>Reset</button>
			
			{ props.counters.map(counter => (
				<Counter
					counter = { counter }
					key = { counter.id }
					onIncrement = { props.onIncrement }
					onDelete = { props.onDelete }
				/>
			))}
		</div>
	
	);

}