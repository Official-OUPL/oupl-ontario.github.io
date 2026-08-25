# OUPL — Strongest School

Results site for the Ontario university powerlifting Strongest School meet. Four files plus a logo folder. No build step, no framework, no server.

```
index.html      the public site
admin.html      the editor presidents use
data.js         the data (the editor writes this for you)
README.md       this
logos/          one round PNG per club
```

## Format the site assumes

One meet per year, classic (raw) only. Each school's best five lifters by DOTS have their scores added together. Highest team total wins Strongest School.

Everything on the site follows from that: totals, DOTS scores, weight classes, which five lifters count for each school, and the team standings are all calculated. You never type a score.

## Putting it online for free

Use a GitHub **organization**, not a personal account. Whoever owns the repo controls the site, and presidents graduate — an org lets you add and remove admins without moving anything.

1. Create an org (e.g. `oupl-ontario`).
2. Create a repo inside it named exactly `oupl-ontario.github.io`.
3. Upload `index.html`, `data.js`, `README.md`, and the `logos` folder.
4. Settings → Pages → Source: `main` branch, root folder.

Live in about a minute at `https://oupl-ontario.github.io`. The org name becomes the URL, so agree on it before you create it — it's the one thing that's awkward to change later.

Add each president as an org member and they can edit `data.js` from the GitHub web interface. No local setup, no git commands.

## Updating results

Use the editor at `/admin.html` rather than editing this file by hand. It calculates everything, checks for mistakes, and writes a valid `data.js` for you. Hand-editing still works — the format is below — but the editor is faster and harder to break.

### Who can change what

There is no login, because a static site can't have one that means anything: any password in the page is readable by anyone who opens it. The real permission boundary is **GitHub write access** — the editor produces a file, but only someone with repo access can publish it.

So the two roles in the editor are a workflow split, not a lock:

- **Club president** — their own roster, club name, short name, accent colour, and logo. Publishes by copying their rows and sending them to the organiser.
- **Meet organiser** — scoring rules, meet years, adding and removing schools, and merging everyone's rosters. Publishes by downloading `data.js` and replacing it on GitHub.

If you want presidents publishing directly, add them to the GitHub org and they can upload `data.js` themselves. One person at a time, though — the file holds everyone's data, so whoever saves last overwrites the others. The send-your-rows-to-the-organiser route avoids that problem entirely and is the better default.

### The meet-day workflow

1. Each president opens `admin.html`, picks their club, enters their lifters, and clicks **Copy my rows**.
2. They send those rows to the organiser.
3. The organiser opens the editor as Meet organiser, pastes each set into **All rosters**, and clicks **Merge these rows**. Merging replaces that school's rows for that year, so re-sending a corrected roster is safe and can't duplicate anyone.
4. The organiser downloads `data.js` and uploads it to GitHub. The site is live within a minute.

Nothing autosaves. Changes live in the browser tab until the file is downloaded or the rows are copied.

### Logos

The editor's logo tool crops any image to a circle at the right size and names the file correctly. Download it, then upload it into `logos/` on GitHub — the browser can't write into the repo on its own.

### Hand-editing the file

**Adding this year's meet**

```js
editions: [
  { year:"2028", date:"2028-03-11", location:"Waterloo, ON", host:"waterloo" },
  { year:"2027", date:"2027-03-13", location:"Toronto, ON",  host:"yorku" }
]
```

Newest first. Once there's more than one year, a year picker appears in the header automatically and past winners fill in on their own.

**Adding a lifter**

```js
{ year:"2028", lifter:"Jane Doe", school:"yorku", sex:"F",
  bodyweight:63.2, squat:145, bench:80, deadlift:175 }
```

- `bodyweight` in kg, one decimal, as recorded at weigh-in
- `squat` / `bench` / `deadlift` are the best **successful** attempt in kg
- Bombed on a lift? Put `0`. That lifter is excluded from team scoring automatically and shows a dash on the site.
- `sex` is `"M"` or `"F"`
- Don't enter weight class, total, or DOTS — all three are computed

**Adding a school**

```js
{ id:"westernu", name:"Western University", short:"Western",
  club:"Western Barbell", color:"#4F2683", logo:"logos/westernu.png" }
```

Drop a square PNG in `logos/` named to match. The site masks it to a circle, so it doesn't need to be pre-cropped — but it does need to be roughly square or it'll get squashed.

Update the `updated` field at the top so people know the standings are current.

## Before you go live

- **Delete the sample results.** Every row in `results` is invented, including the ones with real school names attached. Clear the array.
- **Check the DOTS coefficients.** They're in `index.html` under `DOTS_COEF`. Run three or four real totals through the site and through a published DOTS calculator and confirm they match to a decimal. Every ranking depends on this and it's the one thing nobody will think to check.
- **Get the logos from the clubs directly.** The current files were cut out of screenshots, so they're low resolution. Ask each president for their original PNG or SVG — it takes one message and the site will look noticeably sharper.
- **Write the rules down.** The number of lifters that count, what happens on a tie, whether a school can enter unlimited lifters, and who verifies the numbers are all decisions to make before results are posted rather than after someone loses by two points.
