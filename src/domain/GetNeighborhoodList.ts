import NeighborhoodItem from "../model/NeighborhoodItem";

export default class GetNeighborhoodList {
    static get() {
        return item;
    }

    static getById(id: string) {
        return item.filter(data => data.id === id)
    }
}

let item = [
    new NeighborhoodItem(
        "neighborhood_item_1",
        "Los Angeles",
        "Bel Air-Holmby Hiils",
        "https://images.ctfassets.net/ypfe9l9zihcg/dA18xNW9O0uSqasyWcok0/95c4434595933c664c7155323fd6f049/bel-air-unexpected-appeal-1.jpg",
        "Welcome to Bel Air-Holmby Hills\n" +
        "Bel Air boasts some of the most magnificent property in the country. Located on the west side between Beverly Crest and Brentwood, the neighborhood is primarily residential with only a few shops within its 6.3 square mile area. Its remote location in the foothills of the Santa Monica mountains provides privacy and beautiful scenery for the high-profile locals.",
        null,
        "Pricey, Celebrity Residents, Mansions, Remote, Privacy",
        "Bel Air has become a symbol of the Los Angeles elite.",
        "Bel Air-Holmby Hills was established in the early 1920s by Alphonzo Bell, who bought a house on a large ranch after becoming a millionaire when he struck oil on his farm in nearby Santa Fe Springs. Bel Air-Holmby Hills is a neighborhood where privacy and high-priced real estate go hand in hand.",
        "Massive houses amid the Santa Monica foothills.",
        "Among the country’s most elite neighborhoods, Bel Air-Holmby Hills boasts one of the lowest population densities in Los Angeles, a testament to the generous dimensions of its properties. Idyllic drives along its winding roads reveal some of the finest examples of residential architecture within the past century.",
        "Tranquil, secluded, and discreet.",
        "Bel Air-Holmby Hills represents a protective oasis within the greater Los Angeles area for many of its residents. Life is placid in Bel Air-Holmby Hills, which is what its denizens most appreciate. Aside from the Bel Air Hotel and the Bel Air Country Club, there are few social hubs.",
        "A gated perimdeter, accessible to the east and west.",
        "Although the Bel Air community is gated, its two main entrances are open to the public. While the privacy fencing adds to the neighborhood’s hallowed sensibility, its open access points introduce an inviting element.",
        "Bel Air property is some of the most exclusive in the country.",
        "Bel Air-Holmby Hills is a mix of massive mansions and, well, more modest mansions. Multiple floors and wings are the norm; gated drives offer properties a great deal of privacy and swimming pools abound.  While pricing on houses vary, it is not uncommon for estates to sell between 40 and 50 million dollars.",
        "The tranquility of a true neighborhood",
        "Bel Air-Holmby Hills’ most alluring attribute is that it’s truly residential. Without a downtown to speak of, traffic is largely limited to its denizens, resulting a private, peaceful community."
    ),
    new NeighborhoodItem(
        "neighborhood_item_2",
        "Los Angeles",
        "Beverly Hiils",
        "https://images.ctfassets.net/ypfe9l9zihcg/Gv2oTtkIMwIOWQGEqqosC/f430248ba7ca893da5403e873ebbfb8b/beverly-hills-unexpected-appeal-1.jpg",
        "Welcome to Beverly Hills\n" +
        "After a failed attempt to find oil on the land in the early 1900’s, present day Beverly Hills was subdivided into lots. It wasn’t long before the city would contain one of the most famous zip codes in the world, attracting the town’s most elite actors, actresses and businessmen. Despite its name, Beverly Hills is most built on flat land and unofficially divided into North and South by Santa Monica Boulevard.",
        null,
        "Pricey, Celebrity Residents, Mansions, Upscale Shopping, World Class Food, Great Weather",
        "Home to movie star residents and their expansive homes, Beverly Hills is one of the most famous cities in the world.",
        "The epicenter of its renowned retail, Rodeo Drive, is one of Los Angeles’ main attractions, and the neighborhood also boasts some of the best restaurants in the country, making it an idyllic place to work and play.",
        "Beautiful cars, luxurious homes, and world-renowned services",
        "Anchored by Rodeo Drive, Beverly Hills is home to some of the world’s finest haute couture, so be prepared for impeccably dressed men and women walking down the streets. The area is also a mecca for classic automobile enthusiasts and their perfectly-\n" +
        "kept vintage cars. It’s a spectacle to watch the world go by here and everyone is part of the experience.",
        "Overt luxury and uncompromising glamour in all things.",
        "Channeling Hollywood’s characteristic grandeur, Beverly Hills is endlessly and unapologetically polished. From fine dining to designer retail, residents are afforded unparalleled access to the very best",
        "Hidden pockets of verdant, SoCal nature.",
        "Complementing its boulevards of retail and residences, the neighborhood boasts beautiful foliage and public green spaces including Beverly Gardens Park.",
        "Expansive homes within exclusive enclaves.",
        "Grand estates on manicured lots abound in Beverly Hills. Many homes feature gating and protected grounds for greater privacy, shielding high-profile owners from prying eyes.",
        "Beauty and grandiosity around every corner.",
        "Undeniably gorgeous and filled with Hollywood history, Beverly Hills abounds with storied landmarks. From the iconic Beverly Hills Hotel to Greystone Mansion, the neighborhood is visually stunning."
    ),
    new NeighborhoodItem(
        "neighborhood_item_3",
        "Los Angeles",
        "Brentwood",
        "https://images.ctfassets.net/ypfe9l9zihcg/2lbeWb8qx6UAYIEYoK2AKs/d3e0b4b787b4035c7c679167ba57a716/brentwood-the-market-3.jpg",
        "Welcome to Brentwood\n" +
        "Brentwood’s history begins back in the late 19th century when it was originally part of a Mexican land grant. It went on to be developed at the turn of the century and would be home to several of the the Olympic games in 1932. With a history that involves some of Hollywood’s most interesting stories, Brentwood is now a beautiful and affluent neighborhood that rests along the slopes of the Santa Monica mountains.",
        null,
        "Pricey, Fashion, Restaurants, Exercise, Farmer's Market, Museum",
        "Brentwood channels an urban sensibility.",
        "Brentwood includes high-style boutiques and trendy restaurants balanced by large secluded houses in the foothills of the Santa Monica mountains. It provides a tranquil refuge for residents, while maintaining a distinct presence in greater Los Angeles culture. One of the neighborhood’s defining features is the Getty, which delivers world-class art from its mountainside perch.",
        "Healthful living, culture, and stunning SoCal scenery.",
        "Brentwood’s understated polish pervades the neighborhood. While there are many restaurants, specialty food shops, and clothing boutiques, Brentwood enjoys a slightly slower pace. The town is well-maintained, from its manicured parks to its sweeping city streets.",
        "Active, wholesome, and endorphin-driven.",
        "Brentwood residents tend to invest in their health and connect with the natural environment. Opportunities for runners and yogi abound here.",
        "A world-class museum around the corner.",
        "The outside area of the Getty is worth the trip alone, not to mention the enormous collection of classic and contemporary art within its walls. It is truly one of the most beautiful places in Los Angeles and a source of pride for the Brentwood neighborhood.",
        "Architectural and beautifully landscaped homes.",
        "Brentwood may feel quaint, but its single-family homes tend to be large and modern with manicured lawns.\n" +
        "Many sprawling mansions and luxury estates also occupy this sought-after neighborhood.",
        "Brentwood’s small-town sensibility and tenured population.",
        "Though it sits alongside the hustle and bustle of Santa Monica, Brentwood maintains a neighborhood vibe. Quaint shops are its calling card and long-time residents greet one another on the area's many running paths and trails, lending a sense of stability and familiarity.",
    ),
    new NeighborhoodItem(
        "neighborhood_item_4",
        "Los Angeles",
        "Hancock Park-Wilshire",
        "https://images.ctfassets.net/ypfe9l9zihcg/3PDVRkVbjWEoUS8C2KKoQ8/43cff563bba1ee0237b2ea53c9292a80/hancock-park-wilshire-around-the-block-1.jpg",
        "Hancock Park-Wilshire is a wonderful combination of big city living paired with a neighborhood feel, one of the few areas in LA to offer both. As a thoroughfare of the city, the main drag of Hancock Park-Wilshire is almost always active, and residents take advantage of the many museums, shops, and restaurants it has to offer. But the area also has quiet residential streets, open spaces, and beautiful parks, filled with locals who like getting a taste of both worlds.",
        null,
        "Restaurants, Museums, Commercia, Tourist-Friendly, Pricey, Busy, Iconic Landmarks",
        "This densely populated and high-trafficked neighborhood is a busy mix of residential, commercial, and community spaces smack in the middle of central Los Angeles.",
        "A number of renowned museums and cultural pockets—including Little Ethiopia and Miracle Mile—contribute to its appeal.",
        "Traffic, culture, and urban commotion converge.",
        "Wilshire Boulevard is a main thoroughfare of central Los Angeles, making this neighborhood one of the city’s most trafficked. With museums aplenty and one of LA’s most famous shopping destinations—The Grove—nearby, Hancock Park-Wilshire is long on appeal.",
        "Culture, local institutions, and community sensibility.",
        "Museums and large office buildings populate the heart of Hancock Park-Wilshire, but the neighborhood offers charming shops, eateries, and LA institutions as well. After admiring the contemporary art at LACMA or strolling through the historic Original Farmer’s Market’s many food stalls, folks can head to the many other nearby neighborhoods thanks to the neighborhood's central location.",
        "Cultural icons around every corner.",
        "With so many important LA spots to hit in a single neighborhood, spending time in Hancock Park-Wilshire means really packing it in. You’ll never run out of new museum exhibits, but the fun certainly doesn’t stop there.",
        "A diverse grouping of homes, apartments, and duplexes to suit every style and price point.",
        "Hancock Park-Wilshire is home to a variety of residential and commercial spaces, from contemporary high-rise apartment buildings to upscale mid-century flats.",
        "The abundance of world-class museums within walking distance.",
        "A string of museums along Wilshire Boulevard represents one of the city’s most culturally-dense areas. Enjoy instant access to the renowned LACMA (Los Angeles County Museum of Art) and the Craft and Folk Art Museum, as well as the famed La Brea Tar Pits."
    ),
    new NeighborhoodItem(
        "neighborhood_item_5",
        "Los Angeles",
        "Malibu",
        "https://images.ctfassets.net/ypfe9l9zihcg/6aT8UVURsAwKCuooiEUAS4/32c648723fe56a46610d0a1d2bcd5e01/malibu-around-the-block-1.jpg",
        "Welcome to Malibu\n" +
        "Malibu owes its name to the Chumash, Native Americans who originally settled there and named it Humaliwo, which means \"the surf sounds loudly.” The area was highly secluded until 1929 when the Pacific Coast Highway was built. Now Malibu is a thoroughfare for many vacationers driving up and down the California coast, and a highly revered destination for Los Angeles locals.",
        null,
        "Beaches, Beautiful People, Healthy, Pricey, Seafood, Great Weather",
        "Cliffside homes, pristine beaches, and breathtaking views are hallmarks of this area.",
        "Malibu is home to many celebrities and entertainment industry tycoons. Serene and sun-soaked, the area represents the ultimate retreat.",
        "Secluded beaches, charming restaurants, and plenty of convertibles on the road.",
        "In addition to its residents, Malibu—aka the ’Bu—attracts surfers, swimmers, and sun-seeking daytrippers. It’s a neighborhood of active individuals who balance jogging along the beach and hiking the nearby canyons while enjoying oysters and fresh seafood at the many bustling restaurants along the coastline. Jagged cliffs, secluded coves, and miles of sparkling ocean draw people from all over the city to Malibu’s stunning shores.",
        "Serene, healthful, and beach-centric.",
        "Health and fitness reign among Malibu denizens, with beach-lovers breaking from athletic pursuits to bask in the area’s clear blue skies and less-populated beaches.",
        "Quiet, uneventful evenings.",
        "Malibu is best enjoyed during daytime drives along its coastline and picnics on the beach, with little action taking place once the sun goes down.",
        "Serene, beachfront oases.",
        "Malibu’s sparkling ocean views and expansive floor plans come with a steep price tag, with oceanfront homes commanding multi million-dollar sums.",
        "Coastal views, fresh seafood, and azure shoreline.",
        "Malibu features some of California’s most idyllic coastline, upscale retail, and delicious seafood, from healthy daily catches at Malibu Farm to crispy Neptune’s Net takeaway. The neighborhood’s pristine beaches are famed for a reason, representing some of California’s most stunning scenery."
    ),
    new NeighborhoodItem(
        "neighborhood_item_6",
        "Los Angeles",
        "South Bay",
        "https://downloads.ctfassets.net/ypfe9l9zihcg/47Hf4Te7HeBu9wT28IKxsj/291db4c55141315c8c32eae67bfcc397/MARKET_SMALL__1_.jpg",
        "Welcome to South Bay\n" +
        "Located a hop, skip, and a jump from the excitement of Los Angeles, the South Bay is attracts those in search of a friendly, active, oceanside lifestyle with all the comforts of city living",
        null,
        "",
        "The South Bay is calling your name.",
        "A prime spot to catch an ocean breeze, endless dining and shopping destinations, parks and trails galore, and a wide variety of architecture, the South Bay is in demand as one of Los Angeles’ list of places to call home.",
        "Sunsets, bike rides, and a laidback lifestyle.",
        "South Bay residents enjoy the area’s at-ease environment, delicious food, and of course, the shoreline. With numerous beach volleyball courts and prime surf conditions, the South Bay beaches attract ocean enthusiasts locally, regionally, and beyond.",
        "Family orientated, friendly, and outdoorsy.",
        "In Soho you'll find flagship retailers, eclectic boutiques, and homespun knick-knacks. The vibrant nightlife scene replaces the hectic shopping hustle upon sunset. There's something for everyone, from exclusive nightclubs to low-key dive bars.",
        "Existing at the epicenter of the urban jungle.",
        "Soho can get fairly crowded: Broadway draws droves of shoppers daily.",
        "Expansive single-family homes and contemporary condominiums.",
        "In the South Bay, a range of single-family homes, condominiums, and multifamily units can be found. Whether you’re looking for a tree-lined street in Palos Verdes, beachside condo, or modern beachfront home, the options are endless in the South Bay.",
        "Walkstreets, friendly neighborhoods, and accessibility to Los Angeles.",
        "While the beach and The Strand bring in the people, the walkstreets and neighborhoods are quiet, friendly, and appeal to all.",
    ),
    new NeighborhoodItem(
        "neighborhood_item_7",
        "Los Angeles",
        "Sunset  Strip",
        "https://images.ctfassets.net/ypfe9l9zihcg/3JWYhzmhGwuY8oYUom8ekS/b07b07fa2d47d3e3187b4b129334ae55/sunset-strip-around-the-block-1.jpg",
        "Welcome to Sunset Strip\n" +
        "Contrary to its reputation, Sunset Strip isn’t all studios and movie lots. This eclectic neighborhood is also home to classic restaurants, shops, and a number of iconic area institutions. The surrounding Hollywood Hills’ quiet, winding streets are dotted with homes, basking beneath its world-famous signage.",
        null,
        "Restaurants, Nightlife, Tourist-Friendly, Iconic Landmarks, Celebrities, Farmer's Market, Movie Studios",
        "Also known as Tinseltown, Hollywood and the Sunset Strip became the hub of the movie industry in the 1910s.",
        "The 1910s is when East Coast filmmakers began moving west to avoid patent lawsuits by Thomas Edison’s Motion Picture Patents Company. The excellent weather and varied geography of Los Angeles made it the perfect place for filming, and by the 1920s most major studios had set up shop here, where it still commands that influence today.",
        "Landmarks, nightlife, and iconic hillsides.",
        "Sunset Strip is home to many of LA’s most beloved destinations. On Sundays, the community hosts one of California’s first and largest farmer’s markets, where residents can score a taste of the city’s highly-regarded culinary culture.",
        "Bustling and brimming with entertainment.",
        "There is no shortage of entertainment in this neighborhood: theaters, museums, shopping, restaurants, and nightlife contribute to a dynamic, diverse culture. Sunset Strip is a neighborhood that has earned its right to kitsch: souvenir stores stand next to some of the city’s most storied eating establishments and uncanny celebrity impersonators stroll its famed, eponymous boulevard.",
        "Exposure to people from all over the world, all in your own backyard.",
        "The area’s restaurants, bars, and entertainment venues fill with patrons from all over the world who have come to witness movie magic in the making.",
        "Homes every bit as eclectic as their owners.",
        "The neighborhood is a mix of vintage and contemporary apartment buildings, bungalows, and beautiful, hillside houses brimming with character and boasting stunning views of downtown and all of Los Angeles.",
        "Living in a setting as legendary as its residents.",
        "Hollywood and Sunset Strip are known the world over as the birthplace of the film industry; its locals celebrate the area’s storied history and revel in its kitschy charm."
    ),
    new NeighborhoodItem(
        "neighborhood_item_8",
        "Los Angeles",
        "Studio City",
        "https://images.ctfassets.net/ypfe9l9zihcg/1Cw1RdmWRiwii0oY4G4os6/8adc09f41341abbb3bae59ad8f787ef1/studio-city-around-the-block-1.jpg",
        "Welcome to Studio City\n" +
        "A compelling blur of quaint and trendy, little has changed in this San Fernando Valley neighborhood since Mack Sennett began building what is now CBS Studios in 1927. Offering a small selection of hip boutiques, eateries, and nightlife spots, Studio City’s true appeal is revealed in its tree-lined streets and beautiful Santa Monica foothill scenery.",
        null,
        "Shopping, Dining, Celebrity Residents, Suburban, Quiet, Privacy, Great Views",
        "Studio City is a hub of mid-century architecture, and its many post-WWII buildings have been beautifully kept up.",
        "Pay a visit to the Laurelwood Apartments and the Goodwin House, both are the work of Rudolph Schindler, a student of Frank Lloyd Wright. The stretch of Valley Vista west of Radford Avenue is home to a number of impressive mid-century apartments.",
        "An intriguing mix of old and new.",
        "Studio City has a small town feel—trees line the streets, people greet one another, and everyone shops local. But it also supports a number of hip eateries and boutiques. Just stroll through Tujunga Village for a wonderfully varied shopping and dining experience: grab breakfast at Aroma Coffee and Tea Company, peruse the antiques at Elizabeth’s Place, then grab dinner and see a jazz performance at Italian restaurant Vitello’s.",
        "Mellow, quiet, and surprisingly hip.",
        "Perhaps it’s the influx of celebrities that keeps Studio City on its toes, but the mix of independent boutiques and delicious eateries among the neighborhood’s old-school mom-and-pop establishments give this area a fresh, not stodgy, sensibility.",
        "The occasional famous face.",
        "With a number of stars calling Studio City home, you’re likely to spot a celebrity every so often.",
        "Luxurious hillside houses and mid-century architectural gems.",
        "Studio City is a mix of upscale estates in the Santa Monica Mountains, expansive homes in the more residential areas, and highly regarded mid-century properties.",
        "Access to the city’s top sushi spots.",
        "A stretch along Ventura Boulevard, known as “sushi row,” is home to some of LA’s finest fish, including the Michelin-starred Asanebo."
    )
];