var config = {
  style: "mapbox://styles/jcccm/clfq88uvs000001ntqkh19q9c",
  accessToken: "pk.eyJ1IjoiamNjY20iLCJhIjoiY2wwMG1wanFrMDYzdTNrcGhtcDg4MXlzZyJ9.7xxGLWAu72x0_vKWTYJFJw",
  showMarkers: true,
  markerColor: "#159895", //"#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
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
        "<a href='https://www.journalism.cuny.edu/centers/center-community-media/' target='_blank'><img src='./images/ccm-logo.png' style='max-width:200px; margin-left: 0 !important;' alt='Center for Community Media logo' /></a><hr class='hr-headline' /><span style='font-size: 0.9em; text-transform: uppercase; color: #15595a;'>Small Business Reporting Fellowship</span><p style='font-weight: 300; font-size: 1.8em;'>First Stories</p><br />In February 2023, the Small Business Reporting Fellowship kicked off with a cohort of journalists (<a href='https://www.journalism.cuny.edu/2023/04/ccms-small-business-fellows-publish-first-set-of-stories/' target='_blank'>read their bios</a>) from across NYC and the metro area covering the stories of businesses and entrepreneurs in their communities.<br /><br />Take a tour through the NYC area of the small businesses and owners featured in the first round of the fellowship stories. The location given may be of just one of several businesses profiled in the fellow's story.<br /><br /><p style='font-family: Roboto Condensed; font-weight: 700; text-transform: uppercase; color: #15595a; font-size: 1em;'>Scroll down to begin ↓</p><hr class='hr-between' />📋 <span class='note'><a href='https://airtable.com/shrVkHX3gxbhJIoVE/tblFqhLiryOvHz2qb' target='_blank'>See a list</a> of the stories in the order of this map</span><br />📍 <span class='note'>First stories | <a href='https://ccmnewmarkj.github.io/sbrf-map/second/' target='_blank'>Second stories</a> | <a href='https://ccmnewmarkj.github.io/sbrf-map/third/' target='_blank'>Third stories</span>",
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
      id: "rillera",
      alignment: "right",
      hidden: false,
      title: "2 FilAms With Entrepreneurial Spirit Thrive Amid the Pandemic",
      fellow: "Ricky Rillera",
      outlet: "Philippine Daily Mirror",
      place: "Bloomfield, NJ (and more)",
      image: "./images/rillera.png",
      storyLink: "https://www.philippinedailymirror.com/2-filams-with-entrepreneural-spirit-thrive-amid-the-pandemic/",
      businessTypes:
        "<span class='business-tags'>Restaurant</span> &nbsp;<span class='business-tags'>Funeral Home</span>",
      location: {
        center: [-74.19101176, 40.8115822],
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
      title: "COVID Did Not Halt This Food Truck From Cruising",
      fellow: "Cristina DC Pastor",
      outlet: "The FilAm",
      place: "Jersey City, NJ<br /><span class='approximate-loc'>Map location approximate</span>",
      image: "./images/pastor.png",
      storyLink: "https://thefilam.net/archives/38239",
      businessTypes: "<span class='business-tags'>Food Truck</span>",
      location: {
        center: [-74.0879146, 40.7180135],
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
      title: "The Hard Road for Medallion Drivers in New York City",
      fellow: "Sujeet Rajan",
      outlet: "India Overseas Report",
      place:
        "Lexington Avenue, Manhattan (and more)<br /><span class='approximate-loc'>Map location approximate</span>",
      image: "./images/rajan.png",
      storyLink: "https://www.indiaoverseasreport.com/the-hard-road-for-medallion-taxi-drivers-in-new-york-city/",
      businessTypes: "<span class='business-tags'>Taxi Drivers</span>",
      location: {
        center: [-73.98223001, 40.74301222],
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
      id: "vereau",
      alignment: "right",
      hidden: false,
      title: "How the Super Peruvian Chicken Saved Peruvian Restaurants",
      fellow: "Gery Vereau",
      outlet: "New York Hispano, Reporte Hispano, Ayllu Times",
      place: "Astoria, Queens (and more)",
      image: "./images/vereau.png",
      storyLink:
        "https://newyorkhispano.net/https-newyorkhispano-net-como-el-super-pollo-peruano-salvo-a-la-gastronomia-peruana-de-la-pandemia/",
      businessTypes: "<span class='business-tags'>Restaurants</span>",
      location: {
        center: [-73.92196016, 40.76060136],
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
      title: "The Days of Cab Drivers: Past and Present",
      fellow: "Abu Taher",
      outlet: "Weekly Bangla Patrika",
      place: "Astoria, Queens (and more)",
      image: "./images/taher.png",
      storyLink: "https://banglapatrikausa.com/detail.php?bp=13846",
      businessTypes: "<span class='business-tags'>Taxi Drivers</span>",
      location: {
        center: [-73.9203175, 40.76622425],
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
      title: "Halal Businesses in New York City: An Investigative Report",
      fellow: "Sheikh Musa Drammeh",
      outlet: "New York Parrot",
      place: "Norwood, Bronx",
      image: "./images/drammeh.png",
      storyLink: "https://www.newyorkparrot.com/2023/02/20/halal-businesses-in-new-york-city-an-investigative-report/",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.96161847, 40.60808337],
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
      title: "Khalil Biryani of the Bronx in a Multi-Ethnic City",
      fellow: "Ibrahim Chowdhury",
      outlet: "Prothom Alo",
      place: "Parkchester, Bronx",
      image: "./images/chowdhury.png",
      storyLink:
        "https://www.prothomalony.com/3239/%E0%A6%AC%E0%A6%B9%E0%A7%81-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%97%E0%A7%8B%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A7%80%E0%A6%B0-%E0%A6%A8%E0%A6%97%E0%A6%B0%E0%A7%87-%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%82%E0%A6%95%E0%A6%B8%E0%A7%87%E0%A6%B0-%E0%A6%96%E0%A6%B2%E0%A6%BF%E0%A6%B2-%E0%A6%AC%E0%A6%BF%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8%E0%A6%BF",
      translation: "https://docs.google.com/document/d/1Oj6SnUvc4WzT83Q3kle-rlKvgW1V_xrVR2oCjyp9qcM/edit",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.85559418, 40.83554408],
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
      title: "Despite the Pandemic, There is a Gold Rush in the US Nepali Community",
      fellow: "Kishor Panthi",
      outlet: "NepYork",
      place: "Jackson Heights, Queens",
      image: "./images/panthi.png",
      storyLink: "https://nepyork.com/despite-the-pandemic-there-is-a-gold-rush-in-the-us-nepalese-community",
      businessTypes: "<span class='business-tags'>Jeweler</span>",
      location: {
        center: [-73.89146027, 40.74837116],
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
      title: "Gentrifying Ridgewood: A Shaft Into Yesterday’s New York",
      fellow: "Andrew Karpan",
      outlet: "Bushwick Daily",
      place: "Ridgewood, Queens",
      image: "./images/karpan.png",
      storyLink: "https://bushwickdaily.com/ridgewood/gentrifying-ridgewood-gottscheer-hall-rudys-small-businsses/",
      businessTypes: "<span class='business-tags'>Bar</span> &nbsp;<span class='business-tags'>Butcher</span>",
      location: {
        center: [-73.90544873, 40.70681205],
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
      title: "Bushwick Flower Stalls Create Hubs of Peace, Small Business Opportunities for Local Immigrants",
      fellow: "Anna Bradley-Smith",
      outlet: "Brownstoner",
      place: "Bushwick, Brooklyn",
      image: "./images/bradley-smith.png",
      storyLink: "https://www.brownstoner.com/brooklyn-life/bushwick-florists-immigrants-small-business-pandemic/",
      businessTypes: "<span class='business-tags'>Florists</span>",
      location: {
        center: [-73.92780228, 40.69284395],
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
      title: "Coping Through Crisis: A Look at the State of Brooklyn’s Black-Owned Restaurants",
      fellow: "Jessy Edwards",
      outlet: "BK Reader",
      place: "Downtown Brooklyn",
      image: "./images/edwards.png",
      storyLink:
        "https://www.bkreader.com/business-innovation/coping-through-crisis-a-look-at-the-state-of-brooklyns-black-owned-restaurants-pt-1-6812811",
      partTwo:
        "https://www.bkreader.com/business-innovation/coping-through-crisis-a-look-at-the-state-of-brooklyns-black-owned-restaurants-pt-2-6827584",
      businessTypes: "<span class='business-tags'>Restaurants</span>",
      location: {
        center: [-73.9847427, 40.69816202],
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
      title: "Three Years Post-Lockdown, Has Crowdfunding Saved Brooklyn’s Distressed Restaurants?",
      fellow: "Thao Nguyen",
      outlet: "BK Reader",
      place: "Gowanus, Brooklyn (and more)",
      image: "./images/nguyen.png",
      storyLink:
        "https://www.bkreader.com/business-innovation/three-years-post-lockdown-has-crowdfunding-saved-brooklyns-distressed-restaurants-pt-1-6748591",
      businessTypes: "<span class='business-tags'>Restaurants</span>",
      location: {
        center: [-73.9861939, 40.67890502],
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
      title: "The Art of How to Survive a Pandemic for Small Businesses",
      fellow: "Marina Lagunova",
      outlet: "R. Reklama",
      place: "Sheepshead Bay, Queens",
      image: "./images/lagunova.png",
      storyLink: "https://rusrek.com/mall/iskusstvo_biznesa_ili_kak_perezhili_pandemiyu_7946498/",
      businessTypes: "<span class='business-tags'>Restaurant</span>",
      location: {
        center: [-73.96161847, 40.60808337],
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
      id: "chopra",
      alignment: "right",
      hidden: false,
      title: "Beauty Parlors Struggle While Other Businesses See Recovery from Covid",
      fellow: "Parveen Chopra",
      outlet: "The South Asian Times",
      place: "Hicksville, Long Island",
      image: "./images/chopra.png",
      storyLink:
        "https://thesouthasiantimes.info/beauty-parlors-struggle-while-other-businesses-see-recovery-from-covid/",
      businessTypes: "<span class='business-tags'>Beauty Salons</span>",
      location: {
        center: [-73.51220613, 40.75767358],
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
      title: "Bold Entrepreneur: Meet Precious Williams, A Phoenix Rising – A Woman on Fire",
      fellow: "Pearl Phillip",
      outlet: "Caribbean American Weekly, The Immigrant's Journal, Workers' World Today, Business Matters Podcast",
      place: "New York, NY",
      image: "./images/phillip.png",
      storyLink:
        "https://caribbeanamericanweekly.com/bold-entrepreneur-meet-precious-williams-a-phoenix-rising-a-woman-on-fire/",
      businessTypes: "<span class='business-tags'>Entrepreneur</span>",
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
    {
      id: "end",
      alignment: "left",
      hidden: false,
      title: null,
      image: null,
      description:
        "Thank you to all the fellows for all the work and time they put into producing these stories. And thank you to the fellowship editors, Juana Ponce de León and John Rudolph. <br /><br />Also check out the maps for the <a href='https://ccmnewmarkj.github.io/sbrf-map/second/' target='_blank'>second</a> and <a href='https://ccmnewmarkj.github.io/sbrf-map/third/' target='_blank'>third</a> round of stories.  <br /><br />If you have any questions, comments or feedback, please send them to <a href='mailto:ccm@journalism.cuny.edu'>ccm@journalism.cuny.edu</a>. <br /><hr class='hr-between' /><span class='note'>Map made using the <a href='https://github.com/mapbox/storytelling' target='_blank'>Mapbox Storytelling</a> template and <a href='https://www.mapbox.com/gallery' target='_blank'>Frank map style</a>.</span>",
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
