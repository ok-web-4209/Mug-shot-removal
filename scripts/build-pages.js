/**
 * Hoffman Legal — Content hub page generator
 *
 * Each entry in PAGES becomes /<slug>/index.html using the site's shared
 * design system (header, footer, sticky CTA, FAQ accordion, schema).
 *
 * To add a page: add an object to PAGES, run `node scripts/build-pages.js`,
 * then `npm run build:css`, add the URL to sitemap.xml, and link it from
 * the footer "Resources" list below and on the homepage.
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://hoffman.legal';
const PHONE_DISPLAY = '(954) 459-4236';
const PHONE_TEL = 'tel:9544594236';

// Footer "Resources" links — shown on every generated page.
const RESOURCES = [
  { slug: 'how-to-remove-a-mugshot-from-the-internet', label: 'How to Remove a Mugshot' },
  { slug: 'florida-mugshot-removal', label: 'Florida Mugshot Removal' },
  { slug: 'remove-mugshot-from-google', label: 'Remove Mugshot From Google' },
  { slug: 'florida-mugshot-law', label: 'Florida Mugshot Law (§ 901.43)' },
  { slug: 'mugshots-com-removal', label: 'Mugshots.com Removal' },
  { slug: 'arrests-org-removal', label: 'Arrests.org Removal' },
  { slug: 'busted-newspaper-removal', label: 'BustedNewspaper Removal' },
];

/* ============================== PAGE DATA ============================== */

const PAGES = [
  {
    slug: 'how-to-remove-a-mugshot-from-the-internet',
    title: 'How to Remove a Mugshot From the Internet (2026 Guide) | Hoffman Legal',
    metaDescription: 'Step-by-step attorney guide to removing your mugshot from the internet: find every copy, use state removal laws, demand takedowns, and deindex from Google.',
    breadcrumb: 'How to Remove a Mugshot From the Internet',
    badge: 'Attorney Guide',
    h1: 'How to Remove a Mugshot<br><span class="text-gradient">From the Internet</span>',
    subhead: 'A step-by-step guide from attorney David Hoffman — how mugshot sites work, what legal leverage you have, and how to get your arrest photo taken down for good.',
    schemaType: 'Article',
    sections: [
      {
        h2: 'Why Your Mugshot Is Everywhere',
        body: `
<p>When you were booked, your booking photo became a public record. Within days, commercial mugshot websites scraped it from the sheriff's office and republished it — often on dozens of sites at once. These sites are engineered to rank at the top of Google when someone searches your name, because that visibility is what pressures people into paying "removal fees."</p>
<p>The good news: you have more legal leverage than these sites want you to know. Removal is absolutely possible — and in many cases, the law is firmly on your side.</p>`,
      },
      {
        h2: 'Step 1: Find Every Copy of Your Mugshot',
        body: `
<p>Search your full name on Google, Bing, and DuckDuckGo — alone, and combined with words like "arrest," "mugshot," and your county. Check Google Images as well. Build a complete list of every URL where your photo appears. Common offenders include <a href="../mugshots-com-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Mugshots.com</a>, <a href="../arrests-org-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Arrests.org</a>, <a href="../busted-newspaper-removal/" class="text-gold-600 hover:text-gold-500 font-medium">BustedNewspaper.com</a>, JailBase, and Recently-Booked.</p>
<p>Removing your photo from one site while it remains on five others accomplishes little — search engines will simply surface the next copy.</p>`,
      },
      {
        h2: 'Step 2: Identify Your Legal Grounds',
        body: `
<p>Your removal strategy depends on your situation, and you usually have more than one path:</p>
<ul class="space-y-3 mt-4">
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span><strong class="text-gray-900">State mugshot laws.</strong> Florida's <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Statute § 901.43</a> lets anyone demand removal from commercial mugshot sites — no expungement required — with civil penalties of up to $1,000 per day for non-compliance.</span></li>
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span><strong class="text-gray-900">Dismissed or dropped charges.</strong> Most sites' own policies require removal when you provide court documentation showing the case was dismissed, dropped, or you were acquitted.</span></li>
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span><strong class="text-gray-900">Expungement or sealing.</strong> A court-ordered expungement is the strongest possible foundation — once granted, continued publication becomes legally actionable.</span></li>
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span><strong class="text-gray-900">Google's exploitative-removal policy.</strong> Google deindexes pages from sites that charge for removal, even when the site itself refuses to take the photo down.</span></li>
</ul>`,
      },
      {
        h2: 'Step 3: Demand Removal From Each Site',
        body: `
<p>Each website has its own process — some have removal forms, some require documentation by email, and some ignore requests entirely until legal pressure arrives. Follow each site's stated procedure exactly, keep records of every submission, and never pay a site to remove your own photo: in Florida and many other states, charging a removal fee is itself unlawful.</p>
<p>This is where an attorney changes the equation. A removal demand on law-firm letterhead, citing the specific statute and the penalties for non-compliance, gets a very different response than a polite request from an individual.</p>`,
      },
      {
        h2: 'Step 4: Remove Your Mugshot From Google',
        body: `
<p>Once the source page is down, Google may keep showing a cached result for weeks. Use Google's "Remove Outdated Content" tool to force a refresh, and its exploitative-removal form for sites that charge fees. Our dedicated guide covers this in detail: <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">How to Remove Your Mugshot From Google</a>.</p>`,
      },
      {
        h2: 'Step 5: Monitor for Re-Publication',
        body: `
<p>Mugshot sites re-scrape public records constantly, and a removed photo can reappear on a new domain months later. Set a Google Alert for your name, re-check image search periodically, and act quickly if the photo resurfaces. Under Florida law, republication after a proper removal demand exposes the site to penalties of up to $5,000 per day — which is why removals backed by an attorney tend to stay removed.</p>`,
      },
      {
        h2: 'DIY vs. Hiring an Attorney',
        body: `
<p>You can absolutely attempt removal yourself, and for a single cooperative site it may work. But most people face the same photo on five to fifteen sites, each with different procedures, slow response times, and little incentive to comply. Reputation-management companies will send requests on your behalf — but they cannot file lawsuits, issue legally binding demands, or recover statutory penalties and attorney's fees. A licensed attorney can.</p>
<p>I handle the entire process — every site, every search engine, with monitoring afterward — for one transparent flat fee. If you'd like an honest assessment of your situation, the consultation is free and confidential.</p>`,
      },
    ],
    faqs: [
      { q: 'Can I remove my mugshot from the internet for free?', a: 'Sometimes. If your charges were dismissed or your record was expunged, many sites will remove your photo at no charge when you follow their documented process. The difficulty is doing this across every site that has your photo, and compelling the ones that ignore you — which is where legal demands matter.' },
      { q: 'How long does it take to remove a mugshot?', a: 'Cooperative sites process documented requests in days to a few weeks. Sites that resist can take longer and may require legal escalation. Most complete removals across all sites finish within weeks, not months.' },
      { q: 'Can I remove my mugshot if I was convicted?', a: 'In Florida, yes — Statute § 901.43 allows anyone to demand removal from commercial mugshot websites regardless of the outcome of the case. Options in other states vary, and Google deindexing may still be available.' },
      { q: 'Will my mugshot come back after it is removed?', a: 'It can — these sites re-scrape public records constantly. That is why monitoring matters, and why Florida law imposes penalties of up to $5,000 per day for republication after a proper removal demand.' },
    ],
    related: ['florida-mugshot-removal', 'remove-mugshot-from-google', 'florida-mugshot-law'],
  },

  {
    slug: 'florida-mugshot-removal',
    title: 'Florida Mugshot Removal Attorney | Fast, Permanent | Hoffman Legal',
    metaDescription: 'Florida mugshot removal by a licensed Florida attorney. Statute § 901.43 lets anyone demand removal — no expungement needed. Free confidential consultation.',
    breadcrumb: 'Florida Mugshot Removal',
    badge: 'Florida Attorney',
    h1: 'Florida Mugshot Removal<br><span class="text-gradient">Backed by Florida Law</span>',
    subhead: 'Florida gives you one of the strongest mugshot removal laws in the country — and as a Florida attorney, David Hoffman enforces it. No expungement required.',
    schemaType: 'Service',
    serviceName: 'Florida Mugshot Removal',
    sections: [
      {
        h2: 'Florida Residents Have a Legal Right to Mugshot Removal',
        body: `
<p>If your arrest photo is on a commercial mugshot website, Florida law is on your side. Under <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Florida Statute § 901.43</a>, you can demand that any person or entity that publishes booking photos for commercial purposes remove yours — and it does not matter how your case ended. Dismissed, dropped, pled, even convicted: the right to demand removal applies to everyone.</p>
<p>Once a proper written demand is delivered, the site has <strong class="text-gray-900">10 days</strong> to comply. After that, it faces a civil penalty of up to <strong class="text-gray-900">$1,000 per day</strong>, plus your attorney's fees and court costs. If it removes the photo and later republishes it, the penalty rises to <strong class="text-gray-900">$5,000 per day</strong>.</p>`,
      },
      {
        h2: 'Why the Demand Has to Be Done Right',
        body: `
<p>The statute is powerful, but it is technical. The demand must include proof of your identity, identify the specific photo and where it appears, and be sent by registered mail to the registered agent of the publisher. Mugshot site operators know most people get these details wrong — and they ignore defective demands.</p>
<p>I prepare and serve statutory demands correctly the first time, track the 10-day clock, and when a site does not comply, I pursue the daily penalties and fees the statute provides. Sites respond very differently when non-compliance starts costing them money.</p>`,
      },
      {
        h2: 'The Process: What Working With Me Looks Like',
        body: `
<ul class="space-y-3 mt-2">
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">1</span><span><strong class="text-gray-900">Free confidential assessment.</strong> We locate every copy of your mugshot across websites and search engines and map the fastest removal path for each.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">2</span><span><strong class="text-gray-900">Statutory demands and takedowns.</strong> Formal § 901.43 demands, site removal procedures, DMCA notices, and dismissal/expungement documentation — whichever tool fits each site.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">3</span><span><strong class="text-gray-900">Search engine cleanup.</strong> Once sources are down, I force Google to drop the cached results and images so your name searches come back clean. See <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">removing your mugshot from Google</a>.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">4</span><span><strong class="text-gray-900">Monitoring.</strong> If the photo reappears, I act immediately — and republication after a statutory demand is where the $5,000-per-day penalty applies.</span></li>
</ul>`,
      },
      {
        h2: 'Stronger Still: Sealing or Expunging Your Florida Record',
        body: `
<p>Removal under § 901.43 takes the photo off commercial sites, but the underlying arrest record remains public. If you qualify, sealing or expunging your Florida record through FDLE and the courts erases the source itself — making any future publication legally actionable and giving you the right to lawfully deny the arrest in most circumstances. I handle the FDLE Certificate of Eligibility application and court petition as part of a complete cleanup, and can tell you in one call whether you likely qualify.</p>`,
      },
      {
        h2: 'Serving All of Florida',
        body: `
<p>My office is in Dania Beach, and I work with clients across Broward County, Miami-Dade, Palm Beach County, and the rest of Florida — Fort Lauderdale, Miami, West Palm Beach, Orlando, Tampa, Jacksonville, and everywhere in between. Mugshot removal is handled remotely, so wherever you are in Florida, the process is the same: one flat fee, every site, with a Florida attorney's authority behind every demand.</p>`,
      },
    ],
    faqs: [
      { q: 'Do I need my record expunged before removing my mugshot in Florida?', a: 'No. Florida Statute § 901.43 lets anyone demand removal from commercial mugshot websites regardless of the outcome of the case — no expungement, dismissal, or acquittal required. Expungement does make removal stronger and more permanent, and we often pursue both.' },
      { q: 'What if a website charges a fee to remove my mugshot?', a: 'In Florida, demanding payment to remove a booking photo is unlawful. Never pay. The statutory demand process compels removal without payment, and non-compliant sites face daily civil penalties plus attorney’s fees.' },
      { q: 'How much does Florida mugshot removal cost?', a: 'I charge one transparent flat fee based on the number of sites involved — never per-site fees, and never surprises. Your free consultation includes a complete assessment of every site where your photo appears.' },
      { q: 'How long does mugshot removal take in Florida?', a: 'The statute gives sites 10 days to comply after a proper demand is delivered. Most matters resolve within weeks, including search engine cleanup; resistant sites can take longer but face mounting daily penalties.' },
    ],
    related: ['florida-mugshot-law', 'how-to-remove-a-mugshot-from-the-internet', 'remove-mugshot-from-google'],
  },

  {
    slug: 'remove-mugshot-from-google',
    title: 'Remove Your Mugshot From Google Search & Images | Hoffman Legal',
    metaDescription: 'How to remove a mugshot from Google Search and Google Images: source removal, the Outdated Content tool, exploitative-site deindexing, and attorney options.',
    breadcrumb: 'Remove Mugshot From Google',
    badge: 'Google Removal',
    h1: 'Remove Your Mugshot<br><span class="text-gradient">From Google</span>',
    subhead: 'When someone Googles your name, the first result shouldn’t be an arrest photo. Here’s how mugshots actually come out of Google Search and Google Images.',
    schemaType: 'Article',
    sections: [
      {
        h2: 'Google Doesn’t Host Your Mugshot — But It Amplifies It',
        body: `
<p>Google is not the publisher of your booking photo; it indexes pages from mugshot websites and surfaces them when your name is searched. That distinction drives the whole removal strategy: to clean up Google, you generally remove the photo at its source first, then make Google reflect the change. Skipping the first step is the most common reason DIY attempts fail.</p>`,
      },
      {
        h2: 'Step 1: Take Down the Source Pages',
        body: `
<p>List every page where your photo appears — Google Search, Google Images, and other engines. Each hosting site has its own removal path, covered in our guides for <a href="../mugshots-com-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Mugshots.com</a>, <a href="../arrests-org-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Arrests.org</a>, and <a href="../busted-newspaper-removal/" class="text-gold-600 hover:text-gold-500 font-medium">BustedNewspaper.com</a>. In Florida, <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Statute § 901.43</a> compels commercial mugshot sites to remove your photo on demand — regardless of how your case ended.</p>`,
      },
      {
        h2: 'Step 2: Use Google’s Remove Outdated Content Tool',
        body: `
<p>After a source page is taken down or changed, Google can keep showing the stale result and cached image for weeks. Google's "Remove Outdated Content" tool (in Search Console's public removals page) tells Google to recrawl and drop results that no longer exist. Submit every URL you had removed — including the image URLs from Google Images. Refreshes typically process within days to two weeks.</p>`,
      },
      {
        h2: 'Step 3: Request Deindexing of Exploitative Sites',
        body: `
<p>Google has a specific policy against "exploitative removal practices": if a site charges money to remove your personal information or photo, Google will <em>deindex</em> those pages from search results on request — even though the photo technically remains on the site. For pay-to-remove mugshot sites, this is often the fastest way to get them out of your name search while legal pressure proceeds against the site itself.</p>`,
      },
      {
        h2: 'What About News Articles?',
        body: `
<p>News coverage is treated differently because of the First Amendment — Google will not deindex a legitimate news story simply because it is unflattering. But there are real options: many outlets will remove or update booking photos on request (especially when charges were dropped), and a dismissal or expungement substantially strengthens the ask. This is negotiation work where an attorney's letter carries weight.</p>`,
      },
      {
        h2: 'When to Bring in an Attorney',
        body: `
<p>If your photo is on one cooperative site, try the steps above yourself. If it is on many sites, on sites that ignore requests, or it keeps reappearing, the calculus changes. I combine statutory removal demands, DMCA notices, Google's removal tools, and — when needed — litigation, then monitor your name afterward. The consultation is free, confidential, and will give you an honest map of what your specific search results require.</p>`,
      },
    ],
    faqs: [
      { q: 'Can Google remove my mugshot directly?', a: 'Google removes results that violate its policies — including pages from sites that charge removal fees ("exploitative removals") and outdated results whose source pages are already down. For everything else, the photo must come off the source website first.' },
      { q: 'How long does it take for Google to update after a mugshot is removed?', a: 'After the source page is down, Google’s Remove Outdated Content tool typically processes refresh requests within a few days to two weeks. Without the tool, stale results can linger for a month or more.' },
      { q: 'My mugshot shows in Google Images but the website is gone. What do I do?', a: 'Submit the image URL through Google’s Remove Outdated Content tool. Cached images frequently outlive their source pages, and each image URL needs its own refresh request.' },
      { q: 'Can you remove a mugshot from a news article on Google?', a: 'Often, yes — not by forcing Google, but by negotiating with the outlet. Many newsrooms have policies to unpublish or update booking photos, particularly where charges were dismissed or the record was expunged.' },
    ],
    related: ['how-to-remove-a-mugshot-from-the-internet', 'florida-mugshot-removal', 'mugshots-com-removal'],
  },

  {
    slug: 'florida-mugshot-law',
    title: 'Florida Mugshot Law Explained — Fla. Stat. § 901.43 | Hoffman Legal',
    metaDescription: 'Florida Statute § 901.43 explained by a Florida attorney: who can demand mugshot removal, the 10-day deadline, $1,000-per-day penalties, and how to enforce it.',
    breadcrumb: 'Florida Mugshot Law (§ 901.43)',
    badge: 'Know Your Rights',
    h1: 'Florida’s Mugshot Law:<br><span class="text-gradient">Statute § 901.43 Explained</span>',
    subhead: 'Florida law forces commercial mugshot websites to take your booking photo down on demand — and fines them up to $1,000 a day if they don’t. Here’s how it works.',
    schemaType: 'Article',
    sections: [
      {
        h2: 'What the Law Says',
        body: `
<p>Florida Statute § 901.43, strengthened by the Legislature in 2021 (effective October 1, 2021), targets the mugshot-extortion business model directly. It applies to any person or entity that publishes Florida arrest booking photographs for a commercial purpose — the websites that scrape sheriff's office records and then solicit "removal fees."</p>
<p>Under the statute, you may send a written demand to remove your booking photo. The publisher then has <strong class="text-gray-900">10 days from receipt</strong> to take it down, without charge.</p>`,
      },
      {
        h2: 'The Teeth: Daily Penalties and Attorney’s Fees',
        body: `
<p>What makes § 901.43 unusual among state mugshot laws is its enforcement mechanism:</p>
<ul class="space-y-3 mt-4">
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span>A site that misses the 10-day deadline faces a civil penalty of up to <strong class="text-gray-900">$1,000 per day</strong> of continued publication.</span></li>
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span>A site that removes the photo and later <em>republishes</em> it faces up to <strong class="text-gray-900">$5,000 per day</strong>.</span></li>
<li class="flex gap-3"><svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg><span>In either case, the site is also liable for your <strong class="text-gray-900">reasonable attorney’s fees and court costs</strong> — meaning enforcement does not have to come out of your pocket.</span></li>
</ul>`,
      },
      {
        h2: 'Who Qualifies? Everyone.',
        body: `
<p>This is the point most people miss: § 901.43 does <em>not</em> require that your charges were dropped, that you were acquitted, or that your record was sealed or expunged. The right to demand removal from commercial mugshot sites belongs to anyone whose booking photo is published for a commercial purpose — including people who were convicted. Your case outcome affects other tools (like expungement), but not this one.</p>`,
      },
      {
        h2: 'The Formal Requirements — Where Demands Fail',
        body: `
<p>The statute requires the demand to be made in a specific way, and mugshot sites routinely ignore demands that get the details wrong. A valid demand must:</p>
<ul class="space-y-3 mt-4">
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">1</span><span>Be in writing and sent by <strong class="text-gray-900">registered mail</strong> to the registered agent of the person or entity publishing the photo;</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">2</span><span>Include <strong class="text-gray-900">proof of your identity</strong> confirming you are the person in the photograph;</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">3</span><span>Identify the <strong class="text-gray-900">specific photograph</strong> — the URL, booking number, or equivalent identifying information.</span></li>
</ul>
<p class="mt-4">Locating a shell company's registered agent, perfecting service, and documenting the 10-day clock is exactly the kind of procedural work attorneys do daily — and exactly where DIY demands tend to die quietly.</p>`,
      },
      {
        h2: 'What the Law Does Not Cover',
        body: `
<p>The statute is aimed at commercial mugshot publishers. It does not apply to law enforcement agencies publishing booking photos as part of their official functions, government public-records portals, or legitimate news organizations reporting on arrests. For those, different tools apply — government records can be addressed through sealing or expungement, and news outlets through negotiated unpublishing. See our guide to <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">removing mugshots from Google</a> for how each category is handled in search results.</p>`,
      },
      {
        h2: 'How I Enforce § 901.43 for Clients',
        body: `
<p>As a Florida attorney, I prepare statutory demands that comply with every formal requirement, serve them on the correct registered agents, and calendar the 10-day deadline. When sites comply — most do — your photo comes down free of charge. When they don't, the statute's daily penalties and fee-shifting provision give me real leverage to escalate at no additional cost to you. Combined with <a href="../florida-mugshot-removal/" class="text-gold-600 hover:text-gold-500 font-medium">complete Florida mugshot removal</a> across all sites and search engines, the result is a clean name search — permanently.</p>`,
      },
    ],
    faqs: [
      { q: 'Does Florida’s mugshot law apply if I was convicted?', a: 'Yes. Section 901.43 does not condition removal on the outcome of your case. Anyone whose booking photo is published for a commercial purpose can demand its removal from commercial mugshot websites.' },
      { q: 'Is it legal for a website to charge me to remove my mugshot in Florida?', a: 'No. Soliciting or accepting a fee to remove a booking photo is what the statute targets. Never pay a removal fee — the law compels free removal on proper demand, with daily penalties for non-compliance.' },
      { q: 'What happens if the website ignores my § 901.43 demand?', a: 'After the 10-day deadline, the publisher is subject to a civil penalty of up to $1,000 per day of continued publication, plus your reasonable attorney’s fees and court costs. Republication after removal carries up to $5,000 per day.' },
      { q: 'Does § 901.43 remove my mugshot from Google or news sites?', a: 'Not directly. It compels the commercial publisher to remove the photo; search results then need to be refreshed, and news organizations are exempt. A complete cleanup combines the statute with Google’s removal tools and, where appropriate, negotiated unpublishing.' },
    ],
    related: ['florida-mugshot-removal', 'how-to-remove-a-mugshot-from-the-internet', 'remove-mugshot-from-google'],
  },

  {
    slug: 'mugshots-com-removal',
    title: 'Mugshots.com Removal — Get Your Photo Taken Down | Hoffman Legal',
    metaDescription: 'How to remove your photo and record from Mugshots.com: the site’s removal process, required documents, timelines, and attorney enforcement when it stalls.',
    breadcrumb: 'Mugshots.com Removal',
    badge: 'Site Removal Guide',
    h1: 'Mugshots.com Removal:<br><span class="text-gradient">Take Back Your Name</span>',
    subhead: 'Mugshots.com is one of the oldest and most-searched mugshot sites on the internet. Here’s how records actually come off it — and what to do when the process stalls.',
    schemaType: 'Service',
    serviceName: 'Mugshots.com Removal',
    sections: [
      {
        h2: 'What Mugshots.com Is',
        body: `
<p>Mugshots.com aggregates booking photos and arrest data scraped from county records across the country, then optimizes each listing to rank prominently when your name is searched. Its operators have faced criminal prosecution in multiple states over the pay-for-removal business model — which tells you most of what you need to know about how the site has historically operated.</p>`,
      },
      {
        h2: 'The Site’s Official Removal Process',
        body: `
<p>Mugshots.com states it will remove or update records free of charge with supporting legal documents. The published process:</p>
<ul class="space-y-3 mt-4">
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">1</span><span>Search the site for your record and note the <strong class="text-gray-900">record number</strong>.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">2</span><span>From the main page, open <strong class="text-gray-900">"Record Removals/Updates"</strong> and copy the email address that matches your request type.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">3</span><span>Email your request with the correct <strong class="text-gray-900">legal documents</strong> attached — dismissal, acquittal, expungement, or sealing paperwork.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">4</span><span>Wait <strong class="text-gray-900">up to 10 business days</strong> for processing.</span></li>
</ul>`,
      },
      {
        h2: 'Where It Goes Wrong',
        body: `
<p>The documented process works best when your case ended favorably and your paperwork is exactly right. In practice, requests stall for predictable reasons: missing or mismatched documentation, records listed under name variants, multiple listings for one arrest, no response within the stated window — or a case outcome the site's policy doesn't cover at all.</p>
<p>If you're in Florida, none of that has to stop you. Under <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Statute § 901.43</a>, a commercial mugshot publisher must remove your photo within 10 days of a proper statutory demand — regardless of your case outcome — or face penalties of up to $1,000 per day plus attorney's fees.</p>`,
      },
      {
        h2: 'How I Get Mugshots.com Listings Removed',
        body: `
<p>I locate every listing (including duplicates and misspellings), assemble the documentation the site's own policy requires, and submit demands that cite the applicable law — Florida's statute for Florida arrests, and DMCA, defamation, and deindexing angles where they apply. If the listing comes down but Google still shows it, I force the search refresh; see <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">removing your mugshot from Google</a>. And because aggregator content reappears, monitoring is included — republication after a statutory demand exposes the site to $5,000-per-day penalties.</p>`,
      },
    ],
    faqs: [
      { q: 'Does Mugshots.com charge to remove a record?', a: 'The site states removal is free with proper legal documentation. Never pay a mugshot site a removal fee — in Florida and several other states, charging one is unlawful, and payment often just marks you as a target.' },
      { q: 'How long does Mugshots.com take to remove a record?', a: 'The site’s stated processing time is up to 10 business days from a complete, properly documented request. Incomplete requests are commonly ignored, which is the most frequent cause of "it’s been months" situations.' },
      { q: 'Can I get removed from Mugshots.com if I was convicted?', a: 'For Florida arrests, yes — Florida Statute § 901.43 compels commercial mugshot sites to remove your booking photo on proper demand regardless of case outcome. For other states, options depend on local law and Google’s exploitative-site policies.' },
      { q: 'My record came down but still shows on Google. Why?', a: 'Google caches results and images. After the source listing is removed, the cached result needs a refresh through Google’s Remove Outdated Content tool — otherwise it can linger for weeks.' },
    ],
    related: ['arrests-org-removal', 'busted-newspaper-removal', 'remove-mugshot-from-google'],
  },

  {
    slug: 'arrests-org-removal',
    title: 'Arrests.org Removal (incl. Florida.Arrests.org) | Hoffman Legal',
    metaDescription: 'How to remove your mugshot from Arrests.org and Florida.Arrests.org: the removal form, documentation, 5–30 day timelines, and stopping re-publication.',
    breadcrumb: 'Arrests.org Removal',
    badge: 'Site Removal Guide',
    h1: 'Arrests.org Removal:<br><span class="text-gradient">Including Florida.Arrests.org</span>',
    subhead: 'Arrests.org and its state subdomains — especially Florida.Arrests.org — are among the most heavily trafficked mugshot sites. Here’s how removal works, and how to make it stick.',
    schemaType: 'Service',
    serviceName: 'Arrests.org Removal',
    sections: [
      {
        h2: 'What Arrests.org Is',
        body: `
<p>Arrests.org republishes booking photos and arrest details scraped from county sheriff records, organized into state portals like Florida.Arrests.org. Florida is one of its largest sections — a direct consequence of Florida's broad public-records laws, which make booking data easy to harvest in bulk. Listings include your photo, charges, booking date, and personal details, all tuned to rank for your name.</p>`,
      },
      {
        h2: 'The Site’s Removal Process',
        body: `
<p>Arrests.org provides a removal form tied to your record ID — generally more reliable than emailing. The process:</p>
<ul class="space-y-3 mt-4">
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">1</span><span>Find your listing and note the <strong class="text-gray-900">Record ID</strong> in the page URL.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">2</span><span>Open the removal page for that record and choose a <strong class="text-gray-900">reason</strong> — sealed/expunged, charges dropped or not adjudicated guilty, or other grounds. There is also an option to strip your date of birth and address.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">3</span><span>Attach <strong class="text-gray-900">supporting documentation</strong> — court records, expungement order, or equivalent.</span></li>
<li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold flex items-center justify-center">4</span><span>Wait <strong class="text-gray-900">5 to 30 days</strong> for a decision.</span></li>
</ul>`,
      },
      {
        h2: 'The Re-Scraping Problem',
        body: `
<p>Arrests.org continuously re-harvests public records. A listing removed today can quietly return in a future scrape — same photo, new record ID — and most people never notice until a background check does. This is the single biggest reason one-time DIY removals from this site disappoint.</p>
<p>For Florida arrests, the fix has teeth: under <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Florida Statute § 901.43</a>, republication after a proper statutory removal demand exposes the publisher to civil penalties of up to <strong class="text-gray-900">$5,000 per day</strong>, plus attorney's fees. A statutory demand served correctly once protects you against the re-scrape permanently.</p>`,
      },
      {
        h2: 'How I Handle Arrests.org Removals',
        body: `
<p>I identify every listing across Arrests.org's state portals, file the site's removal requests with complete documentation, and serve § 901.43 statutory demands for Florida records so the removal is legally enforceable rather than discretionary. Then I clean up the search side — cached results and images — and monitor for re-publication. The full picture is covered in <a href="../florida-mugshot-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Florida mugshot removal</a> and <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">removing your mugshot from Google</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Is Arrests.org removal free?', a: 'The site’s own removal form is free to use with supporting documentation. Never pay any mugshot site a removal fee — in Florida, charging one is unlawful.' },
      { q: 'How long does Arrests.org take to remove a record?', a: 'Typically 5 to 30 days from a complete request through the removal form. Requests without proper documentation, or for outcomes the site’s policy doesn’t cover, are routinely denied or ignored — which is where statutory demands come in.' },
      { q: 'Can I be removed from Florida.Arrests.org if I was convicted?', a: 'Yes. Florida Statute § 901.43 applies to commercial mugshot publishers regardless of your case outcome. A properly served demand requires removal within 10 days, on penalty of up to $1,000 per day.' },
      { q: 'My Arrests.org listing came back after removal. What now?', a: 'If a § 901.43 demand was properly served, republication carries penalties of up to $5,000 per day plus attorney’s fees — strong leverage for immediate, permanent removal. This is why removals backed by a statutory demand tend to stay removed.' },
    ],
    related: ['mugshots-com-removal', 'busted-newspaper-removal', 'florida-mugshot-law'],
  },

  {
    slug: 'busted-newspaper-removal',
    title: 'BustedNewspaper.com Mugshot Removal | Hoffman Legal',
    metaDescription: 'How to remove your mugshot from BustedNewspaper.com: the removal form, what documentation works, options without a dismissal, and search engine cleanup.',
    breadcrumb: 'BustedNewspaper Removal',
    badge: 'Site Removal Guide',
    h1: 'BustedNewspaper.com<br><span class="text-gradient">Mugshot Removal</span>',
    subhead: 'BustedNewspaper publishes county-by-county booking photos that rank aggressively in Google. Here’s how listings come down — including when your case is still open or didn’t end in dismissal.',
    schemaType: 'Service',
    serviceName: 'BustedNewspaper.com Removal',
    sections: [
      {
        h2: 'What BustedNewspaper.com Is',
        body: `
<p>BustedNewspaper.com scrapes booking photos and arrest details from county sheriff's offices and republishes them in county-branded sections, with companion social media pages that spread listings further. Each listing is search-optimized, which is why a BustedNewspaper page so often sits near the top of a name search within days of an arrest.</p>`,
      },
      {
        h2: 'The Site’s Removal Policy',
        body: `
<p>BustedNewspaper offers a removal request form and generally honors documented requests when a case has resolved favorably: dismissal, dropped charges, acquittal, or a sealed/expunged record. Submit the form with your listing URL and court documentation attached, then allow processing time.</p>
<p>The catch is the word <em>resolved</em>. The site's policy makes removal contingent on the outcome of your case — which leaves people with open cases, plea outcomes, or convictions waiting indefinitely under the site's own rules.</p>`,
      },
      {
        h2: 'Options When the Policy Doesn’t Cover You',
        body: `
<p>Policy is not law. For Florida arrests, <a href="../florida-mugshot-law/" class="text-gold-600 hover:text-gold-500 font-medium">Statute § 901.43</a> compels commercial mugshot publishers to remove your booking photo within 10 days of a properly served demand — <strong class="text-gray-900">regardless of how your case ended</strong> — backed by penalties of up to $1,000 per day and attorney's fees. Where a site solicits payment for faster removal, Google's exploitative-removal policy adds a second lever: deindexing the listing from search results entirely.</p>`,
      },
      {
        h2: 'How I Handle BustedNewspaper Removals',
        body: `
<p>I inventory every listing (county pages, duplicates, social posts), file documented requests under the site's policy where it applies, and serve statutory demands where it doesn't. Once listings come down, I refresh Google so cached results and images disappear too — see <a href="../remove-mugshot-from-google/" class="text-gold-600 hover:text-gold-500 font-medium">removing your mugshot from Google</a> — and monitor your name afterward. One flat fee, every site, with legal authority behind every request; the broader process is described under <a href="../florida-mugshot-removal/" class="text-gold-600 hover:text-gold-500 font-medium">Florida mugshot removal</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Will BustedNewspaper remove my mugshot if my case was dismissed?', a: 'Generally yes — submit the site’s removal form with your listing URL and court documentation showing the dismissal. Keep records of the submission; incomplete requests are the most common reason for silence.' },
      { q: 'Can I get removed from BustedNewspaper with an open case or conviction?', a: 'Under the site’s own policy, removal is contingent on a favorable resolution. But for Florida arrests, Statute § 901.43 compels removal on proper demand regardless of case outcome — that’s the route I use for clients the policy leaves behind.' },
      { q: 'Does BustedNewspaper charge for removal?', a: 'Documented policy-based removals are free. Treat any solicitation of payment as a red flag: charging to remove a booking photo is unlawful in Florida, and pay-to-remove behavior also qualifies a site for Google deindexing.' },
      { q: 'The listing is gone but still appears in my Google results. What now?', a: 'That’s Google’s cache. Submit the dead URLs — including image URLs — through Google’s Remove Outdated Content tool to force a refresh; results typically clear within days to two weeks.' },
    ],
    related: ['mugshots-com-removal', 'arrests-org-removal', 'how-to-remove-a-mugshot-from-the-internet'],
  },
];

/* ============================== TEMPLATE ============================== */

function esc(s) {
  return s.replace(/"/g, '\\"');
}

function breadcrumbSchema(p) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: p.breadcrumb, item: `${SITE}/${p.slug}/` },
    ],
  }, null, 2);
}

function faqSchema(p) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }, null, 2);
}

function mainSchema(p) {
  const attorney = {
    '@type': 'Attorney',
    name: 'David Hoffman',
    url: SITE,
    telephone: PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '101 SW 1st Street, Suite CW12',
      addressLocality: 'Dania Beach',
      addressRegion: 'FL',
      postalCode: '33004',
    },
  };
  if (p.schemaType === 'Service') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: p.serviceName,
      name: p.serviceName,
      description: p.metaDescription,
      url: `${SITE}/${p.slug}/`,
      areaServed: 'US',
      provider: attorney,
    }, null, 2);
  }
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.breadcrumb,
    description: p.metaDescription,
    url: `${SITE}/${p.slug}/`,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    author: { '@type': 'Person', name: 'David Hoffman', url: SITE },
    publisher: attorney,
  }, null, 2);
}

function navHTML() {
  const items = [
    ['/#how-it-works', 'How It Works'],
    ['/#services', 'Services'],
    ['/#about', 'About'],
    ['/#testimonials', 'Reviews'],
    ['/#faq', 'FAQ'],
    ['/#contact', 'Contact'],
  ];
  return items.map(([href, label]) => `        <a href="${href}" class="nav-link text-sm text-gray-700 hover:text-gray-900 transition-colors relative group">
          ${label}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
        </a>`).join('\n');
}

function mobileNavHTML() {
  const items = [
    ['/#how-it-works', 'How It Works'],
    ['/#services', 'Services'],
    ['/#about', 'About'],
    ['/#testimonials', 'Reviews'],
    ['/#faq', 'FAQ'],
    ['/#contact', 'Contact'],
  ];
  return items.map(([href, label]) => `      <a href="${href}" class="mobile-nav-link text-2xl font-medium text-gray-900">${label}</a>`).join('\n');
}

function resourcesHTML(current) {
  return RESOURCES.map((r) => {
    const href = r.slug === current ? './' : `../${r.slug}/`;
    return `            <li><a href="${href}" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">${r.label}</a></li>`;
  }).join('\n');
}

function faqItemsHTML(p) {
  return p.faqs.map((f, i) => `          <div class="faq-item${i < p.faqs.length - 1 ? ' border-b border-light-200' : ''}">
            <button class="faq-trigger w-full flex items-center justify-between py-5 text-left group" aria-expanded="false">
              <span class="text-base font-medium text-gray-900 pr-8 group-hover:text-gold-500 transition-colors">${f.q}</span>
              <svg class="faq-chevron w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="faq-content hidden overflow-hidden">
              <p class="pb-5 text-gray-500">${f.a}</p>
            </div>
          </div>`).join('\n');
}

function relatedHTML(p) {
  return p.related.map((slug) => {
    const r = RESOURCES.find((x) => x.slug === slug);
    const page = PAGES.find((x) => x.slug === slug);
    return `          <a href="../${slug}/" class="glass-card rounded-2xl border border-light-200 p-6 shadow-sm hover:border-gold-500/40 transition-colors group">
            <h3 class="text-base font-semibold text-gray-900 group-hover:text-gold-600 transition-colors mb-2">${r.label}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">${page ? page.subhead.split('. ')[0] + '.' : ''}</p>
            <span class="inline-flex items-center gap-1 mt-4 text-sm text-gold-600 font-medium">Read more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
          </a>`;
  }).join('\n');
}

function sectionsHTML(p) {
  return p.sections.map((s) => `        <section class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-5">${s.h2}</h2>
          <div class="text-gray-500 leading-relaxed space-y-4">${s.body}
          </div>
        </section>`).join('\n\n');
}

function pageHTML(p) {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${esc(p.metaDescription)}">
  <meta name="author" content="David Hoffman">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${SITE}/${p.slug}/">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:locale" content="en_US">
  <meta property="og:url" content="${SITE}/${p.slug}/">
  <meta property="og:site_name" content="Hoffman Legal">
  <meta property="og:title" content="${esc(p.breadcrumb)} | Hoffman Legal">
  <meta property="og:description" content="${esc(p.metaDescription)}">
  <meta property="og:image" content="${SITE}/images/og-image.jpg">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.breadcrumb)} | Hoffman Legal">
  <meta name="twitter:description" content="${esc(p.metaDescription)}">
  <meta name="twitter:image" content="${SITE}/images/og-image.jpg">

  <!-- Tailwind CSS (pre-built — run \`npm run build:css\` after changing classes) -->
  <link rel="stylesheet" href="../css/tailwind.css">
  <link rel="stylesheet" href="../css/styles.css">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../images/favicon.svg">

  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
${mainSchema(p)}
  </script>
  <script type="application/ld+json">
${breadcrumbSchema(p)}
  </script>
  <script type="application/ld+json">
${faqSchema(p)}
  </script>
</head>

<body class="bg-light-50 text-gray-800 font-sans antialiased overflow-x-hidden">

  <!-- Scroll Progress Bar -->
  <div id="scroll-progress" class="fixed top-0 left-0 h-[2px] bg-gold-500 z-[100] transition-all duration-100" style="width: 0%"></div>

  <!-- Navigation -->
  <header id="nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5">
    <div class="max-w-container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
      <a href="/" class="text-xl font-bold tracking-tight text-gray-900 hover:text-gold-500 transition-colors">
        Hoffman <span class="text-gold-500">Legal</span>
      </a>

      <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
${navHTML()}
      </nav>

      <div class="flex items-center gap-3">
        <a href="${PHONE_TEL}" class="hidden lg:inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gold-600 transition-colors font-medium">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          ${PHONE_DISPLAY}
        </a>
        <a href="${PHONE_TEL}" class="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:bg-emerald-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20 call-now-btn">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          Call Now — 24/7
        </a>
        <a href="/#contact" class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-white font-semibold text-sm rounded-md hover:bg-gold-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-500/20">
          Free Consultation
        </a>
        <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-900" aria-label="Toggle menu" aria-expanded="false">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div id="mobile-menu" class="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl hidden opacity-0 transition-opacity duration-300 lg:hidden">
    <nav class="flex flex-col items-center justify-center h-full gap-8">
${mobileNavHTML()}
      <a href="/#contact" class="mt-4 px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg">Free Consultation</a>
    </nav>
  </div>

  <main>
    <!-- ===== PAGE HERO ===== -->
    <section class="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FAFAFA_70%)]"></div>
      </div>

      <div class="relative max-w-container mx-auto px-6 md:px-12 lg:px-16">
        <div class="max-w-3xl">
          <!-- Breadcrumb -->
          <nav aria-label="Breadcrumb" class="mb-6">
            <ol class="flex items-center gap-2 text-xs text-gray-400">
              <li><a href="/" class="hover:text-gold-500 transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li class="text-gray-500" aria-current="page">${p.breadcrumb}</li>
            </ol>
          </nav>

          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-600 text-xs font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            ${p.badge}
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.08] mb-6">${p.h1}</h1>
          <p class="text-lg md:text-xl text-gray-500 leading-relaxed mb-8">${p.subhead}</p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/#contact" class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-500/25">
              Get Your Free Consultation
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="${PHONE_TEL}" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-600 font-medium rounded-lg hover:bg-gold-500/5 transition-all duration-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              ${PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ARTICLE CONTENT ===== -->
    <article class="py-16 md:py-20 bg-white border-t border-light-200">
      <div class="max-w-3xl mx-auto px-6 md:px-8">
${sectionsHTML(p)}
      </div>
    </article>

    <!-- ===== FAQ ===== -->
    <section class="py-16 md:py-20 bg-light-50">
      <div class="max-w-3xl mx-auto px-6 md:px-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div class="glass-card rounded-2xl border border-light-200 p-6 md:p-8 shadow-sm">
${faqItemsHTML(p)}
        </div>
      </div>
    </section>

    <!-- ===== RELATED RESOURCES ===== -->
    <section class="py-16 md:py-20 bg-white border-t border-light-200">
      <div class="max-w-container mx-auto px-6 md:px-12 lg:px-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
${relatedHTML(p)}
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 cta-gradient-bg"></div>
      <div class="relative max-w-container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Take Back Your Name?</h2>
          <p class="text-lg text-gray-500 mb-8">Free, confidential consultation with attorney David Hoffman. Every site, one flat fee, real legal authority.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contact" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-500/25">
              Start Your Free Consultation
            </a>
            <a href="${PHONE_TEL}" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-600 font-medium rounded-lg hover:bg-gold-500/5 transition-all duration-200">
              Call ${PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="border-t border-light-200 bg-light-100">
    <div class="max-w-container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2">
          <a href="/" class="text-xl font-bold text-gray-900 tracking-tight">Hoffman <span class="text-gold-500">Legal</span></a>
          <p class="mt-4 text-gray-500 max-w-md">Attorney David Hoffman specializes exclusively in removing mugshots and arrest records from the internet. Legal authority you can trust.</p>
          <div class="mt-6 flex flex-col gap-2">
            <a href="${PHONE_TEL}" class="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>${PHONE_DISPLAY}</span>
            </a>
            <a href="mailto:david@hoffman.legal" class="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>david@hoffman.legal</span>
            </a>
            <p class="flex items-center gap-2 text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>101 SW 1st Street, Suite CW12, Dania Beach, FL 33004</span>
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
          <ul class="space-y-3">
            <li><a href="/#how-it-works" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">How It Works</a></li>
            <li><a href="/#services" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Services</a></li>
            <li><a href="/#about" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">About</a></li>
            <li><a href="/#testimonials" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Reviews</a></li>
            <li><a href="/#faq" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">FAQ</a></li>
            <li><a href="/#contact" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
          <ul class="space-y-3">
${resourcesHTML(p.slug)}
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gold-500 transition-colors">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-light-200 flex flex-col gap-3">
        <p class="text-xs text-gray-400">This page provides general information about mugshot removal and Florida law and is attorney advertising — it is not legal advice, and reading it does not create an attorney-client relationship.</p>
        <p class="text-xs text-gray-400">&copy; 2025 Hoffman Legal. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Mobile Sticky CTA -->
  <div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-40 lg:hidden translate-y-full transition-transform duration-300">
    <div class="glass-nav border-t border-light-200 bg-white/90 backdrop-blur-lg px-4 py-3">
      <div class="flex items-center gap-3">
        <a href="${PHONE_TEL}" class="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white font-semibold rounded-lg text-sm shadow-lg shadow-emerald-500/20 call-now-btn">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Call Now — 24/7
        </a>
        <a href="/#contact" class="flex-1 flex items-center justify-center gap-2 py-3 bg-gold-500 text-white font-semibold rounded-lg text-sm shadow-lg shadow-gold-500/20">
          Free Consult
        </a>
      </div>
    </div>
  </div>

  <!-- Main JS -->
  <script src="../js/main.js"></script>
</body>
</html>
`;
}

/* ============================== BUILD ============================== */

const root = path.join(__dirname, '..');
PAGES.forEach((p) => {
  const dir = path.join(root, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), pageHTML(p));
  console.log('built', p.slug + '/index.html');
});
