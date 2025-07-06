import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Mentorship = () => {
  // Load Calendly scripts and styles
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Initialize the badge widget once the script is loaded
    script.onload = () => {
      // @ts-expect-error - Calendly is loaded globally
      window.Calendly?.initBadgeWidget({
        url: 'https://calendly.com/odhiamboedward-ouma/30min',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff'
      });
    };
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Ed-CodeLift Mentorship Programs
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto"
      >
        Personalized guidance to help you achieve your tech goals, whether you're switching careers, 
        starting from scratch, or guiding your child into the world of technology.
      </motion.p>

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-lg p-8 shadow-lg mb-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img 
              src="/images/edward-teaching.jpeg" 
              alt="Edward teaching" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ready to become a developer?</h2>
            <p className="text-lg mb-6">
              Ready to become a developer, launch your coding journey, or guide your child into tech? 
              Join my exclusive mentorship programs—personalized, live‑led by me, a senior full‑stack developer.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Programs
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Programs Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Ed-CodeLift Mentorship & Training Packages</h2>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-6 mb-8">
            <TabsTrigger value="all">All Programs</TabsTrigger>
            <TabsTrigger value="career">Career Switchers</TabsTrigger>
            <TabsTrigger value="aspiring">Aspiring Devs</TabsTrigger>
            <TabsTrigger value="bootcamp">Bootcamp Grads</TabsTrigger>
            <TabsTrigger value="kids">Kids</TabsTrigger>
            <TabsTrigger value="startup">Startup Founders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            <h3 className="text-xl font-semibold">Quick View Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left">Audience</th>
                    <th className="p-3 text-left">Package</th>
                    <th className="p-3 text-left">Duration</th>
                    <th className="p-3 text-left">Price (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={2}>Career Switchers</td>
                    <td className="p-3">Code Reset Intro</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">15,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Code Reset Core</td>
                    <td className="p-3">5 months</td>
                    <td className="p-3">70,000 or 15,000/month</td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={2}>Aspiring Devs (18-25 Yrs)</td>
                    <td className="p-3">Code Reset Intro</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">12,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Code Reset Core</td>
                    <td className="p-3">5 months</td>
                    <td className="p-3">60,000 or 12,000/month</td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={2}>Kids & Teens (8–18)</td>
                    <td className="p-3">CodePlay</td>
                    <td className="p-3">6 weeks</td>
                    <td className="p-3">12,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Holiday Camp</td>
                    <td className="p-3">2 weeks</td>
                    <td className="p-3">15,000</td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={1}>Bootcamp Grads / Junior Devs</td>
                    <td className="p-3">Code Reset Pro</td>
                    <td className="p-3">Monthly</td>
                    <td className="p-3">15,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={2}>Startup Founders</td>
                    <td className="p-3">MVP Sprint</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">30,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">MVP Sprint Premium</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8 mb-12">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Click below to secure your spot
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                I teach all sessions personally, limited to small groups for maximum learning.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="career" className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">🎓 Career Switchers</h3>
              <p className="italic">For working professionals who want to move into tech and build job-ready portfolios.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">QUICK START</div>
                <h4 className="text-lg font-bold mb-2">👨🏽‍💼 Code Reset Intro</h4>
                <p className="text-2xl font-bold mb-4">KES 15,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>HTML/CSS/JS basics</li>
                  <li>2 live classes/week</li>
                  <li>Assignments</li>
                  <li>Git</li>
                  <li>Community access</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">FULLSTACK MASTERY</div>
                <h4 className="text-lg font-bold mb-2">🧱 Code Reset Core</h4>
                <p className="text-2xl font-bold mb-4">KES 70,000 <span className="text-base font-normal">(or 15,000/month)</span></p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 5 months</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>2 live classes/week</li>
                  <li>1 full project/month (industry-grade)</li>
                  <li>Assignments + code reviews</li>
                  <li>Personal mentorship calls</li>
                  <li>CV/LinkedIn reviews</li>
                  <li>Mock interviews</li>
                  <li>Deployment + GitHub coaching</li>
                  <li>Access to private community, support, & feedback</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
            </div>
            
            <p className="text-center text-sm mt-4">
              I teach all sessions personally, limited to small groups for maximum learning.
            </p>
          </TabsContent>
          
          <TabsContent value="aspiring" className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">🧠 Aspiring Developers (18–25 Yrs)</h3>
              <p className="italic">For students, recent graduates, or unemployed youth starting from scratch.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">FOUNDATIONS</div>
                <h4 className="text-lg font-bold mb-2">👨🏽‍🎓 Code Reset Intro</h4>
                <p className="text-2xl font-bold mb-4">KES 12,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Foundations of web dev (HTML/CSS/JS)</li>
                  <li>Projects</li>
                  <li>Group support</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">COMPREHENSIVE</div>
                <h4 className="text-lg font-bold mb-2">💼 Code Reset Core</h4>
                <p className="text-2xl font-bold mb-4">KES 60,000 <span className="text-base font-normal">(or 12,000/month)</span></p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 5 months</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Projects</li>
                  <li>Mentorship</li>
                  <li>CV preparation</li>
                  <li>Git training</li>
                  <li>Portfolio development</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
            </div>
            
            <p className="text-center text-sm mt-4">
              I teach all sessions personally, limited to small groups for maximum learning.
            </p>
          </TabsContent>
          
          <TabsContent value="kids" className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧 Kids & Teens (Ages 8–18)</h3>
              <p className="italic">For parents who want their kids to learn creative coding and digital skills.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">WEEKLY CLASSES</div>
                <h4 className="text-lg font-bold mb-2">🎮 CodePlay</h4>
                <p className="text-2xl font-bold mb-4">KES 12,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 6 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>1 class/week</li>
                  <li>Scratch, Code.org, Blockly</li>
                  <li>Build games</li>
                  <li>Logic training</li>
                  <li>Animation</li>
                  <li>Certificate included</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">INTENSIVE</div>
                <h4 className="text-lg font-bold mb-2">🎉 Holiday Camp</h4>
                <p className="text-2xl font-bold mb-4">KES 15,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 2 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Daily 1hr sessions</li>
                  <li>Build final game/app</li>
                  <li>Showcase to parents</li>
                  <li>Certificate + progress report</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
            </div>
            
            <p className="text-center text-sm mt-4">
              I teach all sessions personally, limited to small groups for maximum learning.
            </p>
          </TabsContent>
          
          <TabsContent value="bootcamp" className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">🧑🏾‍💻 Bootcamp Grads / Junior Devs – Refresher Track</h3>
              <p className="italic">For bootcamp graduates, juniors stuck or overwhelmed, or devs looking to rebuild their portfolio with real projects.</p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">INDUSTRY REFRESHER</div>
                <h4 className="text-lg font-bold mb-2">Code Reset Pro</h4>
                <p className="text-2xl font-bold mb-4">KES 15,000/month</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> Monthly (1 mo = 1 project)</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>1 senior-level project/month (e.g. dashboard, ecommerce, SaaS, CRUD app)</li>
                  <li>Weekly code walkthroughs</li>
                  <li>GitHub workflow practice</li>
                  <li>Design to code (Figma → App)</li>
                  <li>Group feedback, mentorship call</li>
                  <li>Deploy and present project</li>
                  <li>Dev tools, performance tips</li>
                </ul>
                <p className="text-sm mb-4">Can be taken for 1, 2, or 3 months depending on your career goals</p>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
            </div>
            
            <p className="text-center text-sm mt-4">
              I teach all sessions personally, limited to small groups for maximum learning.
            </p>
          </TabsContent>
          
          <TabsContent value="startup" className="space-y-6">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">💡 Startup Founders / Non-Tech Entrepreneurs</h3>
              <p className="italic">For people with startup ideas who want to learn how to build and launch a simple MVP.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">BASIC</div>
                <h4 className="text-lg font-bold mb-2">🚀 MVP Sprint</h4>
                <p className="text-2xl font-bold mb-4">KES 30,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Validate idea with lean canvas</li>
                  <li>Turn sketches into wireframes</li>
                  <li>Build frontend (Webflow, React or HTML/CSS/Bootstrap)</li>
                  <li>Connect backend using Supabase or Firebase</li>
                  <li>Build contact forms, feedback systems, waitlists</li>
                  <li>Deploy to Vercel/Netlify</li>
                  <li>Strategy to collect feedback, track users and iterate</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">PREMIUM</div>
                <h4 className="text-lg font-bold mb-2">🚀 MVP Sprint Premium</h4>
                <p className="text-2xl font-bold mb-4">KES 50,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>All features from MVP Sprint</li>
                  <li>2 personal coaching sessions</li>
                  <li>Code and UX reviews</li>
                  <li>Tool suggestions (Zapier, Notion, Typeform etc.)</li>
                  <li>Go-to-market checklist</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
            </div>
            
            <p className="text-center text-sm mt-4">
              I teach all sessions personally, limited to small groups for maximum learning.
            </p>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Booking CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 mb-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Ready to Start Your Ed-CodeLift Journey?</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Click the scheduling button that appears at the bottom-right of this page to book a free consultation call.
          We'll discuss which Ed-CodeLift program is the perfect fit for your goals and learning style.
        </p>
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => {
            // @ts-expect-error - Calendly is loaded globally
            window.Calendly?.showPopupWidget('https://calendly.com/odhiamboedward-ouma/30min');
          }}
        >
          Schedule Your Call Now
        </Button>
      </motion.div>
    </div>
  );
};

export default Mentorship;
