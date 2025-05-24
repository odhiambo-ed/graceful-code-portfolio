import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Mail, MapPin, Globe, Phone } from "lucide-react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Fullstack" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <div className="flex justify-center">
          <a
            href="/EDWARD_ODHIAMBO_-_Frontend_Engineer_-_JavaScript,_TypeScript,_React_&_Next.pdf"
            download
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <FileText size={20} />
            Download Resume (PDF)
          </a>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-center border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-2">Edward Odhiambo</h2>
          <p className="text-muted-foreground">
            {activeTab === "frontend" &&
              "Frontend Engineer - JavaScript, TypeScript, React & Next"}
            {activeTab === "backend" &&
              "Backend Engineer - Ruby, Rails & PostgreSQL"}
            {activeTab === "fullstack" &&
              "Full-Stack Engineer - React, Next.js, Ruby on Rails"}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:odhiamboodward.ouma@gmail.com"
                className="text-primary hover:underline"
              >
                odhiamboodward.ouma@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span className="font-semibold">Phone:</span>
              <span>+254726900598</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span className="font-semibold">Location:</span>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span className="font-semibold">Links:</span>
              <a
                href="https://linkedin.com/in/edward-odhiambo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://github.com/odhiambo-ed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href="https://gitlab.com/odhiambo_ed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitLab
              </a>
              <span>|</span>
              <a
                href="https://edwardodhiambo.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Profile</h2>
          <p className="text-muted-foreground">
            {activeTab === "frontend" &&
              "Front-end Engineer with expertise in JavaScript, TypeScript, React, and Next.js, specializing in building responsive and user-friendly interfaces in Agile environments."}
            {activeTab === "backend" &&
              "Backend Engineer skilled in Ruby, Ruby on Rails, and PostgreSQL, focusing on secure API integrations and efficient database management for seamless operations."}
            {activeTab === "fullstack" &&
              "Front-end Engineer with experience in micro-services architecture, Agile environments, and collaborating with international teams, seeking a new challenge to develop innovative B2C products."}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            Employment History
          </h2>

          {(activeTab === "frontend" || activeTab === "fullstack") && (
            <>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap mb-1">
                  <h3 className="text-lg font-medium">Front-End Developer</h3>
                  <span className="text-sm text-muted-foreground">
                    Jan 2020 - May 2022
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Smart People Africa Ltd, Nairobi
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Integrated front-end with APIs, improving data flow
                    efficiency by 25%.
                  </li>
                  <li>
                    Developed responsive websites for 20+ clients using HTML5,
                    JavaScript, React, and CSS3 with Webpack.
                  </li>
                  <li>
                    Enhanced JSON data handling, reducing load times by 20%.
                  </li>
                </ul>
              </div>
            </>
          )}

          {(activeTab === "backend" || activeTab === "fullstack") && (
            <>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap mb-1">
                  <h3 className="text-lg font-medium">Full-Stack Developer</h3>
                  <span className="text-sm text-muted-foreground">
                    Jun 2022 - Dec 2023
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Tetra Pak, Lund, Sweden (Remote)
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {activeTab === "backend" ? (
                    <>
                      <li>
                        Developed backend services for the EcoPack Dashboard,
                        integrating with PostgreSQL for real-time data
                        processing.
                      </li>
                      <li>
                        Collaborated on RESTful API development, ensuring secure
                        and efficient data flow.
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        Developed an EcoPack Dashboard using React and
                        TailwindCSS for real-time environmental insights.
                      </li>
                      <li>
                        Collaborated with design teams to create modern
                        interfaces, increasing user satisfaction by 30%.
                      </li>
                      <li>
                        Enhanced mobile responsiveness and implemented Jest
                        testing, improving engagement by 25% and reducing
                        post-deployment issues by 90%.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </>
          )}

          {(activeTab === "frontend" || activeTab === "fullstack") && (
            <div className="mb-6">
              <div className="flex justify-between flex-wrap mb-1">
                <h3 className="text-lg font-medium">Volunteer Mentor</h3>
                <span className="text-sm text-muted-foreground">
                  Jun 2022 - Present
                </span>
              </div>
              <p className="text-primary font-medium mb-2">
                Microverse Bootcamp (Remote)
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Mentored over 40 students, helping them improve their coding
                  skills and career prospects.
                </li>
              </ul>
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Projects</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {(activeTab === "frontend" || activeTab === "fullstack") && (
              <>
                <li>
                  <span className="font-medium text-foreground">ERMS</span> -
                  Enterprise Resource Hub that streamlines operations through an
                  enhanced user interface built with React and Redux.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Forge Marketplace
                  </span>{" "}
                  - A provider marketplace.
                </li>
              </>
            )}
            {(activeTab === "backend" || activeTab === "fullstack") && (
              <>
                <li>
                  <span className="font-medium text-foreground">
                    Quikk API Dashboard
                  </span>{" "}
                  - A secure Quikk API integration for seamless transactions.
                </li>
                <li>
                  <span className="font-medium text-foreground">SCOP</span> -
                  Optichain Solution that streamlines supply chain operations.
                </li>
              </>
            )}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            Education
          </h2>
          <div className="mb-4">
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">
                MSc in Information Systems
              </h3>
              <span className="text-sm text-muted-foreground">
                Oct 2021 - Present
              </span>
            </div>
            <p className="text-primary font-medium">
              University of Nairobi (EU Blue Card eligible university)
            </p>
          </div>
          <div>
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-lg font-medium">
                BSc in Information Technology
              </h3>
              <span className="text-sm text-muted-foreground">
                Oct 2012 - Apr 2016
              </span>
            </div>
            <p className="text-primary font-medium">
              Murang’a University of Technology (EU Blue Card eligible
              university)
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === "frontend" || activeTab === "fullstack") && (
              <div>
                <h3 className="font-medium mb-2">Frontend Stack</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>JavaScript, TypeScript</li>
                  <li>React, Next.js</li>
                  <li>HTML5, CSS3</li>
                  <li>UI/UX</li>
                  {activeTab === "fullstack" && (
                    <>
                      <li>Ruby, Ruby on Rails</li>
                      <li>PostgreSQL</li>
                    </>
                  )}
                </ul>
              </div>
            )}
            {(activeTab === "backend" || activeTab === "fullstack") && (
              <div>
                <h3 className="font-medium mb-2">
                  {activeTab === "backend" ? "Backend Stack" : "Backend"}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Ruby, Ruby on Rails</li>
                  <li>PostgreSQL</li>
                  <li>RESTful API</li>
                  {activeTab === "fullstack" && (
                    <>
                      <li>JavaScript, TypeScript</li>
                      <li>React, Next.js</li>
                    </>
                  )}
                </ul>
              </div>
            )}
            <div>
              <h3 className="font-medium mb-2">Others</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Agile Development</li>
                <li>AWS, Docker, Kubernetes</li>
                <li>Git, GitHub</li>
                <li>Jest</li>
                <li>Collaboration, Communication Skills</li>
                <li>Customer Service, Problem Solving Skills, Team Player</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              M-Pesa Mini App & API Development (Safaricom), Moringa School (Mar
              2024 - May 2024)
            </li>
            <li>
              Full-Stack Developer Bootcamp, Microverse (Feb 2022 - Oct 2022)
            </li>
            <li>
              Certified Ethical Hacker (EC Council), Strathmore University (Oct
              2020 - Dec 2020)
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            Languages
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>English</li>
            <li>German</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;