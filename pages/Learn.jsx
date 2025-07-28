import { useParams } from "react-router-dom";
import { verbs } from "../data/verbs";

function Learn() {
  const { category } = useParams();

  const data = category === "verbs" ? verbs : [];

  return (
    <div style={{ padding: 24 }}>
      <h2>📖 {category === "verbs" ? "Глаголы" : "Категория"}</h2>

      {data.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 16 }}>
          <h3>{item.ru} — {item.sw}</h3>
          <p><i>{item.example}</i></p>
        </div>
      ))}
    </div>
  );
}

export default Learn;
