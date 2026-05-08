"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-foreground/60 mb-12">Last updated: May 4, 2026</p>

          <div className="glass p-8 md:p-12 rounded-3xl border-border space-y-8 leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                At LifeTracks, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application and website. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Collection of Your Information</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect 
                via the Application depends on the content and materials you use, and includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address.</li>
                <li><strong>Multimedia Data:</strong> Photos, videos, and voice notes that you choose to upload to your timeline.</li>
                <li><strong>Location Data:</strong> Geotags associated with your entries, if you grant us permission to access location services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
                can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
              <p>
                You have the right to access, delete, or modify the data we have collected about you. Since LifeTracks 
                prioritizes user ownership, you can export your entire timeline at any time or delete your account 
                and all associated data permanently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br /><br />
                <strong>Email:</strong> privacy@lifetracks.app
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
