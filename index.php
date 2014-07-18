<!DOCTYPE HTML>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Beyond Excel: How to analyze your data in SQL</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="codemirror.css">
	<link rel="stylesheet" href="eclipse.css">

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>

	<style>
	textarea { width: 100%; height: 200px;}
	
	body { background-opacity: 70%;}
	ul{padding-left:10px;}
	ul{font-size: 12px;}
	</style>
	
	<script src="codemirror.js"></script>
	<script src="sql.js"></script>
	
</head>
<body>
	
	<div class="container">

		<div class="row">
		  <div class="col-md-8 col-md-offset-2">
			
		&nbsp;
			
			
		</div>
		</div>
		<div class="row">
		  <div class="col-md-2">
				<h3>Beyond Excel: How to analyze your data in SQL</h3>
				<h3>#nn14sql</h3>
				<strong>Trainer: Yahel Carmon</strong><p>
			<p class="twitter-button"><a href="http://twitter.com/yahel" class="twitter-follow-button" data-width="130px" data-show-count="false" data-align="bottom">Follow @yahel</a></p>
			<a href="https://twitter.com/intent/tweet?button_hashtag=nn14sql&text=" class="twitter-hashtag-button" data-lang="en" data-related="yahel">Tweet #nn14sql</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
			
		  </div>
		  <div class="col-md-4">
		  	<h3>SQL</h3>
	<form id="sqlform">	<textarea id="sql" name="query">
</textarea>
<input type="submit" class="btn btn-success" value="Run SQL" id="submit-btn"  />
<input type="submit" class="btn btn-default" value="Clear"  id="clear"/>
		 </form>
		  </div>
		
		  <div class="col-md-2">
		  	<h3>Sample Queries</h3>
			<ul id="sample-queries"></a>
			</ul>
		
		  </div>
		
		  <div class="col-md-2">
		  	<h3>Database Tables</h3>
			<ul id="table-list"></a>
				<li><a>district</a>
				<li><a>fips</a>
				<li><a>legislator</a>
				<li><a>persons</a>
				<li><a>wtp_data_issues</a>
				<li><a>wtp_data_petition_issues</a>
				<li><a>wtp_data_petition_responses</a>
				<li><a>wtp_data_petitions</a>
				<li><a>wtp_data_responses</a>
				<li><a>wtp_data_signatures</a>
				<li><a>zip_to_fip</a>
				<li><a>zipcodes</a>
			</ul>
			
		  </div>
		
		  <div class="col-md-2">
		  	<h3>Recent Queries</h3>
			<ul id="recent-list"></a>
			</ul>
			
		  </div>
		
		</div>
		<div class="row">
		  <div class="col-md-6 col-md-offset-2" id="warningarea" style="padding-top: 5px;">
		  	
		
		  </div>

		</div>
		
		<div class="row">
		  <div class="col-md-12">
		  	
			<table class="table"></table>
		
		  </div>

		</div>

	</div>
<script src="nn14.js"></script>
</body>
</html>