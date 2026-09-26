const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas–SP, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/640%2C/0/default"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15–17",
    area: 20831,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/640%2C/0/default"
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/640%2C/0/default"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife–PE, Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/640%2C/0/default"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo–SP, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/640%2C/0/default"
  },
];

createTempleCard(temples);

const homelink = document.querySelector("#home")

homelink.addEventListener("click", () => {
	createTempleCard(temples);
});

const oldlink = document.querySelector("#old")

oldlink.addEventListener("click", () => {
	createTempleCard(
    temples.filter(temples => Number(temples.dedicated.split(",")[0]) < 1900));
});

const newlink = document.querySelector("#new")

newlink.addEventListener("click", () => {
	createTempleCard(
    temples.filter(temples => Number(temples.dedicated.split(",")[0]) > 2000));
});

const largelink = document.querySelector("#large")

largelink.addEventListener("click", () => {
	createTempleCard(temples.filter(temples => temples.area > 90000));
});

const smalllink = document.querySelector("#small")

smalllink.addEventListener("click", () => {
	createTempleCard(temples.filter(temples => temples.area < 10000));
});

function createTempleCard(filteredTemples) {
	document.querySelector(".res-grid").innerHTML = "";

	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h2");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", 500);
		img.setAttribute("height", 300);

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".res-grid").appendChild(card);
	})
}