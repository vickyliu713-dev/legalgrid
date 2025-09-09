import React from "react";
import AmbientShapes from "./AmbientShapes";

export default function Industries(): React.ReactElement {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 overflow-hidden">
      <AmbientShapes variant="industries" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mx-auto">Industries We Work With</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We support startups and SMEs across a wide range of sectors in the UK.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-b from-slate-50/80 to-white rounded-lg shadow-xl border border-slate-200/60 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/30"></div>
            <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-300/40"></div>
            <div className="absolute inset-0 pt-12">
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
              <div className="h-10 border-b border-slate-100/60"></div>
            </div>
            <div className="relative z-20 pt-12 pb-12 px-8">
              <div className="ml-12">
                <div className="text-foreground font-semibold text-xl mb-8 font-sans">Industries We Work With</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Technology &amp; SaaS</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">E-Commerce &amp; Retail</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Agencies &amp; Creatives</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Consulting &amp; Professional Services</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Hospitality &amp; Leisure</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Finance &amp; Fintech</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Healthcare &amp; Education</span>
                  </div>
                  <div className="py-1">
                    <span className="text-foreground/90 font-medium text-lg tracking-wide">Property &amp; Construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


