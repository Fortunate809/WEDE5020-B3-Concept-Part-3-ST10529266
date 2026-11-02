# B3 Concept Website Project

## Student Information
- Student Name: Phokela Ramokone Fortunate
- Student Number: ST10529266
- Module: Web Development (Introduction)
- Module Code: WEDE5020
- Assessment: Part 1 — Building the Foundation
- Organisation: B3 Concept

## Project Overview
This Part 1 project establishes a five-page HTML foundation for B3 Concept, a South African interior and graphic design practice. The website is organised around the organisation's services, history, project enquiry process and service areas.

Part 1 is intentionally HTML-only. CSS and JavaScript are reserved for later POE stages.

## Website Goals and Objectives
1. Present B3 Concept's services clearly.
2. Explain the organisation's background, mission and approach.
3. Help prospective clients identify an appropriate service.
4. Provide a dedicated project enquiry route.
5. Provide a separate general contact route.
6. Present more than one service location.
7. Create a semantic HTML foundation for later CSS and JavaScript.

## Target Audience
Residential clients, commercial and retail clients, businesses requiring corporate identity or website design, property development clients, and clients requiring project management, consulting or 3D visualisation.

## Key Features and Functionality
- Five linked HTML pages.
- Semantic HTML5 structure: header, nav, main, section, article, address, form, fieldset and footer.
- Consistent navigation.
- Detailed service content and three-stage design process.
- Licensed Pexels photographs used through HTML <img> elements; no CSS or JavaScript.
- Project enquiry form with HTML5 validation.
- Separate general contact form.
- Three service areas with map links.
- Accessible labels and descriptive links.
- Comments explaining major code sections.

## Image Assets
The website uses three Pexels photographs as illustrative visuals. They are not presented as photographs of B3 Concept projects and are not used to imply endorsement by B3 Concept. Pexels identifies these images as free to use; the exact source pages and photographers are recorded below for transparent academic sourcing.

## Part 1 Details
The implementation follows the POE requirements for a minimum of five pages, semantic HTML structure, researched content, working navigation, comments, organised files, and README/changelog documentation. CSS and JavaScript are not included in Part 1.

## Sitemap
Home (index.html)
├── About Us (about.html)
├── Services (services.html)
├── Enquiry (enquiry.html)
└── Contact (contact.html)
    ├── Cape Town
    ├── Johannesburg
    └── Durban

## File and Folder Structure
```text
b3-concept/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md
├── content-research.md
└── images/
    ├── interior-design.jpg
    ├── design-process.jpg
    └── services-interior.jpg
```

## Timeline and Milestones
| Stage | Activity | Evidence |
|---|---|---|
| 1 | Research and audience analysis | Research notes |
| 2 | Proposal and lecturer approval | Two proposals |
| 3 | HTML structure | Five HTML pages |
| 4 | Navigation and forms | Tested links/forms |
| 5 | Quality assurance | Browser and HTML checks |
| 6 | Submission preparation | README, references and commits |

## Changelog
| Date | Version | Development record |
|---|---|---|
| 11 August 2026 | 0.1 | Created the five-page project structure. |
| 11 August 2026 | 0.2 | Added semantic HTML5 structure and consistent navigation. |
| 11 August 2026 | 0.3 | Added researched organisation content and service areas. |
| 11 August 2026 | 0.4 | Added separate project enquiry and general contact forms. |
| 11 August 2026 | 0.5 | Added comments, labels, validation attributes and internal links. |
| 11 August 2026 | 0.6 | Added content research notes and Part 1 documentation. |

## References
B3 Concept (2026) *B3 Concept*. Available at: https://www.b3concept.co.za/ (Accessed: 11 August 2026).

The Independent Institute of Education (2026) *Web Development (Introduction) WEDE5020: Assessment Type POE*. Johannesburg: The Independent Institute of Education (Pty) Ltd.

xneelo (2026) *Domain Name Search and Registration*. Available at: https://xneelo.co.za/domains/ (Accessed: 11 August 2026).

xneelo (2026) *Web Hosting*. Available at: https://xneelo.co.za/web-hosting/ (Accessed: 11 August 2026).

Pexels (2026) *Modern Living Room Design* by Paul Seling. Available at: https://www.pexels.com/photo/modern-living-room-design-20390765/ (Accessed: 11 August 2026).

Pexels (2026) *Architect working on Floor Plans* by AI25.Studio Studio. Available at: https://www.pexels.com/photo/architect-working-on-floor-plans-5292244/ (Accessed: 11 August 2026).

Pexels (2026) *Modern Living Room Interior* by Curtis Adams. Available at: https://www.pexels.com/photo/modern-living-room-interior-15824912/ (Accessed: 11 August 2026).

## Testing Record
Images should be checked for correct display and meaningful alt text. Record the actual browsers, dates, link results and form results after testing. Do not claim tests that were not performed.

## GitHub Commit Plan
1. Initial Part 1 project structure.
2. Add semantic HTML page structure.
3. Add researched organisation content.
4. Add navigation and internal links.
5. Add enquiry and contact forms.
6. Add comments and accessibility improvements.
7. Final Part 1 testing and documentation.

## AI Disclosure
Complete the official IIE AI disclosure annexure required for this assessment, including the required screenshots/evidence and an accurate explanation of how AI assistance was used.

## Part 2: CSS and Responsive Design Work

### Corrections implemented from Part 1 feedback
- Added a second website proposal and supporting research documents to address the missing proposal/research feedback.
- Added a clearer B3 Concept design aesthetic and visual direction.
- Expanded the website structure and implementation detail while retaining the existing five-page sitemap.
- Added an external stylesheet and linked it to all HTML pages.
- Added responsive desktop, tablet and mobile layouts.
- Added relative CSS units including `%`, `rem` and `em`.
- Added responsive image handling with `srcset` and `sizes`.

### Part 2 changelog
- **16 September 2026 — v1.0:** Created and linked `style.css` to `index.html`, `about.html`, `services.html`, `enquiry.html` and `contact.html`.
- **16 September 2026 — v1.1:** Added base page styling, typography, spacing, colours and responsive image defaults.
- **16 September 2026 — v1.2:** Added Flexbox and CSS Grid layouts for navigation, content sections, service cards, forms and footer.
- **16 September 2026 — v1.3:** Added visual styling, borders, shadows, rounded corners, hover states, focus states, active button state and text-selection styling.
- **16 September 2026 — v1.4:** Added tablet breakpoint at `900px` and mobile breakpoint at `600px`, including changes to navigation, content grids, typography, forms and footer layout.
- **16 September 2026 — v1.5:** Added responsive image attributes using `srcset` and `sizes` to the main visual images.
- **16 September 2026 — v1.6:** Restored the original three local image assets and added 600px and 1200px responsive variants so the Part 2 project no longer depends on external image URLs for its main visuals.

### Responsive image sources
The three original project image assets are stored locally in the `images/` folder. Responsive 600px and 1200px variants are provided and referenced through `srcset` and `sizes`. The original Pexels sources are documented in the references below.
- `images/interior-design.jpg` with `interior-design-600.jpg` and `interior-design-1200.jpg`.
- `images/design-process.jpg` with `design-process-600.jpg` and `design-process-960.jpg`.
- `images/services-interior.jpg` with `services-interior-600.jpg` and `services-interior-1200.jpg`.

### Part 3: Feedback Corrections

### Part 2 lecturer feedback
The lecturer advised that the website images appeared too large when the website was opened. This was the only correction identified from the Part 2 feedback.

### Correction implemented
- Updated the image styling in `style.css` so images inside content sections have a maximum displayed width of 680px on larger screens.
- Kept image widths fluid (`width: 100%`) so images can still shrink to fit smaller screens.
- Set `height: auto` to preserve each image's original aspect ratio and prevent stretching.
- Centred the images within their content sections using automatic horizontal margins.
- Retained the existing HTML `srcset` and `sizes` attributes and all local responsive image assets.

### Part 3 changelog
- **30 October 2026 — v2.0:** Implemented the Part 2 lecturer feedback by limiting the displayed width of content images to 680px on larger screens, centring them, and preserving their proportions. Responsive behaviour and existing responsive image sources were retained. Browser testing at desktop, tablet and mobile sizes must be completed and recorded after testing.

## Part 2 testing record
Testing evidence should be recorded after opening the website in a browser at desktop, tablet and mobile viewport sizes. The final submission should include screenshots showing the responsive layouts and should only record tests that were actually performed.


## Part 3: JavaScript Functionality (Phase 2)

### Implemented features
- Added `script.js` and linked it to all five website pages using the `defer` attribute.
- Added a service search field and alphabetical sorting controls to `services.html`. Search results update as the visitor types.
- Added an accessible FAQ accordion to `index.html`, including `aria-expanded` state and controlled answer panels.
- Added a three-image design inspiration gallery to `about.html`, with an HTML dialog lightbox for enlarged viewing.
- Added an interactive Leaflet map to `contact.html`, showing approximate city-centre markers for Cape Town, Johannesburg and Durban. The markers indicate broad service areas and are not represented as office addresses.
- Added scroll-reveal transitions with a `prefers-reduced-motion` fallback.

### External library and map data
Leaflet 1.9.4 is loaded from the unpkg CDN for the interactive map. Map tiles are provided by OpenStreetMap contributors. The map requires an internet connection.

### Testing status
The JavaScript and page structure have been added. Browser testing is still required to confirm search/sort behaviour, accordion keyboard use, lightbox operation, map loading, mobile layout and reduced-motion behaviour. Do not mark these tests as passed until they have been performed in a browser.

### Part 3 changelog
- **30 October 2026 — v2.1:** Added the shared JavaScript file and interactive service search/sorting, FAQ accordion, image gallery lightbox, Leaflet service-area map and scroll-reveal effects.


## Part 3: SEO and Forms (Phase 3)

### On-page SEO improvements
- Added a distinct page title and meta description to each of the five HTML pages.
- Added canonical page URLs and Open Graph title, description and URL metadata.
- Added a robots directive allowing search engines to index the public pages.
- Reviewed the existing image alternative text; descriptive `alt` text is retained for meaningful images.
- Existing navigation provides internal links between the five pages.

### Technical SEO files
- Added `robots.txt` with a sitemap location.
- Added `sitemap.xml` listing the five public HTML pages.
- The sitemap and canonical URLs use the published GitHub Pages project-site address. If the repository or published URL changes, update these URLs in both files and the page metadata.

### Form improvements
- Added browser-side required-field, email, phone-pattern and character-length validation.
- Added accessible live status messages and disabled the submit button while a request is processing.
- Both forms submit asynchronously using the FormSubmit AJAX endpoint. The endpoint currently uses the contact email already displayed on this project website (`info@b3concept.co.za`). The mailbox owner must verify the first FormSubmit confirmation email before delivery will work. Confirm that this is the correct authorised recipient before publishing or collecting real visitor information.
- A successful response is shown only after the service returns a successful result. On failure, the visitor receives an alternative contact instruction.

### Important deployment and privacy note
GitHub Pages is static hosting and does not run a private server-side form handler. FormSubmit is an external third-party service; review its current privacy terms and obtain the site owner's approval before using it with real personal information. Test form delivery only with an address you control. Do not enter sensitive personal information during testing.

### Phase 3 testing status
The metadata, crawler files and form code have been added. Browser testing is still required for validation messages, successful and failed AJAX submissions, mobile form layout, and the sitemap/robots URLs after deployment. Do not record these tests as passed until they have been performed.

### Part 3 changelog
- **1 November 2026 — v2.2:** Added page-specific SEO metadata, canonical and Open Graph tags, `robots.txt`, `sitemap.xml`, enhanced form validation, accessible submission feedback and asynchronous form handling.


## Part 3: Final Quality Assurance and Deployment Preparation (Phase 4)

### Performance improvements
- Added native lazy loading and asynchronous image decoding to non-hero content images to reduce unnecessary initial page loading.
- Kept the home page's main hero image eager so it can appear promptly when the home page opens.
- Retained responsive image sources and the existing responsive CSS.

### Security and privacy considerations
- External links that open a new tab use `rel="noopener"` to prevent the opened page from accessing the original page through `window.opener`.
- Third-party services are used for the Leaflet map tiles and FormSubmit form handling. Their availability, terms and privacy practices are outside the control of this static website.
- Do not collect or submit sensitive personal information through the demonstration forms. The site owner must approve the recipient address and verify FormSubmit before accepting real enquiries.
- GitHub Pages serves a static website; it does not provide a private server-side application or database for form submissions.

### Deployment preparation
- Added a final quality-assurance checklist and a GitHub Pages deployment guide.
- The checklist deliberately separates completed code changes from browser tests that still need to be performed by the student.
- The live website should only be described as fully tested after the student completes the checklist and records genuine results.

### Part 3 changelog
- **1 November 2026 — v2.3:** Added lazy loading and asynchronous decoding to non-hero images, retained eager loading for the home page hero image, and prepared final QA, security/privacy and GitHub Pages deployment documentation.
