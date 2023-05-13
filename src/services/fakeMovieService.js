const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Duel",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [25000, 22632, 18563, 20356, 12854, 16525],
    downloads: [12365, 10587, 8547, 9000, 3214, 5687],
    rate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Bridge of Spies",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [35000, 25874, 20458, 22547, 18654, 19547],
    downloads: [10365, 12457, 12547, 8547, 3214, 5687],
    rate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Jawst",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [15000, 12365, 6584, 3456, 5000, 4587],
    downloads: [7854, 6521, 4000, 3254, 2000, 6000],
    rate: 4.3,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Empire of the Sun",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [20000, 18547, 8547, 12457, 17000, 9000],
    downloads: [7854, 6521, 4000, 3254, 2000, 6000],
    rate: 3.8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "The Color Purple",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [16000, 14587, 14236, 8547, 12345, 6000],
    downloads: [8000, 2000, 3541, 4571, 3452, 1000],
    rate: 4,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Catch me if you can",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [20000, 5478, 12547, 10698, 18598, 23145],
    downloads: [3547, 1254, 6547, 5214, 6457, 10000],
    rate: 3.6,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Schindler”s list",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [40000, 39654, 25417, 23568, 28547, 18245],
    downloads: [12345, 10325, 12354, 5214, 6457, 12354],
    rate: 4.8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Jurassic Park",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
    views: [15000, 18547, 10236, 14578, 12365, 12300],
    downloads: [6235, 3254, 2458, 1254, 6457, 1235],
    rate: 4,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Pretty woman",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
    views: [21000, 12458, 12368, 18254, 20154, 13265],
    downloads: [6235, 3254, 2458, 1254, 6457, 1235],
    rate: 2.8,
  },
  {
    _id: "5b100ca3eeb7f6fbccd471821",
    title: "Runaway Bride",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
    views: [18000, 7548, 8547, 12365, 5214, 15000],
    downloads: [3254, 2541, 1254, 6987, 3654, 3651],
    rate: 2.3,
  },
  {
    _id: "5b101ca3eeb7f6fbccd471821",
    title: "The Princess Diaries",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
    views: [14000, 6584, 9584, 18254, 13254, 6874],
    downloads: [5621, 1236, 2365, 6555, 2354, 1237],
    rate: 3.9,
  },
  {
    _id: "5b102ca3eeb7f6fbccd471821",
    title: "Frankie and Johnny",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
    views: [15000, 13255, 10356, 12365, 14875, 8956],
    downloads: [5000, 3654, 2356, 5214, 2354, 2365],
    rate: 4.5,
  },
  {
    _id: "5b103ca3eeb7f6fbccd471821",
    title: "Valentine”s Day",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
    views: [20000, 18547, 152365, 8547, 6584, 10254],
    downloads: [5000, 3654, 2356, 5214, 2354, 2365],
    rate: 4.3,
  },
  {
    _id: "5b105ca3eeb7f6fbccd471821",
    title: "Ocean”s 8",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [32000, 26541, 10235, 21036, 10254, 15263],
    downloads: [6254, 3265, 1235, 2145, 3214, 7235],
    rate: 4,
  },
  {
    _id: "5b106ca3eeb7f6fbccd471821",
    title: "PleasantVille",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [12000, 9654, 12356, 6547, 7235, 10235],
    downloads: [6000, 3254, 4521, 3214, 1235, 2315],
    rate: 2.2,
  },
  {
    _id: "5b107ca3eeb7f6fbccd471821",
    title: "SeaBiscuit",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Drama" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [9000, 6524, 1254, 15236, 18235, 3654],
    downloads: [2000, 1254, 254, 8547, 6321, 1235],
    rate: 2.8,
  },
  {
    _id: "5b108ca3eeb7f6fbccd471821",
    title: "The Hunger Games",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [30000, 25689, 18547, 14587, 25645, 30214],
    downloads: [21456, 18541, 3654, 5687, 8521, 10235],
    rate: 4.6,
  },
  {
    _id: "5b109ca3eeb7f6fbccd471821",
    title: "Free State of Jones",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [18000, 12356, 15642, 14235, 5689, 8325],
    downloads: [6214, 3541, 2154, 3564, 1000, 2356],
    rate: 3.3,
  },
  {
    _id: "5b1009ca3eeb7f6fbccd471821",
    title: "Free State of Jones",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    director: { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
    views: [18000, 12356, 15642, 14235, 5689, 8325],
    downloads: [6214, 3541, 2154, 3564, 1000, 2356],
    rate: 3.3,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function getMovieByGenre(movies, genre) {
  let filtered = movies.filter((m) => m.genre._id === genre).map((m) => m);
  return filtered;
}
export function getMovieByDierctor(movies, director) {
  let filtered = movies
    .filter((m) => m.director._id === director)
    .map((m) => m);

  return filtered;
}

export function getMoviesByRating(movies, rating) {
  let parts = rating.split(" ");
  let limitInferior = parseInt(parts[1]);
  let limitSuperior = parseInt(parts[3]);

  let filtered = movies.filter(
    (m) => m.rate > limitInferior && m.rate <= limitSuperior
  );
  return filtered;
}

export function getViews(movies) {
  let views = [];
  let output = [];

  output = movies.map((m) => m.views);

  for (let i = 0; i < 6; i++) {
    let totalViews = 0;
    for (let j = 0; j < output.length; j++) {
      totalViews += output[j][i];
    }
    views.push(totalViews);
  }
  return views;
}
export function getDonwloads(movies) {
  let downloads = [];
  let output = [];

  output = movies.map((m) => m.downloads);

  for (let i = 0; i < 6; i++) {
    let totalDownloads = 0;
    for (let j = 0; j < output.length; j++) {
      totalDownloads += output[j][i];
    }
    downloads.push(totalDownloads);
  }
  return downloads;
}
export function getLabels() {
  let label = ["January", "February", "March", "April", "May", "June"];
  return label;
}
