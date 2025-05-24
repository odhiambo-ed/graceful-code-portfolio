import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Code,
  GitBranch,
  Users,
  Trophy,
  Clock,
  Zap,
} from "lucide-react";

const DevStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-10 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Developer Statistics
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my coding journey, contributions, and
          achievements
        </p>
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Github className="h-4 w-4" />
            GitHub Analytics
          </Badge>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* GitHub Contribution Chart - New addition at the top */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                <div className="p-2 rounded-full bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                GitHub Contribution Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-primary/10">
                <iframe
                  src="https://ghchart.rshah.org/odhiambo-ed"
                  frameBorder="0"
                  scrolling="0"
                  width="100%"
                  height="200"
                  className="w-full rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* GitHub Contribution Graph - Existing content */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                <div className="p-2 rounded-full bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                GitHub Contribution Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl overflow-x-auto rounded-lg shadow-lg border border-primary/10">
                  <a
                    href="https://github.com/odhiambo-ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="https://github-readme-stats.vercel.app/api/?username=odhiambo-ed&count_private=true&theme=tokyonight&showicons=true"
                      alt="GitHub Stats"
                      className="w-full rounded-lg"
                    />
                  </a>
                </div>
              </div>

              <Separator className="my-6" />
            </CardContent>
          </Card>
        </motion.div>

        {/* GitHub Trophies */}
        <motion.div variants={itemVariants}>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-xl">
                <div className="p-2 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                GitHub Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center overflow-x-auto rounded-lg shadow-lg border border-primary/10">
                <a
                  href="https://github.com/odhiambo-ed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <img
                    src="https://github-profile-trophy.vercel.app/?username=odhiambo-ed&theme=matrix&margin-w=15&row=1"
                    alt="GitHub Trophies"
                    className="w-full rounded-lg"
                  />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Coding Time</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    2,500+ hrs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tracked coding time in 2023
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Projects Completed</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    50+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full-stack applications deployed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    15+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Technologies mastered
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DevStats;
