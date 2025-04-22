const TMDB_API_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmNiYTAyNTdiMzk4Njg3ZGI0NmM5MGJhMDY3ZmE5MyIsIm5iZiI6MTc0NTAxNzA0NC42NzcsInN1YiI6IjY4MDJkOGQ0NjVjMDBhMjVhNWQ5NjEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsM3qqwGfnU4I-FnwYUTmAB6gXb0qYQ-jC9ciPpmWXs',
    'accept': 'application/json'
};

export async function getPopularMovies() {
    try {
        const response = await fetch(`${TMDB_API_URL}/movie/popular`, { headers });
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erreur lors de la récupération des films populaires:', error);
        return [];
    }
}

export async function getMovieTrailer(movieId) {
    try {
        const response = await fetch(`${TMDB_API_URL}/movie/${movieId}/videos`, { headers });
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer');
        return trailer ? trailer.key : null;
    } catch (error) {
        console.error('Erreur lors de la récupération de la bande annonce:', error);
        return null;
    }
}

export function getImageUrl(path, size = 'w500') {
    if (!path) return null;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export async function getMovieDetails(movieId) {
    try {
        const response = await fetch(`${TMDB_API_URL}/movie/${movieId}`, { headers });
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du film:', error);
        return null;
    }
}

export async function searchMovies(query) {
    try {
        const response = await fetch(
            `${TMDB_API_URL}/search/movie?query=${encodeURIComponent(query)}&language=fr-FR`,
            { headers }
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la recherche des films');
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erreur lors de la recherche des films:', error);
        throw error;
    }
}

export async function getSimilarMovies(movieId) {
    try {
        const response = await fetch(
            `${TMDB_API_URL}/movie/${movieId}/similar?language=fr-FR`,
            { headers }
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des films similaires');
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erreur lors de la récupération des films similaires:', error);
        throw error;
    }
} 