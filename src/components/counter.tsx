import React from 'react'

interface Props {
	counter: { id: number, value: number },
	onIncrement: ( counterId: number ) => void,
	onDelete: ( counterId: number ) => void
}

export const Counter: React.FC<Props> = (props: Props) => {
	return (
		<div>
			<span>{ props.counter.value }</span>
			<button onClick={ () => props.onIncrement(props.counter.id) }>Increase</button>
			<button onClick={ () => props.onDelete(props.counter.id) }>Delete</button>
		</div>
	);

}