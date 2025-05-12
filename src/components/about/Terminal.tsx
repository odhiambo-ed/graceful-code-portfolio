
"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CommandResult {
  command: string;
  result: React.ReactNode;
  timestamp: string;
}

export default function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<CommandResult[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const bioTexts = [
    "Hello there! I'm Edward Odhiambo, a passionate full-stack developer.",
    "I specialize in React, TypeScript, and Node.js, creating performant and user-friendly applications.",
    "Type 'help' to see available commands and learn more about me."
  ];

  useEffect(() => {
    // Auto focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Add initial welcome message
    setHistory([
      {
        command: 'welcome',
        result: (
          <div className="space-y-2">
            <p className="text-blue-400">Welcome to my interactive terminal!</p>
            <p>Type <span className="bg-gray-800 text-blue-400 px-1 rounded">help</span> to see available commands.</p>
          </div>
        ),
        timestamp: getTimestamp(),
      },
    ]);
    
    // Start typing animation
    let timer: ReturnType<typeof setTimeout>;
    const typeText = (textIndex: number) => {
      if (textIndex < bioTexts.length) {
        const text = bioTexts[textIndex];
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex < text.length) {
            setTypingText(prev => prev + text[charIndex]);
            charIndex++;
            timer = setTimeout(typeChar, 50);
          } else {
            // When one text is finished typing, add it to history and move to the next
            setHistory(prev => [
              ...prev, 
              {
                command: 'system',
                result: <p>{text}</p>,
                timestamp: getTimestamp()
              }
            ]);
            setTypingText('');
            setCurrentTextIndex(prevIndex => prevIndex + 1);
          }
        };
        
        timer = setTimeout(typeChar, 500);
      }
    };
    
    typeText(currentTextIndex);
    
    return () => clearTimeout(timer);
  }, [currentTextIndex]);

  useEffect(() => {
    // When currentTextIndex changes, start typing the next text
    if (currentTextIndex > 0 && currentTextIndex < bioTexts.length) {
      let timer = setTimeout(() => {
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex < bioTexts[currentTextIndex].length) {
            setTypingText(prev => prev + bioTexts[currentTextIndex][charIndex]);
            charIndex++;
            timer = setTimeout(typeChar, 50);
          } else {
            // When one text is finished typing, add it to history and move to the next
            setHistory(prev => [
              ...prev, 
              {
                command: 'system',
                result: <p>{bioTexts[currentTextIndex]}</p>,
                timestamp: getTimestamp()
              }
            ]);
            setTypingText('');
            setCurrentTextIndex(prevIndex => prevIndex + 1);
          }
        };
        
        timer = setTimeout(typeChar, 500);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex]);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, typingText]);
  
  function getTimestamp(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!command.trim()) return;
    
    // Add command to history
    const newHistoryItem: CommandResult = {
      command: command.trim(),
      result: processCommand(command.trim()),
      timestamp: getTimestamp(),
    };
    
    setHistory([...history, newHistoryItem]);
    setCommand('');
    setHistoryIndex(-1);
  }

  function processCommand(cmd: string): React.ReactNode {
    const lowerCmd = cmd.toLowerCase();
    
    switch (lowerCmd) {
      case 'help':
        return (
          <div className="space-y-1">
            <p>Available commands:</p>
            <ul className="list-disc list-inside pl-2">
              <li><span className="text-orange-400">whoami</span> - Learn about me</li>
              <li><span className="text-orange-400">skills</span> - View my technical skills</li>
              <li><span className="text-orange-400">contact</span> - My contact information</li>
              <li><span className="text-orange-400">projects</span> - List my projects</li>
              <li><span className="text-orange-400">clear</span> - Clear the terminal</li>
            </ul>
          </div>
        );
      
      case 'whoami':
        return (
          <div className="space-y-2">
            <p className="text-blue-400 font-bold">Edward Odhiambo</p>
            <p>A passionate full-stack developer with 5+ years of experience building web applications.</p>
            <p>I specialize in React, Node.js, and TypeScript, creating performant and user-friendly applications.</p>
          </div>
        );
      
      case 'skills':
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
      
      case 'contact':
        return (
          <div className="space-y-2">
            <p className="text-blue-400 font-bold">Contact Information:</p>
            <ul className="list-none space-y-1">
              <li>📧 Email: <a href="mailto:edward@example.com" className="text-blue-400 hover:underline">edward@example.com</a></li>
              <li>🔗 LinkedIn: <a href="https://linkedin.com/in/edwardodhiambo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/edwardodhiambo</a></li>
              <li>🐙 GitHub: <a href="https://github.com/odhiambo-ed" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/odhiambo-ed</a></li>
            </ul>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-2">
            <p>Check out my <a href="/projects" className="text-blue-400 hover:underline">projects page</a> for a complete list.</p>
            <p className="text-blue-400 font-bold">Featured Projects:</p>
            <ul className="list-disc list-inside pl-2">
              <li>E-commerce Platform</li>
              <li>AI Content Generator</li>
              <li>Task Management Tool</li>
            </ul>
          </div>
        );
      
      case 'clear':
        setTimeout(() => {
          setHistory([]);
        }, 100);
        return "Clearing terminal...";
      
      default:
        return (
          <p className="text-red-400">Command not recognized: <span className="font-bold">{cmd}</span>. Type <span className="bg-gray-800 text-blue-400 px-1 rounded">help</span> to see available commands.</p>
        );
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    // Handle up and down arrow keys for history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
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
        <div className="ml-4 text-gray-300 font-mono text-sm">edward@portfolio ~ </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="bg-gray-900 text-gray-100 p-4 h-full overflow-y-auto font-mono text-sm"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            {item.command !== 'system' && (
              <div className="flex">
                <span className="text-blue-400">[{item.timestamp}] edward@portfolio:~$ </span>
                <span className="text-white ml-2">{item.command}</span>
              </div>
            )}
            <div className={item.command !== 'system' ? "mt-1 ml-5" : ""}>{item.result}</div>
          </div>
        ))}
        
        {typingText && (
          <div className="mb-4">
            <div className="text-blue-400">[{getTimestamp()}] system typing...</div>
            <div className="mt-1 ml-5 typing-animation">{typingText}</div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-blue-400">edward@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-white ml-2"
            autoFocus
          />
        </form>
      </div>
    </motion.div>
  );
}
