import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    // Nowoczesna metoda dodawania listenera
    mediaQueryList.addEventListener("change", listener);

    // Funkcja czyszcząca, która usunie listener, gdy komponent zostanie odmontowany
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]); // Efekt uruchomi się ponownie, jeśli zapytanie (query) się zmieni

  return matches;
};

export default useMediaQuery;
