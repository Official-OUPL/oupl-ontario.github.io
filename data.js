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
    { year:"2027", lifter:"Avraham Sagi",    school:"yorku",    sex:"M", bodyweight:73.4, squat:202, bench:132, deadlift:235 },
    { year:"2027", lifter:"Daniel Okonkwo",  school:"yorku",    sex:"M", bodyweight:82.8, squat:218, bench:150, deadlift:258 },
    { year:"2027", lifter:"Priya Raman",     school:"yorku",    sex:"F", bodyweight:56.0, squat:130, bench:73,  deadlift:162 },
    { year:"2027", lifter:"Marcus Bellini",  school:"yorku",    sex:"M", bodyweight:92.4, squat:242, bench:165, deadlift:272 },
    { year:"2027", lifter:"Hana Kobayashi",  school:"yorku",    sex:"F", bodyweight:62.8, squat:142, bench:78,  deadlift:174 },
    { year:"2027", lifter:"Nathan Cole",     school:"yorku",    sex:"M", bodyweight:66.0, squat:172, bench:115, deadlift:205 },

    { year:"2027", lifter:"Ethan Wu",        school:"uoft",     sex:"M", bodyweight:65.7, squat:188, bench:124, deadlift:222 },
    { year:"2027", lifter:"Sofia Marchetti", school:"uoft",     sex:"F", bodyweight:51.4, squat:120, bench:66,  deadlift:148 },
    { year:"2027", lifter:"Jamal Fraser",    school:"uoft",     sex:"M", bodyweight:82.9, squat:225, bench:152, deadlift:258 },
    { year:"2027", lifter:"Grace Lindqvist", school:"uoft",     sex:"F", bodyweight:68.1, squat:158, bench:85,  deadlift:188 },
    { year:"2027", lifter:"Omar Haddad",     school:"uoft",     sex:"M", bodyweight:105.0,squat:262, bench:180, deadlift:298 },

    { year:"2027", lifter:"Liam Doherty",    school:"waterloo", sex:"M", bodyweight:73.5, squat:208, bench:136, deadlift:242 },
    { year:"2027", lifter:"Nadia Petrov",    school:"waterloo", sex:"F", bodyweight:56.6, squat:135, bench:75,  deadlift:165 },
    { year:"2027", lifter:"Chen Wei",        school:"waterloo", sex:"M", bodyweight:92.9, squat:248, bench:162, deadlift:280 },
    { year:"2027", lifter:"Alice Thornbury", school:"waterloo", sex:"F", bodyweight:74.9, squat:158, bench:90,  deadlift:195 },
    { year:"2027", lifter:"Devin Achebe",    school:"waterloo", sex:"M", bodyweight:83.1, squat:212, bench:145, deadlift:250 },

    { year:"2027", lifter:"Sam Okafor",      school:"mcmaster", sex:"M", bodyweight:73.9, squat:198, bench:135, deadlift:230 },
    { year:"2027", lifter:"Ines Duarte",     school:"mcmaster", sex:"F", bodyweight:47.0, squat:108, bench:60,  deadlift:135 },
    { year:"2027", lifter:"Rowan Pytel",     school:"mcmaster", sex:"M", bodyweight:92.2, squat:230, bench:158, deadlift:265 },
    { year:"2027", lifter:"Leah Grimaldi",   school:"mcmaster", sex:"F", bodyweight:63.0, squat:140, bench:76,  deadlift:172 },

    { year:"2027", lifter:"Kyle Brennan",    school:"queens",   sex:"M", bodyweight:93.1, squat:235, bench:170, deadlift:268 },
    { year:"2027", lifter:"Maya Kowalski",   school:"queens",   sex:"F", bodyweight:68.9, squat:150, bench:82,  deadlift:182 },
    { year:"2027", lifter:"Theo Vance",      school:"queens",   sex:"M", bodyweight:82.0, squat:210, bench:148, deadlift:245 },
    { year:"2027", lifter:"Jonas Reid",      school:"queens",   sex:"M", bodyweight:119.4,squat:270, bench:188, deadlift:300 },
    { year:"2027", lifter:"Simone Adeyemi",  school:"queens",   sex:"F", bodyweight:57.0, squat:128, bench:70,  deadlift:158 },

    { year:"2027", lifter:"Ben Osei",        school:"tmu",      sex:"M", bodyweight:82.5, squat:212, bench:152, deadlift:250 },
    { year:"2027", lifter:"Fatima Zahra",    school:"tmu",      sex:"F", bodyweight:56.5, squat:124, bench:69,  deadlift:154 },
    { year:"2027", lifter:"Andre Silva",     school:"tmu",      sex:"M", bodyweight:65.4, squat:178, bench:120, deadlift:212 },
    { year:"2027", lifter:"Kwame Boateng",   school:"tmu",      sex:"M", bodyweight:104.0,squat:250, bench:172, deadlift:285 },

    { year:"2027", lifter:"Julien Tremblay", school:"ottawa",   sex:"M", bodyweight:74.0, squat:200, bench:138, deadlift:238 },
    { year:"2027", lifter:"Camille Roy",     school:"ottawa",   sex:"F", bodyweight:62.2, squat:138, bench:75,  deadlift:170 },
    { year:"2027", lifter:"Mateo Alvarez",   school:"ottawa",   sex:"M", bodyweight:93.0, squat:238, bench:160, deadlift:270 },
    { year:"2027", lifter:"Elise Fontaine",  school:"ottawa",   sex:"F", bodyweight:69.0, squat:152, bench:84,  deadlift:186 },
    { year:"2027", lifter:"Pierre Gagnon",   school:"ottawa",   sex:"M", bodyweight:83.0, squat:215, bench:150, deadlift:252 }
  ]
};
