import React from "react";
import { renderSelect } from "./../utils/utils";

const Filters = ({
  genres,
  directors,
  value,
  searchQueryRating,
  searchQueryDirector,
  onGenreChange,
  onDirectorChange,
  onRatingChange,
}) => {
  return (
    <div className="form-group">
      {renderSelect(
        directors,
        "Director",
        searchQueryDirector,
        searchQueryDirector,
        onDirectorChange
      )}
      {renderSelect(
        ["de 2 a 3", "de 3 a 4", "de 4 a 5"],
        "Rating",
        searchQueryRating,
        "",
        onRatingChange
      )}
      {renderSelect(genres, "Genre", value, "", onGenreChange)}
    </div>
  );
};

export default Filters;
