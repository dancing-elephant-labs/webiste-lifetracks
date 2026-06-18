"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 bg-mesh overflow-x-hidden">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-foreground/60 mb-12">Last updated: May 4, 2026</p>

          <div className="glass p-8 md:p-12 rounded-3xl border-border space-y-8 leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                At Kintra, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application and website. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Collection of Your Information</h2>
              <p>
                We may collect information about you and your interactions with Kintra in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Account &amp; Authentication Data:</strong> Personally identifiable information, such as your name, email address, and authentication identifiers when you sign in using Google Sign-In or Apple Sign-In.</li>
                <li><strong>Profiles &amp; Third-Party Data:</strong> Names, relationships (e.g., family, friend, partner), and important dates (e.g., birthdays) of individuals you add to your timeline. You represent that you have obtained the necessary consent to provide this information.</li>
                <li><strong>Multimedia Metadata:</strong> File dimensions, video durations, sizes, and Google Drive file identifiers. The actual multimedia files (photos, videos, and voice notes) are **never** uploaded to or stored on our servers; they are stored directly and securely in your own personal Google Drive account.</li>
                <li><strong>Profile Photos:</strong> Avatar images that you choose to upload for your life profiles. If cloud sync is enabled, these are stored securely in our Firebase Storage; otherwise, they are cached locally on your device.</li>
                <li><strong>Location Data:</strong> Geotags (latitude and longitude) associated with your entries and events to auto-fill locations, if you grant us permission to access location services.</li>
                <li><strong>Device &amp; Notification Data:</strong> Device identifiers, platform type (Android/iOS), last-seen timestamps, and Firebase Cloud Messaging (FCM) tokens required to deliver push notifications and memory prompts.</li>
                <li><strong>Subscription &amp; Purchase Info:</strong> Plan tier details (Free vs. Premium), subscription status, product IDs, and validity/renewal timestamps. All payments are securely processed directly by Apple App Store or Google Play Store.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Device Permissions</h2>
              <p>
                To provide features like event reminders and media uploads, the Kintra mobile app may request access to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Camera &amp; Microphone:</strong> To capture photos and record videos directly for your timeline events.</li>
                <li><strong>Photo Library:</strong> To select and attach existing photos and videos to your private events.</li>
                <li><strong>Location Services:</strong> To automatically detect and fill in the location of your events.</li>
                <li><strong>Notifications:</strong> To deliver scheduled memory prompts and timeline updates.</li>
              </ul>
              <p className="mt-4">
                You can grant or revoke these permissions at any time through your {"device's"} system settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Google Drive Integration</h2>
              <p>
                Kintra integrates with Google Drive to enable secure, private backups of your timeline media. By connecting your Google Drive account, you grant Kintra access to the restricted <code>https://www.googleapis.com/auth/drive.file</code> scope.
              </p>
              <p className="mt-4">
                This integration is designed with your privacy in mind:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Restricted Scope:</strong> Kintra can only access, modify, or delete files and folders that were specifically created by the Kintra app. We have **no access** to your other Google Drive files, folders, or documents.</li>
                <li><strong>Self-Hosted Storage:</strong> All media files uploaded to the timeline are transferred directly from your device to your personal Google Drive (within a folder named <code>Kintra</code>). We do not store, copy, or process your files on our servers.</li>
                <li><strong>Access Control:</strong> You can disconnect your Google Drive connection at any time in the app settings or by revoking permissions in your Google Account security settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
                can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, delete, or modify the data we have collected about you. Since Kintra 
                prioritizes user ownership, you can export your entire timeline at any time or delete your account 
                and all associated data permanently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br /><br />
                <strong>Email:</strong> support@lifetracks.io
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
