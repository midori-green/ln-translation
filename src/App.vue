<template>
	<div id="app">
		<header>
			<div>
				<router-link id="logo" class="btn" to="/">Lightning Green</router-link>
				<router-link id="logo" class="btn" to="/how-it-works">How it Works</router-link>
				<router-link id="logo" class="btn" to="/docs">Docs</router-link>
			</div>
		</header>
		<router-view id="main" class="text-left" />

		<footer id="footer">
			<b-col>
				<div class="contact">
					<a href="mailto:m@jiyu.green" target="_blank">contact</a>
				</div>

				<div class="license">
					<a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">
						<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
					</a>
				</div>
			</b-col>
		</footer>
	</div>
</template>

<script>
export default {
}
</script>

<style>
/* Common */
html, #app, img, header {
	background-color: #e1fae1 !important;
	font-size: 18px;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

body {
	font-size: 3rem;
	background-color: #e6ffe6;
}

#locale {
	font-size: 14px;
}

.container {
	max-width: 800px !important;
}

section {
	margin-bottom: 30px;
}

/* Heading */

h1 {
  font-size: 2rem !important;
}
h2 {
  font-size: 1.75rem !important;
}
h3 {
  font-size: 1rem !important;
}
h4 {
  font-size: 0.75rem;
}
h5 {
  font-size: 0.5rem;
}
h6 {
  font-size: 0.25rem;
}

/* Button */

.btn-success {
	background-image: -webkit-linear-gradient(top,#5cb85c 0,#419641 100%);
	background-image: -o-linear-gradient(top,#5cb85c 0,#419641 100%);
	background-image: -webkit-gradient(linear,left top,left bottom,from(#5cb85c),to(#419641));
	background-image: linear-gradient(to bottom,#5cb85c 0,#419641 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
	filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
	background-repeat: repeat-x;
	border-color: #3e8f3e;
}

.btn-default {
	text-shadow: 0 1px 0 #fff;
	background-image: -webkit-linear-gradient(top,#fff 0,#e0e0e0 100%);
	background-image: -o-linear-gradient(top,#fff 0,#e0e0e0 100%);
	background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#e0e0e0));
	background-image: linear-gradient(to bottom,#fff 0,#e0e0e0 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);
	filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
	background-repeat: repeat-x;
	border-color: #000;
}

/* Anker */

a:link {
	color: green;
	font-weight: bold;
}
a:visited {
	color: darkgreen;
}
a:hover {
	color: green !important;
}
a:active {
	color: green;
}

/* Header */

header {
	width: 100%;
	position: fixed;
	top: 0;
	border-bottom: 1px solid darkgreen;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	height: 45px;
}

header > div {
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

header a {
	color:green;
	font-weight: normal !important;
}

header a:hover {
	color: green;
}

header a:active {
	color: green;
}

header a:visited {
	color: darkgreen;
}

header .btn {
	margin-left: 2%;
}

/* Footer */

footer {
	border-top: 1px solid darkgreen;
	margin-top: 50px;
}

footer + #btn-notify {
	display: none !important;
}

footer .contact {
	margin-top: 20px;
}

.license {
	margin-top: 10px;
	margin-bottom: 20px;
}

/* Ads */

#gc_ad_main {
	display: none;
}
</style>
