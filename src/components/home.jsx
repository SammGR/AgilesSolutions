import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { getDirectors } from "../services/fakeDirectorService";
import Filters from "./filters";
import ListGroup from "./listGroup";
import { getChart } from "../utils/utils";

class Home extends Component {
  state = {
    items: [
      { _id: 0, name: "bar" },
      { _id: 1, name: "line" },
      { _id: 2, name: "pie" },
    ],
    selectedChart: { _id: 0, name: "bar" },
    movies: [],
    genres: [],
    directors: [],
    searchQueryGenre: "",
    searchQueryDirector: "",
    searchQueryRating: "",
  };

  componentDidMount() {
    this.setState({
      genres: getGenres(),
      directors: getDirectors(),
      movies: getMovies(),
    });
  }

  handleItemSelected = (chart) => {
    this.setState({ selectedChart: chart });
  };
  handleGenreChange = (genreID) => {
    this.setState({ searchQueryGenre: genreID });
  };
  handleDirectorChange = (directorID) => {
    this.setState({ searchQueryDirector: directorID });
  };
  handleRatingChange = (rating) => {
    this.setState({ searchQueryRating: rating });
  };

  render() {
    const {
      items,
      selectedChart,
      genres,
      movies,
      directors,
      searchQueryDirector,
      searchQueryGenre,
      searchQueryRating,
    } = this.state;
    return (
      <div className="container">
        <Filters
          genres={genres}
          directors={directors}
          value={searchQueryGenre}
          searchQueryRating={searchQueryRating}
          searchQueryDirector={searchQueryDirector}
          onGenreChange={this.handleGenreChange}
          onDirectorChange={this.handleDirectorChange}
          onRatingChange={this.handleRatingChange}
        />
        <div className="rowChart">
          <div className="colChart">
            {getChart(
              searchQueryDirector,
              searchQueryGenre,
              searchQueryRating,
              movies,
              selectedChart
            )}
          </div>
          <div className="colList" style={{ cursor: "pointer" }}>
            <ListGroup
              items={items}
              selectedItem={selectedChart}
              onItemSelect={this.handleItemSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
