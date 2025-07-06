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
                    <td className="p-3" rowSpan={3}>Career Switchers</td>
                    <td className="p-3">Code Reset</td>
                    <td className="p-3">8 weeks</td>
                    <td className="p-3">35,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Code Reset Premium</td>
                    <td className="p-3">8 weeks</td>
                    <td className="p-3">60,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">1:1 Mentorship Plan</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">25,000</td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={3}>Aspiring Devs</td>
                    <td className="p-3">Code Launchpad</td>
                    <td className="p-3">6 weeks</td>
                    <td className="p-3">20,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Code Launchpad+</td>
                    <td className="p-3">6 weeks</td>
                    <td className="p-3">30,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Starter Call</td>
                    <td className="p-3">1 hour</td>
                    <td className="p-3">2,000</td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-3" rowSpan={3}>Kids (10–16)</td>
                    <td className="p-3">CodePlay</td>
                    <td className="p-3">6 weeks</td>
                    <td className="p-3">10,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">CodePlay Premium</td>
                    <td className="p-3">6 weeks</td>
                    <td className="p-3">18,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Holiday Camp</td>
                    <td className="p-3">2 weeks</td>
                    <td className="p-3">12,000</td>
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
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">Code Reset</h4>
                <p className="text-2xl font-bold mb-4">KES 35,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 8 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>2 live classes/week</li>
                  <li>Assignments</li>
                  <li>Community support</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">POPULAR</div>
                <h4 className="text-lg font-bold mb-2">Code Reset Premium</h4>
                <p className="text-2xl font-bold mb-4">KES 60,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 8 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>2 live classes/week</li>
                  <li>Assignments</li>
                  <li>Community support</li>
                  <li>3 personal mentorship calls</li>
                  <li>CV/LinkedIn review</li>
                  <li>Job prep</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">1:1 Mentorship Plan</h4>
                <p className="text-2xl font-bold mb-4">KES 25,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Weekly private calls</li>
                  <li>Personal guidance</li>
                  <li>Customized roadmap</li>
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
              <h3 className="text-xl font-semibold mb-2">🧠 Aspiring Developers (No Career Yet)</h3>
              <p className="italic">For students, recent graduates, or unemployed youth starting from scratch.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">Code Launchpad</h4>
                <p className="text-2xl font-bold mb-4">KES 20,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 6 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>HTML/CSS/JS fundamentals</li>
                  <li>3 real projects</li>
                  <li>GitHub setup</li>
                  <li>Group support</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">RECOMMENDED</div>
                <h4 className="text-lg font-bold mb-2">Code Launchpad+</h4>
                <p className="text-2xl font-bold mb-4">KES 30,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 6 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>HTML/CSS/JS fundamentals</li>
                  <li>3 real projects</li>
                  <li>GitHub setup</li>
                  <li>Group support</li>
                  <li>2 personal 1:1 calls</li>
                  <li>Portfolio review</li>
                  <li>Code feedback</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">Starter Call</h4>
                <p className="text-2xl font-bold mb-4">KES 2,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 1 hour</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>1-on-1 dev career planning</li>
                  <li>Tools introduction</li>
                  <li>Q&A session</li>
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
              <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧 Kids (Ages 10–16)</h3>
              <p className="italic">For parents who want their kids to learn creative coding and digital skills.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">CodePlay (Group)</h4>
                <p className="text-2xl font-bold mb-4">KES 10,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 6 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>1 class/week</li>
                  <li>Scratch games & animations</li>
                  <li>Fun projects</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">POPULAR</div>
                <h4 className="text-lg font-bold mb-2">CodePlay Premium</h4>
                <p className="text-2xl font-bold mb-4">KES 18,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 6 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>1 class/week</li>
                  <li>Scratch games & animations</li>
                  <li>Fun projects</li>
                  <li>15-min 1:1 weekly help</li>
                  <li>Final project certificate</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">Holiday Camp</h4>
                <p className="text-2xl font-bold mb-4">KES 12,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 2 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Daily 1hr classes</li>
                  <li>Game/app project</li>
                  <li>Parent showcase at end</li>
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
                <h4 className="text-lg font-bold mb-2">MVP Sprint</h4>
                <p className="text-2xl font-bold mb-4">KES 30,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>2 sessions/week</li>
                  <li>Build working MVP</li>
                  <li>Supabase/Firebase + frontend tools</li>
                </ul>
                <Button className="w-full">Secure Your Spot</Button>
              </Card>
              
              <Card className="p-6 border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">RECOMMENDED</div>
                <h4 className="text-lg font-bold mb-2">MVP Sprint Premium</h4>
                <p className="text-2xl font-bold mb-4">KES 50,000</p>
                <p className="mb-2"><span className="font-medium">Duration:</span> 4 weeks</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>2 sessions/week</li>
                  <li>Build working MVP</li>
                  <li>Supabase/Firebase + frontend tools</li>
                  <li>2 personal coaching calls</li>
                  <li>Feedback sessions</li>
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
