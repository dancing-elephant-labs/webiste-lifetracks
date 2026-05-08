"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-foreground/60 mb-12">Last updated: May 4, 2026</p>

          <div className="glass p-8 md:p-12 rounded-3xl border-border space-y-8 leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using LifeTracks, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the application or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on LifeTracks' website for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display;</li>
                <li>Attempt to decompile or reverse engineer any software contained on LifeTracks;</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Content</h2>
              <p>
                You retain all rights to the content you upload to LifeTracks. By uploading content, 
                you grant us a limited license to host and display that content solely for the purpose 
                of providing the service to you. We do not claim ownership of your memories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer</h2>
              <p>
                The materials on LifeTracks are provided on an 'as is' basis. LifeTracks makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of 
                your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that State or location.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
