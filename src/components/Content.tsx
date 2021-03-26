import { useEffect, useState } from 'react';

import { MovieCard } from './MovieCard';

import '../styles/content.scss';


interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  contentGenre: GenreResponseProps;
  contentMovies: MovieProps[];
}

export function Content({contentGenre, contentMovies}: ContentProps) {

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {contentGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {contentMovies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}