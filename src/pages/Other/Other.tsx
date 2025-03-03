import { Layout } from "../../components";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
  title: string;
  text: string;
}

export default function Other({ title, text }: Props) {
  return (
    <Layout title={title}>
      <div className="otherContainer">
        <div className="text">{text}</div>
        <Link className="backLink" to="/">
          Back
        </Link>
      </div>
    </Layout>
  );
}
