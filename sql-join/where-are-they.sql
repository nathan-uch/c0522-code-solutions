select "addresses"."line1",
"cities"."name" as "city name",
"addresses"."district",
"countries"."name" as "country name"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId");
