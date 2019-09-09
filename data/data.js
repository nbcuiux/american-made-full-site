var data = {
	info:{
		name: 'American Made',
		release_date: 'September 29',
		default_date: 'In Select Cities Setember 29',
		friday_date: 'In Select Cities Friday',
		eve_date: 'In Select Cities Tonight',
		live_date: 'September 29',
	},
	// Main Navigation
	navigation: {
		mainRight:  [
			{
				text: 'Find Tickets',
				link: true,
				show: true,
				url: ''
			},
			{
				text: 'Trailer',
				link: false,
				show: true
			}
		],
		social: [
			{
				label: 'Facebook',
				show: true,
				url: 'https://www.facebook.com/hellorhighwater'
			},
			{
				label: 'Twitter',
				show: true,
				url: 'https://twitter.com/HoHWmovie'
			},
			{
				label: 'Instagram',
				show: true,
				url: 'https://www.instagram.com/hellorhighwatermovie'
			},
			{
				label: 'YouTube',
				show: true,
				url: 'https://www.youtube.com/watch?v=JQoqsKoJVDw&list=PLG3zLMu1dR_vbhcFn2E-5HbwtQKc9znbx'
			}
		]
	},
	// Home Section
	home : {
		titleblock: {
			titletreatment: 'img/tt.png',
			release_date: 'In Theatres August 12'
		},
		cast: [
			{
				firstName: 'Jeff',
				lastName: 'Bridges',
				award: 'Academy Award Winner'
			},
			{
				firstName: 'Chris',
				lastName: 'Pine',
			},
			{
				firstName: 'Ben',
				lastName: 'Foster'
			}
		],
		quote: [
			{
				content: 'Full-blown Americana spirit.',
				source: 'Jasmin Valjas, The Upcoming'
			},
			{
				content: 'Chris Pine, Ben Foster, and Jeff Bridges are all brilliant… a thrillingly good movie….',
				source: 'Owen Gleiberman, Variety'
			},
			{
				content: 'An action-thriller with punch.',
				source: 'Peter Bradshaw, The Guardian'
			},
			{
				content: 'A solid American film… that ignites the screen.',
				source: 'Pete Hammond, Deadline'
			},
			{
				content: 'It’s so damn fun.',
				source: 'Craig Skinner, Flickreel'
			},
			{
				content: 'This is an amazing movie…',
				source: 'David Edelstein, New York Magazine'
			},
			{
				content: 'A movie of uniformly brilliant performances.',
				source: 'Joe Morgenstern, The Wall Street Journal'
			},
			{
				content: 'Jeff Bridges shows how it\'s done in an exceptional performance.',
				source: 'Rolling Stone'
			},
			{
				content: 'A new classic and a great humanist western. It\'s the best movie I\'ve seen all year – all last year, too.',
				source: 'David Edelstein, CBS Sunday Morning'
			}
		],
		tout: [
			{
				label: 'Awards',
				img: 'img/_touts/tout-2.gif',
				link:'https://www.rottentomatoes.com/m/hell_or_high_water/'
			},
			{
				label: 'Rotten Tomatoes',
				img: 'img/_touts/tout-1.jpg',
				link:'https://www.rottentomatoes.com/m/hell_or_high_water/'
			}
		]
	},
	// Reviews Section
	reviews: {
		header: 'Reviews',
		desktopBackground: 'img/reviews_bg.jpg',
		mobileBackground: 'img/reviews_mobile_bg.jpg',
		list_left: [
			{
				quoteDesktop: 'img/_reviews/quote8.png',
				source: 'Joe Morgenstern',
				org: 'The Wall Street Journal'
			},
			{
				quoteDesktop: 'img/_reviews/quote9.png',
				org: 'Rolling Stone'
			},
			{
				quoteDesktop: 'img/_reviews/quote1.png',
				source: 'Dustin Heller',
				org: 'Fox TV'
			},
			{
				quoteDesktop: 'img/_reviews/quote3.png',
				source: 'David Booney',
				org: 'The Hollywood Reporter'
			},
			{
				quoteDesktop: 'img/_reviews/quote5.png',
				source: 'Owen Gleiberman',
				org: 'Variety'
			}
		],
		list_right: [
			{
				quoteDesktop: 'img/_reviews/quote7.png',
				source: 'David Edelstein',
				org: 'New York Magazine'
			},

			{
				quoteDesktop: 'img/_reviews/quote10.png',
				source: 'David Edelstein',
				org: 'CBS Sunday Morning'
			},
			{
				quoteDesktop: 'img/_reviews/quote2.png',
				source: 'Pete Hammond',
				org: 'Deadline'
			},
			{
				quoteDesktop: 'img/_reviews/quote4.png',
				source: 'Peter Bradshaw',
				org: 'The Guardian'
			},
			{
				quoteDesktop: 'img/_reviews/quote6.png',
				source: 'Anne Hornaday',
				org: 'The Washington Post'
			}
		]
	},
	//Story Section
	story: {
		section1: {
			type: 'parallax',
			background : 'story1background',
			cloud1: 'img/_story/s06-cloud5.png',
			cloud2: 'img/_story/s06-cloud6.png',
			cloud3: 'img/_story/s06-cloud7.png',
			foregroundImage: 'img/_story/s06-fg-plane.png',
			backgroundImage: 'img/_story/s06-bg-plane-long.jpg'
		},
		section2: {
			type: 'parallax',
			desktopVideo: 'img/_story/columbia3.mp4',
			desktopImage: 'img/_story/columbia.jpg',
			mobileImage: 'img/_story/s02-bg_mobile.jpg'
		},
		section3: {
			type: 'video',
			desktopVideo: 'img/_story/half-still5.mp4',
			desktopImage: 'img/_story/s03-bg.jpg',
			mobileImage: 'img/_story/s03-bg_mobile.jpg'
		},
		section4: {
			type: 'parallax',
			desktopVideo: 'img/_story/panama-city-4.mp4',
			desktopImage: 'img/_story/panama-city.png',
			mobileImage: 'img/_story/s04-bg_mobile.jpg'
		},
		section5: {
			type: 'parallax',
			foregroundImage: 'img/_story/s01-fg-crash.png',
			backgroundImage: 'img/_story/s01-bg-crash.jpg'
		},
		section6: {
			type: 'parallax',
			foregroundImage: 'img/_story/hangar.jpg',	
			backgroundImage: 'img/_story/hangar.jpg'
		},
		section7: {
			type: 'image',
			backgroundImage: 'img/_story/s07-synopsis.jpg'
		},
	},
	// Cast & Crew Section
	castncrew : {
		header: {
				text: 'Cast & Crew',
				desktopForegroundImage: 'img/cnc_fg.png',
				mobileForegroundImage: 'img/cnc_mobile_fg.png',
				desktopBackgroundImage: 'img/cnc_bg.jpg',
				mobileBackgroundImage: 'img/cnc_mobile_bg.jpg' 
			},
		list: [
			{
				label: 'chrispine',
				type: 'full',
				name: 'Tom Cruise',
				role: 'Barry Seal',
				text: "<p> In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen history. </p><p> Tom is the only son (among four children) of nomadic parents, Mary Lee (Pfeiffer), a special education teacher, and Thomas Cruise Mapother III, an electrical engineer. His parents were both from Louisville, Kentucky, and he has German, Irish, and English ancestry. Young Tom spent his boyhood always on the move, and by the time he was 14 he had attended 15 different schools in the U.S. and Canada. He finally settled in Glen Ridge, New Jersey, with his mother and her new husband. While in high school, he developed an interest in acting and abandoned his plans of becoming a priest, dropped out of school, and at age 18 headed for New York and a possible acting career. The next 15 years of his life are the stuff of legends. He made his film debut with a small part in Endless Love (1981) and from the outset exhibited an undeniable box office appeal to both male and female audiences. </p><p>Though below average height and not particularly handsome in the traditional sense, within 5 years Tom Cruise was starring in some of the top grossing films of the 1980s including Top Gun (1986); The Color of Money (1986), Rain Man (1988) and Born on the Fourth of July (1989). By the 1990s he was one of the highest paid actors in the world earning an average 15 million dollars a picture in such blockbuster hits as Interview with the Vampire: The Vampire Chronicles (1994), Mission: Impossible (1996) and Jerry Maguire (1996) for which he received an Academy Award Nomination for best actor. In 1990 he renounced his devout Catholic beliefs and embraced The Church Of Scientology claiming that Scientology teachings had cured him of the dyslexia that had plagued him all of his life. A kind and thoughtful man well known for his compassion and generosity, Tom Cruise is one of the best liked members of the movie community. He was married to actress Nicole Kidman until 2001. Thomas Cruise Mapother IV has indeed come a long way from the lonely wanderings of his youth.<p>",
				desktopImage: 'chrispine',
				mobileImage: 'chrispine_mob',
				overlayImage: 'chrispine_overlay'
			},
			{
				label: 'benfoster',
				type: 'full',
				name: 'Domhall Gleeson',
				role: 'Monty Schafer',
				text: "<p>Domhall (pronounced \"doh-nall\" with the \"m\" being silent) appeared in four films in 2015 and all four titles received nominations at the 88th Academy Awards. The films were: The Revenant (2015), Ex Machina (2014), Star Wars: The Force Awakens (2015) and Brooklyn (2015). The only other actor to achieve a similar record was Benedict Cumberbatch, who also appeared in four films that were Oscar nominated in 2013 - though he made a fifth movie that wasn't nominated.</p> <p>As of 2016, has appeared in three films that were nominated for the Best Picture Oscar: True Grit (2010), The Revenant (2015) and Brooklyn (2015).</p>",
				desktopImage: 'benfoster',
				mobileImage: 'benfoster_mob',
				overlayImage: 'benfoster_overlay'
			},
			{
				label: 'jeffbridges',
				type: 'full',
				name: 'Sarah Wright',
				role: 'Lucy Seal',
				text: "<p>This Kentucky native began her career, in her home state and abroad in Europe, singing with The Kentucky Ambassadors of Music. Sarah attended Seneca High School in Kentucky. Discovered by a modeling agent, Sarah moved to Chicago where her career took off.</p> <p> Currently, Sarah is currently starring in the TV comedy, Marry Me as \"Dennah\".</p>",
				desktopImage: 'jeffbridges',
				mobileImage: 'jeffbridges_mob',
				overlayImage: 'jeffbridges_overlay'
			},
			{
				label: 'davidmackenzie',
				type: 'half',
				name: 'Doug Liman',
				role: 'Director',
				text: "<p>DAVID MACKENZIE (Director) most recently directed the acclaimed prison drama 'Starred Up' starring Jack O’Connell, Ben Mendolsohn and Rupert Friend.  He started making features, after several serial award-winning shorts, with his oddball-revenge movie 'The Last Great Wilderness,' which had its North American premiere at the Toronto International Film Festival (TIFF) in 2002. He followed this with his acclaimed adaptation of Alexander Trocchi's existentialist classic 'Young Adam,' starring Ewan McGregor and Tilda Swinton which premiered in Cannes 2003, played TIFF and Telluride that year and went on to win 4 Scottish BAFTAS, a European Film Academy and several BIFA nominations and a London Critics Circle award for Best Newcomer.</p><p>Mackenzie’s subsequent films include 'Asylum' starring Natasha Richardson and Ian McKellen; the highly regarded 'Hallam Foe' with Jamie Bell, which won a Silver Bear in Berlin 2007, the Gold Hugo in Chicago, the Golden Swan in Copenhagen, the Golden Hitchcock in Dinard, a Scottish BAFTA and 4 nominations, 8 BIFA nominations; and 'Spread' with Ashton Kutcher and Anne Heche which premiered in Sundance 2009 (and was released internationally as 'Toy Boy,' 'L.A. Gigolo,' 'S-Lover,' 'Love, Sex & Celebrity,' 'Oh Yeah,' 'American Celebrity' and 'Jogando com Prazer,' depending on territory!).</p><p>His work continued with the futuristic fable 'Perfect Sense' starring Eva Green and Ewan McGregor, which premiered in Sundance in 2011 and won several awards including Best Feature in Edinburgh and several Scottish BAFTA nominations, and the gonzo comedy romance 'You Instead' (aka 'Tonight You’re Mine') in which two rival pop stars, male and female, find themselves involuntarily ‘united’ at a massive music festival.</p><p>With 'Starred Up,' Mackenzie stepped into new territory, making a film within the confines of a genre for the first time, and for which he continues to receive universal praise. He has been named as one of the top five most prolific directors in the UK. His work continues to challenge, inspire and provoke.</p>",
				desktopImage: 'davidmackenzie',
				mobileImage: 'davidmackenzie_mob',
				overlayImage: 'davidmackenzie_overlay'
			},
			{
				label: 'taylorsheridan',
				type: 'half',
				name: 'Gary Spinelli',
				role: 'Writer',
				text: "<p>TAYLOR SHERIDAN (Screenwriter) sold his original screenplay for 'Hell or High Water' in 2012 to Sidney Kimmel Entertainment.  His subsequent screenplay for 'Sicario' -- directed by Denis Villenueve and starring Benicio Del Toro, Emily Blunt and Josh Brolin -- was released in September 2015 to critical and box office acclaim. The film was produced by Basil Iwanyk, Molly Smith, Trent Luckinbill, Thad Luckinbill and Ed McDonnell and released by Lionsgate. The film was nominated for a number of awards including Best Film by the PGA, Best Screenplay by the WGA and was awarded the Spotlight Award for Outstanding Collaborative Vision by the National Board of Review. A sequel to 'Sicario' is currently in development.</p><p>Sheridan adapted 'Dark Invasion,' Howard Blum’s non-fiction novel, for Warner Bros. Bradley Cooper, John Lesher and Adam Kassan are producers on the project. Sheridan has also worked on two projects for Andrew Lauren.  In television, Sheridan is currently developing 'Yellowstone' for HBO alongside producers Art and Jon Linson. Currently, Sheridan is in production on his directorial debut, 'Wind River,' which he also wrote. The film stars Jeremy Renner and Elizabeth Olsen and is being produced by Thunder Road, Acacia Entertainment and Film 44.</p>",
				desktopImage: 'taylorsheridan',
				mobileImage: 'taylorsheridan_mob',
				overlayImage: 'taylorsheridan_overlay'
			}
		]
	},
	// Gallery Section
	gallery: {
		list: [
			{
				desktop: 'img/_gallery/gallery_1.jpg',
				orientation: 'portrait',
				mobOrientation: 'landscape'
			},
			{
				desktop: 'img/_gallery/gallery_2.jpg',
				orientation: 'portrait',
				mobOrientation: 'portrait'				
			},
			{
				desktop: 'img/_gallery/gallery_3.jpg',
				orientation: 'portrait',
				mobOrientation: 'portrait'
			},
			{
				desktop: 'img/_gallery/gallery_4.jpg',
				orientation: 'portrait',
				mobOrientation: 'landscape'
			},
			{
				desktop: 'img/_gallery/gallery_5.jpg',
				orientation: 'portrait',
				mobOrientation: 'portrait'
			},
			{
				desktop: 'img/_gallery/gallery_6.jpg',
				orientation: 'portrait',
				mobOrientation: 'portrait'
			},
			{
				desktop: 'img/_gallery/gallery_7.jpg',
				orientation: 'landscape',
				mobOrientation: 'portrait'
			}
		]
	},
	// Videos Section
	videos: {
		header: 'Videos',
		desktopBackground: 'img/partners_bg.jpg',
		mobileBackground: 'img/partners_mobile_bg.jpg',
		foreground: 'img/partners_fg.png',
		list:[
			{
				name: 'Video 1',
				video: 'img/_videos/videos_bg1.mp4',
				poster: 'img/_videos/videos_bg1.jpg',
				show: true
			},
			{
				name: 'Video 2',
				video: 'img/_videos/videos_bg2.mp4',
				poster: 'img/_videos/videos_bg2.jpg',
				show: true
			},
			{
				name: 'Video 3',
				video: 'img/_videos/videos_bg3.mp4',
				poster: 'img/_videos/videos_bg3.jpg',
				show: true
			},
			{
				name: 'Video 4',
				video: 'img/_videos/videos_bg4.mp4',
				poster: 'img/_videos/videos_bg4.jpg',
				show: true
			},
			{
				name: 'Video 5',
				video: 'img/_videos/videos_bg5.mp4',
				poster: 'img/_videos/videos_bg5.jpg',
				show: true
			},
			{
				name: 'Video 6',
				video: 'img/_videos/videos_bg6.mp4',
				poster: 'img/_videos/videos_bg6.jpg',
				show: true
			},
		]
	},
	// Main Footer
	footer: {
		billingBlock: [
			'img/footer_billing_left.png',
			'img/footer_billing_right.png'
		],
		footerLogos: 'img/footer_logos.png',
		footerLinks: [
			{
				label: 'Terms of Use',
				link: 'http://www.cbsfilms.com/terms/'
			},
			{
				label: 'Privacy Policy',
				link: 'http://www.cbsfilms.com/privacy/'
			},
			{
				label: '©2016 CBS Films Inc. All Rights Reserved.'
			},
			{
				label: 'FilmRatings.com',
				link: 'http://filmratings.com/'
			},
			{
				label: 'MPAA.org',
				link: 'http://www.mpaa.org/'
			},
			{
				label: 'Parentalguide.org',
				link: 'http://www.parentalguide.org/'
			}
		]
	}
};