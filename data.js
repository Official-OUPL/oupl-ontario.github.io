/* ============================================================
   OUPL — STRONGEST SCHOOL
   ------------------------------------------------------------
   This is the only file you edit. Everything else is layout
   and math.

   FORMAT
   One meet per year. Every school's top 5 lifters by DOTS have
   their scores added together. Highest team total wins Strongest
   School. Classic (raw) only.

   ADDING THIS YEAR'S RESULTS
   1. Add an entry to `editions` for the year.
   2. Add one row to `results` for every lifter who competed.
   3. Save. Totals, DOTS, weight classes, which five lifters
      count, and the team standings are all calculated.
   ============================================================ */

window.OUPL_DATA = {
  updated: "Sample data \u2014 not yet live",

  scoring: {
    // How many lifters from each school count toward the team score.
    countBestPerSchool: 5,
    // A lifter who misses all three attempts on any lift doesn't score.
    requireFullTotal: true
  },

  /* Member schools. `id` is internal and must be unique.
     `color` is the accent dot; `logo` is a file in /logos. */
  schools: [
    { id:"yorku",    name:"York University",         short:"York",     club:"Lions Strength",             color:"#E31837", logo:"logos/yorku.png" },
    { id:"uoft",     name:"University of Toronto",   short:"Toronto",  club:"U of T Powerlifting",        color:"#2E4A8C", logo:"logos/uoft.png" },
    { id:"waterloo", name:"University of Waterloo",  short:"Waterloo", club:"Waterloo Warriors Strength", color:"#F5C518", logo:"logos/waterloo.png" },
    { id:"mcmaster", name:"McMaster University",     short:"McMaster", club:"McMaster Barbell",           color:"#9B1B4E", logo:"logos/mcmaster.png" },
    { id:"queens",   name:"Queen's University",      short:"Queen's",  club:"Queen's Powerlifting",       color:"#C8102E", logo:"logos/queens.png" },
    { id:"ottawa",   name:"University of Ottawa",    short:"Ottawa",   club:"uOttawa Power",              color:"#A82234", logo:"logos/ottawa.png" },
    { id:"tmu",      name:"Toronto Metropolitan",    short:"TMU",      club:"TMU Barbell",                color:"#E8E8E8", logo:"logos/tmu.png" }
  ],

  /* One entry per year. Newest first. */
  editions: [
    { year:"2027", date:"2027-03-13", location:"Toronto, ON", host:"yorku" }
  ],

  /* ---- SAMPLE ROWS. Delete every one of these before you go live. ----
     bodyweight in kg to one decimal, as recorded at weigh-in.
     squat / bench / deadlift = best SUCCESSFUL attempt in kg.
     Bombed on a lift? Put 0 — that lifter is excluded automatically.
     sex is "M" or "F". Don't enter weight class or total. */
  results: [
   { year:"2027", lifter:"Avraham Sagi", school:"yorku", sex:"M", bodyweight:73.4, squat:197.5, bench:130, deadlift:225 },

  ]
};
