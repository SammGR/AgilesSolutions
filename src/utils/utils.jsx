import Select from "./../components/select";
import LineChart from "../components/lineChart";
import BarChart from "../components/barChart";
import PieChart from "../components/pieChart";
import {
  getDonwloads,
  getLabels,
  getMovieByDierctor,
  getMovieByGenre,
  getMoviesByRating,
  getViews,
} from "../services/fakeMovieService";

export function renderSelect(items, label, value, searchQuery, onValueChange) {
  return (
    <div>
      <Select
        items={items}
        label={label}
        value={value}
        searchQuery={searchQuery}
        onValueChange={onValueChange}
      />
    </div>
  );
}

export function getPageData(
  searchQueryDirector,
  searchQueryGenre,
  searchQueryRating,
  movies
) {
  let filteredMovies = movies;

  if (searchQueryGenre)
    filteredMovies = getMovieByGenre(filteredMovies, searchQueryGenre);
  if (searchQueryDirector)
    filteredMovies = getMovieByDierctor(filteredMovies, searchQueryDirector);
  if (searchQueryRating)
    filteredMovies = getMoviesByRating(filteredMovies, searchQueryRating);

  console.log(filteredMovies);

  let downloads = getDonwloads(filteredMovies);
  let views = getViews(filteredMovies);
  let labels = getLabels();

  return { downloads, views, labels };
}
export function getChart(
  searchQueryDirector,
  searchQueryGenre,
  searchQueryRating,
  movies,
  selectedChart
) {
  const { downloads, views, labels } = getPageData(
    searchQueryDirector,
    searchQueryGenre,
    searchQueryRating,
    movies
  );
  if (selectedChart && selectedChart.name === "line")
    return <LineChart downloads={downloads} views={views} labels={labels} />;
  if (selectedChart && selectedChart.name === "pie")
    return (
      <div className="pie-Chart">
        <PieChart label={"Views"} views={views} labels={labels} />{" "}
        <PieChart label={"Downloads"} views={downloads} labels={labels} />
      </div>
    );
  return <BarChart downloads={downloads} views={views} labels={labels} />;
}
