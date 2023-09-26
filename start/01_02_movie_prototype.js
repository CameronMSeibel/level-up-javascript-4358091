// Write your code here

/**
 * Movie should contain a movie's title, director, genre
 * release year, and rating. The method `overview` should
 * return a human-readable overview of the movie.
 */
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was realeased in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

let jurassicPark = new Movie("Jurassic Park", "Steven Spielberg", "Sci-Fi", 1993, 91);

console.log(jurassicPark.overview());