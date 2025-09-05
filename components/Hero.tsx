import React from "react";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-20 bg-gradient-to-r from-primary via-info to-secondary blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform opacity-100 translate-y-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Legal Services for <span className="text-foreground">UK Startups &amp; Small Businesses</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
          From incorporation to investment, employment, and compliance — LegalGrid delivers the essential legal documents every UK company needs to grow securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-primary hover:border hover:border-cosmic-accent py-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Contact Us Now
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                </div>
                <span className="text-foreground font-medium">Legal Workflow Pipeline</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/80 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/60 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/40 border-2 border-card flex items-center justify-center text-xs text-foreground">+3</div>
                </div>
                <div className="h-8 px-3 rounded-md bg-muted flex items-center justify-center text-foreground text-sm">Share</div>
              </div>
            </div>

            <div className="flex h-[600px] overflow-hidden">
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Navigation</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground">
                      <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                      <span>Contracts</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Documents</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Compliance</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Reports</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Departments</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/60"></div>
                      <span>Corporate</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/50"></div>
                      <span>Employment</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/40"></div>
                      <span>IP &amp; Tech</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 bg-background overflow-hidden">
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">Legal Matters</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">12</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path><path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-medium whitespace-nowrap">New Matter</div>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {/* Column 1 */}
                    <div className="flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 bg-card/50">
                      <div className="p-3 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-muted"></span>
                          <h4 className="font-medium text-sm text-foreground">New Requests</h4>
                          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">4</span>
                        </div>
                        <div className="text-muted-foreground">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path dName="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                      </div>
                      <div className="p-2 flex-1 space-y-2 overflow-auto">
                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Employment</span>
                            <span className="text-muted-foreground text-xs">May 20</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Employment Agreement Review</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Review and update standard employment contract template</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                1/4
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Compliance</span>
                            <span className="text-muted-foreground text-xs">May 22</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">GDPR Compliance Assessment</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Audit data processing activities for GDPR compliance</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                0/6
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">IP &amp; Tech</span>
                            <span className="text-muted-foreground text-xs">May 24</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Trademark Application</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">File trademark application for new product line</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                0/5
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Corporate</span>
                            <span className="text-muted-foreground text-xs">May 25</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Vendor Contract Negotiations</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Review and negotiate terms with new software vendor</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                0/3
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 bg-card/50">
                      <div className="p-3 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-muted"></span>
                          <h4 className="font-medium text-sm text-foreground">In Review</h4>
                          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">3</span>
                        </div>
                        <div className="text-muted-foreground">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                      </div>
                      <div className="p-2 flex-1 space-y-2 overflow-auto">
                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Corporate</span>
                            <span className="text-muted-foreground text-xs">May 18</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Series A Investment Terms</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Draft and review investment agreement terms</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                4/7
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Compliance</span>
                            <span className="text-muted-foreground text-xs">May 19</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Privacy Policy Update</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Update privacy policy for new data collection practices</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                2/4
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">IP &amp; Tech</span>
                            <span className="text-muted-foreground text-xs">May 17</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Software License Review</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Analyze licensing terms for enterprise software stack</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                3/5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 bg-card/50">
                      <div className="p-3 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-muted"></span>
                          <h4 className="font-medium text-sm text-foreground">Legal Review</h4>
                          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">3</span>
                        </div>
                        <div className="text-muted-foreground">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                      </div>
                      <div className="p-2 flex-1 space-y-2 overflow-auto">
                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Compliance</span>
                            <span className="text-muted-foreground text-xs">May 15</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Customer Terms of Service</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Final legal review of updated customer ToS</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                3/3
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Employment</span>
                            <span className="text-muted-foreground text-xs">May 16</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Share Option Scheme</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Legal review of employee share option documents</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                5/5
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">IP &amp; Tech</span>
                            <span className="text-muted-foreground text-xs">May 14</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">API Usage Agreement</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Review standard API terms for external partners</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                2/2
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 bg-card/50">
                      <div className="p-3 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-muted"></span>
                          <h4 className="font-medium text-sm text-foreground">Completed</h4>
                          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">3</span>
                        </div>
                        <div className="text-muted-foreground">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                      </div>
                      <div className="p-2 flex-1 space-y-2 overflow-auto">
                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Corporate</span>
                            <span className="text-muted-foreground text-xs">May 10</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">Board Resolution Template</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Created standardized board resolution template</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                3/3
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">Compliance</span>
                            <span className="text-muted-foreground text-xs">May 9</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">GDPR Cookie Consent</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Implemented compliant cookie consent mechanism</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                4/4
                              </span>
                            </div>
                          </div>
                        </div>

                        <div draggable className="task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col ">
                          <div className="flex justify-between items-start mb-3 flex-shrink-0">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border">IP &amp; Tech</span>
                            <span className="text-muted-foreground text-xs">May 8</span>
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 mb-3">
                              <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">NDA Template Library</h5>
                              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">Built comprehensive NDA template collection</p>
                            </div>
                            <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                              <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-muted border-2 border-card"></div>
                              </div>
                              <span className="flex items-center gap-1 text-accent text-xs font-medium">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                5/5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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


