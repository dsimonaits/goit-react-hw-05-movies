<h2>Movie Search</h2>

Create a basic routing for a movie search and storage application.

themoviedb.org API For the backend, use themoviedb.org API. You need to register
(you can enter any data) and get API key. The following endpoints will be used
in this work.

<ul>
<li>/trending/get-trending a list of the most popular movies for today to create a
collection on the home page page.<li>
<li> /search/search-movies keyword search for a
movie on the movies page. <li>
<li>/movies/get-movie-details Request full movie info for
the movie page. <li>
<li>/movies/get-movie-credits Request cast info for the movie page.<li>
<li>/movies/get-movie-reviews requesting reviews for the movie page. <li>
</ul>

<h3>Routes</h3> 
The app should have the following routes. If a user has accessed a
non-existent route, it must be redirected to the home page.

<ul>
<li>The ``Home'' component, the home page with a list of popular movies. </li>
<li>The
/'/movies' - component Movies, a page of movie search by keyword.</li>
<li>/movies/:movieId' - component MovieDetails, a page with detailed information
about the movie.</li>
<li>/movies/:movieId/cast - component Cast, information about the
cast. Rendered on the page MovieDetails.</li>
<li> /movies/:movieId/reviews - component
Reviews, information about reviews. Rendered on the page MovieDetails. </li>
</ul>

<h3>Code Splitting </h3> 
 Add asynchronous JS code loading for the application routes using
React.lazy() and <Suspense>.
