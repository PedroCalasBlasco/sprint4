
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result =  array.filter(movie => movie.director === director);
  
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
 
 let movies = getMoviesFromDirector(array, director);

 console.log(movies);
 
 let total = 0;

 movies.map(({score}) => total+=score)
 
 const resultado = total / movies.length;

 return resultado;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let arrayTitle =  array.map(movie => movie.title);

  return arrayTitle.sort();
}
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayTitle =  array.map(movie => {
    
    let container = {};

    container.title = movie.title;
    container.year = movie.year;

    return container
  });

  console.log(arrayTitle);

  let ordenPorTitulo = arrayTitle.sort(function(a,b){
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }// a must be equal to b
    return 0;
  });

  console.log(ordenPorTitulo);

  let ordenPorYear = ordenPorTitulo.sort(function(a,b){
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }// a must be equal to b
    return 0;
  });

  return ordenPorYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {

  let generoScoreArray = array.map( movie => {

    let container = {};
    
    let genero = movie.genre;
    
    let miGenero = genero.filter( general => general === categoria);
    
    if (miGenero.length > 0){
      container.genre = miGenero
      container.score = movie.score;
    }
  
    return container;
  });

  console.log(generoScoreArray);

  let arrayFiltrado = generoScoreArray.filter( peli => peli.score);

  let total = 0;

  arrayFiltrado.map(({score}) => total+=score)

  const resultado = parseFloat((total / arrayFiltrado.length).toFixed(2));

  console.log(typeof(resultado));

  return resultado;

  

 

  //let sum = categories.reduce((acumulador,score) => acumulador + score, 0); 

  //let media = sum / categories.length;

  //return media;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {


  let result = array.map(movie => {

    let container = {};

    container.title = movie.title;
    container.year = movie.year;
    container.director = movie.director;

    let duracion = movie.duration;
    let duracionArray = duracion.split("h");
    let horas = parseInt(duracionArray[0]);

    let minutosArray = duracionArray[1].split("min");
    let minutos = parseInt(minutosArray[0]);

    if (isNaN(minutos)) {
      minutos = 0;
    } 

    let duracionMinutos = (horas * 60) + minutos;
    console.log(duracionMinutos);
    
    container.duration = duracionMinutos;
    container.genre = movie.genre;
    container.score = movie.score;

    return container;
  });

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  let moviesYear = array.filter(movie => movie.year === year);

  console.log(moviesYear);
  
  const max = moviesYear.reduce((prev, current) => {
    return (prev.score > current.score) ? prev : current
  });

  let arrayMax = []

  arrayMax.push(max);

  return arrayMax;
  
  //returns object


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
