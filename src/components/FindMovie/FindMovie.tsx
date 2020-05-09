import React from 'react';
import './FindMovie.scss';
import { MovieCard } from '../MovieCard';
import { getMovie } from '../getMovie';
import { MoviesCard, FindMovState } from '../interfaces';

interface Props {
  hasAlready: boolean;
  addFilm: (newFilm: MoviesCard) => void;
}

export class FindMovie extends React.Component<Props> {
  state: FindMovState = {
    searchValue: '',
    newMovie: null,
    errorInput: false,
    isFinded: false,
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState(() => ({ searchValue: value }),
      () => {
        const { searchValue } = this.state;

        if (searchValue) {
          this.setState({ errorInput: false });
        } else {
          this.setState({ errorInput: true, newMovie: null });
        }
      });
  };

  findMovie = () => {
    const { searchValue } = this.state;

    if (!searchValue) {
      this.setState({ errorInput: true });
      return;
    } else {
      this.setState({ errorInput: false });
    }

    const preparedValue: string = searchValue.replace(/ /g, '+');

    getMovie(preparedValue)
      .then(movie => this.setState({ newMovie: movie },
        () => {
          const { newMovie } = this.state;

          if (newMovie) {
            this.setState({ isFinded: true });
          }
        }));
  };

  reset = () => {
    this.setState({
      searchValue: '',
      newMovie: null,
      errorInput: false,
      isFinded: false,
    });
  };

  render() {
    const {
      searchValue, newMovie, errorInput, isFinded,
    } = this.state;
    const { hasAlready, addFilm } = this.props;

    return (
      <>
        <form
          className="find-movie"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <label className="label" htmlFor="movie-title">
              Movie title
            </label>

            <div className="control">
              <input
                type="text"
                id="movie-title"
                value={searchValue}
                placeholder="Enter a title to search"
                className={errorInput ? 'is-danger input' : 'input'}
                onChange={this.handleInput}
              />
            </div>
            {errorInput && (
              <p className="help is-danger">
                Can&apos;t find a movie with such a title
              </p>
            )}
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                type="button"
                className="button is-light"
                onClick={this.findMovie}
              >
                Find a movie
              </button>
            </div>

            <div className="control">
              <button
                type="button"
                className="button is-primary"
                disabled={!isFinded}
                onClick={() => {
                  if (newMovie) {
                    addFilm(newMovie);
                  }
                  this.reset();
                }}
              >
                Add to the list
              </button>
            </div>
          </div>
        </form>

        <div className="container">
          <h2 className="title">Preview</h2>
          {newMovie ? (
            <MovieCard {...newMovie} />
          ) : (
              <p>Write correctly film title.</p>
            )}
          {hasAlready && (
            <p>This movie already there</p>
          )}
        </div>
      </>
    );
  }
}
