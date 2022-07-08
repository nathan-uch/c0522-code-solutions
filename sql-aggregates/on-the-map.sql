select count(*) as "number of cities",
"countries"."name" as "name of country"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
