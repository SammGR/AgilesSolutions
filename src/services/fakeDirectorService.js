export const directors = [
  { _id: "7c32ca3eeb7f6fbccd471818", name: "Steven Spielberg" },
  { _id: "7c32ca3eeb7f6fbccd471814", name: "Garry Marshal" },
  { _id: "7c32ca3eeb7f6fbccd471820", name: "Gary Ross" },
];

export function getDirectors() {
  return directors.filter((d) => d);
}
