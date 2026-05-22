# GTM + GA4 setup guide — Origami

Your site now fires these events into the GTM `dataLayer` (and Plausible) on every click/submit:

| Event name | Fires when | Custom props |
|---|---|---|
| `cta_lets_talk_header` | "Let's Talk" header button clicked | — |
| `cta_start_project` | "Start a project" CTA clicked (hero or work pages) | `source` = `hero` / `work` |
| `contact_form_submitted` | Contact form successfully sent | `source` = `contact-page` |
| `contact_form_error` | Contact form failed to send | `source` = `contact-page` |

GTM container ID: **`GTM-KFT8JB48`**

## 1. Connect GA4 to GTM (one-time)

1. Go to https://tagmanager.google.com/ → open container `GTM-KFT8JB48`.
2. Get your **GA4 Measurement ID** from https://analytics.google.com/ → Admin → Data Streams → Web → copy the ID (looks like `G-XXXXXXXXXX`).
3. In GTM, **Tags → New → Tag Configuration → Google Analytics: GA4 Configuration**.
   - Measurement ID: paste your `G-XXXXXXXXXX`.
   - Trigger: **All Pages**.
   - Name it `GA4 — Config` and **Save**.

That alone gets you pageviews in GA4. Now the conversion events:

## 2. Create the 3 conversion triggers

In GTM → **Triggers → New** for each of these:

### Trigger A: `cta_lets_talk_header`
- Trigger type: **Custom Event**
- Event name: `cta_lets_talk_header`
- Fires on: **All Custom Events**
- Save.

### Trigger B: `cta_start_project`
- Trigger type: **Custom Event**
- Event name: `cta_start_project`
- Save.

### Trigger C: `contact_form_submitted`
- Trigger type: **Custom Event**
- Event name: `contact_form_submitted`
- Save.

## 3. Create the GA4 Event tags

In GTM → **Tags → New** for each:

### Tag A: `GA4 — Let's Talk clicked`
- Tag type: **Google Analytics: GA4 Event**
- Configuration Tag: select your `GA4 — Config` from step 1
- Event Name: `cta_lets_talk_header`
- Trigger: **`cta_lets_talk_header`** (the one from step 2)
- Save.

### Tag B: `GA4 — Start a Project clicked`
- Same as A, but Event Name: `cta_start_project`, Trigger: `cta_start_project`
- Add Event Parameter: `source` = `{{DLV - source}}` (see step 4 for the variable)
- Save.

### Tag C: `GA4 — Contact Submitted`
- Same as A, but Event Name: `contact_form_submitted`, Trigger: `contact_form_submitted`
- Save.

## 4. (Optional) Create the `source` dataLayer variable

In GTM → **Variables → User-Defined Variables → New**:
- Type: **Data Layer Variable**
- Name: `DLV - source`
- Data Layer Variable Name: `source`
- Save.

Now your tags can reference `{{DLV - source}}` to capture whether the click came from `hero` or `work`.

## 5. Mark conversions in GA4

In GA4 → **Admin → Events**:
- After data starts flowing (5-10 min), you'll see `cta_lets_talk_header`, `cta_start_project`, and `contact_form_submitted` listed.
- Toggle **"Mark as conversion"** on each. They'll now show up in GA4 Conversions, attribution reports and Google Ads (if linked).

## 6. Publish

In GTM, click **Submit** → name the version (e.g. "Origami conversion events v1") → Publish.

That's it. Within 15-30 minutes you'll see live conversion data in both Plausible (custom events tab) and GA4 (conversions report).

## Quick test (browser console)

On any page, paste this into the browser console:

```js
window.dataLayer.filter(e => e.event && e.event.startsWith('cta_'))
```

If you see entries like `{event: 'cta_lets_talk_header', ...}` after clicking the header button, the dataLayer is firing correctly and GTM has everything it needs.
