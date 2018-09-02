// https://s15.postimg.cc/kl6gahhnf/24th.jpg
// https://s15.postimg.cc/gc1q8fgzv/Chinatown_Oakland.jpg
// https://s15.postimg.cc/mczf5jtcb/City_Hall.jpg
// https://s15.postimg.cc/jvnnybz63/Coliseum.jpg
// https://s15.postimg.cc/sqoi8vitn/dolores.jpg
// https://s15.postimg.cc/6eqpfi6uz/embarcadero.jpg
// https://s15.postimg.cc/6ss1engjf/lake_marritt.jpg
// https://s15.postimg.cc/g0k9vf86z/paramount.jpg
// https://s15.postimg.cc/5qhuw7d6j/UCB.jpg
// https://s15.postimg.cc/mr0r4xnnv/union_square.jpg

const attractions = [
  {
    name: "Oakland Chinatown",
    Bartobj: {name: "12th St. Oakland City Center", abbr: "12TH", lat: "37.803768", lng: "-122.271450"},
    lat: "37.7986",
    lng: "-122.2668",
    description: "The Chinatown neighborhood in Oakland is a pan-Asian neighborhood which reflects Oakland's diverse Asian American community. Chinese were the first Asians to arrive in Oakland in the 1850s, followed by Japanese in the 1890s, Koreans in the 1900s, and Filipinos in the 1930s and 1940s. Southeast Asians began arriving in the 1970s during the Vietnam War. Many Asian languages and dialects can be heard in Chinatown due to its diverse population.",
    image: 'https://s15.postimg.cc/gc1q8fgzv/Chinatown_Oakland.jpg'
  },
  {
    name: "Dolores Park",
    Bartobj: {name: "16th St. Mission", abbr: "16TH", lat: "37.765062", lng: "-122.419694"},
    lat: "37.7596",
    lng: "-122.4269",
    description: "Mission Dolores Park, often abbreviated to Dolores Park, is a Leave No Trace city park in San Francisco, California. Dolores Park offers several features including many tennis courts, a basketball court, a multi-purpose court, a soccer field, a pissoir, a children's playground, and a dog play area. The southern half of the park is also notable for its views of the Mission district, downtown, the San Francisco Bay and the East Bay.",
    image: require('../images/dolores.jpg')
  },
  {
    name: "UCB Campus",
    Bartobj: {name: "Downtown Berkeley", abbr: "DBRK", lat: "37.870104", lng: "-122.268133"},
    lat: "37.8719",
    lng: "-122.2585",
    description: "The University of California, Berkeley (UC Berkeley) is a public research university in Berkeley, California. Founded in 1868, Berkeley is the flagship institution of the ten research universities affiliated with the University of California system.",
    image: require('../images/UCB.jpg')
  },
  {
    name: "Embarcadero",
    Bartobj: {name: "Embarcadero", abbr: "EMBR", lat: "37.792874", lng: "-122.397020"},
    lat: "37.7993",
    lng: "-122.3977",
    description: "Major street in the port area of San Francisco that has become a bustling area of shops, businesses and sightseeing attractions.",
    image: require('../images/embarcadero.jpg')
  },
  {
    name: "Lake Merritt",
    Bartobj: {name: "Lake Merritt", abbr: "LAKE", lat: "37.797027", lng: "-122.265180"},
    lat: "37.8012",
    lng: "-122.2583",
    description: "Lake Merritt is a large tidal lagoon in the center of Oakland, California, just east of Downtown. It is surrounded by parkland and city neighborhoods. It is historically significant as the United States' first official wildlife refuge, designated in 1870, and has been listed as a National Historic Landmark since 1963, and on the National Register of Historic Places since 1966. The lake features grassy shores; several artificial islands intended as bird refuges; an interpretive center called the Rotary Nature Center; a boating center where sailboats, canoes and rowboats can be rented and classes are held; and a fairy tale themed amusement park called Children's Fairyland. A popular walking and jogging path runs along its perimeter. The circumference of the lake is 3.4 miles (5.5 km) and its area is 155 acres (63 ha).",
    image: require('../images/lake_marritt.jpg')
  },
  {
    name: "Union Square",
    Bartobj: {name: "Powell St.", abbr: "POWL", lat: "37.784471", lng: "-122.407974"},
    lat: "37.7880",
    lng: "-122.4075",
    description: "A shopper's paradise, this bustling square near the theater district has everything from upscale department stores and boutiques to discount houses. After a $25-million facelift in 2002, the cosmopolitan hub boasts a huge amphitheater, granite pedestals on which street entertainers perform and a tree and flower-lined environment in which to enjoy an espresso or an elegant meal.",
    image: require('../images/union_square.jpg')
  }

]
export default attractions;
