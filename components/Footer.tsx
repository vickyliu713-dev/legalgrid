import React from "react";
import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="LegalGrid" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-xs">
              We provide specialist legal support exclusively for UK startups and SMEs,
              from company setup to commercial contracts.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Services</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Company Setup</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Founder &amp; Shares</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Investment</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Employment Contracts</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Commercial Contracts</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">IP Protection</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Policies</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Finance</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blogs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 LegalGrid. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


