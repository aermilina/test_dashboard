import "./styled.scss";

interface Props {
  setSearch: (value: string) => void;
  setInputValue: (value: string) => void;
}
export default function Placeholder({ setSearch, setInputValue }: Props) {
  return (
    <div className="placeholderContainer">
      <div className="placeholderText">
        Your search did not match any results.
      </div>
      <button
        className="placeholderBtn"
        onClick={() => {
          setSearch("");
          setInputValue("");
        }}
      >
        Reset
      </button>
    </div>
  );
}
