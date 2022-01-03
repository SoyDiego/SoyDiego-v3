// Import references images
import photoLisenn from "../assets/img/references/lisenn.jpg";
import photoJesus from "../assets/img/references/jesus.jpg";
import photoIngrid from "../assets/img/references/ingrid.jpg";
import photoGarriz from "../assets/img/references/garriz.jpg";

// Import portfolio images
import pictureDR from "../assets/img/portfolio/dr.webp";
import pictureIndio from "../assets/img/portfolio/indio.webp";
import pictureMagazineSB from "../assets/img/portfolio/revistaSB.webp";
import pictureTSE from "../assets/img/portfolio/tse.webp";
import picturePrevenir from "../assets/img/portfolio/logo-prevenir.webp";
import pictureFlyerSAD from "../assets/img/portfolio/flyerSAD.webp";

const allContent = {
	name: "Diego J.",
	surname: "Franchina",
	profession: "Web Developer",
	location: "Barcelona, España",
	mobile: "(+34) 644 464 398",
	urlCV: "https://soydiego.com.ar/CV%20-%20Diego%20Franchina%20[ES].pdf",
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
	experience: [
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
			picture: pictureDR,
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
};

export default allContent;
