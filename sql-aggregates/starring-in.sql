select "genres"."name" as "genre name",
        count("filmGenre"."genreId") as "number of movies"
from "actors"
join "castMembers" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "firstName" = 'Lisa'
and "lastName" = 'Monroe'
group by "genres"."genreId";
