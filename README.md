# Georges Asis Farm website

Greenhouse seedling pre-booking site for Georges Asis Farm, Kapkatet, Kericho County.
Live at: https://nelsoncheruiyotmitei.github.io/georges-asis-farm/

## Editing content
Everything you'll want to change is in **`assets/js/data.js`**:
- **Prices:** `seedlings` (KSh per seedling)
- **Payment:** `payment` (M-Pesa Paybill and account)
- **Partnerships:** `partner` (offers shown in the Partner section)
- **Status:** set `launched: true` when seedlings are available. The badge switches to "Seedlings available now".
- **Photos:** `photos` (replace the stock photo links with real farm photos uploaded to `assets/img/`)
- **Social links:** `social.tiktok`, `social.facebook` (hidden while empty)
- **Contacts:** `whatsapp`, `phone`, `email`
- **Opening hours:** `hours` (shown in the contact card; remove all entries to hide the box). If you change them, also update `openingHoursSpecification` in `index.html` so Google shows the same hours.
- **Kiswahili:** fields ending in `_sw` in `data.js`, plus `assets/js/i18n.js` for buttons and headings. Visitors switch language with the **Kiswahili / English** button in the menu. English text for headings lives in `index.html`.
- **Link preview:** `assets/img/og-image.jpg` is the picture shown when the link is shared on WhatsApp or Facebook (keep it under 300 KB)

Edit online at https://github.dev/NelsonCheruiyotMitei/georges-asis-farm, then commit. The site updates in about 2 minutes.

Stock photos: Pexels (free for commercial use).
