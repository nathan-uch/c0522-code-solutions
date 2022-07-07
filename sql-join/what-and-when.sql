select "films"."title" as "film title",
"films"."releaseYear",
"genres"."name" as "genre name"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "title" = 'Boogie Amelie';
