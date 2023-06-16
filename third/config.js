var config = {
  style: "mapbox://styles/jcccm/cliuk7u6b023501p75a09hhtg",
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
        "<a href='https://www.journalism.cuny.edu/centers/center-community-media/' target='_blank'><img src='./images/ccm-logo.png' style='max-width:200px; margin-left: 0 !important;' alt='Center for Community Media logo' /></a><hr class='hr-headline' /><span style='font-size: 0.9em; text-transform: uppercase; color: #15595a;'>Small Business Reporting Fellowship</span><p style='font-weight: 300; font-size: 1.8em;'>Second Stories</p><br />These stories follow the <a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>initial set</a> published under the Small Business Reporting Fellowship.<br /><br />As before, the fellows' articles feature businesses and owners found in their communities across the NYC area. The location given may be of just one of several businesses profiled in the fellow's story.<br /><br /><p style='font-family: Roboto Condensed; font-weight: 700; text-transform: uppercase; color: #15595a; font-size: 1em;'>Scroll down to begin ↓</p><hr class='hr-between' />📋 <span class='note'><a href='https://airtable.com/shrk8cWzC7Iv2kqBc' target='_blank'>See a list</a> of the stories in the order of this map</span><br />📍 <span class='note'><a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>First stories</a> | <a href='https://ccmnewmarkj.github.io/sbrf-map/second/' target='_blank'>Second stories</a> | Third stories</span>",
      location: {
        center: [-74.05, 40.71],
        zoom: 9.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Story points",
          opacity: 1,
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
      id: "chopra",
      alignment: "right",
      hidden: false,
      title: "Indian Community Media Faces Challenges and Opportunities",
      fellow: "Parveen Chopra",
      outlet: "The South Asian Times",
      place: "Piscataway, NJ (and more)",
      image: "./images/chopra.png",
      storyLink: "https://thesouthasiantimes.info/indian-community-media-faces-challenges-and-opportunities/",
      businessTypes: "<span class='business-tags'>Media</span>",
      location: {
        center: [-74.4742724, 40.55224278],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
    },
    {
      id: "vereau",
      alignment: "right",
      hidden: false,
      title: "Expansion and Generational Change in the Emporium of Mexican Products on the East Coast",
      fellow: "Gery Vereau",
      outlet: "Reporte Hispano",
      place: "Passaic, NJ (and more)",
      image: "./images/vereau.png",
      storyLink:
        "https://reportehispano.com/2023/04/expansion-y-relevo-generacional-en-el-emporio-de-los-productos-mexicanos-de-la-costa-este/",
      businessTypes: "<span class='business-tags'>Wholesale</span>",
      location: {
        center: [-74.11769977, 40.86259721],
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
      title: "How Long Did You Wait to Eat a Dosa in New York City?",
      fellow: "Sujeet Rajan",
      outlet: "India Overseas Report",
      place: "Greenwich Village, Manhattan",
      image: "./images/rajan.png",
      storyLink: "https://www.indiaoverseasreport.com/how-long-did-you-wait-to-eat-a-dosa-in-new-york-city/",
      businessTypes: "<span class='business-tags'>Food Cart</span>",
      location: {
        center: [-73.99671453, 40.72905833],
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
      title: "Lessons Learned from Two Filipino Business Owners about Dealing with the Pandemic",
      fellow: "Ricky Rillera",
      outlet: "Philippine Daily Mirror",
      place: "Midtown Manhattan (and more)",
      image: "./images/rillera.png",
      storyLink:
        "https://www.philippinedailymirror.com/lessons-learned-from-two-filipino-business-owners-about-dealing-with-the-pandemic/",
      businessTypes: "",
      location: {
        center: [-73.98017907, 40.75681266],
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
      id: "drammeh",
      alignment: "right",
      hidden: false,
      title: "How and Why African Immigrants Successfully Manage Businesses in The Bronx",
      fellow: "Sheikh Musa Drammeh",
      outlet: "New York Parrot",
      place: "East Morrisania, Bronx (and more)",
      image: "./images/drammeh.png",
      storyLink:
        "https://www.newyorkparrot.com/2023/05/06/how-and-why-african-immigrants-successfully-manage-businesses-in-the-bronx/",
      businessTypes: "",
      location: {
        center: [-73.888835, 40.83641739],
        zoom: 15.5,
        pitch: 60,
        bearing: 0,
      },
    },
    {
      id: "chowdhury",
      alignment: "right",
      hidden: false,
      title: "The Grocery Store is the First Address for Immigrants to Exchange Identity",
      fellow: "Ibrahim Chowdhury",
      outlet: "Prothom Alo ",
      place: "Astoria, Queens (and more)",
      image: "./images/chowdhury.png",
      storyLink: "https://www.prothomalony.com/news/4083",
      businessTypes: "<span class='business-tags'>Grocery Stores</span>",
      location: {
        center: [-73.93095877, 40.75738365],
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
      title: "How Many Filipino-owned Businesses are in New York? No One Knows for Sure",
      fellow: "Cristina Pastor",
      outlet: "The FilAm",
      place: "Woodside, Queens (and more)",
      image: "./images/pastor.png",
      storyLink: "http://www.thefilam.net/archives/38529",
      businessTypes: "",
      location: {
        center: [-73.89571697, 40.74619726],
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
      title: "Immigration Status Bars Nepali Restaurant Owner from Federal Loans",
      fellow: "Kishor Panthi",
      outlet: "NepYork",
      place: "Jackson Heights, Queens",
      image: "./images/panthi.png",
      storyLink: "https://nepyork.com/immigration-status-bars-nepali-restaurant-owner-from-federal-loans/",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.89091193, 40.74715827],
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
      title: "Ridgewood Does Not Exist",
      fellow: "Andrew Karpan",
      outlet: "Bushwick Daily",
      place: "Ridgewood, Queens",
      image: "./images/karpan.png",
      storyLink: "https://bushwickdaily.com/ridgewood/ridgewood-does-not-exist/",
      businessTypes: "",
      location: {
        center: [-73.9070646, 40.70907734],
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
      title: "Little Pakistan’s Clothing Stores, Cultural Hubs for Community, Struggle With Rising Costs",
      fellow: "Anna Bradley-Smith",
      outlet: "Brownstoner",
      place: "Midwood, Brooklyn",
      image: "./images/bradley.png",
      storyLink:
        "https://www.brownstoner.com/brooklyn-life/little-pakistan-brooklyn-coney-island-avenue-retail-inflation-covid/",
      businessTypes: "<span class='business-tags'>Clothing Stores</span>",
      location: {
        center: [-73.9667375, 40.63135528],
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
      title: "Support in Difficult Times",
      fellow: "Marina Lagunova",
      outlet: "R. Reklama",
      place: "Brighton Beach, Brooklyn",
      image: "./images/lagunova.png",
      storyLink: "https://rusrek.com/mall/podderzhka_v_trudnuyu_minutu_7969961/",
      businessTypes: "<span class='business-tags'>Grocery Store</span>",
      location: {
        center: [-73.95851703, 40.57845557],
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
      id: "phillip",
      alignment: "right",
      hidden: false,
      title: "New York City’s Restaurant Industry Continues to Struggle in the Post-Pandemic Era",
      fellow: "Pearl Phillip",
      outlet: "Caribbean American Weekly, The Immigrant's Journal, Workers' World Today, New Black Voices",
      place: "New York, NY",
      image: "./images/phillip.png",
      storyLink:
        "https://caribbeanamericanweekly.com/new-york-citys-restaurant-industry-continues-to-struggle-in-the-post-pandemic-era/",
      businessTypes: "<span class='business-tags'>Restaurants</span>",
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

    // {
    //   id: "taher",
    //   alignment: "right",
    //   hidden: false,
    //   title: "Devastation and Rampage of Life-Killing Covid-19: Radical Changes in Business, Lifestyle",
    //   fellow: "Abu Taher",
    //   outlet: "Bangla Patrika ",
    //   place: "Astoria, Queens (and more)",
    //   image: "./images/taher.png",
    //   storyLink: "https://banglapatrikausa.com/detail.php?bp=14071",
    //   businessTypes: "",
    //   location: {
    //     center: [-73.93093407, 40.75739411],
    //     zoom: 15.5,
    //     pitch: 60,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: true,
    //   callback: "",
    //   onChapterEnter: [],
    //   onChapterExit: [],
    // },

    // {
    //   id: "nguyen",
    //   alignment: "right",
    //   hidden: false,
    //   title: "Unmasking the Skyrocketing Cost of Food in Brooklyn",
    //   fellow: "Thao Nguyen",
    //   outlet: "BK Reader",
    //   place: "Crown Heights, Brooklyn (and more)",
    //   image: "./images/nguyen.png",
    //   storyLink:
    //     "https://www.bkreader.com/featured-news/unmasking-the-skyrocketing-cost-of-food-in-brooklyn-pt-1-7071722",
    //   partTwo:
    //     "https://www.bkreader.com/business-innovation/unmasking-the-skyrocketing-cost-of-food-in-brooklyn-pt-2-7109567",
    //   businessTypes: "<span class='business-tags'>Grocery Stores</span>",
    //   location: {
    //     center: [-73.92777369, 40.70020338],
    //     zoom: 15.5,
    //     pitch: 60,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: true,
    //   callback: "",
    //   onChapterEnter: [],
    //   onChapterExit: [],
    // },

    // {
    //   id: "edwards",
    //   alignment: "right",
    //   hidden: false,
    //   title: "Inside the Social Media Strategies of 5 Thriving Brooklyn Businesses",
    //   fellow: " Jessy Edwards",
    //   outlet: "BK Reader",
    //   place: "Coney Island, Brooklyn (and more)",
    //   image: "./images/edwards.png",
    //   storyLink:
    //     "https://www.bkreader.com/business-innovation/inside-the-social-media-strategies-of-5-thriving-brooklyn-businesses-pt-1-7012828",
    //   partTwo:
    //     "https://www.bkreader.com/business-innovation/inside-the-social-media-strategies-of-5-thriving-brooklyn-businesses-pt-2-7024760 ",
    //   businessTypes: "",
    //   location: {
    //     center: [-73.98407695, 40.57647817],
    //     zoom: 15.5,
    //     pitch: 60,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: true,
    //   callback: "",
    //   onChapterEnter: [],
    //   onChapterExit: [],
    // },

    {
      id: "end",
      alignment: "left",
      hidden: false,
      title: null,
      image: null,
      description:
        "Thank you to all the fellows for all the work and time they put into producing these stories. And thank you to the fellowship editors, Juana Ponce de León and John Rudolph. <br /><br />If you haven't already, also check out the maps for the <a href='https://ccmnewmarkj.github.io/sbrf-map/first/' target='_blank'>first</a> and <a href='https://ccmnewmarkj.github.io/sbrf-map/second/' target='_blank'>second</a> round of stories. <br /><br />If you have any questions, comments or feedback, please send them to <a href='mailto:ccm@journalism.cuny.edu'>ccm@journalism.cuny.edu</a>. <br /><hr class='hr-between' /><span class='note'>Map made using the <a href='https://github.com/mapbox/storytelling' target='_blank'>Mapbox Storytelling</a> template and <a href='https://www.mapbox.com/gallery' target='_blank'>Frank map style</a>.</span>",
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
