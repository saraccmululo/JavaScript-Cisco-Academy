let moviesArray=[];
while (true){
    let title=prompt('Name of the movie:');
        if (title==null){
            break;
    }
    let imdb=prompt('Movie rating:');
        if (Number.isNaN(imdb)||imdb==null){
            break;
    }else{
        imbd=Number(imdb)};
console.log (title, imdb);
moviesArray.push({
        title:title,
        imdb:imdb});
}
console.log ('Movies with ratings below 7  are');
for(eachMovie of moviesArray){
    if (eachMovie.imdb<7){
        console.log (`${eachMovie.title} (${eachMovie.imdb})`);
    }
}
console.log (`Movies with rating greater or equal 7 are:`);
for(eachMovie of moviesArray){
    if (eachMovie.imdb>=7){
        console.log (` ${eachMovie.title} (${eachMovie.imdb})`);
    }
}