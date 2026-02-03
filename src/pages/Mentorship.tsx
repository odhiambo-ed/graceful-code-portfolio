import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Mentorship = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlist, setWaitlist] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onWaitlistChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setWaitlist((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/odhiambo.edward111@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...waitlist,
            source: "Volunteer Mentorship Waitlist",
            _subject: "Volunteer Mentorship Waitlist",
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to submit");

      toast({
        title: "You’re on the waitlist.",
        description: "I’ll reach out when the next cohort opens.",
        duration: 5000,
      });
      setWaitlist({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again, or schedule a call instead.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // Load Calendly scripts and styles
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add Calendly JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the badge widget once the script is loaded
    script.onload = () => {
      // @ts-expect-error - Calendly is loaded globally
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/odhiamboedward-ouma/30min",
        text: "Schedule time with me",
        color: "#0069ff",
        textColor: "#ffffff",
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
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold">Volunteer Mentorship</h1>
          <p className="text-muted-foreground">
            If you need guidance, you’re stuck on something, or you want a clear
            plan to move forward in tech, schedule time with me.
          </p>
        </header>

        <Card className="p-6 md:p-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">1:1 Guidance</h2>
            <p className="text-muted-foreground">
              Bring your questions (learning path, code review, career strategy,
              projects, or anything you’re working on). I’ll help you get
              unstuck with clear next steps.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  // @ts-expect-error - Calendly is loaded globally
                  window.Calendly?.showPopupWidget(
                    "https://calendly.com/odhiamboedward-ouma/30min",
                  );
                }}
              >
                Schedule a call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.location.href = "mailto:odhiambo.edward111@gmail.com";
                }}
              >
                Email me
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Volunteer mentorship cohort waitlist
            </h2>
            <p className="text-muted-foreground">
              I run a volunteer mentorship program. Join the waitlist and I’ll
              notify you when the next cohort opens.
            </p>

            <form onSubmit={submitWaitlist} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={waitlist.name}
                    onChange={onWaitlistChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={waitlist.email}
                    onChange={onWaitlistChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  What do you need help with? (optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={waitlist.message}
                  onChange={onWaitlistChange}
                  rows={4}
                  placeholder="A quick note on your goals or questions"
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join the waitlist"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mentorship;
