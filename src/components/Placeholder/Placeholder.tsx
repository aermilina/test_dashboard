import "./styled.scss";

interface Props {
  onReset: () => void;
}
export default function Placeholder({ onReset }: Props) {
  return (
    <div className="placeholderContainer">
      <div className="placeholderText">
        Your search did not match any results.
      </div>
      <button className="placeholderBtn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
