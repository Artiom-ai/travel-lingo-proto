export default function LanguageSelect({ onSelect }) {
  const languages = [
    { code: "sw", name: "Суахили" },
    { code: "pt", name: "Португальский" },
    { code: "es", name: "Испанский" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold">Выбери язык</h1>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className="bg-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100"
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
