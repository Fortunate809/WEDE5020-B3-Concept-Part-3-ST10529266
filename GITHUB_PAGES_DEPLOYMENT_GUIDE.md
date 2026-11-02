# GitHub Pages Deployment Guide — B3 Concept

Follow these steps only after the local tests are complete and the site owner has approved the contact-form recipient and third-party services.

## 1. Keep a backup

1. Keep a separate copy of the working project folder.
2. Extract the final project ZIP into a clearly named folder.
3. Open the extracted folder in VS Code.
4. Confirm that `index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml` and the `images` folder are present.

## 2. Commit the changes

1. Open the existing repository: `Fortunate809/WEDE5020-B3-Concept-`.
2. Replace the repository's website files with the tested files from this project folder. Do not upload the ZIP itself as the website.
3. Keep the five HTML pages and supporting files in the repository's published root folder unless the repository's existing Pages configuration intentionally uses another folder.
4. Review the changed files before committing.
5. Use a descriptive commit message, for example: `Complete Part 3 JavaScript, SEO and form improvements`.
6. Push the commit to the repository's publishing branch.

## 3. Check GitHub Pages settings

1. Open the repository on GitHub.
2. Select **Settings** then **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** if that is the repository's current publishing method.
4. Select the correct branch (commonly `main`) and the correct folder (commonly `/ (root)`).
5. Save the settings if you changed them.
6. Wait for the Pages deployment workflow to finish successfully.

## 4. Verify the live website

Open the published project URL:

`https://fortunate809.github.io/WEDE5020-B3-Concept/`

Then check each page and feature again on the live website. Also test these technical files:

- `https://fortunate809.github.io/WEDE5020-B3-Concept/robots.txt`
- `https://fortunate809.github.io/WEDE5020-B3-Concept/sitemap.xml`

If the repository name or publishing path changes, update the canonical URLs, Open Graph URLs and sitemap URLs to match the actual published address.

## 5. Submission evidence

Record the final repository URL and live website URL in your assessment submission. Include genuine screenshots of the website at desktop, tablet and mobile sizes and screenshots of the interactive features if required by the brief. Do not claim that a form works until a permitted test has confirmed its actual submission and delivery behaviour.
