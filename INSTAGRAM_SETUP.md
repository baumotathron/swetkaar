# Step-by-step: Instagram feed on your site

Follow these steps to show your real Instagram posts on the Services page.

---

## Prerequisites

- **Instagram Business** or **Instagram Creator** account (not personal).
- A **Facebook Page** linked to that Instagram account (Settings → Linked accounts in Instagram, or in Meta Business Suite).
- A **Facebook account** (to use Facebook for Developers).

---

## Part 1: Create a Facebook app and get credentials

### Step 1: Open Facebook for Developers

1. Go to **[developers.facebook.com](https://developers.facebook.com)** and log in.
2. Click **“My Apps”** (top right) → **“Create App”**.

### Step 2: Create the app

1. Choose **“Other”** (or **“Business”** if you only see that).
2. Click **“Next”**.
3. App name: e.g. **“Swetkaar website”**.
4. App contact email: your email.
5. Click **“Create app”**.

### Step 3: Add Instagram product

1. On the app dashboard, find **“Add products to your app”** or **“Set up”** in the left sidebar.
2. Find **“Instagram”** (or **“Instagram Graph API”**) and click **“Set up”**.
3. Choose **“Instagram Graph API”** (for Business/Creator accounts).

### Step 4: Connect your Instagram account

1. In the left menu go to **“Instagram”** → **“Basic Display”** or **“Instagram Graph API”** (depending on what your app shows).
2. For **Instagram Graph API** you need to connect an **Instagram Business/Creator** account:
   - Go to **Meta Business Suite** ([business.facebook.com](https://business.facebook.com)) and ensure your **Instagram account is connected** to a **Facebook Page**.
   - Back in the app, under **“Instagram”** you may see **“Add or remove Instagram accounts”** or a link to **“Facebook Login”** / **“Instagram Login”**.
3. Use **“Instagram Login”** or the **Graph API Explorer** (see below) to connect the account and get a token.

### Step 5: Get your Instagram User ID

**Option A – From the app dashboard**

1. In your app go to **“Instagram”** → **“Basic Display”** or **“Instagram Graph API”**.
2. If your Instagram account is connected, the **Instagram User ID** is often shown next to the account (e.g. under “User ID” or in the connection summary).

**Option B – Using Graph API Explorer**

1. Open **[developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)**.
2. Top right: select **your app** from the dropdown.
3. Click **“Generate Access Token”** (or “Get Token”).
4. Choose permissions that include **“instagram_basic”** and **“instagram_manage_insights”** (or the ones required for “media”).
5. After generating the token, in the **“API”** field use:
   ```text
   me?fields=id,username
   ```
   and set the request to **GET**, then **Submit**.
6. The response will look like: `{ "id": "12345678901234567", "username": "swetkaar.ai" }`.  
   The **"id"** value is your **Instagram User ID**. Copy it.

### Step 6: Get a short-lived token (Graph API Explorer)

1. In **Graph API Explorer**, with your app selected, click **“Generate Access Token”**.
2. Under **“Instagram”** (or “Instagram Graph API”), enable:
   - **instagram_basic**
   - **instagram_manage_insights** (if you want insights; for just media, basic is enough)
3. Click **“Generate Access Token”** and complete the login/authorization for your Instagram Business/Creator account.
4. After authorization you’ll see a token in the **“Access Token”** field. This is a **short-lived** token (about 1 hour). Copy it; you’ll use it in the next step.

### Step 7: Exchange for a long-lived token

Long-lived tokens last about **60 days** and can be refreshed.

1. Get your **App Secret**:  
   In your app go to **Settings** → **Basic** → **App Secret** (click “Show”), then copy it.
2. Open this URL in your browser (replace the placeholders):
   ```text
   https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN
   ```
   - Replace **YOUR_APP_SECRET** with your App Secret.
   - Replace **YOUR_SHORT_LIVED_TOKEN** with the token from Step 6.
3. Press Enter. You’ll get JSON like:
   ```json
   {
     "access_token": "IGQW...",
     "token_type": "bearer",
     "expires_in": 5183944
   }
   ```
4. Copy the **"access_token"** value. This is your **long-lived access token**. Store it somewhere safe (you’ll put it in `.env.local`).

**Important:** Never share your App Secret or access token publicly. Don’t commit `.env.local` to Git (it should be in `.gitignore`).

---

## Part 2: Add credentials to your project

### Step 8: Create `.env.local` in the project root

1. Open your project folder: **`d:\Swet\Website\swetkaar-main`**.
2. In the **root** of the project (same folder as `package.json`), create a new file named **`.env.local`** (with the leading dot).
3. Open `.env.local` in an editor and add these two lines, using **your** values:

```env
INSTAGRAM_USER_ID=your_instagram_user_id
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
```

Replace:

- **your_instagram_user_id** → The numeric ID you got in Step 5 (e.g. `12345678901234567`). No quotes.
- **your_long_lived_access_token** → The long-lived token from Step 7 (the long string starting with `IGQW...`). No quotes.

Example (fake values):

```env
INSTAGRAM_USER_ID=17841400008460056
INSTAGRAM_ACCESS_TOKEN=IGQWJZ...
```

4. Save the file.

### Step 9: Restart the dev server

1. If the dev server is running, stop it (**Ctrl+C** in the terminal).
2. Start it again:
   ```bash
   npm run dev
   ```
3. Open the site (e.g. **http://localhost:3000**), go to the **Services** page (**/services**).
4. The Instagram section should load your real feed (up to 6 recent posts). If it doesn’t, check the next section.

---

## Troubleshooting

- **Feed still shows placeholders**
  - Confirm `.env.local` is in the project root and variable names are exactly `INSTAGRAM_USER_ID` and `INSTAGRAM_ACCESS_TOKEN`.
  - Restart the dev server after changing `.env.local`.
  - Make sure the Instagram account is **Business** or **Creator** and linked to a **Facebook Page**; personal accounts don’t work with the Graph API for this.

- **“Invalid OAuth access token” or similar**
  - Your token may have expired or the permissions may be wrong. Generate a new short-lived token in Graph API Explorer (Step 6) and exchange it again for a long-lived one (Step 7).

- **Token expires after 60 days**
  - Before it expires, refresh it by calling:
    ```text
    https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_LONG_LIVED_TOKEN
    ```
    Use the new token in `.env.local` and restart the server.

---

## Summary checklist

- [ ] Instagram is **Business** or **Creator** and linked to a **Facebook Page**.
- [ ] Created a **Facebook app** and added **Instagram Graph API**.
- [ ] Got **Instagram User ID** (Step 5).
- [ ] Got **short-lived token** (Step 6), then **long-lived token** (Step 7).
- [ ] Created **`.env.local`** in project root with `INSTAGRAM_USER_ID` and `INSTAGRAM_ACCESS_TOKEN`.
- [ ] Restarted dev server and opened **/services** to see the feed.
