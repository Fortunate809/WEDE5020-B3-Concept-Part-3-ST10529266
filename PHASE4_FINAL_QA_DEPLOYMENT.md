# B3 Concept — Part 3 Phase 4: Final QA and Deployment

This document guides the final checks before publishing the Part 3 website. Complete each test yourself and record the actual result. Do not mark a test as passed unless you have performed it.

## 1. Desktop and mobile checks

- [ ] Open `index.html` using Live Server or a local web server.
- [ ] Open each of the five pages: Home, About Us, Services, Enquiry and Contact.
- [ ] Confirm that the navigation links open the correct pages.
- [ ] Check the layout at a wide desktop size (approximately 1366px wide).
- [ ] Check the layout at a tablet size (approximately 768px wide).
- [ ] Check the layout at a mobile size (approximately 375px wide).
- [ ] Confirm there is no unwanted horizontal scrolling at any size.
- [ ] Confirm images remain proportional and do not overflow their containers.
- [ ] Confirm the home page hero image appears promptly and other images load as needed.

## 2. JavaScript feature checks

- [ ] On Services, search for a word such as `interior` and confirm unrelated service cards are hidden.
- [ ] Clear the search and confirm all service cards return.
- [ ] Test both alphabetical sort directions.
- [ ] On Home, open and close each FAQ accordion item.
- [ ] On About Us, open each gallery image and close the lightbox.
- [ ] On Contact, confirm the Leaflet map loads when internet access is available.
- [ ] If the map cannot load, confirm the Google Maps fallback links remain usable.
- [ ] Scroll down the pages and confirm reveal animations do not hide content permanently.
- [ ] If possible, enable the operating system's reduced-motion setting and confirm content remains visible.

## 3. Form checks

Use test information only, and only submit to an email address that you own or have permission to use.

- [ ] On Enquiry, try submitting the form with required fields empty. The browser should identify missing fields.
- [ ] Enter an invalid email and confirm validation prevents submission.
- [ ] Enter an invalid phone number and confirm validation prevents submission.
- [ ] Check the minimum and maximum text lengths.
- [ ] Complete all required fields with non-sensitive test data.
- [ ] Confirm the form gives a sending message and then a success or failure message.
- [ ] Repeat the checks on the Contact form.
- [ ] Confirm the recipient has completed FormSubmit's first-use email verification before expecting delivery.
- [ ] If the service is not configured or fails, record the failure honestly; do not claim the form sent an email.

## 4. SEO and technical files

- [ ] Open `robots.txt` in the project root and confirm it is reachable after deployment.
- [ ] Open `sitemap.xml` in the project root and confirm it is reachable after deployment.
- [ ] Confirm the sitemap URLs match the actual GitHub Pages project URL.
- [ ] Check that every page has its own relevant title and meta description.
- [ ] Check that each page has one clear main heading and a logical heading order.
- [ ] Check meaningful images for descriptive alternative text.
- [ ] Confirm internal links work and external links open the expected destination.
- [ ] Confirm the canonical and Open Graph URLs use the final published website address.

## 5. Accessibility and browser checks

- [ ] Use the keyboard only to move through navigation, controls, gallery and forms.
- [ ] Confirm visible focus styling appears on interactive controls.
- [ ] Confirm form fields have visible labels.
- [ ] Confirm status messages are announced through their live regions where supported.
- [ ] Test in at least two browsers if available (for example Chrome and Firefox).
- [ ] Check the browser developer console for errors and record any errors that remain.

## 6. Test record

Fill in the table after performing the checks.

| Date | Browser/device | Viewport | Feature tested | Actual result | Pass/Fail |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

Add screenshots of important tests to your submission evidence folder if your lecturer requires them. Avoid screenshots containing private email addresses or personal information.

## 7. Important limitations to disclose

- GitHub Pages is static hosting and does not execute server-side code.
- FormSubmit is a third-party form service. Successful browser-side submission does not prove that the intended recipient has received or read the message; verify the service setup and delivery with an authorised test address.
- The Leaflet map depends on external library and OpenStreetMap tile services and therefore requires an internet connection.
- The map markers represent broad city service areas, not verified B3 Concept office coordinates.
