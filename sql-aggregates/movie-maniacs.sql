select "customers"."firstName",
"customers"."lastName",
sum("amount") as "total payment"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "total payment" desc;
