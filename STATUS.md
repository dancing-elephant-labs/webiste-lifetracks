# LifeTracks Website Status & Roadmap

This document tracks the remaining tasks and blockers required to make the LifeTracks website fully functional and production-ready.

## Remaining Tasks

### 1. Functional Links & CTAs
- [ ] **App Store Links**: Update the "Download for iOS" buttons with actual App Store URLs.
- [ ] **Play Store Links**: Update the "Download for Android" buttons with actual Google Play Store URLs.
- [ ] **Social Media**: Add links to official social media profiles in the footer.

### 2. Media Assets
- [ ] **Real App Screenshots**: Replace the simulated CSS mockup in the Hero section with actual high-resolution screenshots or renders of the LifeTracks app.
- [ ] **Icons & Logo**: Finalize and integrate the official LifeTracks SVG logo.

### 3. Content & Pages
- [ ] **Feature Details**: Create dedicated sections or pages for deep-dives into core features (Timeline, Geotagging, Emotional Mapping).
- [x] **Privacy Policy & Terms**: Drafted and added the actual legal documents linked in the footer.
- [x] **About Us / Team**: Created the About page highlighting "Dancing Elephant Labs" and the product vision.

### 4. Technical Integration
- [x] **Contact Support**: Replaced contact form with a direct email link (`mailto`) for simpler user interaction.
- [ ] **Analytics**: Integrate tracking tools like Google Analytics or Vercel Analytics.
- [ ] **SEO Optimization**: Refine meta tags, Open Graph images, and sitemap for better search engine visibility.

### 5. Deployment
- [ ] **CI/CD Pipeline**: Set up automated deployment via Vercel, Netlify, or AWS.
- [ ] **Domain Configuration**: Connect the `lifetracks.io` (or equivalent) domain to the production build.

## Blockers

| Blocker | Description | Impact |
| :--- | :--- | :--- |
| **Missing App URLs** | We cannot finalize the CTAs without the published app links. | Users cannot download the app. |
| **Media Assets** | High-quality video and screenshots are required for a "premium" feel. | Visual appeal is limited to CSS mockups. |
| **Legal Documentation** | Privacy Policy and Terms of Service must be finalized before public launch. | Compliance and user trust. |

## Next Steps
1. Gather branding assets (Logo, App Screenshots).
2. Record a brief demo video of the Flutter app.
3. Decide on a hosting provider (Vercel is recommended for Next.js).
