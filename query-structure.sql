SELECT monkey.name, count(banana.id) as "Bananas consumed" -- the list of columns or fields to select
FROM monkey -- the table to select from
JOIN banana ON monkey.monkey_id=banana.monkey_id
WHERE monkey.birthdate < "2014-01-01"
GROUP BY monkey.id
HAVING count(banana.id) > 1
ORDER BY count(banana.id) desc
LIMIT 10;
