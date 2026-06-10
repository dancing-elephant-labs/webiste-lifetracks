# Deployment Guide: Next.js to GitHub Pages with Custom Domain

This guide walks you through the step-by-step setup required to deploy your static Next.js website directly to GitHub Pages for free, configured with a custom domain.

---

## Step 1: Enable GitHub Actions for Pages

By default, GitHub Pages is configured to deploy from a branch. We need to change this to deploy via GitHub Actions.

1. Open your repository on GitHub.
2. Navigate to **Settings** > **Pages** (in the left-hand menu).
3. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu.

---

## Step 2: Configure Your Custom Domain in GitHub

In the same **Pages** settings screen:
1. Scroll down to the **Custom domain** section.
2. Enter your custom domain (e.g., `lifetracks.io` or `website.lifetracks.io`).
3. Click **Save**.
   * *Note: GitHub will automatically start verifying the domain and generating an SSL certificate, which may take up to a few minutes after you complete DNS configuration.*
4. Check **Enforce HTTPS** once the certificate is generated to ensure secure traffic.

---

## Step 3: Configure DNS Records

You need to update the DNS settings with your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare, Route53) to point your domain to GitHub.

### Option A: If using an Apex Domain (e.g., `lifetracks.io`)
Create **four A records** pointing to the GitHub Pages IP addresses:
* `185.199.108.153`
* `185.199.109.153`
* `185.199.110.153`
* `185.199.111.153`

*(Optional but recommended)* Create a **CNAME record** for `www` pointing to `<username>.github.io` so that `www.lifetracks.io` also resolves to your site.

### Option B: If using a Subdomain (e.g., `website.lifetracks.io`)
Create a **CNAME record** with the following details:
* **Host/Name**: `website`
* **Target/Points to**: `<your-github-username>.github.io`

---

## Step 4: Trigger the Deployment

Once GitHub Pages is enabled and your DNS records are configured:

1. Commit and push the updated workflow and configuration:
   ```bash
   git add .github/workflows/deploy.yml next.config.ts deployment.md
   git commit -m "ci: deploy to github pages with custom domain"
   git push origin main
   ```
2. Monitor the deployment in the **Actions** tab of your GitHub repository. The workflow will automatically build your Next.js app, export it, and publish it to your custom domain.
