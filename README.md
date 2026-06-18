# Kintra — Live Your Journey, Cherish Your Memories

**Kintra** is a privacy-first digital sanctuary that allows you to chronicle your life journey and weave the timelines of the people who shape it. By securing your memories and media in your own Cloud Vault (Google Drive), Kintra ensures you have full ownership of your data while showcasing your life story in a cinematic, interactive format.

This repository hosts the official landing page and static web presence of Kintra, built with Next.js, Tailwind CSS, and Framer Motion.

---

## Key Features

- **Visual Timelines:** A scrollable, interactive vertical timeline that beautifully captures your personal milestones.
- **Cloud Vault:** Secure, direct backup of your memories, notes, and media to your personal Google Drive.
- **Memory Prompts:** Contextual notification cues that gently remind you to record life's most meaningful moments.
- **Rich Media Support:** Embed photos, videos, and voice notes directly into your memories for a full sensory retrospective.
- **Privacy Center:** Complete transparency and control over your data, access permissions, and digital archive.
- **Multiple Profiles:** Maintain separate timelines for family members, pets, or collaborative family chronicles.

---


## Local Development

Follow these steps to run the landing page locally:

### 1. Prerequisites
Ensure you have **Node.js 20+** and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/dancing-elephant-labs/website-lifetracks.git
cd website-lifetracks
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

### 5. Build for Production (Static Export)
To generate the static HTML export (build outputs will be placed in the `/out` directory):
```bash
npm run build
```

---

## Deployment Guide

This repository is pre-configured for automated deployment to **GitHub Pages** using GitHub Actions.

### Automated GitHub Pages Deployment

When you push code to the `main` branch, the workflow at `.github/workflows/deploy.yml` automatically triggers to compile the Next.js project and deploy it.

#### Step 1: Configure Repository Permissions
To allow the GitHub Actions workflow to publish your site:
1. On GitHub, navigate to your repository's **Settings**.
2. Click **Pages** in the sidebar.
3. Under **Build and deployment -> Source**, select **GitHub Actions**.

#### Step 2: Custom Domains
Deploying to a Custom Domain (Recommended)
If you are deploying to a custom domain (e.g., `kintra.lifetracks.io` or `kintra.io`):
1. In the **Settings -> Pages** tab on GitHub, enter your domain under **Custom domain** and save.
2. The site will resolve at the root domain, and no extra path configuration is required in this repository.

---

## License

This project is licensed under the terms of the MIT License. See [LICENSE](LICENSE) for details.
