COSMIC CAT CLAW ARCADE — static site build
==========================================

Six pages, shared assets. Everything relative, so it runs from a plain
folder, a staging server, or any static host with no build step.

  index.html              Home
  tokens-and-vip.html     Tokens, VIP membership, gift cards
  parties.html            Birthday parties + Squishy Bar events
  is-it-rigged.html       Fair play / trust page
  privacy-policy.html     Privacy Policy
  terms-of-service.html   Terms of Service

  assets/styles.css       All styles, including the embedded web fonts
  assets/app.js           Claw machine, hours banner, map, legal TOCs
  assets/logo-nav.png     Header lockup
  assets/logo-horizontal.png  Footer lockup

NOTES
- Open index.html directly and it works. The Google map and the Elfsight
  reviews widget both need a network connection; the map falls back to a
  brand panel and the reviews block falls back to a labelled card.
- Third-party embeds: Elfsight platform.js is loaded in each page head.
  Authorise cosmiccatarcade.com in the Elfsight dashboard before launch.
- The map is a keyless Google share embed. See the comment above the
  iframe in index.html to swap in the Maps Embed API instead.
- Display type is Bree Serif standing in for Gelica Semi Bold. License
  Gelica and swap --font-display in styles.css.
- The client-review "Build notes" panel is deliberately NOT in this build.
  It lives only in the single-file concept.
