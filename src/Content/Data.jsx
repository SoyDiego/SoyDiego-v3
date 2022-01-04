//Import CV File
import cvES from "../assets/files/CV - Diego Franchina [ES].pdf";
import cvEN from "../assets/files/CV - Diego Franchina [EN].pdf";

// Import references images
import photoLisenn from "../assets/img/references/lisenn.jpg";
import photoJesus from "../assets/img/references/jesus.jpg";
import photoIngrid from "../assets/img/references/ingrid.jpg";
import photoGarriz from "../assets/img/references/garriz.jpg";

// Import portfolio images
import pictureDR from "../assets/img/portfolio/dr.png";
import pictureIndio from "../assets/img/portfolio/indio.png";
import pictureMagazineSB from "../assets/img/portfolio/revistaSB.webp";
import pictureTSE from "../assets/img/portfolio/tse.png";
import picturePrevenir from "../assets/img/portfolio/logo-prevenir.webp";
import pictureFlyerSAD from "../assets/img/portfolio/flyerSAD.webp";
import pictureEstadistics from "../assets/img/portfolio/estadisticas.png";

// SPANISH Website
const allContentES = {
	header: {
		name: "Diego J.",
		surname: "Franchina",
		profession: "Web Developer",
		location: "Barcelona, España",
		mobile: "(+34) 644 464 398",
		urlCV: cvES,
		social: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/SoyDieg0",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/SoyDiegoF",
			},
			{
				name: "GitHub",
				url: "https://www.github.com/SoyDiego",
			},
		],
		textDownloadCV: "Descargar CV",
		titleTimeline: "El camino realizado...",
		language: "Change to English",
	},
	experience: {
		titleTechnologies: "Tecnologías:",
		exp: [
			{
				date: "Abril '20 - Noviembre '21",
				country: "España",
				company: "Turijobs",
				position: "Front-end Developer",
				tasks: {
					one: "Desarrollo Web, actualización de contenidos.",
					two: "Optimización, SEO.",
				},
				technologies:
					"HTML5, CSS3, Sass, Javascript, JQuery, Bootstrap, SQL.",
			},
			{
				date: "Septiembre '20 - Abril '21",
				country: "España",
				company: "Labelgroup Networks",
				position: "Front-end Developer",
				tasks: {
					one: "Desarrollo de ERP para el sector farmaceutico.",
					two: "Desarrollo Web.",
				},
				technologies:
					"HTML5, CSS3, Sass, React JS, Redux, GraphQL, Style Components, Storybook, TailwindCSS, Bootstrap.",
			},
			{
				date: "Julio '19 - Diciembre '19",
				country: "España",
				company: "CDM Barcelona",
				position: "Front-end Developer",
				tasks: {
					one: "Maquetación de newsletters responsive.",
					two: "Maquetación de material comercial para el sector salud y principales proveedores CLM (Closed Loop Marketing).",
					three: "Desarrollo Web, actualización de contenidos.",
				},
				technologies:
					"HTML5, CSS3, Javascript, MJML Framework, Wordpress, Bootstrap.",
			},
			{
				date: "Mayo '19 - Julio '19",
				country: "España",
				company: "USACD",
				position: "Front-end Developer",
				tasks: {
					one: "Maquetación de newsletters responsive.",
					two: "Desarrollo Web, actualización de contenidos.",
				},
				technologies: "HTML5, CSS3, Javascript, MJML Framework.",
			},
			{
				date: "Marzo '16 - Diciembre '16",
				country: "España",
				company: "Everis",
				position: "Front-end Developer",
				tasks: {
					one: "Se implementaban servicios y se creaba la interfaz gráfica para el sector bancario.",
					two: "Desarrollo Web, actualización de contenidos.",
				},
				technologies: "HTML5, CSS3, Javascript.",
			},
		],
	},
	education: [
		{
			date: "2009-2012",
			country: "Argentina",
			institute: "Instituto Superior Argentino de Computación",
			title: "Analista de Sistemas",
			description: {
				one: "Legalizado y Certificado en el Ministerio de Relaciones Exteriores para poder trabajar en el Exterior.",
			},
		},
		{
			date: "2002-2006",
			country: "Argentina",
			institute: "Nuestra Sra. del Buen y Perpetuo Socorro",
			title: "Bachillerato",
			description: {
				one: "Perito Mercantil",
			},
		},
	],
	languages: [
		{
			language: "Español",
			percentage: 100,
		},
		{
			language: "Inglés",
			percentage: 70,
		},
	],
	skills: [
		{
			name: "HTML5",
			icon: "devicon-html5-plain-wordmark colored",
		},
		{
			name: "CSS3",
			icon: "devicon-css3-plain-wordmark colored",
		},
		{
			name: "SASS",
			icon: "devicon-sass-original colored",
		},
		{
			name: "Javascript",
			icon: "devicon-javascript-plain colored",
		},
		{
			name: "ReactJS",
			icon: "devicon-react-original-wordmark colored",
		},
		{
			name: "Redux",
			icon: "devicon-redux-original colored",
		},
		{
			name: "Bootstrap",
			icon: "devicon-bootstrap-plain-wordmark colored",
		},
		{
			name: "TailwindCSS",
			icon: "devicon-tailwindcss-plain colored",
		},

		{
			name: "PHP",
			icon: "devicon-php-plain colored",
		},
		{
			name: "MySQL",
			icon: "devicon-mysql-plain-wordmark colored",
		},
		{
			name: "Git",
			icon: "devicon-git-plain-wordmark colored",
		},
		{
			name: "Wordpress",
			icon: "devicon-wordpress-plain-wordmark colored",
		},
		{
			name: "Photoshop",
			icon: "devicon-photoshop-plain colored",
		},
		{
			name: "Illustrator",
			icon: "devicon-illustrator-plain colored",
		},
	],
	references: [
		{
			name: "Lisenn Lerouge",
			position: "Digital Project Manager",
			reference:
				"Diego es un developer con talento. Cuida los detalles, su trabajo es preciso y no duda en ir más allá cuando el proyecto lo requiera. Busca siempre la manera más eficiente de realizar el proyecto. Aprendí mucho trabajando con Diego.",
			avatar: photoLisenn,
		},
		{
			name: "Jesús Catalayud Moreno",
			position: "Web Developer",
			reference:
				"He tenido la suerte de trabajar con Diego desarrollando y maquetando componentes en React JS para un importante ERP que utilizarán empresas del sector farmacéutico. Es meticuloso, resolutivo, es un gran jugador de equipo, se adapta y aprende muy rápido. Siempre dispuesto a ayudar, he aprendido mucho trabajando con Diego, tanto a nivel profesional como personal. ¡Gran developer y gran persona!",
			avatar: photoJesus,
		},
		{
			name: "Ingrid Caro",
			position: "Digital Project Manager",
			reference:
				"Tuve el placer de trabajar con Diego durante varios meses en CDM Barcelona. Siendo su Digital Project Manager, puedo destacar que Diego es un programador comprometido y resolutivo a la hora de resolver cualquier imprevisto. No dudaría en volver a trabajar con él por su dedicación y compromiso.",
			avatar: photoIngrid,
		},
		{
			name: "Diego Garriz",
			position: "Analista de Sistemas",
			reference:
				"Diego ha demostrado su idoneidad, proactividad y compromiso en la resolución de las tareas técnicas que hemos compartido e interactuado. Siempre intentando progresar y si de algo desconoce, lo aprenderá.",
			avatar: photoGarriz,
		},
	],
	portfolio: [
		{
			title: "Sistema de Estadísticas Socorristas",
			technologies: ["HTML5", "CSS3", "BOOTSTRAP", "REACTJS", "FIREBASE"],
			description:
				"Generación de gráficos e información estadística en tiempo real. ",
			picture: pictureEstadistics,
		},
		{
			title: "IndioQuimica S.A",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Diseño web, administración de contenido, mantenimiento y Seguridad. Edición de imagenes de la empresa. Google Analytics. Corrección de fallas de seguridad.",
			picture: pictureIndio,
		},
		{
			title: "Trabajo Socorrista España",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Diseño Web, administración de contenido, actualizaciones y mantenimiento. Redacción de artículos para personas que viajan por primera vez a España como socorristas.",
			picture: pictureTSE,
		},
		{
			title: "DR. Representaciones",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Diseño Web, administración de contenido, actualizaciones y mantenimiento. Corrección de fallas de seguridad en el sitio.",
			picture: pictureDR,
		},
		{
			title: "Magazine SB 2019",
			technologies: ["QUARKXPRESS", "ILLUSTRATOR", "JAVASCRIPT"],
			description:
				"Diseño de Revista Impresa y Digital con el software QuarkXpress. Creación de contenido, edición de fotografías.",
			picture: pictureMagazineSB,
		},
		{
			title: "Flyer SAD 2020",
			technologies: ["PHOTOSHOP", "ILLUSTRATOR"],
			description:
				"Creación de flyer para el Evento de Salvamento Acuático Deportivo.",
			picture: pictureFlyerSAD,
		},
		{
			title: "Prevenir",
			technologies: ["PHOTOSHOP", "ILLUSTRATOR"],
			description:
				"Diseño y creación de logotipo para el Programa Formativo.",
			picture: picturePrevenir,
		},
	],
	contactMe: {
		titleOne: "¿Trabajamos juntos?",
		titleTwo: "Quiero conocerte... :)",
		textButton: "¡Ponte en contacto!",
	},
};

// ENGLISH Website
const allContentEN = {
	header: {
		name: "Diego J.",
		surname: "Franchina",
		profession: "Web Developer",
		location: "Barcelona, Spain",
		mobile: "(+34) 644 464 398",
		urlCV: cvEN,
		social: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/SoyDieg0",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/SoyDiegoF",
			},
			{
				name: "GitHub",
				url: "https://www.github.com/SoyDiego",
			},
		],
		textDownloadCV: "Download CV",
		titleTimeline: "My way...",
		language: "Cambiar a Español",
	},
	experience: {
		titleTechnologies: "Technologies:",
		exp: [
			{
				date: "April '20 - November '21",
				country: "Spain",
				company: "Turijobs",
				position: "Front-end Developer",
				tasks: {
					one: "Web development and content updates.",
					two: "Optimization, SEO.",
				},
				technologies:
					"HTML5, CSS3, Sass, Javascript, JQuery, Bootstrap, SQL.",
			},
			{
				date: "September '20 - April '21",
				country: "Spain",
				company: "Labelgroup Networks",
				position: "Front-end Developer",
				tasks: {
					one: "ERP Development for the pharmaceutical sector.",
					two: "Web Development.",
				},
				technologies:
					"HTML5, CSS3, Sass, React JS, Redux, GraphQL, Style Components, Storybook, TailwindCSS, Bootstrap.",
			},
			{
				date: "July '19 - Dicember '19",
				country: "Spain",
				company: "CDM Barcelona",
				position: "Front-end Developer",
				tasks: {
					one: "Design and layout responsive newsletters.",
					two: "Layout of commercial material for the health sector for the main CLM (Closed Loop Marketing) providers.",
					three: "Web development and content updates.",
				},
				technologies:
					"HTML5, CSS3, Javascript, MJML Framework, Wordpress, Bootstrap.",
			},
			{
				date: "May '19 - July '19",
				country: "Spain",
				company: "USACD",
				position: "Front-end Developer",
				tasks: {
					one: "Design and layout responsive newsletters.",
					two: "Web development and content updates.",
				},
				technologies: "HTML5, CSS3, Javascript, MJML Framework.",
			},
			{
				date: "March '16 - Dicember '16",
				country: "Spain",
				company: "Everis",
				position: "Front-end Developer",
				tasks: {
					one: "Services were implemented and the graphical interface for the banking sector was created.",
					two: "Web development and content updates.",
				},
				technologies: "HTML5, CSS3, Javascript.",
			},
		],
	},
	education: [
		{
			date: "2009-2012",
			country: "Argentina",
			institute: "Instituto Superior Argentino de Computación",
			title: "System Analyst",
			description: {
				one: "Legalized and Certified in the Ministry of Foreign Affairs to be able to work abroad.",
			},
		},
		{
			date: "2002-2006",
			country: "Argentina",
			institute: "Nuestra Sra. del Buen y Perpetuo Socorro",
			title: "High School",
			description: {
				one: "Chartered accountant",
			},
		},
	],
	languages: [
		{
			language: "Spanish",
			percentage: 100,
		},
		{
			language: "English",
			percentage: 70,
		},
	],
	skills: [
		{
			name: "HTML5",
			icon: "devicon-html5-plain-wordmark colored",
		},
		{
			name: "CSS3",
			icon: "devicon-css3-plain-wordmark colored",
		},
		{
			name: "SASS",
			icon: "devicon-sass-original colored",
		},
		{
			name: "Javascript",
			icon: "devicon-javascript-plain colored",
		},
		{
			name: "ReactJS",
			icon: "devicon-react-original-wordmark colored",
		},
		{
			name: "Redux",
			icon: "devicon-redux-original colored",
		},
		{
			name: "Bootstrap",
			icon: "devicon-bootstrap-plain-wordmark colored",
		},
		{
			name: "TailwindCSS",
			icon: "devicon-tailwindcss-plain colored",
		},

		{
			name: "PHP",
			icon: "devicon-php-plain colored",
		},
		{
			name: "MySQL",
			icon: "devicon-mysql-plain-wordmark colored",
		},
		{
			name: "Git",
			icon: "devicon-git-plain-wordmark colored",
		},
		{
			name: "Wordpress",
			icon: "devicon-wordpress-plain-wordmark colored",
		},
		{
			name: "Photoshop",
			icon: "devicon-photoshop-plain colored",
		},
		{
			name: "Illustrator",
			icon: "devicon-illustrator-plain colored",
		},
	],
	references: [
		{
			name: "Lisenn Lerouge",
			position: "Digital Project Manager",
			reference:
				"Diego es un developer con talento. Cuida los detalles, su trabajo es preciso y no duda en ir más allá cuando el proyecto lo requiera. Busca siempre la manera más eficiente de realizar el proyecto. Aprendí mucho trabajando con Diego.",
			avatar: photoLisenn,
		},
		{
			name: "Jesús Catalayud Moreno",
			position: "Web Developer",
			reference:
				"He tenido la suerte de trabajar con Diego desarrollando y maquetando componentes en React JS para un importante ERP que utilizarán empresas del sector farmacéutico. Es meticuloso, resolutivo, es un gran jugador de equipo, se adapta y aprende muy rápido. Siempre dispuesto a ayudar, he aprendido mucho trabajando con Diego, tanto a nivel profesional como personal. ¡Gran developer y gran persona!",
			avatar: photoJesus,
		},
		{
			name: "Ingrid Caro",
			position: "Digital Project Manager",
			reference:
				"Tuve el placer de trabajar con Diego durante varios meses en CDM Barcelona. Siendo su Digital Project Manager, puedo destacar que Diego es un programador comprometido y resolutivo a la hora de resolver cualquier imprevisto. No dudaría en volver a trabajar con él por su dedicación y compromiso.",
			avatar: photoIngrid,
		},
		{
			name: "Diego Garriz",
			position: "Analista de Sistemas",
			reference:
				"Diego ha demostrado su idoneidad, proactividad y compromiso en la resolución de las tareas técnicas que hemos compartido e interactuado. Siempre intentando progresar y si de algo desconoce, lo aprenderá.",
			avatar: photoGarriz,
		},
	],
	portfolio: [
		{
			title: "Lifeguard Statistics System",
			technologies: ["HTML5", "CSS3", "BOOTSTRAP", "REACTJS", "FIREBASE"],
			description:
				"Graphs generator and statistical information in real time.",
			picture: pictureEstadistics,
		},
		{
			title: "IndioQuimica S.A",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Web development, content management, maintenance and security. Editing of company images. Google Analytics. Security bugs fixed.",
			picture: pictureIndio,
		},
		{
			title: "Trabajo Socorrista España",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Web development, content management, updates and maintenance. Writing articles for people traveling to Spain for the first time as lifeguards.",
			picture: pictureTSE,
		},
		{
			title: "DR. Representaciones",
			technologies: ["WORDPRESS", "HTML5", "CSS3", "JAVASCRIPT"],
			description:
				"Web development, content management, updates and maintenance. Security bugs fixed.",
			picture: pictureDR,
		},
		{
			title: "Magazine SB 2019",
			technologies: ["QUARKXPRESS", "ILLUSTRATOR", "JAVASCRIPT"],
			description:
				"Design of Printed and Digital Magazine. Content creation, photo editing.",
			picture: pictureMagazineSB,
		},
		{
			title: "Flyer SAD 2020",
			technologies: ["PHOTOSHOP", "ILLUSTRATOR"],
			description:
				"Flyer designed for the Sport Aquatic Rescue Event.",
			picture: pictureFlyerSAD,
		},
		{
			title: "Prevenir",
			technologies: ["PHOTOSHOP", "ILLUSTRATOR"],
			description:
				"Logo design.",
			picture: picturePrevenir,
		},
	],
	contactMe: {
		titleOne: "We work together?",
		titleTwo: "I want to meet you... :)",
		textButton: "¡Get in touch!",
	},
};

export { allContentES, allContentEN };
