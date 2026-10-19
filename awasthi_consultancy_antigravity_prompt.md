# MASTER IMPLEMENTATION PROMPT — AWASTHI CONSULTANCY SERVICES WEBSITE

## 1. Your Role and Objective

Act as a senior frontend engineer, UI/UX designer, motion designer, 3D web developer, accessibility specialist, and website performance engineer.

Your task is to inspect the **existing codebase** and transform it into a polished, modern, responsive, customer-focused website for **Awasthi Consultancy Services (ACS), Bhopal, Madhya Pradesh, India**.

This is an existing-project development task, not a request to create an unrelated starter website.

The business provides accounting, taxation, registration, compliance, documentation, and related consultancy services to individuals and businesses. The website must make these services easy to understand, establish trust through genuine Google Maps reviews, and encourage potential customers to call the business or submit an inquiry.

The finished website should look like a professional website built specifically for this consultancy firm, not a generic accounting template or an AI-generated landing page.

**Primary goals:**
- Establish credibility and make a strong first impression.
- Explain every service in simple language that an ordinary customer can understand.
- Make it easy to find relevant services and contact the consultancy.
- Present genuine customer feedback from Google Maps.
- Create a distinctive, relevant 3D animated hero section.
- Preserve and improve useful animations and interactions from the existing codebase.
- Deliver excellent mobile usability without degrading the desktop experience.
- Keep the existing project architecture stable wherever possible.

Do not stop after producing a plan or design suggestions. Audit the project, implement the necessary changes, run the available tests, and fix the issues you find.

---

## 2. Mandatory Pre-Implementation Codebase Audit

Before changing any files, thoroughly inspect the current project.

### Inspect the following

1. Framework, runtime, package manager, application entry points, and build commands.
2. Folder structure, routing, reusable components, layouts, and existing page sections.
3. Current CSS, Tailwind configuration, design tokens, typography, colors, and responsive breakpoints.
4. Installed dependencies, existing animation libraries, 3D libraries, icon libraries, and UI components.
5. Current scroll animations, text-reveal animations, swipe interactions, sliders, card transitions, and other motion effects.
6. Existing images, logos, SVGs, fonts, illustrations, and other business assets.
7. Existing form handling, API routes, backend services, environment variables, and email integrations.
8. Current mobile layout, desktop layout, accessibility, performance, console errors, and build status.

Identify which existing components can be retained, improved, or reused. Do not delete useful functionality simply to make implementation easier.

### Use the existing skills

Before designing or coding:

- Locate and explicitly use the installed **UI/UX Pro Max skill**.
- Inspect relevant existing frontend-development skills available in Antigravity.
- Use available skills for responsive design, accessibility, visual design, frontend architecture, performance optimization, and animation when relevant.
- Read the actual skill instructions before applying them.
- Follow their recommendations while respecting the existing project's architecture and business requirements.

Do not invent skill names or claim that a skill was used if it is not available.

### Implementation rules

- Preserve the existing framework and project structure wherever practical.
- Reuse compatible dependencies and established patterns.
- Do not replace the entire application unnecessarily.
- Do not rewrite functioning components without a clear reason.
- Do not introduce a heavy dependency just to implement a simple effect.
- Do not modify unrelated functionality.
- Avoid duplicate CSS, unnecessary packages, conflicting animations, and excessive JavaScript.
- Keep secrets, API keys, and private configuration out of source control.

Once the audit is complete, form a concise implementation plan and execute it.

---

## 3. Business Identity and Verified Information

Use the following information as the initial source of truth.

**Business name:** Awasthi Consultancy Services

**Brand abbreviation:** ACS

**Existing logo:** The supplied branding uses an ACS monogram with the phrase “Complete Accounting Solution.”

**Business representative:** Pankaj Awasthi

**Business address:** Flat No. 121, SR LIG, Ashoka Palace, Raisen Road, near Apsara Cinema, Bhopal, Madhya Pradesh 462023, India.

**Contact numbers provided by the business:**
- +91 91658 94496
- +91 78797 75279
- +91 62670 95053

**Google Maps business listing:**

https://maps.app.goo.gl/E2Wx7BAeKcMqrgDE6

The matching listing has previously appeared with a rating of 4.9/5 and 127 reviews. Recheck the live listing before publishing. If the rating or review count changes, use the current verified information instead of retaining outdated figures.

### Business information rules

- Reuse the genuine ACS logo from the existing project if available.
- Preserve the spelling of the business name and representative's name.
- Use the provided address and phone numbers accurately.
- Add functional click-to-call links using the correct international phone format.
- Make the address open the correct business location in Google Maps.
- Use WhatsApp links only for numbers confirmed as valid WhatsApp contacts.
- Do not invent opening hours, office history, professional qualifications, certifications, client counts, awards, service guarantees, or years of experience.
- Do not claim the consultancy is a government office or an official government partner.
- Do not display any unverified email address as the configured destination of the inquiry form.
- If the original logo asset is available, do not recreate it unnecessarily or distort its proportions.

The website should position the firm as an approachable accounting and compliance consultancy that helps people understand paperwork and complete relevant processes.

---

## 4. Design Direction and Visual Identity

Create a distinctive, premium-looking website suitable for a professional accounting and consultancy business.

### Visual direction

Use a restrained visual system based on the existing ACS brand:

- **Primary accent:** Professional red inspired by the existing logo.
- **Main backgrounds:** Warm white, soft off-white, or very light neutral shades.
- **Text:** Charcoal or deep neutral tones.
- **Secondary accents:** Muted gold or warm grey used sparingly.
- **Cards:** Clean, refined surfaces with subtle borders and carefully controlled shadows.
- **Background details:** Very subtle grid lines, fine accounting-inspired patterns, or understated geometric elements where appropriate.

Use the actual logo to determine the final palette. Avoid choosing unrelated colors that conflict with the brand.

### Avoid

- A generic accounting website template.
- An overly corporate, lifeless layout.
- Excessive red backgrounds.
- Large blocks of text.
- Too many separate cards with identical styling.
- Oversized rounded rectangles everywhere.
- Random gradients and excessive glassmorphism.
- Excessive gold glow or neon effects.
- Generic stock photos of people shaking hands.
- Unnecessary animated counters or fabricated statistics.
- Decorative elements that interfere with reading or clicking.
- Repeated headings and meaningless filler sections.

The website should feel considered, modern, trustworthy, and easy to navigate.

Use strong visual hierarchy, generous but efficient spacing, balanced typography, and clear content grouping.

---

## 5. Header and Navigation

Create or refine a compact, professional navigation system consistent with the existing codebase.

It should include:

- ACS logo and business name.
- Home.
- Services.
- Customer Reviews.
- Contact.

An About or Why Choose Us link may be included if it fits the existing layout.

### Desktop

- Keep the header refined and proportionate.
- Use a subtle sticky-header treatment if compatible with the existing design.
- Ensure all navigation items remain legible and accessible.
- Provide a clear contact or inquiry action.

### Mobile

- Build a genuinely mobile-friendly navigation menu.
- Keep the header from consuming too much vertical space.
- Avoid wrapping the business name into an awkward, oversized logo block.
- Ensure the menu is keyboard accessible and closes appropriately after navigation.
- Keep important contact actions easy to reach.

Do not allow the header to overlap the hero content, section headings, or anchor destinations.

---

## 6. Hero Section — Create a Relevant 3D Animated Experience

The hero is a critical part of the website. It should immediately communicate that ACS helps with accounting, taxation, registrations, and business paperwork.

Create an original, polished 3D visual related to the actual services.

### Recommended visual concept

Build a refined, dimensional accounting workspace with a combination of visual elements such as:

- A compact stack of accounting ledgers, financial documents, and folders.
- A subtle calculator or financial-report element.
- Layered paper-like panels representing GST, ITR, accounting, or business registration.
- Carefully arranged floating document cards.
- Fine connecting lines or understated data elements.
- Soft studio lighting, believable depth, delicate reflections, and controlled shadows.

This must be a cohesive visual composition, not a random collection of floating icons.

The imagery should suggest organized paperwork, reliable financial administration, and simplified compliance.

Do not use unauthorized government seals, fake certificates, or official-looking documents that could imply government affiliation.

### 3D implementation

First inspect the installed technologies.

If the existing project already uses Three.js, React Three Fiber, Spline, or a suitable graphics library, evaluate whether it can be reused.

If no 3D implementation exists, choose a lightweight approach appropriate to the current framework. Introduce a new 3D dependency only when its benefits justify the additional bundle size and maintenance.

The hero should feature:

- A gentle floating motion.
- Restrained parallax in response to pointer movement where appropriate.
- Subtle rotation or layered movement to communicate depth.
- Smooth entrance transitions.
- A clear visual focal point.
- Readable text that does not compete with the animation.

Avoid aggressive spinning, constant camera movement, excessive particle effects, or distracting motion.

### Suggested hero copy

Use this as the initial copy, refining its visual presentation to fit the actual layout:

**Eyebrow:** ACCOUNTING • TAXATION • BUSINESS COMPLIANCE

**Main headline:**
“Your Business Paperwork, Made Simpler.”

**Supporting text:**
“From tax filing and business registration to accounting and documentation, Awasthi Consultancy Services helps you navigate essential paperwork with clearer guidance.”

**Primary action:** “Discuss Your Requirement”

**Secondary action:** “Explore Our Services”

A verified Google rating may be displayed as a secondary trust element, provided the value is rechecked against the Maps listing.

### Desktop layout

Create a balanced two-part composition:

- One side contains the text, short explanation, and primary actions.
- The other side features the 3D accounting composition.

Do not make the 3D element so large that it pushes all useful information below the fold.

### Mobile layout

Redesign the composition specifically for narrow screens.

- Keep the main headline readable without awkward line breaks.
- Place the 3D visual where it complements the text instead of competing with it.
- Consider a compact layered composition beside or just below the main headline.
- Reduce decorative elements and unnecessary depth effects.
- Keep the main action visible without excessive scrolling.
- Avoid horizontal overflow.

Do not simply scale the desktop design down.

### Performance and fallback

- Lazy-load or defer expensive 3D resources when appropriate.
- Avoid blocking the initial page render.
- Prefer GPU-friendly animations.
- Respect `prefers-reduced-motion`.
- Provide a visually coherent static fallback if WebGL or the graphics library is unavailable.
- Ensure the page remains useful while the 3D visual loads.
- Prevent animation code from interfering with scrolling or touch interactions.

The result should feel premium and intentional, even on mid-range mobile phones.

---

## 7. Preserve and Improve Existing Animations

The current project's motion design is important. Inspect the existing code and retain its useful animation patterns.

Preserve and appropriately refine:

- Scroll-triggered section reveals.
- Text animations and headline entrances.
- Existing horizontal card movements.
- Swipe and touch interactions.
- Service-card hover effects.
- Section transitions.
- Existing parallax effects.
- Page-load animations.
- Any established staggered animation patterns.

Do not replace these with an unrelated motion system merely because another library is available.

### Animation requirements

- Use smooth, consistent easing.
- Trigger scroll effects at sensible positions.
- Avoid repeatedly restarting animations during minor scroll changes.
- Maintain stable layouts to prevent content jumping.
- Ensure swipe interactions work with real touch gestures.
- Do not intercept vertical scrolling unnecessarily.
- Keep all essential content usable if animations fail or are reduced.
- Avoid long delays before users can interact with the site.

Use the existing animation library when suitable. If the project uses CSS or an established animation framework, extend that system instead of introducing redundant alternatives.

**A critical requirement:** test all existing and new animations on both mobile and desktop. A visually impressive desktop effect is not acceptable if it becomes jerky, broken, or unresponsive on touchscreens.

---

## 8. Services Section — Complete Content and Simple Explanations

The supplied business services image is the reference for the services offered.

Create an attractive, organized service section that helps visitors quickly understand which service they need.

Do not reproduce the original image as a single large graphic. All essential service information must be selectable, responsive, readable text.

Organize the services into categories. Every service needs a concise description in ordinary language. Use the following initial content, editing only to improve clarity without changing the meaning.

### Category A: Business and Firm Registration

**1. Firm Registration and Gumasta**

- Help with registering a business or firm and preparing the required paperwork.
- Assistance with the relevant local Gumasta registration or licence process.

**2. Society Registration**

- Help prepare documents for registering a society or organization.
- Guidance on the required forms and application process.

**3. FSSAI Registration**

- Help food businesses apply for the appropriate food-safety registration or licence.
- Assistance with documentation required for the application.

**4. Import-Export Licence Registration**

- Help businesses understand the registration process for importing or exporting goods.
- Assistance with the required Importer Exporter Code (IEC) application paperwork, where applicable.

### Category B: Taxation and Government Compliance

**5. PAN Card Services**

- Assistance with PAN applications and relevant documentation.
- Help customers understand the application or correction process.

**6. GST Registration**

- Help eligible businesses apply for GST registration.
- Guidance on the documents and information generally required.

**7. GST Return Filing**

- Assistance with preparing and filing applicable GST returns.
- Help organize the sales, purchases, and tax information needed for filing.

**8. Income Tax Return Filing**

- Help individuals and businesses prepare their income-tax return information.
- Guidance on the documents and details needed to complete the filing.

**9. ESIC Registration**

- Assistance with ESIC registration for eligible employers and businesses.
- Help organize the relevant employee and business details.

**10. EPF Registration**

- Assistance with EPF registration and required business documentation.
- Guidance on the relevant employer and employee information.

**11. ESIC and EPF Return Filing**

- Help with applicable periodic returns and compliance paperwork.
- Assistance with organizing the required records and contribution details.

### Category C: Accounting and Financial Statements

**12. Account Management**

- Help maintain and organize regular business financial records.
- Keep income, expenses, and accounting information easier to track.

**13. Profit and Loss Statement**

- Prepare a report showing business income, expenses, profit, or loss.
- Help business owners better understand their financial performance.

**14. Balance Sheet**

- Prepare a statement showing a business's assets, liabilities, and capital.
- Help present the financial position of the business based on its records.

**15. Tally Software Training**

- Learn how to use Tally for accounting and common business tasks.
- Cover relevant practical activities such as entering transactions and maintaining accounts.

**16. CMA Report**

- Prepare a Credit Monitoring Arrangement (CMA) report for relevant financial or loan applications.
- Help organize the financial information banks may request when assessing a business loan.

### Category D: Digital and Personal Documentation

**17. Digital Signature Certificate**

- Assistance with obtaining a digital signature certificate.
- Help with the documentation needed to use digital signatures for applicable online filings and transactions.

**18. Passport Services**

- Guidance on the passport application process and required documents.
- Assistance with preparing and completing relevant application steps.

**19. Income Certificate**

- Help applicants understand the documents and application steps required for an income certificate.
- Guidance on submitting the relevant information through the appropriate official process.

**20. Caste Certificate**

- Assistance with understanding the documentation and application process for a caste certificate.
- The certificate itself remains subject to the appropriate government authority's approval.

### Category E: Loan Documentation and Support

**21. Home Loan Assistance**

- Help organize documents commonly required for a home loan application.
- Guidance on preparing the paperwork requested by the relevant lender.

**22. Vehicle Loan Assistance**

- Assistance with organizing documentation for vehicle loan applications.
- Help customers understand the information a lender may ask them to provide.

**23. Business Loan Assistance**

- Help business owners prepare relevant financial and business paperwork for loan applications.
- Explain common documentation requirements and the application process.

### Content accuracy rules

- Keep service descriptions simple, clear, and informative.
- Do not merge unrelated services in a way that hides what is offered.
- Keep all services discoverable through the page's service section.
- If appropriate, allow a service card to link to a detailed explanation or preselect that service in the inquiry form.
- Do not promise approval of government applications, registrations, tax refunds, or loans.
- Make it clear through wording that ACS provides consultancy and documentation assistance; relevant government authorities and lenders retain their own decision-making powers.
- Do not add services that are not supported by the supplied information.

### Service presentation

Use a professional editorial layout rather than an oversized grid of identical cards.

Possible features include:

- A clear category heading.
- A small, consistent visual identifier for each category.
- Concise descriptions on individual service cards.
- Restrained hover transitions.
- A sensible layout that makes all service names easy to scan.
- A clear route from each service to the inquiry form.

Choose the best structure for the existing project after inspecting its design system.

On desktop, use a balanced grid or other compact arrangement. On mobile, use a single-column list, a carefully designed two-column layout where text remains readable, or an accessible accordion for category grouping.

Do not force horizontal scrolling to read descriptions.

If horizontal swiping is used, keep the swipe interaction smooth and provide an accessible way to navigate all items. Do not hide essential services inside an automatically moving carousel.

---

## 9. Google Maps Reviews — Genuine Social Proof

This section is a priority. Use the supplied Google Maps listing:

https://maps.app.goo.gl/E2Wx7BAeKcMqrgDE6

The purpose is to help visitors evaluate the consultancy through genuine customer feedback.

### Verification requirements

- Inspect the actual Maps listing and use customer reviews that can be verified against it.
- Do not fabricate reviews, reviewer names, dates, star ratings, or customer stories.
- Do not combine different reviews into a quotation attributed to one reviewer.
- Do not alter a review's meaning to make it more positive.
- If shortening a genuine review, preserve its wording where practical and clearly indicate that it is an excerpt.
- Do not label review excerpts as live or automatically synchronized unless the implementation truly supports that functionality.
- Never generate fictional profile photographs or reviewer identities.
- Link the review section to the actual business listing so visitors can read the original reviews themselves.

### Candidate excerpts available for verification

The following positive review text has been surfaced during preliminary research. Check each excerpt against the actual Google Maps review before displaying it:

1. “Excellent service. The filing process was smooth, quick, and clearly explained. Very professional, helpful, and responsive to all queries.”
2. “They guided properly regarding tax saving and documentation.”
3. “Mr Pankaj Awasthi is a very knowledgeable person” and “makes you understand” the subject “in a very layman language.”

Treat these as candidate quotations, not permission to invent missing reviewer details. Display only excerpts you can verify. Do not add names or dates unless they are visible and confirmed.

If the exact reviews cannot be verified in the available browser environment, do not display unverified quotations. Instead, build the review section with the confirmed Google rating if still current, a link to the real Google Maps listing, and a prominent “Read Google Reviews” action. Leave space for verified review content to be added later.

### Review section design

Create a visually distinct but restrained section with:

- A heading such as “Trusted by Our Customers.”
- A verified Google rating and current review count, if available.
- A concise explanation that customers can read the original feedback on Google.
- A small, attractive set of verified review cards.
- A direct “Read All Reviews on Google” link.

Each card should use readable typography, sufficient spacing, and consistent dimensions.

Do not overemphasize five-star graphics to the point that the section looks artificial. Do not create fake real-time loading animations or pretend that review data is being pulled live.

Never scrape or bypass access restrictions to manufacture a review feed. If a genuine Google API integration is unavailable, a truthful curated-review presentation with a direct link to Maps is preferable.

---

## 10. Inquiry Form — Leave the Recipient Email Unconfigured

Create a professional inquiry form designed to convert visitors into potential customers.

**Important: Do not configure the recipient email address yet. I will add it later.**

### Suggested fields

- Full name — required.
- Phone number — required.
- Email address — optional for the visitor.
- Service required — dropdown populated from the real service list.
- Message or requirement details — required.
- Consent or privacy acknowledgement if needed for the chosen submission flow.

Keep the form compact, clear, and usable on a mobile screen.

Do not require visitors to provide unnecessary personal information.

### Interaction and validation

Implement:

- Proper labels and input types.
- Clear required-field indicators.
- Indian phone-number validation that accepts legitimate formats.
- Meaningful inline validation messages.
- Accessible success and error states.
- A loading state while a configured submission request is being processed.
- Protection against accidental duplicate submissions.
- Appropriate server-side validation if a backend endpoint exists or is needed.

When a visitor chooses a service from a service card, make it possible to preselect that service in the inquiry form.

### Email configuration rules

- Inspect the existing project before deciding how to implement email submission.
- Reuse a suitable email integration already present in the codebase if applicable.
- Do not introduce a new email vendor unnecessarily.
- Do not invent the recipient address.
- Do not use an email address printed in a promotional image as the form's recipient without explicit instruction.
- Do not hardcode API keys or email credentials.
- Do not add fake database storage merely to make the form appear functional.
- Do not display a success message claiming that an inquiry was emailed if it was not actually sent.

Leave a clearly named configuration variable, for example:

```env
INQUIRY_RECIPIENT_EMAIL=""
```

Use the appropriate location and naming convention for the project's current architecture. Keep private environment variables on the server, not in browser-visible code.

If an email service is already integrated, retain it and make the destination email configurable through an environment variable. Document how to configure the recipient later.

If no suitable integration exists, implement the form UI and the necessary backend-ready submission structure without claiming that email delivery is active.

When the recipient address is blank, the form must fail gracefully and explain that online inquiries are not yet configured. Offer the verified business phone numbers as an alternative contact method. Do not silently discard submissions or falsely confirm delivery.

The form should become fully operational once I configure the destination email and any genuinely necessary credentials.

---

## 11. Contact Section and Footer

Build a professional contact section that makes the next step obvious.

Include:

- Awasthi Consultancy Services.
- Verified business address.
- The three supplied phone numbers.
- A direct link to the Google Maps business location.
- A link to the inquiry form.
- The current Google review link.

Use clickable phone numbers so mobile visitors can initiate calls immediately.

Use a real Maps URL. Verify that it opens the correct business listing. Do not embed a map showing an incorrect branch or location.

The footer should remain compact and useful. Avoid duplicating the entire service catalog, lengthy filler text, or an oversized collection of links.

Do not invent email recipients, business hours, registrations, or certifications.

If public-facing business email addresses from the source artwork are included as displayed contact details, distinguish them clearly from the inquiry form's configurable recipient. Do not use them to populate the backend destination automatically.

---

## 12. Mobile-First and Desktop Optimization

Do not treat responsiveness as a final CSS adjustment. It is a core design and implementation requirement.

Inspect the current layout at representative viewport sizes, including approximately:

- 320–360px mobile widths.
- 375–430px mobile widths.
- 768px tablet widths.
- 1024px compact desktop widths.
- 1366px and larger desktop widths.

Use the project's established responsive breakpoints where sensible.

### Mobile-specific requirements

- No horizontal page overflow.
- No clipped headlines or service descriptions.
- No oversized 3D hero that pushes the useful content too far down.
- No text too small to read comfortably.
- No navigation menus that cover content incorrectly.
- No tiny or closely packed tap targets.
- No hover-only controls.
- No awkward service-card widths.
- No form fields wider than the screen.
- No layout shifts during animation.
- No sticky contact controls that obstruct the content or keyboard.
- No forced horizontal scroll to view critical information.

Touch interactions must respond naturally. Preserve vertical scrolling and avoid touch-event handlers that make the page difficult to use.

### Desktop-specific requirements

- Use the available space thoughtfully.
- Maintain balanced line lengths.
- Avoid excessive empty space or giant headings.
- Keep the hero text and 3D composition proportionate.
- Use a restrained content width for reading sections.
- Make service categories easy to scan.
- Prevent cards and section boundaries from becoming visually repetitive.

Test the same functionality on both mobile and desktop. Desktop quality must not be sacrificed to fix the mobile layout, and mobile usability must not be sacrificed to preserve a desktop effect.

---

## 13. Accessibility, SEO, and Technical Quality

### Accessibility

- Use semantic HTML.
- Provide accessible labels for all inputs.
- Maintain sufficient text contrast.
- Ensure visible keyboard focus.
- Use appropriate accessible names for icon-only controls.
- Respect reduced-motion preferences.
- Avoid communicating meaning through color alone.
- Keep buttons, links, and form controls operable by keyboard and touch.

### SEO

Implement appropriate page metadata, including:

- Business name.
- Relevant page title and meta description.
- Canonical URL only when the actual production URL is known.
- Suitable Open Graph metadata.
- Meaningful heading hierarchy.
- Descriptive image alternative text.

Use naturally phrased search terms relevant to accounting and consultancy services in Bhopal. Avoid keyword stuffing.

Where suitable and accurately supported, implement LocalBusiness or accounting-related structured data. Include only verified details. Do not generate a structured review aggregate or testimonials that violate applicable review-schema guidelines.

### Performance

- Optimize images and use appropriate formats.
- Prevent oversized graphics and unnecessary font loading.
- Load the 3D scene efficiently.
- Avoid unnecessary client-side JavaScript.
- Prevent layout shifts.
- Avoid animation loops that consume resources while off-screen when they can reasonably be paused.
- Keep the page responsive on common mid-range mobile devices.

Do not make unsupported claims about performance scores. Measure them using the tools available in the project.

---

## 14. Functional Requirements

Check that:

- The logo returns visitors to the home section.
- Navigation anchors open the correct sections.
- The service cards display the correct information.
- The inquiry form selects and validates services correctly.
- Phone links contain the right numbers.
- The Maps link opens the correct business.
- The review link directs users to the genuine Google Maps listing.
- The email configuration remains blank.
- The form never reports successful email delivery when no message has been sent.
- All important interactions work on touchscreens.
- No essential text is available only through hover interactions.
- There are no dead buttons, placeholder links, or fabricated business claims.

Use the business's established contact details rather than invented alternatives.

---

## 15. Validation and Testing Workflow

After implementation, run the relevant checks supported by the existing project.

### Technical checks

- Install or update dependencies only when necessary.
- Run the project's build command.
- Run available tests, type checks, and lint checks.
- Check browser-console errors.
- Check missing asset references and failed requests.
- Check that any environment-variable placeholders are documented.
- Confirm that the form behaves correctly when its email destination is not configured.

Do not conceal or ignore existing test failures. Distinguish pre-existing problems from regressions introduced by the changes.

### Visual checks

Use the available browser or preview tools to examine:

- The hero at mobile and desktop sizes.
- The 3D animation and its fallback.
- All service categories and cards.
- The Google review section.
- The inquiry form.
- Navigation and footer.
- The overall visual consistency between sections.

Test touch interactions on mobile emulation if physical-device testing is unavailable.

Pay particular attention to animation smoothness, content jumping, overlapping elements, touch conflicts, and layout overflow.

If a section looks poor in the actual rendered page, fix it instead of assuming that the implementation is correct because the code compiles.

---

## 16. Final Deliverables

Complete the actual implementation in the existing project and then provide a concise report explaining:

1. What major UI and UX changes were made.
2. How the new 3D hero works and what fallback is available.
3. How existing animations were preserved or improved.
4. How the services and Google review section were implemented.
5. Whether the inquiry form currently sends email or remains unconfigured.
6. The precise environment variable and credentials needed to activate email delivery later.
7. Which build commands and tests were run and their results.
8. Any remaining limitations that require manual configuration.

Do not claim an integration is working unless it has been tested.

Do not claim that Google reviews are live-synchronized unless that feature has actually been implemented and verified.

### Final direction

The finished website should feel like a carefully designed digital presence for a real Bhopal consultancy: clear, professional, easy to understand, visually memorable, and optimized for getting genuine customer inquiries.

**First understand the existing codebase. Then design and implement the right solution within it. Preserve what already works, improve what does not, and validate the final result on mobile and desktop.**
