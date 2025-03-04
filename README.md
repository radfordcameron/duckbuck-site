# DuckBucks Website

## 🚀 Setup for Local Development

Follow these steps to set up the DuckBucks website locally:

### **1️⃣ Install Dependencies**

Ensure you have **Node.js** installed. Then, navigate to the project folder and install dependencies:

```sh
cd duckbuck-site
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### **2️⃣ Start the Development Server**

Run the following command to start the local server:

```sh
npm start
```

- Your website will be available at **[http://localhost:3000](http://localhost:3000)**
- Any changes you make will automatically reload.

### **3️⃣ Build for Production**

To generate an optimized production build:

```sh
npm run build
```

This will create a `build/` folder with static files ready for deployment.

---

## 🌐 Deploying to Cloudflare Pages

Follow these steps to deploy your React app to **Cloudflare Pages**:

### **1️⃣ Build Your Project**

```sh
npm run build
```

This creates a `build/` folder with optimized production files.

### **2️⃣ Deploy via Cloudflare Dashboard (Manual Method)**

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/).
2. Click **"Create a Project"** → Select **"Direct Upload"**.
3. Drag and drop the `build/` folder.
4. Click **"Deploy"**.

### **3️⃣ Deploy via Wrangler CLI (Recommended for Future Updates)**

1. Install Cloudflare Wrangler (if not installed):
   ```sh
   npm install -g wrangler
   ```
2. Log in to Cloudflare:
   ```sh
   wrangler login
   ```
3. Deploy your site:
   ```sh
   wrangler pages deploy ./build --project-name=duckbuck
   ```

🚀 Your website will be live at: `https://duckbuck.io`


