(function(angular) {
	'use strict';
	angular.module('cvApp', ['ngAnimate', 'ngMaterial'])
	.controller('MainController', ['$scope', function($scope) {
	$scope.sections = [
		{	
			title: 'EDUCATION',
			'conventional': {
				entries: [{w: 'Udacity',
						   x: '2016–17',
						   z: 'Full-Stack Web Developer Nanodegree'},

						  {w: 'University of Cambridge',
						   x: '2007–10',
						   z: 'Master of Arts (Cantab) in English, Upper Second Class'},

						  {w: 'Stanford University on Coursera',
						   x: '2017',
						   z: 'Machine Learning'},

						  {w: 'MITx on edX',
						   x: '2016',
						   z: 'Introduction to Computer Science'}]
			},
			'honest': {
				entries: [{w: 'Udacity',
						   x: '2016–17',
						   y: 'Full-Stack Web Developer Nanodegree',
						   z: 'This is a serious, substantive qualification. It is intended to take around a year to complete, but I finished it in about three months by working on it virtually full time. The course projects, in particular, require one to do professional-level work with little in the way of handholding.'},

					      {w: 'University of Cambridge',
					       x: '2007–10',
					       y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'Cambridge bachelor’s degrees are automatically upgraded to master’s – with the parenthetical ‘Cantab’ – a few years after graduating. This is, I fully acknowledge, rather ridiculous.'},

						  {w: 'Stanford University / Coursera',
						   x: '2017',
						   y: 'Machine Learning',
						   z: 'This is a course certificate rather than something like the fully fledged Udacity ‘Nanodegree’ qualification. The course is an 11-week Mooc, complete with MATLAB programming exercises, which outlines the algorithms and techniques used in the most widespread approaches to machine leaning. It was extremely challenging, but I passed with a total score of 99.6%.'},

						  {w: 'MITx on edX',
						   x: '2016',
						   y: 'Introduction to Computer Science',
						   z: 'Also a course certificate, in this case for a seven-week Mooc that outlines the fundamental concepts of computer science using Python. It’s challenging, but I was more advanced with Python than the level the course is pitched at. I passed with a total score of 99.2%.'}]
			},
			'verbose': {
				entries: [{w: 'Udacity',
						   x: 'Dec 2016 – Mar 2017',
						   y: 'Full-Stack Web Developer Nanodegree',
						   z: 'This mode of education is evidently still in its infancy, but I believe it’s the future. Anyone from anywhere in the world can get trained up to a professional level in a broad range of computer programming disciplines, if they can scrape together US$200 a month. Quite a bit of money, but nothing like the kind of investment required for a college/university degree, and much more comprehensive than a bootcamp.'},

						  {w: 'University of Cambridge',
						   x: '2007–10',
						   y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'Why English? I was torn between literature and physics, but the schools I attended prior to university were, it’s fair to say, not the best. Though I had a acquired a decent high-level understanding of relativity and quantum mechanics even before I was a teenager, the mathematics education I’d received was pretty cursory, so a degree in physics would have been a very steep hill to climb. Literary analysis, on the other hand, presents a much lower barrier to entry. I have no regrets, other than that I wish I’d heard of computer science so I could have considered pursuing that discipline. A note on the class of my degree: I received firsts for all my dissertations, but was dragged down to an upper second by my exam scores, because my handwriting is slow and I could never get the words on paper fast enough to write three complete essay answers in the allotted three hours.'},

						  {w: 'Stanford University / Coursera',
						   x: 'Jan – Apr 2017',
						   y: 'Machine Learning',
						   z: 'This 11-week Mooc outlines the algorithms and techniques employed in the most widely used approaches to machine learning, complete with programming exercises conducted in Octave/MATLAB. It covers linear and logistic regression, SVUs, K-means clustering, collaborative filtering and online learning, among other algorithms. It also covers topics such as bias and variance, feature and parameter regularisation normalisation. I passed with a total score of 99.6%.'},

						  {w: 'MITx on edX',
						   x: 'Jul – Sep 2016',
						   y: 'Introduction to Computer Science and Programming Using Python',
						   z: 'This seven-week Mooc outlines the fundamental concepts of computer science. It covers subjects such as data structures, recursion, search-and-sort algorithms, Big O notation and so on. I passed with a total score of 99.2%.'}]
			}
		},

		{
			title: 'EXPERIENCE',
			'conventional': {
				entries: [{w: 'Preface',
						   z: 'My quiver holds many arrows: JavaScript web design, Python software engineering, full-stack programming with either or both of those languages in combination with SQL, copyediting and copywriting. I’m available for hire in any or all of these capacities.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to present',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on a book to be published this year.'},


						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to present',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting (website content, brochures, programmes, marketing materials, etcetera).'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to present',
						   y: 'Copyeditor',
						   z: 'Rewriting and copyediting for clients of this highly selective online provider of editorial services.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving collaboration with many people in various roles companywide. Played a primary role in effecting a major transition from CMS- to software-based editorial practices.'}]
			},
			'honest': {
				entries: [{w: 'Preface',
						   z: 'The following provides details of my career as a copyeditor. I am now focusing on my new career as a developer. The detail-focused, analytical nature of editing work has significant skill crossover with software development.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to present',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on Priyamvada Gopal’s book ‘Insurgent Empire: Anticolonialism and Metropolitan Dissent’.'},

						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to present',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting (website content, brochures, programmes, marketing materials, etcetera), performed remotely. This is not my ideal kind of work – I prefer substantial, extended, unitary projects – but the subject matter is interesting and worthwhile, and the people who work for Southbank Centre are wonderful.'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to present',
						   y: 'Copyeditor',
						   z: 'Rewriting and copyediting for clients of this highly selective online provider of editorial services. Again, I prefer bigger projects, but wordy.com is a very well-designed platform and it treats its freelancers excellently.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving collaboration with many people in various roles companywide. Played a primary role in effecting a major transition from CMS- to software-based editorial practices. The best parts of this job, by far, were those that crossed over into areas that overlapped with programming, such as optimising HTML formatting and creating browser macros and custom-filtered Salesforce reports.'}]
			},
			'verbose': {
				entries: [{w: 'Preface',
						   z: 'In software development I have found a vocation that consistently gratifies, interests and excites me. Prepared by my intensive studies – and by the analytical, detail-oriented work involving many stakeholders that has defined my career as an editor, outlined below – I am eager to dedicate myself to this discipline and begin participating in disruptive engineering endeavours. I also take great joy in book editing and have found I am adept at efficiently and effectively raising long-form prose to a significantly higher standard in a way that manifests the optimal form of the author’s own intentions, rather than just translating the text into compliance with my own stylistic ideals. As such, I am open to work of that nature as well as coding.'},

						  {w: 'Wildcat Dispatches: For Dangerous Times',
						   x: 'Nov 2016 to present',
						   y: 'Associate Editor and Webmaster',
						   z: 'Co-founded this new web-based political magazine. Author pieces, act in an executive editorial capacity and manage the website. Someone else built the site originally as I don’t know Wordpress, but I’ve done a fair bit of work to improve its CSS.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to present',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on Priyamvada Gopal’s book ‘Insurgent Empire: Anticolonialism and Metropolitan Dissent’, which will be published some time this year.'},

						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to present',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting (website content, brochures, programmes, marketing materials, etcetera). Southbank Centre is a major British cultural institution encompassing a complex of artistic venues situated on the south bank of the Thames in London, England.'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to present',
						   y: 'Copyeditor',
						   z: 'Rewriting and copyediting for clients of this highly selective online provider of editorial services. Please go ahead and check it out if you are ever in need of occasional work of this nature.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London, Best-of-Division Editor, Events Editor',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving the collaboration of many people in various roles companywide. Liaised with other departments to ensure deadlines were met, errors minimised and revenue maximised. Held primary responsibility for editing Best-of-Division deals (those with the highest estimated revenue in each region nationwide) and joint responsibility for editing all Events deals such as concerts, festivals and exhibitions. Edited and/or wrote up to twenty features each day, aiming to: encourage purchases through the optimal presentation of merchants and services, while ensuring the published features were as transparent and informative as possible for customers. Oversaw and augmented the use of lucid and engaging style to foster repeat readership and maintain market-leading brand identity, while ensuring compliance with the guidelines of regulatory bodies. Collaborated in senior capacity with other editorial stages involved in the production of each feature, aiming to: help shape the evolution of the house style and departmental best practices ensure proper comprehension and execution of editorial and QA standards by each stage improve creative writers’ performance and efficiency through regular feedback. Played a primary role in effecting a major transition from CMS- to software-based editorial practices: helped establish and coordinate a site-editing team to handle the CMS side developed new procedures and tools, such as MS Word templates, Salesforce.com reports and browser macros.'}]
			}
		},

		{
			title: 'PROJECTS',
			'conventional': {
				entries: [{w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: 'A virtual board game played on a chess-like board. Built in Python, using Tkinter for the GUI.'},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'This page you’re looking at right now! Built using AngularJS, with a little help from Bootstrap.'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Interactive Google Maps-based web app, built using JavaScript, Knockout, jQuery and Wikipedia API.'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Database-backed web application with user auth, built using Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2, jQuery and Wikipedia API. I also configured an Apache server on AWS and got the site up and running there.'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'Built using Python, Jinja2, HTML/CSS, Google App Engine and Google Cloud Datastore.'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Used Python and PostgreSQL to simulate ‘Swiss-system’ tournaments and store results in a database.'}]
			},
			'honest': {
				entries: [{w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: "A virtual board game played on a 24x24 chess board. Built in Python, using Tkinter for the GUI. I'm pretty proud of it – it's legitimately fun!"},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'This page you’re looking at right now! Built using AngularJS, with a little help from Bootstrap. This is the first project I’ve completed 100% independently. The following four were all part of the Udacity Nanodegrees, but they’re not handholdy: you have to build them on your own, though – for the projects I ended up completing as the NGO Emporium and the Multi-User Blog – you’re walked through some of the initial framework construction.'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Interactive Google Maps-based web app, built using JavaScript, Knockout, jQuery and Wikipedia API.'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Database-backed web application with user auth, built using Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2, jQuery and Wikipedia API. I also configured an Apache server on AWS and got the site up and running there.'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'Built using Python, Jinja2, HTML/CSS, Google App Engine and Google Cloud Datastore.'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Used Python and PostgreSQL to simulate ‘Swiss-system’ tournaments and store results in a database.'}]
			},
			'verbose': {
				entries: [{w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: "A virtual board game played on a 24x24 chess board. Each player has three sets of air, fire, water and earth pieces. Each element has its own moveset and can attack one opposing element. Victory is achieved by getting one of each element to your opponent's side of the board, or by destroying all three of any of your opponent's element types (which would make it impossible for them to win). Built in Python, using Tkinter for the GUI."},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'This page you’re looking at right now! Built using AngularJS, with a little help from Bootstrap. If you haven’t noticed it, please try moving around the slider above. The various backgrounds are versions of a photograph of me walking down the centre of the road that leads to Monument Valley in the US, taken by Christa Lamb (thatcamelwoman on Flickr). These different versions were created using a Tensorflow application (built by Logan Engstrom (github.com/lengstrom/fast-style-transfer), not me) that transfers styles from artwork to other images. The style sources are, respectively, Pablo Picasso’s ‘La Muse’, Leonid Afremov’s ‘Rain Princess’, Edvard Munch’s ‘Scream’, Francis Picabia’s ‘Udnie’, Hokusai’s ‘The Great Wave Off Kanagawa’ and Joseph Turner’s ‘The Shipwreck of the Minotaur’, plus a black-and-white version of the original photograph.'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Interactive Google Maps-based web app, built using JavaScript, Knockout, jQuery and Wikipedia API.'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Database-backed web application with user auth, built using Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2, jQuery and Wikipedia API. I also configured an Apache server on AWS and got the site up and running there.'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'Built using Python, Jinja2, HTML/CSS, Google App Engine and Google Cloud Datastore.'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Used Python and PostgreSQL to simulate ‘Swiss-system’ tournaments and store results in a database.'}]
			}
		}
	];
	$scope.modes = ['Conventional', 'Honest', 'Verbose'];
	$scope.selection = $scope.modes[0];
	$scope.backgrounds = ['img/wave.jpg', 'img/la-muse.jpg', 'img/scream.jpg', 'img/rain-princess.jpg',
						  'img/udnie.jpg', 'img/wreck.jpg', 'img/road.jpg'];
	$scope.slider = 0;
	$scope.name = 'MAX CHARLES COMPTON TREVITT';
	$scope.github = 'github.com/maxcct';
	$scope.linkedin = 'linkedin.com/in/maxcct';
	$scope.email = 'maxtrevitt@gmail.com';
	$scope.mobile = '07498 036045';
	}]);
})(window.angular);
