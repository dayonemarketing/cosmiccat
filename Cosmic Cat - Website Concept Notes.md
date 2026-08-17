# Cosmic Cat Claw Arcade
## Website concept and build notes

**Day One Marketing, updated August 17 2026**

**Deliverable:** the six page files sitting beside this document in `04 - Website`. Open `index.html` and the whole site runs from the folder, no server needed. Keep `assets/` next to the HTML files or nothing renders.

| File | Page |
|---|---|
| `index.html` | Home |
| `tokens-and-vip.html` | Tokens, VIP membership, gift cards |
| `parties.html` | Birthday parties and Squishy Bar events |
| `is-it-rigged.html` | The trust page |
| `privacy-policy.html` | Privacy Policy |
| `terms-of-service.html` | Terms of Service |
| `assets/` | `styles.css`, `app.js`, and the two logo PNGs |

This document is the record of what is proposed versus what is confirmed. Everything flagged **PROPOSED** below needs a yes from the client before launch.

---

## What each page is for

Everything on these pages is real content: real hours, real address, real VIP terms, real Squishy Bar pricing, the real 4.9 / 714 Google rating.

| Page | Job it does |
|---|---|
| **Home** | Convince a parent this is fun, fair, safe, and affordable, then send them to tokens or parties |
| **Tokens & VIP** | The pricing page the business does not currently have. Tokens, membership, gift cards |
| **Parties** | The $250 to $675 product, plus the full Squishy Bar explainer |
| **Is it rigged?** | The trust page. Lucky Puppy's best asset, rebuilt better |
| **Privacy / Terms** | Adapted from the owner's other business, with six sections written new |

---

## The design direction, and why

**Brand assets are the constraint, not a suggestion.** Every color comes from the 2025 style guide: `#0CE5FF`, `#5BD2F7`, `#292BD8`, `#FF74CE`, `#FF22B1`. The logo files are the official 2024 horizontal and vertical PNGs.

**The visual system is the logo's own construction.** The mark is kawaii sticker art with a thick white die-cut border and a drop shadow. So every card, button, price tier and plush on the site is built as a sticker: white outline, soft shadow, slight tilt. That is a system derived from the brand, not a template borrowed from somewhere else.

**Space, not clouds.** The client likes Lucky Puppy, and Lucky Puppy's whole visual language is daytime sky, sun, and clouds. Cosmic Cat is an astronaut cat holding a planet. Going space keeps the fun without producing a copy: a deep cosmic navy for the hero and the anchor bands, bright clean cyan and white for everything a parent has to read. Bright and clean is what "safe place for my kid" looks like.

**The signature element is a working claw machine.** The hero is a CSS and SVG claw machine that plays itself on page load: the claw tracks across, drops, grabs a plush, and delivers it to the prize chute. It replays on a press of the cabinet button. It is not decoration. It is the site's entire promise acted out in four seconds before anyone reads a word, and it sits directly above the headline "Nobody leaves empty-handed."

**Typography.** Display face is Bree Serif, the closest free web stand-in for Gelica Semi Bold from the style guide. Body is Hanken Grotesk. DM Mono is confined to three readouts inside the claw machine cabinet. **License Gelica before launch** and change `--font-display` in `assets/styles.css`.

**Accessibility.** Contrast checked programmatically across all six pages against WCAG AA. Visible keyboard focus rings. Reduced motion respected: with the OS setting on, the claw does not animate, the prize is simply already in the chute. Nobody in this competitive set has an accessibility statement, so this is also a differentiator.

---

## Pricing PROPOSED, not yet approved

Everything below is flagged on the page itself with a pink **"Proposed pricing, pending client sign-off"** badge, so you can walk the client through it without them thinking it is already decided.

### Token ladder

| Package | Price | Tokens | VIP bonus | Effective rate |
|---|---|---|---|---|
| Star Hop | $5 | 5 | +1 | $1.00 |
| Moon Jump | $10 | 12 | +3 | $0.83 |
| **Orbit** | **$20** | **25** | **+5** | **$0.80** |
| Deep Space | $50 | 68 | +12 | $0.74 |
| Supernova | $100 | 140 | +25 | $0.71 |

**The reasoning: do not compete on price.** Every claw arcade in Las Vegas prices entry at exactly $1.00 a token, and $100 buys 135 to 140 tokens at all of them. That curve is uniform enough that undercutting it just donates margin without buying a single new customer. So the ladder matches the market, and the fight moves to the two columns competitors leave empty:

1. **The VIP bonus column sits inside the pricing table.** Lucky Puppy does this and it turns the pricing page into a membership sales page. Every time a parent looks at a price they see what it would cost as a member.
2. **The guaranteed-win floor.** Covered below.

The $20 tier is flagged "Most families pick this" because $20 for 23 to 25 tokens is the verified average direct walk-in ticket across the market. Anchoring there is honest and it moves people up from $10.

### Party packages

| Package | Price | Guests | Tokens | Time |
|---|---|---|---|---|
| Little Comet | $250 | 8 | 275 | 90 min, reserved table |
| **Cosmic Crew** | **$425** | **12** | **475** | **90 min, 2 hosts** |
| Full Buyout | $675 | 20 | 850 | 2 hrs, whole arcade |

Add-ons: extra 30 minutes $95, extra host $50, large plush $50, XXL plush $100, table settings $10 per guest, Squishy Bar craft add-on $25 per child, $100 deposit applied to the balance.

Benchmarked against Lucky Puppy ($300 / $400 / $500 for 400 / 550 / 700 tokens and one hour) and Pick Me ($200 / $350 for 220 / 400 tokens and 90 minutes). Little Comet beats Pick Me's entry on tokens. Full Buyout goes where Lucky Puppy's top tier stops, at two hours private instead of one.

Private buyouts run **weekday mornings before open and weekday evenings after close**. That is Lucky Puppy's move and it is a good one: it sells hours that currently generate nothing without giving up a single retail minute on a Saturday.

### The No Empty Hands Promise

Spend $20 in tokens without winning anything, walk to the counter, pick a plush off the promise shelf.

This is the single most valuable thing on the site and it is not really a prize rule. It is review protection. It stops the one-star "I spent $40 and my daughter won nothing" review from ever being typed, and a 4.9 built on 714 reviews is the most valuable asset this business owns. Lucky Puppy runs a Prize Wheel version of this, Pick Me runs a $10 version. Cosmic Cat has no floor at all today.

Threshold and mechanics need client sign-off. So does the trade-up ladder on the Is it rigged? page (4 smalls to a medium, 6 to a large, 12 to a jumbo, 20 to an XXL).

---

## Carried over from the current site, unchanged

- **VIP membership**: $20/mo, 30 tokens monthly, 20 birthday tokens, never expire, free Squishmallow at signup, cancel anytime
- **Squishy Bar events**: Full Box $45 per child (keepsake box, 5 squishies), Mini Box $35 per child (mini box, 3 squishies), Thursday through Monday, 10:30 and 11:30 sessions, walk-ins after 12:30
- **Newsletter 10% off**, which is genuinely the best signup incentive on any site in this competitive set. It has been moved out of the basement and given a real block.
- Hours, address, phone

---

## Competitor features deliberately taken

| Feature | Who runs it | What we did |
|---|---|---|
| The "are your machines rigged" page | Lucky Puppy | Rebuilt in Cosmic Cat's voice, at its own URL, with the progressive-grip practice named plainly and a token-back rule attached |
| VIP bonus column inside pricing | Lucky Puppy | Same mechanic, on both the homepage ladder and the pricing page |
| Guaranteed-win floor | Lucky Puppy, Pick Me | The No Empty Hands Promise, given its own section and a gold band |
| Published trade-up ladder | All six competitors | Four tiers on the Is it rigged? page. Cosmic Cat is the only operator without one |
| Weekday before-open / after-close buyouts | Lucky Puppy | Full Buyout package |
| Named packages instead of a price list | Claw World | Star Hop through Supernova |

## Ground nobody in this market holds

All of it is on this concept: reviews shown on the site, a parent-safety section, published play pricing, gift cards, online token purchase, an event calendar with ticketing, how-to-play content, an accessibility statement.

---

## Shopify mapping

Five SKU types, which is what the proposal's Shopify line item actually buys:

1. **Token packages** as five simple products. Balance loads to a customer account and scans at the counter.
2. **VIP membership** as a subscription. Flagged in the proposal already: Shopify Subscriptions needs a third-party app for recurring billing, and migrating existing in-person members is its own project. Do not commit to a migration date in writing before that conversation.
3. **Party packages** as three products with the add-ons as variants or line-item properties, plus a $100 deposit product and a date-picker app.
4. **Squishy Bar events** as ticketed products with session times and seat caps.
5. **Gift cards**, native to Shopify, effectively free to turn on.

Every "Add to cart", "Start membership", "Check dates" and "Send a gift card" button is already sitting where its Shopify handler goes.

---

## Third-party embeds, and what has to happen before launch

**Google Reviews (Elfsight).** The widget is installed in the Reviews section of `index.html`, with `platform.js` in every page head. Three launch checks:

1. Authorise `cosmiccatarcade.com` in the Elfsight dashboard, or it refuses to render on the live domain.
2. Confirm the plan tier hides the "Powered by Elfsight" badge if that matters to the client.
3. It syncs on Elfsight's schedule, roughly daily, not instantly.

The reviews heading deliberately does **not** hardcode 4.9 or 714, so those numbers can never go stale. They still appear hardcoded in the hero stat and the trust strip, where the widget cannot reach. Those two need a manual bump occasionally, or we drop the number from both.

**Google Map.** A keyless Google share embed, so no API key sits in the files and there is nothing scrapeable. If the build needs the Maps Embed API instead (fixed place_id, custom zoom, styling), swap the iframe src per the comment directly above it in `index.html`, and **restrict that key to the cosmiccatarcade.com HTTP referrer in Google Cloud**. An unrestricted Maps key in public HTML is a billing risk on the paid Maps APIs even though the Embed API itself is free. A brand panel sits behind the map and only lifts once Google is confirmed reachable, so an offline preview never shows an empty frame.

**Email aliases.** The site points at three addresses. All three must exist in Google Workspace before launch or the legal pages link to dead mailboxes:

- **info@** — general, SMS HELP replies, newsletter opt-out, accessibility help
- **parties@** — party and event bookings, on the Parties page and in the footer
- **privacy@** — privacy requests, data access and deletion, COPPA reports, photo takedowns

The old `cosmiccatarcade@hotmail.com` appears nowhere in the build.

---

## Privacy Policy and Terms: read this before sending

**These are adapted templates, not legal advice.** Both follow the structure and wording of the owner's other business, with Cosmic Cat details substituted, and no reference to that business appears anywhere in the page copy. **Have counsel review before launch**, particularly the auto-renewal wording, since subscription disclosure rules bite based on where the customer lives rather than where the business is.

**Six sections were written new**, because the source is a bus-tour café with no children as customers, no subscription, no stored value and no prizes:

| New section | Why it had to exist |
|---|---|
| Children's Privacy | COPPA. The entire customer base is parents of kids |
| Photography and Media | They post to 14,300 Instagram followers from a room full of other people's children |
| Visiting the Arcade | Supervision, conduct, right to refuse. Physical premises |
| Tokens, Memberships, Gift Cards | No cash value, never expire, and VIP auto-renewal disclosure |
| Bookings, Deposits, Cancellations | Makes the 7-day refund rule enforceable |
| Prizes and the No Empty Hands Promise | A public win guarantee with no limits is an open liability |

Two structural notes: the source Terms open with a blanket "you are at least 18", which is correct for a bus tour and wrong for a family arcade, so it was reworded to apply to accounts and purchases while all ages stay welcome on site. And the deposit is written generically as "a deposit" in Terms so it never contradicts the $100 shown on the Parties page if that number changes.

**PROPOSED and needing confirmation:** the effective date (currently a placeholder), and the supervision wording "children supervised by a parent, guardian, or responsible adult".

---

## Build details worth knowing

- **Type.** Display face is Bree Serif, the closest free web stand-in for Gelica Semi Bold from the style guide. Body is Hanken Grotesk. **License Gelica before launch** and change one variable, `--font-display`, in `assets/styles.css`. Fonts are embedded in the stylesheet, so pages render identically offline.
- **DM Mono** is confined to three readouts inside the claw machine cabinet: the coin slot, the prize chute label, and the status line. Everywhere else uses the body face in bold with tracking.
- **Opening-hours banner** is live. It reads the visitor's clock, converts to Las Vegas time, distinguishes today from tomorrow, warns at 45 minutes to close, and re-ticks every minute. Hours live in a single `HOURS` array in `assets/app.js`. In production, drive it from the Google Business Profile hours so holiday closures update everywhere at once.
- **Accessibility.** Contrast checked programmatically across all six pages against WCAG AA. Visible keyboard focus rings, reduced motion respected. Nobody in this competitive set has an accessibility statement, so it is also a differentiator.
- **The claw machine** targets a specific plush by its real coordinates, drops to that plush's height, closes on it, and that exact plush leaves the pile and returns in the jaws. It plays when scrolled into view, three times, then waits for a press.

---

## Open items to raise with the client

1. **There is still no vector logo.** Everything here uses the 1200px PNG. It is fine for web at these sizes and it will not hold up for signage, print, or a large-format ad. Ask for the AI or EPS.
2. **The style guide cover page says "Café on the Strip Brand".** Whoever produced it left another client's header on two pages. Worth telling them.
3. **Confirm every parent-FAQ answer.** The copy states things about cameras, cleaning cadence, stroller access, seating, and buyout hours because a parent-safety section without specifics is worthless. Each one needs a yes from the client before launch.
4. **Confirm whether any machines cost more than one token.** The concept says most are 1 and a few premium are 2, which matches how the rest of the market operates.
5. **Photography.** Every image slot is illustration. Real photos of the machine wall, the prize counter, and kids holding plush will lift this materially, and it is the cheapest possible upgrade.
6. **Reviews block.** The Elfsight widget is installed and working. It is *near* live, not live. Three things the client needs to understand:
   - **Google's Places API returns a maximum of 5 reviews per place**, and you cannot choose which 5. The star rating and total review count do update, but the quotes themselves come from a pool of five Google selects.
   - **Google forbids caching Places API content.** Only the Place ID can be stored indefinitely. That is why every review widget on the market (Elfsight, Trustindex, Reputon) sits between you and Google and syncs on a schedule instead: typically every 24 hours on free tiers, a few times a day on paid, and Elfsight users report cache windows as long as 72 hours.
   - **A truly live feed publishes a one-star review on the homepage the moment it lands.** That is the real decision, not the refresh rate. Recommended setup: pull the **rating and review count live** (those only move slowly and always look good at 4.9 / 714), and **hand-curate the quote cards**, refreshing them monthly as part of the retainer. The credibility comes from the aggregate number, and we keep editorial control of what a parent reads first.
7. **Squishy Bar.** The age range (3 to 10) is inferred, not published anywhere. Confirm it, because it is the question parents ask first. The $25 Squishy Bar party add-on is proposed, not an existing product. Also confirm a host stays at the table for the full session and whether groups can be seated together.
8. **Machine count.** The copy avoids claiming a number because we do not have a verified one. Get it, because "a wall of 90 machines" is a better headline than "a wall of machines."

---

*Prepared by Day One Marketing for Cosmic Cat Claw Arcade.*
