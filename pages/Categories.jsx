import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { key: "verbs", label: "Глаголы" },
    { key: "pronouns", label: "Местоимения" },
    { key: "nouns", label: "Существительные" },
    { key: "modals", label: "Модальные конструкции" },
    { key: "patterns", label: "Шаблоны" },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>📚 Категории</h2>
      {categories.map((cat) => (
        <div key={cat.key}>
          <Link to={`/learn/${cat.key}`}>
            <button>{cat.label}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
