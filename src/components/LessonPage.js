const lessons = {
  sw: {
    verb: "kwenda",
    translation: "идти / to go",
    example: "Ninakwenda sokoni — Я иду на рынок",
  },
  pt: {
    verb: "ir",
    translation: "идти / to go",
    example: "Eu vou para casa — Я иду домой",
  },
  es: {
    verb: "ir",
    translation: "идти / to go",
    example: "Voy al centro — Я иду в центр",
  },
};

export default function LessonPage({ language }) {
  const lesson = lessons[language];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Глагол дня</h2>
      <p className="text-xl">
        <strong>{lesson.verb}</strong> — {lesson.translation}
      </p>
      <p className="italic">{lesson.example}</p>
      <button className="mt-4 bg-blue-200 px-4 py-2 rounded-xl hover:bg-blue-300">
        Следующий
      </button>
    </div>
  );
}
