const key = `4VSqCRhY2zT7NGaadvPpfeseSsgNKbzDh9mZD2iQ`;
const url = `https://images-assets.nasa.gov/image/PIA11351/collection.json`;
const title = document.getElementById("title");
const image = document.getElementById("mainImage");
const text = document.getElementById("textArea");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth  = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const currentPlanet = document.getElementById("currentPlanet");


// Image of the day
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		image.src = json.url;
		title.innerHTML = `IOTD:${json.title}`;
		text.innerHTML = json.explanation;
		currentPlanet.innerHTML = `<a href = "https://www.nasa.gov/multimedia/imagegallery/iotd.html"><b>${json.title}<b></a>`;
	})

	.catch(err => console.log(err.message));

//MERCURY
mercury.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA11245/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Mercury_(planet)"><b>Mercury</b></a>`;
		image.src = json[1];
		title.innerHTML = `Mercury as Never Seen Before`;
		text.innerHTML = `"Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.

Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28° away from the Sun. When viewed from Earth, this proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.

"`;

		
	})

	.catch(err => console.log(err.message));
});
//VENUS
venus.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA00160/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Venus"><b>Venus</b></a>`;
		image.src = json[3];
		title.innerHTML = `Hemispheric View of Venus Centered 
		at 270°`;
		text.innerHTML = `Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun would rise in the west and set in the east).[13] It does not have any natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[14][15] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.`;
		
	})

	.catch(err => console.log(err.message));
})
//EARTH
earth.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA00122/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href ="https://en.wikipedia.org/wiki/Earth"><b>Earth</b></a>`;
		image.src = json[1];
		title.innerHTML = `Earth - India and Australia`;
		text.innerHTML = `"Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]

Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[27] The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation.[28] Earth is the densest planet in the Solar System and the largest of the four terrestrial planets."`;
		
	})

	.catch(err => console.log(err.message));
})
//MARS
mars.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA02697/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Mars"><b>Mars</b></a>`;
		image.src = json[1];
		title.innerHTML = `Mars at Ls 25°: Tharsis`;
		text.innerHTML = `"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet"[14][15] because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.[16] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.

The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature.[17][18] Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids,[19][20] similar to 5261 Eureka, a Mars trojan."`;
		
	})

	.catch(err => console.log(err.message));
})
//Jupiter
jupiter.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA00343/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Saturn"><b>Jupiter</b></a>`;
		image.src = json[1];
		title.innerHTML = `Jupiter`;
		text.innerHTML = `"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune, are ice giants. Jupiter has been known to astronomers since antiquity.[17] It is named after the Roman god Jupiter.[18] When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,[19] and making it on average the third-brightest natural object in the night sky after the Moon and Venus."`;
		
	})

	.catch(err => console.log(err.message));
})
//Saturn
saturn.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA11141/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Saturn"><b>Saturn</b></a>`;
		image.src = json[3];
		title.innerHTML = `Saturn … Four Years On`;
		text.innerHTML = `"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.[12][13] It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive.[14][15][16] Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.

Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's.[17] The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter, but not as high as those on Neptune.[18]"`;
		
	})

	.catch(err => console.log(err.message));
})
//URANUS
uranus.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA02963/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Uranus"><b>Uranus</b></a>`;
		image.src = json[3];
		title.innerHTML =
		 `Hubble Finds Many Bright Clouds on Uranus`;
		text.innerHTML = `"Uranus (pronounce ɯranɯs, latin name after a greek god Οὐρανός - owranos) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons.[14] It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.[14] The interior of Uranus is mainly composed of ices and rock.[13]"`;
		
	})
	.catch(err => console.log(err.message));
})
//NEPTUNE
neptune.addEventListener("click", function() {

	fetch(`https://images-assets.nasa.gov/image/PIA00046/collection.json`)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw Error(response.statusText);
	})
	.then(json => {
		//console.log(json);
		currentPlanet.innerHTML = `<a href = "https://en.wikipedia.org/wiki/Neptune"><b>Neptune</b></a>`;
		image.src = json[1];
		title.innerHTML = `Neptune Full Disk`;
		text.innerHTML = `Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[d] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.`;
		
	})
	.catch(err => console.log(err.message));
})

