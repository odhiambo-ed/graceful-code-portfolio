"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CommandResult {
  command: string;
  result: React.ReactNode;
  timestamp: string;
}

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [bioTextIndex, setBioTextIndex] = useState(0);
  const [bioCompleted, setBioCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const bioTexts = [
    "Hello there! I'm Edward Odhiambo, a passionate full-stack developer.",
    "I specialize in React, TypeScript, and Node.js, creating performant and user-friendly applications.",
    "Type 'help' to see available commands and learn more about me.",
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    setHistory([
      {
        command: "welcome",
        result: (
          <div className="space-y-2">
            <p className="text-blue-400">Welcome to my interactive terminal!</p>
            <p>
              Type{" "}
              <span className="bg-gray-800 text-blue-400 px-1 rounded">
                help
              </span>{" "}
              to see available commands.
            </p>
          </div>
        ),
        timestamp: getTimestamp(),
      },
    ]);

    // Start typing bio texts after a delay, but only if not already completed
    if (!bioCompleted) {
      setTimeout(() => {
        typeBioSequence();
      }, 500);
    }
  }, []);

  const typeBioSequence = () => {
    if (bioCompleted) return; // Prevent re-triggering if already completed
    setIsTyping(true);

    let currentIndex = bioTextIndex; // Start from the current index

    const typeSingleBioText = () => {
      if (currentIndex >= bioTexts.length) {
        setIsTyping(false);
        setBioCompleted(true);
        setBioTextIndex(bioTexts.length); // Ensure we don't restart
        return;
      }

      const currentText = bioTexts[currentIndex];
      const typingTimestamp = getTimestamp();

      setHistory((prev) => [
        ...prev,
        {
          command: "system",
          result: <p className="text-gray-500">system typing...</p>,
          timestamp: typingTimestamp,
        },
      ]);

      let charIndex = 0;
      let typedText = "";

      const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          typedText += currentText.charAt(charIndex);
          charIndex++;

          setHistory((prev) => {
            const newHistory = [...prev];
            const lastIndex = newHistory.length - 1;
            if (newHistory[lastIndex]?.timestamp === typingTimestamp) {
              newHistory[lastIndex] = {
                ...newHistory[lastIndex],
                result: <p>{typedText}</p>,
              };
            }
            return newHistory;
          });
        } else {
          clearInterval(typingInterval);
          currentIndex++;
          setBioTextIndex(currentIndex);

          if (currentIndex < bioTexts.length) {
            setTimeout(typeSingleBioText, 1000); // Delay before typing the next text
          } else {
            setIsTyping(false);
            setBioCompleted(true);
          }
        }
      }, 30);
    };

    typeSingleBioText(); // Start the sequence
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  function getTimestamp(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!command.trim()) return;

    const newHistoryItem: CommandResult = {
      command: command.trim(),
      result: processCommand(command.trim()),
      timestamp: getTimestamp(),
    };

    setHistory([...history, newHistoryItem]);
    setCommand("");
    setHistoryIndex(-1);
  }

  function processCommand(cmd: string): React.ReactNode {
    const lowerCmd = cmd.toLowerCase();

    switch (lowerCmd) {
      case "help":
        return (
          <div className="space-y-1">
            <p>Available commands:</p>
            <ul className="list-disc list-inside pl-2">
              <li>
                <span className="text-orange-400">whoami</span> - Learn about me
              </li>
              <li>
                <span className="text-orange-400">skills</span> - View my
                technical skills
              </li>
              <li>
                <span className="text-orange-400">contact</span> - My contact
                information
              </li>
              <li>
                <span className="text-orange-400">projects</span> - List my
                projects
              </li>
              <li>
                <span className="text-orange-400">clear</span> - Clear the
                terminal
              </li>
            </ul>
          </div>
        );

      case "whoami":
        return (
          <div className="space-y-2">
            <p className="text-blue-400 font-bold">Edward Odhiambo</p>
            <p>
              A passionate full-stack developer with 5+ years of experience
              building web applications.
            </p>
            <p>
              I specialize in React, Node.js, and TypeScript, creating
              performant and user-friendly applications.
            </p>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-2">
            <p className="text-blue-400 font-bold">Technical Skills:</p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-orange-400">Frontend:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <p className="text-orange-400">Backend:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-2">
            <p className="text-blue-400 font-bold">Contact Information:</p>
            <ul className="list-none space-y-1">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:edward@example.com"
                  className="text-blue-400 hover:underline"
                >
                  edward@example.com
                </a>
              </li>
              <li>
                🔗 LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/edwardodhiambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/edwardodhiambo
                </a>
              </li>
              <li>
                🐙 GitHub:{" "}
                <a
                  href="https://github.com/odhiambo-ed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/odhiambo-ed
                </a>
              </li>
            </ul>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-2">
            <p>
              Check out my{" "}
              <a href="/projects" className="text-blue-400 hover:underline">
                projects page
              </a>{" "}
              for a complete list.
            </p>
            <p className="text-blue-400 font-bold">Featured Projects:</p>
            <ul className="list-disc list-inside pl-2">
              <li>E-commerce Platform</li>
              <li>AI Content Generator</li>
              <li>Task Management Tool</li>
            </ul>
          </div>
        );

      case "clear":
        setTimeout(() => {
          setHistory([]);
          setBioTextIndex(0);
          setBioCompleted(false);
          setTimeout(typeBioSequence, 500); // Restart bio typing after clearing
        }, 100);
        return "Clearing terminal...";

      default:
        return (
          <p className="text-red-400">
            Command not recognized: <span className="font-bold">{cmd}</span>.
            Type{" "}
            <span className="bg-gray-800 text-blue-400 px-1 rounded">help</span>{" "}
            to see available commands.
          </p>
        );
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        let commandsHistory = history.filter(
          (item) => item.command !== "welcome" && item.command !== "system"
        );
        if (commandsHistory.length > 0) {
          setCommand(
            commandsHistory[commandsHistory.length - 1 - newIndex]?.command ||
              ""
          );
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        let commandsHistory = history.filter(
          (item) => item.command !== "welcome" && item.command !== "system"
        );
        if (commandsHistory.length > 0) {
          setCommand(
            commandsHistory[commandsHistory.length - 1 - newIndex]?.command ||
              ""
          );
        }
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black border border-gray-700 rounded-lg overflow-hidden shadow-2xl mx-auto h-[80vh]"
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-300 font-mono text-sm">
          edward@portfolio ~{" "}
        </div>
      </div>

      <div
        ref={terminalRef}
        className="bg-gray-900 text-gray-100 p-4 h-full overflow-y-auto font-mono text-sm"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            {item.command !== "system" && (
              <div className="flex flex-wrap">
                <span className="text-blue-400">
                  [{item.timestamp}] edward@portfolio:~${" "}
                </span>
                <span className="text-white ml-0 md:ml-2">{item.command}</span>
              </div>
            )}
            <div
              className={item.command !== "system" ? "mt-1 ml-0 md:ml-5" : ""}
            >
              {item.result}
            </div>
          </div>
        ))}

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center mt-2"
        >
          <span className="text-blue-400 whitespace-nowrap">
            edward@portfolio:~${" "}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-white ml-2 min-w-[100px]"
            autoFocus
            aria-label="Terminal command input"
            disabled={isTyping}
          />
        </form>
      </div>
    </motion.div>
  );
}
