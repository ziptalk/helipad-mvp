import NeighborhoodItem from "../model/NeighborhoodItem";
// import beverlyHills from "../images/Neighborhood/List/beverly_hills_thumbnail.jpg";
import beverlyHills from "../images/Neighborhood/List/beverlyHills.jpg";
import malibu from "../images/Neighborhood/List/malibu.jpg";
import santaMonica from "../images/Neighborhood/List/santa_monica_thumbnail.jpg";
import westHollywood from "../images/Neighborhood/List/west_hollywood_thumbnail.jpg";
import studioCity from "../images/Neighborhood/List/studioCity_thumbnail.jpg";
export default class GetNeighborhoodList {
  static get() {
    return item;
  }

  static getById(regionName: string) {
    return item.filter((data) => data.regionName === regionName);
  }
}

let item = [
  new NeighborhoodItem(
    "neighborhood_item_1",
    "Los Angeles",
    "Beverly Hills",
    beverlyHills,
    // "https://images.ctfassets.net/ypfe9l9zihcg/Gv2oTtkIMwIOWQGEqqosC/f430248ba7ca893da5403e873ebbfb8b/beverly-hills-unexpected-appeal-1.jpg",
    "Welcome to Beverly Hills\n" +
      "After a failed attempt to find oil on the land in the early 1900’s, present day Beverly Hills was subdivided into lots. It wasn’t long before the city would contain one of the most famous zip codes in the world, attracting the town’s most elite actors, actresses and businessmen. Despite its name, Beverly Hills is most built on flat land and unofficially divided into North and South by Santa Monica Boulevard.",
    null,
    "Pricey, Celebrity Residents, Mansions, Upscale Shopping, World Class Food, Great Weather",
    "Home to movie star residents and their expansive homes, Beverly Hills is one of the most famous cities in the world.",
    "The epicenter of its renowned retail, Rodeo Drive, is one of Los Angeles’ main attractions, and the neighborhood also boasts some of the best restaurants in the country, making it an idyllic place to work and play.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/3QUZmDNiUoQIiSgy8a8QMi/3015fe534d2979284f1ce7296b0c58f7/beverly-hills-around-the-block-1.jpg",
    ],
    "Beautiful cars, luxurious homes, and world-renowned services",
    "Anchored by Rodeo Drive, Beverly Hills is home to some of the world’s finest haute couture, so be prepared for impeccably dressed men and women walking down the streets. The area is also a mecca for classic automobile enthusiasts and their perfectly-\n" +
      "kept vintage cars. It’s a spectacle to watch the world go by here and everyone is part of the experience.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/7qn2vxhdbGqasmeQyUssW8/72cee5413bcfbc70bffd43baf9c1dbcf/beverly-hills-what-to-expect-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/3yv4JEwSJGkQcsWi0I6u8g/e4e810f253101b5216fc34a576802f15/beverly-hills-what-to-expect-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/3TyZKIbJocSgoYoeyYoyoe/8febaf0683eb7e8812796ac9472929f9/beverly-hills-what-to-expect-2b.jpg",
    ],
    "Overt luxury and uncompromising glamour in all things.",
    "Channeling Hollywood’s characteristic grandeur, Beverly Hills is endlessly and unapologetically polished. From fine dining to designer retail, residents are afforded unparalleled access to the very best",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/1FsHjVVrpy4aOU6OwwsigU/f7a09bf96db0a4b119459ba33e483618/beverly-hills-the-lifestyle-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/6fw2yb9IrKwcgIIscsAOaW/104494130c2e4f00acf26248f9cd672a/beverly-hills-the-lifestyle-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4SGEXnJPgc64SUOAO2UCG6/02650ade033507e874378d90227e5525/beverly-hills-the-lifestyle-2b.jpg",
    ],
    "Hidden pockets of verdant, SoCal nature.",
    "Complementing its boulevards of retail and residences, the neighborhood boasts beautiful foliage and public green spaces including Beverly Gardens Park.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/Gv2oTtkIMwIOWQGEqqosC/f430248ba7ca893da5403e873ebbfb8b/beverly-hills-unexpected-appeal-1.jpg",
    ],
    "Expansive homes within exclusive enclaves.",
    "Grand estates on manicured lots abound in Beverly Hills. Many homes feature gating and protected grounds for greater privacy, shielding high-profile owners from prying eyes.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/4yquIZ5fAIcAiiisoWq40m/20ebd27c6e98f3b9f3725cba2af72a0c/beverly-hills-the-market-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/1fytbsvkleUecqy6kwEA6w/371c76c0e2b0b4b3bb526f14dbb06fc1/beverly-hills-the-market-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/5pS76fnoZOEgge62gOK8wu/4aa01f79eb77bd2006f4068fc55faffb/beverly-hills-the-market-2b.jpg",
    ],
    "Beauty and grandiosity around every corner.",
    "Undeniably gorgeous and filled with Hollywood history, Beverly Hills abounds with storied landmarks. From the iconic Beverly Hills Hotel to Greystone Mansion, the neighborhood is visually stunning.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/7FLGOPKH8Qke8aS2sOg4cG/2b61d5ade96009462ead07836f29f59b/beverly-hills-youll-fall-in-love-with.jpg",
    ]
  ),
  new NeighborhoodItem(
    "neighborhood_item_2",
    "Los Angeles",
    "Malibu",
    // "https://images.ctfassets.net/ypfe9l9zihcg/6aT8UVURsAwKCuooiEUAS4/32c648723fe56a46610d0a1d2bcd5e01/malibu-around-the-block-1.jpg",
    malibu,
    "Welcome to Malibu\n" +
      'Malibu owes its name to the Chumash, Native Americans who originally settled there and named it Humaliwo, which means "the surf sounds loudly.” The area was highly secluded until 1929 when the Pacific Coast Highway was built. Now Malibu is a thoroughfare for many vacationers driving up and down the California coast, and a highly revered destination for Los Angeles locals.',
    null,
    "Beaches, Beautiful People, Healthy, Pricey, Seafood, Great Weather",
    "Cliffside homes, pristine beaches, and breathtaking views are hallmarks of this area.",
    "Malibu is home to many celebrities and entertainment industry tycoons. Serene and sun-soaked, the area represents the ultimate retreat.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/6aT8UVURsAwKCuooiEUAS4/32c648723fe56a46610d0a1d2bcd5e01/malibu-around-the-block-1.jpg",
    ],
    "Secluded beaches, charming restaurants, and plenty of convertibles on the road.",
    "In addition to its residents, Malibu—aka the ’Bu—attracts surfers, swimmers, and sun-seeking daytrippers. It’s a neighborhood of active individuals who balance jogging along the beach and hiking the nearby canyons while enjoying oysters and fresh seafood at the many bustling restaurants along the coastline. Jagged cliffs, secluded coves, and miles of sparkling ocean draw people from all over the city to Malibu’s stunning shores.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/4yqg415TX2o2gMgiG00G60/12dba880e8adba4004a9313ab19be558/malibu-what-to-expect-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4hLaEXDs2QEKmYgWceOa8K/99b753f978f50dadac978d640d8c9649/malibu-what-to-expect-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/7fAAyDo1e8YWCqwq86kuSy/b21e02a52095d96a6f32301477bd721e/malibu-what-to-expect-2b.jpg",
    ],
    "Serene, healthful, and beach-centric.",
    "Health and fitness reign among Malibu denizens, with beach-lovers breaking from athletic pursuits to bask in the area’s clear blue skies and less-populated beaches.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/42hfW9fudicSoakawGMCOy/3f34fa6e24cd2b928a6424055c80955f/malibu-the-lifestyle-1a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4SIHtyuYyc8AAEQSesCca8/9b2d394a51baff3109e046fcd305bbae/malibu-the-lifestyle-1b.jpg",
    ],
    "Quiet, uneventful evenings.",
    "Malibu is best enjoyed during daytime drives along its coastline and picnics on the beach, with little action taking place once the sun goes down.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/3zdFoLcZEI2UK4WqE0OEqg/51e1681c62fa74f94906b11f89b7bf67/malibu-unexpected-appeal-1.jpg",
    ],
    "Serene, beachfront oases.",
    "Malibu’s sparkling ocean views and expansive floor plans come with a steep price tag, with oceanfront homes commanding multi million-dollar sums.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/6pJyxpSpMsY0C8IcomeQEq/844c64c25f1af364a9982cff94fd4b64/malibu-the-market-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/3eNlrAK8Uw02S2gmaEWCW2/51ddba21e2b8a06d266fd6af3a07bdb6/malibu-the-market-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/fVt4DWXOPQCaGq2SMgCQO/f46122d38ae88e3a6f158f8feb9bd4d5/malibu-the-market-2b.jpg",
    ],
    "Coastal views, fresh seafood, and azure shoreline.",
    "Malibu features some of California’s most idyllic coastline, upscale retail, and delicious seafood, from healthy daily catches at Malibu Farm to crispy Neptune’s Net takeaway. The neighborhood’s pristine beaches are famed for a reason, representing some of California’s most stunning scenery.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/sloJ6MM168mEIMKiCqYQY/53cbbe27c36df78574ff0623ae88369d/malibu-youll-fall-in-love-with-1.jpg",
    ]
  ),
  new NeighborhoodItem(
    "neighborhood_item_3",
    "Los Angeles",
    "Santa Monica",
    // "https://images.ctfassets.net/ypfe9l9zihcg/1leYwEelEYwUI2Yk6246ug/2cd9da9fb916b170894e1e7b4e554a87/santa-monica-hero.jpg",
    santaMonica,
    "Welcome to Santa Monica\n" +
      "This seaside city is named after Saint Monica, the mother of Saint Augustine, but the reason why remains undetermined. One telling says it was named by explorer Gaspar de Portolà, who camped there in 1769 and named it in honor of the feast day of Saint Monica. Another credits Father Juan Crespi, who claimed a pair of creeks known as the Kuruvunga Springs (technically located outside of Santa Monica’s border), were like the tears of Saint Monica, who, prior to her son’s conversion, wept nightly over his impiety.",
    null,
    "Beaches, Wealthy, Healthy, Pricey, Great Weather, Tourist-Friendly",
    "The coastal city of Santa Monica is a living postcard.",
    "Santa Monica is filled with beautiful people, populated beaches, upscale shopping, and lots of fine dining. Its bustling pier, complete with iconic Ferris wheel and amusement park attractions, paired with clean streets, great weather, outdoor malls, and accessible oceanfront make it a destination known throughout the world.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/5fu9r2ojL2usae8gIiswS4/d8ad543026a868ab3a308dba6f1d83a8/santa-monica-around-the-block-1.jpg",
    ],
    "Sunsets on the boardwalk, outdoor dining, and weekend mornings at the beach.",
    "Popularized on the big screen, Santa Monica represents Southern California living around the world and the reality does not disappoint. Oceanside activities, stunning panoramas, candy-hued building abound in this dreamy beach neighborhood.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/5eDBGGU8oESW8m0OqaSYIC/779d30d99f5c9c822bf926a02df05ce6/santa-monica-what-to-expect-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/2D0FebIxQAwCW0aYmIuQ0i/656364f7c9cdba1994943e428d37a769/santa-monica-what-to-expect-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/EVumZg4Vi0ekO8cESsqaY/10a50c1db515635086a8c243d5e1d0d2/santa-monica-what-to-expect-2b.jpg",
    ],
    "Vibrant, cultured, and low-key luxe.",
    "Occupying a pristine stretch of the Pacific, Santa Monica emanates a casual coolness. The boardwalk welcomes joggers, bikers, and bladers, with much of local life revolving around the water. Yogis flock, attracted by some of the city’s best and most plentiful studios.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/6OywkIEqTms2MIqMgM8Yss/95296da8425cd50924c1fe304153151e/santa-monica-the-lifestyle-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/JFHKNRFJGUywKcSSAekwK/cfe9c3133d0a1e1b0e3536cb0a4297c5/santa-monica-the-lifestyle-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/2nE9sfkbs4gyEsqM0EmO4S/2714261c656bbce600536b7d5c7b4a2a/santa-monica-the-lifestyle-2b.jpg",
    ],
    "World-renowned designers and endless retail.",
    "Despite Santa Monica’s laid-back vibe, it takes its shopping seriously. Between the contemporary chains lining the Third Street Promenade and an upscale, open-air mall that houses Barney’s, Tiffany & Co., and Louis Vuitton, there is no shortage of options.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/2hyRtWY2bGWSi46EwYUaCu/6d685c78e55bcbdecad7ce7a608df8d8/santa-monica-unexpected-appeal-1.jpg",
    ],
    "Expansive single-family homes and contemporary apartment complexes.",
    "Santa Monica presents a diverse range of housing style, all centrally located and boasting spectacular ocean access. Its residents occupy single-family homes along quaint, tree-lined streets, modern beachfront houses near the bustling boardwalk, and amenity-rich apartment buildings.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/1Zua8XRJgwWEcqqsAQC64E/213334be81aa6a595dd49b45e70a4378/santa-monica-the-market-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4WNPHRk4aQ4Qq6SuAw4YM6/f165b331c6afdaa132bde86003813455/santa-monica-the-market-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/JmVL8AsGE80oMC46muwuI/8de7242eea374eb3d2e886cd8f254e6a/santa-monica-the-market-2b.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/6r9WgJaOzue64wwA28C40i/15f6a4b2fb3dad8a60d8ad3976b19b1a/santa-monica-the-market-3.jpg",
    ],
    "Sunshine, ocean breezes, and idyllic views as far as the eye can see.",
    "Los Angeles is generally known for its mild climate, but Santa Monica may well be the jewel in the city’s meteorological crown. It averages 310 days of sunshine per year, with cerulean skies and a pleasant, near-constant ocean breeze. Daytime temperatures are typically in the low 70s and rarely rise above 83 degrees.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/11m74hMXSwuYUeAque8sco/cd93c3d2ba7376627449e1e15416dc10/santa-monica-youll-fall-in-love-with-1.jpg",
    ]
  ),
  new NeighborhoodItem(
    "neighborhood_item_4",
    "Los Angeles",
    "West Hollywood",
    westHollywood,
    // "https://images.ctfassets.net/ypfe9l9zihcg/3m9ANvlRdYUUYMYQuE0eye/8be178a8b0c11ebfd99e207860201560/west-hollywood-hero.jpg",
    "Welcome to West Hollywood\n" +
      "In the 1920’s, gambling was illegal in the city of Los Angeles but still legal in Los Angeles County. Since West Hollywood was still unincorporated at the time, casinos and nightclubs started popping up around what is now the Sunset Strip. There might not be much gambling these days, but West Hollywood still holds onto the bright lights and ubiquitous energy.",
    null,
    "Great Restaurants, Tourist-Friendly, Shopping, Furniture",
    "West Hollywood is one of the most vibrant and exciting parts of Los Angeles.",
    "WeHo, as the locals call it, is home to fantastic restaurants, hotels, nightlife, and shopping. Its creative energy is palpable throughout the entire neighborhood, which has become a destination for modern furniture and decor. With no shortage of things to do in West Hollywood, it’s a popular place for both tourists and locals to visit.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/41U3au3FNKKW2Ao0wQsG8o/71c3e98ac000f5586cb6cdeb74da4b25/west-hollywood-around-the-block-1.jpg",
    ],
    "Beautiful old hotels, hikes in Runyon Canyon, and live music venues.",
    "West Hollywood is home to many of Los Angeles’ most iconic hotels, music venues, and comedy clubs. When residents crave fresh air, nearby Runyon Canyon is one of the city’s most beautiful hikes.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/5iprWimQPYE4eAsEmK6WaU/74f3f361f3c4bcdd860eaf2ac70a7354/west-hollywood-what-to-expect-1.jpg",
    ],
    "Hip, dynamic, and late to bed.",
    "The West Hollywood experience is a melting pot of traditions, whether it’s innovative vegan food, couture fashion, or street art and statues. This is not a neighborhood populated by the faint of heart, so arrive ready for excitement.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/2FVNhNOFIIEUgGaK8WmGus/71fe3343b8fceb83fed62ea869910068/west-hollywood-the-lifestyle-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4542DCseuIcm8mQMuKWYY2/fb517c3a284ee453fde1f54c3ffc4716/west-hollywood-the-lifestyle-2.jpg",
    ],
    "Plentiful arts and culture exposure.",
    "Creative people flock to West Hollywood, not only for its ample club and bar offerings, but also for its hopping art scene. Peruse its galleries and pick up pieces from both established and up-and-coming artists, or check out WeHo’s music scene at one of the many local venues.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/4Q1SVKaLgAyUQEYIISy8I8/2520a1d9f20dc6ed054baa025d2ad2e0/west-hollywood-unexpected-appeal-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/6rU28qnvr2CICGq6a0kime/a6776acc61540cc5f5f790469b9c9d24/west-hollywood-unexpected-appeal-2.jpg",
    ],
    "Low-rise apartments and unique single-family homes.",
    "In addition to the numerous housing complexes dotting the neighborhood, beautifully architectural houses line its side streets.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/43Ttv3lYDueoYIA8Umk8KK/6d1eabd8b49f609b22b44aa820cd271b/west-hollywood-the-market-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/1uCPVrwDbmqYKSaCsE2weO/09f10bce45a1738ae3c4484e95ad2363/west-hollywood-the-market-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/4kppr2At8sYIGqSgoou6yo/fd07d6503676a59eaff714b5e6ffbbf3/west-hollywood-the-market-2b.jpg",
    ],
    "Museums, shops, restaurants, creative energy, and late nights.",
    "West Hollywood is a constant indulgence of the senses, which is exactly why its locals love it.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/1obU3FIlKQSEIgGAq8CGeE/d4caac34ac1027c6021e749c3e601a31/west-hollywood-youll-fall-in-love-with-1.jpg",
    ]
  ),
  new NeighborhoodItem(
    "neighborhood_item_5",
    "Los Angeles",
    "Studio City",
    studioCity,
    // "https://images.ctfassets.net/ypfe9l9zihcg/3Ka5LrJHYA02AwiWC0WAs4/3751cc7e828e79ab83ec08fbeac8f691/studio-city-hero.jpg",
    "Welcome to Studio City\n" +
      "A compelling blur of quaint and trendy, little has changed in this San Fernando Valley neighborhood since Mack Sennett began building what is now CBS Studios in 1927. Offering a small selection of hip boutiques, eateries, and nightlife spots, Studio City’s true appeal is revealed in its tree-lined streets and beautiful Santa Monica foothill scenery.",
    null,
    "Shopping, Dining, Celebrity Residents, Suburban, Quiet, Privacy, Great Views",
    "Studio City is a hub of mid-century architecture, and its many post-WWII buildings have been beautifully kept up.",
    "Pay a visit to the Laurelwood Apartments and the Goodwin House, both are the work of Rudolph Schindler, a student of Frank Lloyd Wright. The stretch of Valley Vista west of Radford Avenue is home to a number of impressive mid-century apartments.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/1Cw1RdmWRiwii0oY4G4os6/8adc09f41341abbb3bae59ad8f787ef1/studio-city-around-the-block-1.jpg",
    ],
    "An intriguing mix of old and new.",
    "Studio City has a small town feel—trees line the streets, people greet one another, and everyone shops local. But it also supports a number of hip eateries and boutiques. Just stroll through Tujunga Village for a wonderfully varied shopping and dining experience: grab breakfast at Aroma Coffee and Tea Company, peruse the antiques at Elizabeth’s Place, then grab dinner and see a jazz performance at Italian restaurant Vitello’s.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/43ROaiyppSSSwA0SMe0iuw/636bf3cb1ef55a3b9ab1058ffca506bb/studio-city-what-to-expect-1.jpg",
    ],
    "Mellow, quiet, and surprisingly hip.",
    "Perhaps it’s the influx of celebrities that keeps Studio City on its toes, but the mix of independent boutiques and delicious eateries among the neighborhood’s old-school mom-and-pop establishments give this area a fresh, not stodgy, sensibility.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/1ttqzAI8De2y8ioGiIiWmU/efd6cae74ec95cd49688d50ea93d2329/studio-city-the-lifestyle-1.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/RRJUDrNcKy2QWSAIs2waQ/564fb905d4dd273aefaa2de9034fa7a6/studio-city-the-lifestyle-2a.jpg",
      "https://images.ctfassets.net/ypfe9l9zihcg/JFCw4t9e6aQiIu4CmYuyY/f530c3284ef7f1db004fc4bda6ea799e/studio-city-the-lifestyle-2b.jpg",
    ],
    "The occasional famous face.",
    "With a number of stars calling Studio City home, you’re likely to spot a celebrity every so often.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/2iSZDewqkQG2YQouEiWgKu/c75ecda08ca401abeaf035ab5454c1bd/studio-city-unexpected-appeal-1.jpg",
    ],
    "Luxurious hillside houses and mid-century architectural gems.",
    "Studio City is a mix of upscale estates in the Santa Monica Mountains, expansive homes in the more residential areas, and highly regarded mid-century properties.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/3ajBRwzM2QSiwg0gSkCCIE/d870784c020e35e35238391368cb795f/studio-city-the-market-1.jpg",
    ],
    "Access to the city’s top sushi spots.",
    "A stretch along Ventura Boulevard, known as “sushi row,” is home to some of LA’s finest fish, including the Michelin-starred Asanebo.",
    [
      "https://images.ctfassets.net/ypfe9l9zihcg/3c8s3Unmnmmg06wMuoIkgy/7dd0e51d72f0fcf2f0579d74aa2f605d/studio-city-youll-fall-in-love-with-1.jpg",
    ]
  ),

  //! La Jolla
  // new NeighborhoodItem(
  //   "neighborhood_item_6",
  //   "Los Angeles",
  //   "San Diego, La Jolla",
  //   "https://images.ctfassets.net/ypfe9l9zihcg/6eST91eFBSwSwmMKkGyI2q/cd8420b35baf935d830dd38fb5dda79c/Hero1.jpg",
  //   "Welcome to La Jolla\n" +
  //     "A manicured oceanside resort community 12 miles north of downtown, La Jolla (“the jewel” in Spanish) is considered the Monte Carlo of Southern California—with good reason. This paradisiacal enclave is a natural and a cultural jewel indeed. Its arcing coastline’s natural coves give way to steep canyons and hillsides peppered with homes worth millions, and then there’s the ideal Mediterranean climate, elite shopping and dining, art galleries, and prestigious institutions—the Scripps Institution of Oceanography and the Salk Institute among them—that La Jollans enjoy. It should come as no surprise that this is one of San Diego’s most highly coveted areas to settle.",
  //   null,
  //   "Hotels, Luxury Shopping, Restaurants, Art Galleries, Public Art, Museums, Culture, Golf, Beaches, Cove, Tourist Friendly",
  //   "This seaside sanctum’s luxurious offerings have multiplied since its initial heyday as a resort area.",
  //   "People have been drawn to La Jolla’s scenic beaches and cliffside tableaus since the 1890s, when the area was popularized as a beach vacation spot reachable by train. Originally, La Jolla was a village of small cottages scattered along cliffs and canyons. Today those cottages have given way to a multi-million dollar mansions and luxury hotels. “Jewel City” is now divvied into multiple neighborhoods including the Village of La Jolla, La Jolla Shores, La Jolla Farms, Bird Rock, and more, though its resort-like appeal remains. What makes this moneyed enclave so attractive—even some of the global ultrarich own second homes here—is that it strikes the ideal balance between stunning scenery and a elite array of activities and amenities. Upscale shops, fine dining, private clubs, boating, arts, culture, and more satisfy the culturati, while the celebrated topography is, well, simply poetic.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/5cxH7f2suWuW6eiWkSUUim/3ae428e6a2aca9d568da1c3b276834b6/Large1.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/3KSaVq4NTG2sAMIS8YAwcK/d1a57221c97a01db1eaf8b1fcc3fb270/Small1.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/14XKLkafjeCOW8k0moQs0q/2a84c6698c809531f85633e79f00b8e1/Small2.jpg",
  //   ],
  //   "This upscale community balances its cosmopolitan vibe against a laid-back pace.",
  //   "This is San Diego’s most prestigious community, but it’s still a beach town at heart. Even world-famous area restaurant George’s at the Cove has a relatively casual dress code. Still, La Jolla checks all the boxes for those who live the high life. There’s couture shopping on Prospect Street (sometimes called the 'Rodeo Drive of San Diego'), car dealerships selling Lamborghinis and Bentleys, luxury hotels like the historic Grande Colonial, plus plenty of fine dining, golf, spas, and top-rated scuba and surfing spots. Add in the area’s secluded trails, scenic overlooks, and perfect Mediterranean temperature and it’s all too easy to see why living in La Jolla is so desirable.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/6COOjGZOkoEgcyuqQKiCcC/088191522d40ff0a139198bdc5529ddd/Large2.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/1mpV66wykQGmM8iIGckywS/6cd1981a772913c8ed4adb7a8bdb00c4/Small3.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/7vaRo7NldeGSewgOCyaYS0/9248955498d0c0a377aac1259c0006eb/Small4.jpg",
  //   ],
  //   "Activities revolve around the stunning shoreline and plethora of water activities.",
  //   "From scuba diving in La Jolla Cove to stand-up paddle boarding at La Jolla Shores, surfing at Windansea Beach, or sunning at Black’s Beach (in the buff, if you like—nudity is legal there), the beautiful coastline draws residents and people from all over the city daily. It’s not even unheard of for locals to pop on a swim cap and paddle right next to the seals and sea lions in the Cove. And later? Cocktails on elegant restaurant decks overlooking the ocean beckon.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/6bzA7JlXagiw2IWOoUsiSE/d11ba57e64d2e5b1918a7f33bae9ae2a/Large4.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/10g1agQc3IGEE8YkagY8g/0e7bbb7cb15fc9df53c028df70e6eb25/Small5.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/67MHj7xgDCUoqwAwgAeSmY/a0faa11fce4c614228df3bf2a7f69e0e/Small6.jpg",
  //   ],
  //   "A booming arts scene, with incredible murals displayed in the open for the enjoyment of all.",
  //   "La Jolla is known for contemporary art, but the ‘hood’s most Instagrammable work isn’t in a gallery. Instead, it’s exhibited publicly, usually on the side of private buildings. Look around any corner as you walk through downtown La Jolla Village and you’ll see them—the vibrant, large-scale murals of The La Jolla Mural Project. This artist-commissioned eye candy is on display for a minimum of two years, and turning a corner to discover one of these gems is a total delight. For a deeper dive into La Jolla’s cultural offerings, don’t miss the Museum of Contemporary Art San Diego on Prospect Street, the Tony Award-winning La Jolla Playhouse, classical music performances from the La Jolla Music Society, and the Birch Aquarium at Scripps.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/3w4xZICBraQoKoKeOUGC0U/842417019178866230864d590c337d1c/la-jolla.png",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/3v3zmVeeFqYAEgY4ksSEMo/7ef06bf7ddadfb51538c72f650834ef3/Small7.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/2y6nZzn45y0CcUKQKM6gq0/c00ab08a3febd024e877968fb002185d/Small8.jpg",
  //   ],
  //   "Filled with some of the city’s most exceptional homes, listings regularly reach the multi-millions.",
  //   "This is some of San Diego’s prized real estate, with median prices hovering around $2 million. The closer the home to the neighborhood’s seven miles of breathtaking coastline—or the better the ocean view—the pricier the property. And while many are hidden behind gates or visible only from the ocean, there’s some truly incredible oceanfront estates and quiet beach getaways scattered along the shore. Everything from turn-of-the-century Spanish architectural masterpieces to modern gated manors is on offer, some even with direct access to the area’s beautiful beaches.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/3o0v0UeExWasyGei0CyaaW/bb4bb9406b93b818ff33a1cc2286a490/Large3__1_.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/38A55uNrFe6AScUKykQoom/91310c5961ba8c11b9ed2447ab745139/Small9.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/6om8pjlk4gcggQESGgwosO/50c53ce2b3d1f6632df5f17474e4e26e/Small10.jpg",
  //     "https://images.ctfassets.net/ypfe9l9zihcg/13WpqLXVLaeg6WEsAwkCeg/6af994632fed79412a796e91bac66579/Large5.jpg",
  //   ],
  //   "Stunning La Jolla Cove, with its winding pathways, coastal views, and chatty resident sea lions and seals.",
  //   "Certain La Jolla denizens are lucky enough to claim one of the most covetable of the area’s protected coastal stretches as their home—the native sea lions and harbor seals, that is. The best place to visit these beloved marine mammals is to walk along Coast Boulevard to La Jolla Cove, a small rocky cove beach where they love to sunbathe. It’s possible to walk through a small gate out onto the rocks close to the lounging sea creatures to snap photos.",
  //   [
  //     "https://images.ctfassets.net/ypfe9l9zihcg/8QxcVtvuV2Sm8AE6e40My/4acc626cbd66aedfbb13618acceabd7d/Large6.jpg",
  //   ]
  // ),
];

// let item = [
//     new NeighborhoodItem(
//         "neighborhood_item_1",
//         "Los Angeles",
//         "Bel Air-Holmby Hiils",
//         "https://images.ctfassets.net/ypfe9l9zihcg/dA18xNW9O0uSqasyWcok0/95c4434595933c664c7155323fd6f049/bel-air-unexpected-appeal-1.jpg",
//         "Welcome to Bel Air-Holmby Hills\n" +
//         "Bel Air boasts some of the most magnificent property in the country. Located on the west side between Beverly Crest and Brentwood, the neighborhood is primarily residential with only a few shops within its 6.3 square mile area. Its remote location in the foothills of the Santa Monica mountains provides privacy and beautiful scenery for the high-profile locals.",
//         null,
//         "Pricey, Celebrity Residents, Mansions, Remote, Privacy",
//         "Bel Air has become a symbol of the Los Angeles elite.",
//         "Bel Air-Holmby Hills was established in the early 1920s by Alphonzo Bell, who bought a house on a large ranch after becoming a millionaire when he struck oil on his farm in nearby Santa Fe Springs. Bel Air-Holmby Hills is a neighborhood where privacy and high-priced real estate go hand in hand.",
//         "Massive houses amid the Santa Monica foothills.",
//         "Among the country’s most elite neighborhoods, Bel Air-Holmby Hills boasts one of the lowest population densities in Los Angeles, a testament to the generous dimensions of its properties. Idyllic drives along its winding roads reveal some of the finest examples of residential architecture within the past century.",
//         "Tranquil, secluded, and discreet.",
//         "Bel Air-Holmby Hills represents a protective oasis within the greater Los Angeles area for many of its residents. Life is placid in Bel Air-Holmby Hills, which is what its denizens most appreciate. Aside from the Bel Air Hotel and the Bel Air Country Club, there are few social hubs.",
//         "A gated perimdeter, accessible to the east and west.",
//         "Although the Bel Air community is gated, its two main entrances are open to the public. While the privacy fencing adds to the neighborhood’s hallowed sensibility, its open access points introduce an inviting element.",
//         "Bel Air property is some of the most exclusive in the country.",
//         "Bel Air-Holmby Hills is a mix of massive mansions and, well, more modest mansions. Multiple floors and wings are the norm; gated drives offer properties a great deal of privacy and swimming pools abound.  While pricing on houses vary, it is not uncommon for estates to sell between 40 and 50 million dollars.",
//         "The tranquility of a true neighborhood",
//         "Bel Air-Holmby Hills’ most alluring attribute is that it’s truly residential. Without a downtown to speak of, traffic is largely limited to its denizens, resulting a private, peaceful community."
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_2",
//         "Los Angeles",
//         "Beverly Hiils",
//         "https://images.ctfassets.net/ypfe9l9zihcg/Gv2oTtkIMwIOWQGEqqosC/f430248ba7ca893da5403e873ebbfb8b/beverly-hills-unexpected-appeal-1.jpg",
//         "Welcome to Beverly Hills\n" +
//         "After a failed attempt to find oil on the land in the early 1900’s, present day Beverly Hills was subdivided into lots. It wasn’t long before the city would contain one of the most famous zip codes in the world, attracting the town’s most elite actors, actresses and businessmen. Despite its name, Beverly Hills is most built on flat land and unofficially divided into North and South by Santa Monica Boulevard.",
//         null,
//         "Pricey, Celebrity Residents, Mansions, Upscale Shopping, World Class Food, Great Weather",
//         "Home to movie star residents and their expansive homes, Beverly Hills is one of the most famous cities in the world.",
//         "The epicenter of its renowned retail, Rodeo Drive, is one of Los Angeles’ main attractions, and the neighborhood also boasts some of the best restaurants in the country, making it an idyllic place to work and play.",
//         "Beautiful cars, luxurious homes, and world-renowned services",
//         "Anchored by Rodeo Drive, Beverly Hills is home to some of the world’s finest haute couture, so be prepared for impeccably dressed men and women walking down the streets. The area is also a mecca for classic automobile enthusiasts and their perfectly-\n" +
//         "kept vintage cars. It’s a spectacle to watch the world go by here and everyone is part of the experience.",
//         "Overt luxury and uncompromising glamour in all things.",
//         "Channeling Hollywood’s characteristic grandeur, Beverly Hills is endlessly and unapologetically polished. From fine dining to designer retail, residents are afforded unparalleled access to the very best",
//         "Hidden pockets of verdant, SoCal nature.",
//         "Complementing its boulevards of retail and residences, the neighborhood boasts beautiful foliage and public green spaces including Beverly Gardens Park.",
//         "Expansive homes within exclusive enclaves.",
//         "Grand estates on manicured lots abound in Beverly Hills. Many homes feature gating and protected grounds for greater privacy, shielding high-profile owners from prying eyes.",
//         "Beauty and grandiosity around every corner.",
//         "Undeniably gorgeous and filled with Hollywood history, Beverly Hills abounds with storied landmarks. From the iconic Beverly Hills Hotel to Greystone Mansion, the neighborhood is visually stunning."
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_3",
//         "Los Angeles",
//         "Brentwood",
//         "https://images.ctfassets.net/ypfe9l9zihcg/2lbeWb8qx6UAYIEYoK2AKs/d3e0b4b787b4035c7c679167ba57a716/brentwood-the-market-3.jpg",
//         "Welcome to Brentwood\n" +
//         "Brentwood’s history begins back in the late 19th century when it was originally part of a Mexican land grant. It went on to be developed at the turn of the century and would be home to several of the the Olympic games in 1932. With a history that involves some of Hollywood’s most interesting stories, Brentwood is now a beautiful and affluent neighborhood that rests along the slopes of the Santa Monica mountains.",
//         null,
//         "Pricey, Fashion, Restaurants, Exercise, Farmer's Market, Museum",
//         "Brentwood channels an urban sensibility.",
//         "Brentwood includes high-style boutiques and trendy restaurants balanced by large secluded houses in the foothills of the Santa Monica mountains. It provides a tranquil refuge for residents, while maintaining a distinct presence in greater Los Angeles culture. One of the neighborhood’s defining features is the Getty, which delivers world-class art from its mountainside perch.",
//         "Healthful living, culture, and stunning SoCal scenery.",
//         "Brentwood’s understated polish pervades the neighborhood. While there are many restaurants, specialty food shops, and clothing boutiques, Brentwood enjoys a slightly slower pace. The town is well-maintained, from its manicured parks to its sweeping city streets.",
//         "Active, wholesome, and endorphin-driven.",
//         "Brentwood residents tend to invest in their health and connect with the natural environment. Opportunities for runners and yogi abound here.",
//         "A world-class museum around the corner.",
//         "The outside area of the Getty is worth the trip alone, not to mention the enormous collection of classic and contemporary art within its walls. It is truly one of the most beautiful places in Los Angeles and a source of pride for the Brentwood neighborhood.",
//         "Architectural and beautifully landscaped homes.",
//         "Brentwood may feel quaint, but its single-family homes tend to be large and modern with manicured lawns.\n" +
//         "Many sprawling mansions and luxury estates also occupy this sought-after neighborhood.",
//         "Brentwood’s small-town sensibility and tenured population.",
//         "Though it sits alongside the hustle and bustle of Santa Monica, Brentwood maintains a neighborhood vibe. Quaint shops are its calling card and long-time residents greet one another on the area's many running paths and trails, lending a sense of stability and familiarity.",
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_4",
//         "Los Angeles",
//         "Hancock Park-Wilshire",
//         "https://images.ctfassets.net/ypfe9l9zihcg/3PDVRkVbjWEoUS8C2KKoQ8/43cff563bba1ee0237b2ea53c9292a80/hancock-park-wilshire-around-the-block-1.jpg",
//         "Hancock Park-Wilshire is a wonderful combination of big city living paired with a neighborhood feel, one of the few areas in LA to offer both. As a thoroughfare of the city, the main drag of Hancock Park-Wilshire is almost always active, and residents take advantage of the many museums, shops, and restaurants it has to offer. But the area also has quiet residential streets, open spaces, and beautiful parks, filled with locals who like getting a taste of both worlds.",
//         null,
//         "Restaurants, Museums, Commercia, Tourist-Friendly, Pricey, Busy, Iconic Landmarks",
//         "This densely populated and high-trafficked neighborhood is a busy mix of residential, commercial, and community spaces smack in the middle of central Los Angeles.",
//         "A number of renowned museums and cultural pockets—including Little Ethiopia and Miracle Mile—contribute to its appeal.",
//         "Traffic, culture, and urban commotion converge.",
//         "Wilshire Boulevard is a main thoroughfare of central Los Angeles, making this neighborhood one of the city’s most trafficked. With museums aplenty and one of LA’s most famous shopping destinations—The Grove—nearby, Hancock Park-Wilshire is long on appeal.",
//         "Culture, local institutions, and community sensibility.",
//         "Museums and large office buildings populate the heart of Hancock Park-Wilshire, but the neighborhood offers charming shops, eateries, and LA institutions as well. After admiring the contemporary art at LACMA or strolling through the historic Original Farmer’s Market’s many food stalls, folks can head to the many other nearby neighborhoods thanks to the neighborhood's central location.",
//         "Cultural icons around every corner.",
//         "With so many important LA spots to hit in a single neighborhood, spending time in Hancock Park-Wilshire means really packing it in. You’ll never run out of new museum exhibits, but the fun certainly doesn’t stop there.",
//         "A diverse grouping of homes, apartments, and duplexes to suit every style and price point.",
//         "Hancock Park-Wilshire is home to a variety of residential and commercial spaces, from contemporary high-rise apartment buildings to upscale mid-century flats.",
//         "The abundance of world-class museums within walking distance.",
//         "A string of museums along Wilshire Boulevard represents one of the city’s most culturally-dense areas. Enjoy instant access to the renowned LACMA (Los Angeles County Museum of Art) and the Craft and Folk Art Museum, as well as the famed La Brea Tar Pits."
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_5",
//         "Los Angeles",
//         "Malibu",
//         "https://images.ctfassets.net/ypfe9l9zihcg/6aT8UVURsAwKCuooiEUAS4/32c648723fe56a46610d0a1d2bcd5e01/malibu-around-the-block-1.jpg",
//         "Welcome to Malibu\n" +
//         "Malibu owes its name to the Chumash, Native Americans who originally settled there and named it Humaliwo, which means \"the surf sounds loudly.” The area was highly secluded until 1929 when the Pacific Coast Highway was built. Now Malibu is a thoroughfare for many vacationers driving up and down the California coast, and a highly revered destination for Los Angeles locals.",
//         null,
//         "Beaches, Beautiful People, Healthy, Pricey, Seafood, Great Weather",
//         "Cliffside homes, pristine beaches, and breathtaking views are hallmarks of this area.",
//         "Malibu is home to many celebrities and entertainment industry tycoons. Serene and sun-soaked, the area represents the ultimate retreat.",
//         "Secluded beaches, charming restaurants, and plenty of convertibles on the road.",
//         "In addition to its residents, Malibu—aka the ’Bu—attracts surfers, swimmers, and sun-seeking daytrippers. It’s a neighborhood of active individuals who balance jogging along the beach and hiking the nearby canyons while enjoying oysters and fresh seafood at the many bustling restaurants along the coastline. Jagged cliffs, secluded coves, and miles of sparkling ocean draw people from all over the city to Malibu’s stunning shores.",
//         "Serene, healthful, and beach-centric.",
//         "Health and fitness reign among Malibu denizens, with beach-lovers breaking from athletic pursuits to bask in the area’s clear blue skies and less-populated beaches.",
//         "Quiet, uneventful evenings.",
//         "Malibu is best enjoyed during daytime drives along its coastline and picnics on the beach, with little action taking place once the sun goes down.",
//         "Serene, beachfront oases.",
//         "Malibu’s sparkling ocean views and expansive floor plans come with a steep price tag, with oceanfront homes commanding multi million-dollar sums.",
//         "Coastal views, fresh seafood, and azure shoreline.",
//         "Malibu features some of California’s most idyllic coastline, upscale retail, and delicious seafood, from healthy daily catches at Malibu Farm to crispy Neptune’s Net takeaway. The neighborhood’s pristine beaches are famed for a reason, representing some of California’s most stunning scenery."
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_6",
//         "Los Angeles",
//         "South Bay",
//         "https://downloads.ctfassets.net/ypfe9l9zihcg/47Hf4Te7HeBu9wT28IKxsj/291db4c55141315c8c32eae67bfcc397/MARKET_SMALL__1_.jpg",
//         "Welcome to South Bay\n" +
//         "Located a hop, skip, and a jump from the excitement of Los Angeles, the South Bay is attracts those in search of a friendly, active, oceanside lifestyle with all the comforts of city living",
//         null,
//         "",
//         "The South Bay is calling your name.",
//         "A prime spot to catch an ocean breeze, endless dining and shopping destinations, parks and trails galore, and a wide variety of architecture, the South Bay is in demand as one of Los Angeles’ list of places to call home.",
//         "Sunsets, bike rides, and a laidback lifestyle.",
//         "South Bay residents enjoy the area’s at-ease environment, delicious food, and of course, the shoreline. With numerous beach volleyball courts and prime surf conditions, the South Bay beaches attract ocean enthusiasts locally, regionally, and beyond.",
//         "Family orientated, friendly, and outdoorsy.",
//         "In Soho you'll find flagship retailers, eclectic boutiques, and homespun knick-knacks. The vibrant nightlife scene replaces the hectic shopping hustle upon sunset. There's something for everyone, from exclusive nightclubs to low-key dive bars.",
//         "Existing at the epicenter of the urban jungle.",
//         "Soho can get fairly crowded: Broadway draws droves of shoppers daily.",
//         "Expansive single-family homes and contemporary condominiums.",
//         "In the South Bay, a range of single-family homes, condominiums, and multifamily units can be found. Whether you’re looking for a tree-lined street in Palos Verdes, beachside condo, or modern beachfront home, the options are endless in the South Bay.",
//         "Walkstreets, friendly neighborhoods, and accessibility to Los Angeles.",
//         "While the beach and The Strand bring in the people, the walkstreets and neighborhoods are quiet, friendly, and appeal to all.",
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_7",
//         "Los Angeles",
//         "Sunset  Strip",
//         "https://images.ctfassets.net/ypfe9l9zihcg/3JWYhzmhGwuY8oYUom8ekS/b07b07fa2d47d3e3187b4b129334ae55/sunset-strip-around-the-block-1.jpg",
//         "Welcome to Sunset Strip\n" +
//         "Contrary to its reputation, Sunset Strip isn’t all studios and movie lots. This eclectic neighborhood is also home to classic restaurants, shops, and a number of iconic area institutions. The surrounding Hollywood Hills’ quiet, winding streets are dotted with homes, basking beneath its world-famous signage.",
//         null,
//         "Restaurants, Nightlife, Tourist-Friendly, Iconic Landmarks, Celebrities, Farmer's Market, Movie Studios",
//         "Also known as Tinseltown, Hollywood and the Sunset Strip became the hub of the movie industry in the 1910s.",
//         "The 1910s is when East Coast filmmakers began moving west to avoid patent lawsuits by Thomas Edison’s Motion Picture Patents Company. The excellent weather and varied geography of Los Angeles made it the perfect place for filming, and by the 1920s most major studios had set up shop here, where it still commands that influence today.",
//         "Landmarks, nightlife, and iconic hillsides.",
//         "Sunset Strip is home to many of LA’s most beloved destinations. On Sundays, the community hosts one of California’s first and largest farmer’s markets, where residents can score a taste of the city’s highly-regarded culinary culture.",
//         "Bustling and brimming with entertainment.",
//         "There is no shortage of entertainment in this neighborhood: theaters, museums, shopping, restaurants, and nightlife contribute to a dynamic, diverse culture. Sunset Strip is a neighborhood that has earned its right to kitsch: souvenir stores stand next to some of the city’s most storied eating establishments and uncanny celebrity impersonators stroll its famed, eponymous boulevard.",
//         "Exposure to people from all over the world, all in your own backyard.",
//         "The area’s restaurants, bars, and entertainment venues fill with patrons from all over the world who have come to witness movie magic in the making.",
//         "Homes every bit as eclectic as their owners.",
//         "The neighborhood is a mix of vintage and contemporary apartment buildings, bungalows, and beautiful, hillside houses brimming with character and boasting stunning views of downtown and all of Los Angeles.",
//         "Living in a setting as legendary as its residents.",
//         "Hollywood and Sunset Strip are known the world over as the birthplace of the film industry; its locals celebrate the area’s storied history and revel in its kitschy charm."
//     ),
//     new NeighborhoodItem(
//         "neighborhood_item_8",
//         "Los Angeles",
//         "Studio City",
//         "https://images.ctfassets.net/ypfe9l9zihcg/1Cw1RdmWRiwii0oY4G4os6/8adc09f41341abbb3bae59ad8f787ef1/studio-city-around-the-block-1.jpg",
//         "Welcome to Studio City\n" +
//         "A compelling blur of quaint and trendy, little has changed in this San Fernando Valley neighborhood since Mack Sennett began building what is now CBS Studios in 1927. Offering a small selection of hip boutiques, eateries, and nightlife spots, Studio City’s true appeal is revealed in its tree-lined streets and beautiful Santa Monica foothill scenery.",
//         null,
//         "Shopping, Dining, Celebrity Residents, Suburban, Quiet, Privacy, Great Views",
//         "Studio City is a hub of mid-century architecture, and its many post-WWII buildings have been beautifully kept up.",
//         "Pay a visit to the Laurelwood Apartments and the Goodwin House, both are the work of Rudolph Schindler, a student of Frank Lloyd Wright. The stretch of Valley Vista west of Radford Avenue is home to a number of impressive mid-century apartments.",
//         "An intriguing mix of old and new.",
//         "Studio City has a small town feel—trees line the streets, people greet one another, and everyone shops local. But it also supports a number of hip eateries and boutiques. Just stroll through Tujunga Village for a wonderfully varied shopping and dining experience: grab breakfast at Aroma Coffee and Tea Company, peruse the antiques at Elizabeth’s Place, then grab dinner and see a jazz performance at Italian restaurant Vitello’s.",
//         "Mellow, quiet, and surprisingly hip.",
//         "Perhaps it’s the influx of celebrities that keeps Studio City on its toes, but the mix of independent boutiques and delicious eateries among the neighborhood’s old-school mom-and-pop establishments give this area a fresh, not stodgy, sensibility.",
//         "The occasional famous face.",
//         "With a number of stars calling Studio City home, you’re likely to spot a celebrity every so often.",
//         "Luxurious hillside houses and mid-century architectural gems.",
//         "Studio City is a mix of upscale estates in the Santa Monica Mountains, expansive homes in the more residential areas, and highly regarded mid-century properties.",
//         "Access to the city’s top sushi spots.",
//         "A stretch along Ventura Boulevard, known as “sushi row,” is home to some of LA’s finest fish, including the Michelin-starred Asanebo."
//     )
// ];
