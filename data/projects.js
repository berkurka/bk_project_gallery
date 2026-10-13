// Add a project by appending one line to this array.
// name: card title
// description: one or two sentences, taken from that project's own README or page
// url: live site. The Open button uses this and opens a new tab.
//       If there is no live site yet, set url to the GitHub repo.
// repo: public GitHub repo for the smaller Code link. Omit it when the code is not public.
// image: optional screenshot in /public, for example "/thumbnails/name.jpg". Omit for no picture.
export const projects = [
  { name: "Partyz", description: "A small party-planning app: create a party, share invite links, and collect RSVPs (yes, maybe, or no, optional comment, guest counts).", url: "https://hello-world-theta-olive.vercel.app", repo: "https://github.com/berkurka/hello-world", image: "/thumbnails/partyz.jpg" },
  { name: "Guess & Show", description: "Twenty questions about Brazil (Adivinha e Mostra). The picture stays dark until you answer.", url: "https://luke-learn-about.grok.me", repo: "https://github.com/berkurka/adivinhe-e-mostra", image: "/thumbnails/guess.jpg" },
  { name: "Keep Sharp", description: "Keep Sharp is a multiple-choice math practice game for algebra, geometry, calculus, and GMAT-style quant.", url: "https://berkurka.github.io/bk_game_dev/", repo: "https://github.com/berkurka/bk_game_dev", image: "/thumbnails/keep-sharp.jpg" },
  { name: "HRA vs HSA", description: "A small static page that compares an employer HRA health plan with an HSA health plan for US federal tax year 2026. It estimates after-tax premiums, what you would pay at different levels of medical bills, which plan costs less, and how much would be left in the HSA.", url: "https://berkurka.github.io/Hsa-hra-calculator/", repo: "https://github.com/berkurka/Hsa-hra-calculator", image: "/thumbnails/hra-hsa.jpg" },
];
