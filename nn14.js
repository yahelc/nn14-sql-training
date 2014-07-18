window.queries = {};
$.getJSON("queries.json", function(data){
	$(function(){
		window.queries = data;
		var html = "";
		for(var key in data){
			html += "<li><a href=''>" + key + "</a></li>"
		}	
		$("#sample-queries").html(html);
		$("#sample-queries li").click(function(e){
			e.preventDefault();
			
			myCodeMirror.getDoc().setValue(queries[$(this).text()]);
			$("#sqlform").submit();
			
		});
		
	});
});
$(function(){
	
	$(document).on( "click", function(e){
		ga('send', 'event', 'click', $(e.target).text() );
	});
	
	
	function showRecentQueries(){
		var cache = JSON.parse(sessionStorage.getItem("cache")) || [];
		cache.reverse();
		var cache_html ="";
		for(var i=0; i<cache.length;i++){
			cache_html += "<li><a>" + cache[i] + "</li>";

			if(i===3){break;}
		}
		$("#recent-list").html(cache_html);
		$("#recent-list a").click(function(){
			
			myCodeMirror.getDoc().setValue($(this).text());
			$("#sqlform").submit();
			return false;
		});
	}
	showRecentQueries();
	function cacheQuery(sql){
		if(window.sessionStorage){
			var cache = JSON.parse(sessionStorage.getItem("cache"));
			if(!cache){
				cache = [sql];
			}
			else{
				cache.push(sql);
				
			}
			sessionStorage.setItem("cache", JSON.stringify(_.unique(cache).reverse().slice(0,5).reverse()));
		}
	}
	
	$("#table-list li").click(function(e){
		e.preventDefault();
		myCodeMirror.getDoc().setValue("SELECT * FROM " + $(this).text().trim() + " LIMIT 10;");
		$("#sqlform").submit();
	});
	window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("sql"), {
		
		mode:"text/x-mysql",
		indentWithTabs: true,
	    smartIndent: true,
	    lineNumbers: true,
	    matchBrackets : true,
	    viewportMargin: Infinity,
		lineWrapping: true
    
	    
	});
	myCodeMirror.setOption("theme","eclipse");
	
	
	if(window.sessionStorage){
		myCodeMirror.getDoc().setValue(	sessionStorage.getItem("sql") || "");
	}
	$(document).bind("keyup click", function(){ 
	 		window.myCodeMirror && window.myCodeMirror.save();
			window.sessionStorage && sessionStorage.setItem("sql", $("textarea").val() ) ;
	});
	$("#clear").click(function(e){
		e.preventDefault();
		myCodeMirror.getDoc().setValue(	"");
		myCodeMirror.save();
 		
		return false;
	});
	
	$("#sqlform").submit(function(e){
		e.preventDefault();
		window.myCodeMirror && window.myCodeMirror.save();
		$(".table,#warningarea").html("");
		$("#submit-btn").val("Running...").prop("disabled",true);
		cacheQuery($("#sql").val());
		showRecentQueries();
		
        $.post("db.php", $("#sqlform").serialize(), function(data){
			$("#submit-btn").val("Run SQL").prop("disabled", false);
	
			if(data.error){
			
				$("#warningarea").html("<div class='alert alert-danger'><p>MySQL Error: " + data.error + "</div>");
			}
			else {
				if(data.data.length > 0 ){
					$("#warningarea").html("<div class='alert alert-success'><p> Success: " + (data.data.length-1) +" rows returned in " + data.time + " seconds.</div>");
					
					
					var html = "<thead><th>" + data.data[0].join("</th><th>") + "</th></thead>";
					html+= "<tbody>";
					for(var i=1; i<data.data.length; i++){
						var row = data.data[i];
						html+= "<tr><td>" +  row.join("</td><td>")+ "</td></tr>";
					}
					$(".table").html(html);
					
				}
				else{
					$("#warningarea").html("<div class='alert alert-success'><p>No rows returned.</div> ");
					
				}
			}
	
		});
	});
	
});

$(window).load(function(){
	var event_names = { 
		"click" :   "" ,
		"tweet" :  "",
		"retweet" : "source_tweet_id",
		"follow" : "screen_name",
		"favorite" : "tweet_id"
		};

	for(var event_name in event_names)
	{
		if(event_names.hasOwnProperty(event_name)){
			twttr.events.bind(event_name, function(intent_event){
				if(intent_event)
				{
					var label = intent_event.type==="click" ? intent_event.region : (intent_event.data) ? intent_event.data[event_names[intent_event.type]] : "" ;
					ga("send", "event", "Twitter", intent_event.type, label );
				}
			});
		}
	}
	
});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-23657505-2', 'auto');
ga('send', 'pageview');
