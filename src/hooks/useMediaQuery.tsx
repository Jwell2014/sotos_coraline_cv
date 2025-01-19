import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = () => setMatches(mediaQuery.matches);

        // Ajouter un listener pour détecter les changements de taille
        mediaQuery.addEventListener('change', handleChange);

        // Nettoyage du listener
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}

export default useMediaQuery;
