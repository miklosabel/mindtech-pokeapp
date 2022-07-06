import { FunctionComponent } from "react";

interface PokemonProfileRowProps {
  label: string;
  data: string[] | string | number;
}

const PokemonProfileRow: FunctionComponent<PokemonProfileRowProps> = ({
  label,
  data,
}) => (
  <div>
    <strong>{label + ": "}</strong>
    {data && Array.isArray(data) ? (
      data.map((element, index) => [
        index > 0 && ", ",
        <span key={element}>{element}</span>,
      ])
    ) : (
      <span>{data}</span>
    )}
  </div>
);

export default PokemonProfileRow;
