
fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmNiYTAyNTdiMzk4Njg3ZGI0NmM5MGJhMDY3ZmE5MyIsIm5iZiI6MTc0NTAxNzA0NC42NzcsInN1YiI6IjY4MDJkOGQ0NjVjMDBhMjVhNWQ5NjEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsM3qqwGfnU4I-FnwYUTmAB6gXb0qYQ-jC9ciPpmWXs'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


