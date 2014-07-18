--- top issues
SELECT pi.name, count(*) FROM wtp_data_signatures ps JOIN  wtp_data_petition_issues dpi ON ps.petition_id=dpi.petition_id JOIN wtp_data_issues pi ON pi.id=dpi.issue_id   GROUP BY pi.id ORDER BY count(*) DESC ;


--top issues in michigan

SELECT pi.name, count(*) FROM wtp_data_signatures ps JOIN  wtp_data_petition_issues dpi ON ps.petition_id=dpi.petition_id JOIN wtp_data_issues pi ON pi.id=dpi.issue_id JOIN zipcodes ON ps.zip=zipcodes.zipcode WHERE state="MI"  GROUP BY pi.id ORDER BY count(*) DESC ;


--top petitions without a response

SELECT title, count(*) FROM wtp_data_signatures ds JOIN wtp_data_petitions dp ON ds.petition_id=dp.id LEFT JOIN wtp_data_petition_responses pr USING(petition_id) WHERE pr.response_id IS NULL GROUP BY title ORDER BY count(*) desc limit 10;

