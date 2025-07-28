import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>🌍 Travel Lingo</h1>
      <p>Учим суахили с нуля. Простые фразы, повторения, результат.</p>
      <Link to="/categories">
        <button>🚀 Начать</button>
      </Link>
    </div>
  );
}

export default Home;
