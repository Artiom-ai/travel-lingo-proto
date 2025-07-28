import { useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import LessonPage from "./components/LessonPage";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-blue-100 text-gray-800 p-6">
      {!selectedLanguage ? (
        <LanguageSelect onSelect={setSelectedLanguage} />
      ) : (
        <LessonPage language={selectedLanguage} />
      )}
    </div>
  );
}
