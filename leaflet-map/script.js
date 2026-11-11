// 1. რუკის ინიციალიზაცია (თბილისის კოორდინატები)
const map = L.map('map').setView([41.7151, 44.7870], 13);

// OpenStreetMap-ის ფენის დამატება
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 2. სამი განსხვავებული აიქონის განსაზღვრა Leaflet Icon Class-ის გამოყენებით
const createCustomIcon = (colorUrl) => {
  return L.icon({
    iconUrl: colorUrl,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// 3 განსხვავებული აიქონი (ლურჯი, მწვანე, წითელი)
const icons = {
  culture: createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'),
  park: createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'),
  historic: createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png')
};

// 3. 10 ინტერაქტიული ლოკაციის მონაცემები
const locations = [
  {
    title: "ნარიყალა",
    description: "ძველი თბილისის უძველესი ციხესიმაგრე, საიდანაც მთელ ქალაქზე იშლება ხედი.",
    category: "historic",
    coords: [41.6879, 44.8083]
  },
  {
    title: "ქართლის დედა",
    description: "მონუმენტური ქანდაკება სოლოლაკის ქედზე, თბილისის ერთ-ერთი მთავარი სიმბოლო.",
    category: "historic",
    coords: [41.6882, 44.8046]
  },
  {
    title: "რიყის პარკი",
    description: "თანამედროვე დასვენებისა და სეირნობის სივრცე მტკვრის მარცხენა სანაპიროზე.",
    category: "park",
    coords: [41.6931, 44.8105]
  },
  {
    title: "მშვიდობის ხიდი",
    description: "შუშისა და ფოლადის საფეხმავლო ხიდი, რომელიც აკავშირებს ძველ თბილისს რიყის პარკთან.",
    category: "historic",
    coords: [41.6930, 44.8083]
  },
  {
    title: "ბოტანიკური ბაღი",
    description: "ისტორიული ბაღი სოლოლაკის ქედის სამხრეთით, მდიდარი ფლორითა და ჩანჩქერით.",
    category: "park",
    coords: [41.6865, 44.8015]
  },
  {
    title: "ოპერისა და ბალეტის თეატრი",
    description: "ნეო-მავრიტანული სტილის ისტორიული თეატრალური შენობა რუსთაველის გამზირზე.",
    category: "culture",
    coords: [41.6997, 44.7968]
  },
  {
    title: "შოთა რუსთაველის ეროვნული თეატრი",
    description: "საქართველოს ერთ-ერთი წამყვანი დრამატული თეატრი ისტორიულ შენობაში.",
    category: "culture",
    coords: [41.6978, 44.7989]
  },
  {
    title: "საქართველოს ეროვნული მუზეუმი",
    description: "მუზეუმი, სადაც დაცულია უმდიდრესი არქეოლოგიური და ეთნოგრაფიული კოლექციები.",
    category: "culture",
    coords: [41.6961, 44.8005]
  },
  {
    title: "მთაწმინდის პარკი",
    description: "გასართობი და დასასვენებელი პარკი მთაწმინდის პლატოზე, ზღვის დონიდან 770 მეტრზე.",
    category: "park",
    coords: [41.6946, 44.7865]
  },
  {
    title: "სამების საკათედრო ტაძარი",
    description: "საქართველოს მართლმადიდებელი ეკლესიის მთავარი საკათედრო ტაძარი ელიას გორაზე.",
    category: "historic",
    coords: [41.6975, 44.8166]
  }
];

// DOM ელემენტები მარჯვენა სვეტისთვის
const infoTitle = document.getElementById('info-title');
const infoDescription = document.getElementById('info-description');

// 4. მარკერების ციკლით დამატება რუკაზე და Click მოვლენის მიბმა
locations.forEach(loc => {
  const marker = L.marker(loc.coords, { icon: icons[loc.category] }).addTo(map);

  // დაკლიკებისას მარჯვენა სვეტის განახლება
  marker.on('click', () => {
    infoTitle.textContent = loc.title;
    infoDescription.textContent = loc.description;
    infoDescription.classList.remove('placeholder-text');
  });
});