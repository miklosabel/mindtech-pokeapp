interface PokemonProfileRowProps {
	label: string;
	data: string[] | string | number;
}

const PokemonProfileRow = (props: PokemonProfileRowProps) =>
	<div>
		<strong>{props.label + ': '}</strong>
		{
			(props.data && Array.isArray(props.data))
				? props.data.map((element, index) => [
					index > 0 && ', ',
					<span key={element}>{element}</span>
				])
				: <span>{props.data}</span>
		}
	</div>

export default PokemonProfileRow;
