var config = {
  style: "mapbox://styles/jcccm/cliuk7ipc022w01p61k2u53vo",
  accessToken: "pk.eyJ1IjoiamNjY20iLCJhIjoiY2wwMG1wanFrMDYzdTNrcGhtcDg4MXlzZyJ9.7xxGLWAu72x0_vKWTYJFJw",
  showMarkers: true,
  markerColor: "#159895",
  inset: true,
  theme: "dark",
  use3dTerrain: false,
  auto: false,
  title: null,
  subtitle: null,
  byline: null,
  footer: null,
  // 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "intro",
      alignment: "left",
      hidden: false,
      title: null,
      fellow: null,
      image: null,
      description:
        "<a href='https://www.journalism.cuny.edu/centers/center-community-media/' target='_blank'><img src='./images/ccm-logo.png' style='max-width:200px; margin-left: 0 !important;' alt='Center for Community Media logo' /></a><hr class='hr-headline' /><span style='font-size: 0.9em; text-transform: uppercase; color: #15595a;'>Small Business Reporting Fellowship</span><p style='font-weight: 300; font-size: 1.8em;'>Second Stories</p><br />These stories follow the <a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>initial set</a> published under the Small Business Reporting Fellowship.<br /><br />As before, the fellows' articles feature businesses and owners found in their communities across the NYC area. The location given may be of just one of several businesses profiled in the fellow's story.<br /><br /><p style='font-family: Roboto Condensed; font-weight: 700; text-transform: uppercase; color: #15595a; font-size: 1em;'>Scroll down to begin ↓</p><hr class='hr-between' />📋 <span class='note'><a href='https://airtable.com/shrk8cWzC7Iv2kqBc' target='_blank'>See a list</a> of the stories in the order of this map</span><br />📍 <span class='note'><a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>First stories</a> | Second stories | <a href='https://ccmnewmarkj.github.io/sbrf-map/third/' target='_blank'>Third stories</span>",
      location: {
        center: [-74.05, 40.71],
        zoom: 9.5, //11.25,
        pitch: 0, // "Angle of the map view. 0 is straight down, and 60 is highly tilted.""
        bearing: 0, // "Degrees of rotation clockwise from North (0). Negative values represent counter-clockwise rotation."
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Story points",
          opacity: 1,
          //duration: 5000
        },
      ],
      onChapterExit: [
        {
          layer: "Story points",
          opacity: 0,
        },
      ],
    },
    {
      id: "drammeh",
      alignment: "right",
      hidden: false,
      title: "Ensuring Food Safety in New York City Restaurants: Challenges and Solutions in a Post-COVID Era",
      fellow: "Sheikh Musa Drammeh",
      outlet: "New York Parrot",
      place: "St. George, Staten Island (and more)",
      image: "./images/drammeh.png",
      storyLink:
        "https://www.newyorkparrot.com/2023/04/10/ensuring-food-safety-in-new-york-city-restaurants-challenges-and-solutions-in-a-post-covid-era/",
      businessTypes: "<span class='business-tags'>Restaurants</span>",
      location: {
        center: [-74.07702377, 40.64421512],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
    },
    {
      id: "vereau",
      alignment: "right",
      hidden: false,
      title: "Resilience Keeps Bodegas Alive",
      fellow: "Gery Vereau",
      outlet: "New York Hispano",
      place: "Washington Heights, Manhattan (and more)",
      image: "./images/vereau.png",
      storyLink: "https://newyorkhispano.net/resiliencia-mantiene-viva-a-las-bodegas/",
      businessTypes: "<span class='business-tags'>Bodegas</span>",
      location: {
        center: [-73.94392277, 40.83463201],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "rajan",
      alignment: "right",
      hidden: false,
      title: "Diamonds are Forever, Feel Merchants in New York City, Despite Buzz of Recession, Political Uncertainty",
      fellow: "Sujeet Rajan",
      outlet: "India Overseas Report",
      place: "Midtown Manhattan",
      image: "./images/rajan.png",
      storyLink:
        "https://www.indiaoverseasreport.com/diamonds-are-forever-feel-merchants-in-new-york-city-despite-buzz-of-recession-political-uncertainty/",
      businessTypes: "<span class='business-tags'>Jewelers</span>",
      location: {
        center: [-73.98018677, 40.75718181],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "phillip",
      alignment: "right",
      hidden: false,
      title: "Survival Stories - Black Fashion Designers Share Their Experiences During COVID",
      fellow: "Pearl Phillip",
      outlet: "New Black Voices, Caribbean American Weekly",
      place: "Flatiron, Manhattan (and more)",
      image: "./images/phillip.png",
      storyLink:
        "https://newblackvoices.nyc/survival-stories-black-fashion-designers-share-their-experiences-during-covid/",
      businessTypes: "<span class='business-tags'>Fashion Design</span>",
      location: {
        center: [-73.9893482, 40.74298249],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pastor",
      alignment: "right",
      hidden: false,
      title: "Gloria Cabrera Considers Her Options as Salon Turns 50",
      fellow: "Cristina Pastor",
      outlet: "The FilAm",
      place: "Gramercy, Manhattan",
      image: "./images/pastor.png",
      storyLink: "http://www.thefilam.net/archives/38344",
      businessTypes: "<span class='business-tags'>Salon</span>",
      location: {
        center: [-73.9797661, 40.73766842],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "taher",
      alignment: "right",
      hidden: false,
      title: "Devastation and Rampage of Life-Killing Covid-19: Radical Changes in Business, Lifestyle",
      fellow: "Abu Taher",
      outlet: "Bangla Patrika ",
      place: "Astoria, Queens (and more)",
      image: "./images/taher.png",
      storyLink: "https://banglapatrikausa.com/detail.php?bp=14071",
      businessTypes: "",
      location: {
        center: [-73.93093407, 40.75739411],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "rillera",
      alignment: "right",
      hidden: false,
      title: "Covid and the Filipino Business Owners’ Experience",
      fellow: "Ricky Rillera",
      outlet: "Philippine Daily Mirror",
      place: "Little Manila, Queens (and more)",
      image: "./images/rillera.png",
      storyLink: "https://www.philippinedailymirror.com/covid-and-the-filipino-business-owners-experience/",
      businessTypes: "",
      location: {
        center: [-73.89590006, 40.74632952],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chowdhury",
      alignment: "right",
      hidden: false,
      title: "Credit Problems are Preventing New Immigrants from Achieving the American Dream",
      fellow: "Ibrahim Chowdhury",
      outlet: "Prothom Alo ",
      place: "Jackson Heights, Queens",
      image: "./images/chowdhury.png",
      storyLink:
        "https://www.prothomalony.com/3646/%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A1%E0%A6%BF%E0%A6%9F-%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%80%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%86%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8",
      businessTypes: "<span class='business-tags'>Bar</span> &nbsp;<span class='business-tags'>Butcher</span>",
      location: {
        center: [-73.8929491, 40.7483122],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "panthi",
      alignment: "right",
      hidden: false,
      title: "Queens Restauranteur Navigates Covid Economy without Government Help",
      fellow: "Kishor Panthi",
      outlet: "NepYork",
      place: "Jackson Heights, Queens",
      image: "./images/panthi.png",
      storyLink: "https://nepyork.com/gorkhali-restaurant-in-queens-struggles-to-stay-afloat-without-federal-relief/",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.88824785, 40.74706907],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "karpan",
      alignment: "right",
      hidden: false,
      title: "Hipsters Take Ridgewood",
      fellow: "Andrew Karpan",
      outlet: "Bushwick Daily",
      place: "Ridgewood, Queens",
      image: "./images/karpan.png",
      storyLink: "https://bushwickdaily.com/ridgewood/ridgewood-gentrification-honey-moon-coffee/",
      businessTypes: "",
      location: {
        center: [-73.90669663, 40.70564397],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "bradley",
      alignment: "right",
      hidden: false,
      title: "As Bushwick’s Nenes Taqueria Grows in Brooklyn, Its Owner Eyes Birria Empire",
      fellow: "Anna Bradley-Smith",
      outlet: "Brownstoner, Brooklyn Paper, amNY",
      place: "Bushwick, Brooklyn",
      image: "./images/bradley.png",
      storyLink: "https://www.brownstoner.com/brooklyn-life/nenes-taqueria-bushwick-barclays-birria/",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.92777369, 40.70020338],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "nguyen",
      alignment: "right",
      hidden: false,
      title: "Unmasking the Skyrocketing Cost of Food in Brooklyn",
      fellow: "Thao Nguyen",
      outlet: "BK Reader",
      place: "Crown Heights, Brooklyn (and more)",
      image: "./images/nguyen.png",
      storyLink:
        "https://www.bkreader.com/featured-news/unmasking-the-skyrocketing-cost-of-food-in-brooklyn-pt-1-7071722",
      partTwo:
        "https://www.bkreader.com/business-innovation/unmasking-the-skyrocketing-cost-of-food-in-brooklyn-pt-2-7109567",
      businessTypes: "<span class='business-tags'>Grocery Stores</span>",
      location: {
        center: [-73.92777369, 40.70020338],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "edwards",
      alignment: "right",
      hidden: false,
      title: "Inside the Social Media Strategies of 5 Thriving Brooklyn Businesses",
      fellow: " Jessy Edwards",
      outlet: "BK Reader",
      place: "Coney Island, Brooklyn (and more)",
      image: "./images/edwards.png",
      storyLink:
        "https://www.bkreader.com/business-innovation/inside-the-social-media-strategies-of-5-thriving-brooklyn-businesses-pt-1-7012828",
      partTwo:
        "https://www.bkreader.com/business-innovation/inside-the-social-media-strategies-of-5-thriving-brooklyn-businesses-pt-2-7024760 ",
      businessTypes: "",
      location: {
        center: [-73.98407695, 40.57647817],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "lagunova",
      alignment: "right",
      hidden: false,
      title: "Three Years Later",
      fellow: "Marina Lagunova",
      outlet: "R. Reklama",
      place: "Brighton Beach, Brooklyn",
      image: "./images/lagunova.png",
      storyLink: "https://rusrek.com/mall/tri_goda_spustya_7958770/tampa/",
      businessTypes: "<span class='business-tags'>Medical Services</span>",
      location: {
        center: [-73.96719655, 40.57749357],
        zoom: 9.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chopra",
      alignment: "right",
      hidden: false,
      title:
        "Looking for Senior Care? We Found Several Nursing Homes and Adult Daycare Centers that Cater to South Asians",
      fellow: "Parveen Chopra",
      outlet: "The South Asian Times",
      place: "Hicksville, Long Island (and more)",
      image: "./images/chopra.png",
      storyLink:
        "https://thesouthasiantimes.info/looking-for-senior-care-we-found-several-nursing-homes-and-adult-daycare-centers-that-cater-to-south-asians/",
      businessTypes: "<span class='business-tags'>Adult Daycare Centers</span>",
      location: {
        center: [-73.53051102, 40.76183329],
        zoom: 9.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "end",
      alignment: "left",
      hidden: false,
      title: null,
      image: null,
      description:
        "Thank you to all the fellows for all the work and time they put into producing these stories. And thank you to the fellowship editors, Juana Ponce de León and John Rudolph. <br /><br />Also check out the maps for the <a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>first</a> and <a href='https://ccmnewmarkj.github.io/sbrf-map/third/' target='_blank'>third</a> round of stories, if you haven't already. <br /><br />If you have any questions, comments or feedback, please send them to <a href='mailto:ccm@journalism.cuny.edu'>ccm@journalism.cuny.edu</a>. <br /><hr class='hr-between' /><span class='note'>Map made using the <a href='https://github.com/mapbox/storytelling' target='_blank'>Mapbox Storytelling</a> template and <a href='https://www.mapbox.com/gallery' target='_blank'>Frank map style</a>.</span>",
      location: {
        center: [-74.02, 40.71],
        zoom: 9.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
