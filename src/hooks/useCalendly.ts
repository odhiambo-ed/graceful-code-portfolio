import { useEffect, useRef } from "react";

interface CalendlyWidgetOptions {
  url: string;
  text?: string;
  color?: string;
  textColor?: string;
  showBadge?: boolean;
}

export const useCalendly = (options: CalendlyWidgetOptions | null) => {
  const isInitialized = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // If no options provided, clean up any existing widget
    if (!options) {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      isInitialized.current = false;
      return;
    }

    // If already initialized with the same options, do nothing
    if (isInitialized.current) {
      return;
    }

    const loadCalendly = async () => {
      try {
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

        // Wait for script to load
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        // Initialize the badge widget if requested
        if (options.showBadge !== false) {
          window.Calendly?.initBadgeWidget({
            url: options.url,
            text: options.text || "Schedule time with me",
            color: options.color || "#0069ff",
            textColor: options.textColor || "#ffffff",
          });
        }

        isInitialized.current = true;

        // Store cleanup function
        cleanupRef.current = () => {
          // Remove Calendly badge widget if it exists
          if (window.Calendly && window.Calendly.destroyBadgeWidget) {
            window.Calendly.destroyBadgeWidget();
          }

          // Remove script and link elements
          if (document.head.contains(link)) {
            document.head.removeChild(link);
          }
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }

          // Remove any Calendly elements from DOM
          const calendlyElements = document.querySelectorAll(
            '[class*="calendly"]',
          );
          calendlyElements.forEach((el) => el.remove());

          isInitialized.current = false;
        };
      } catch (error) {
        console.error("Failed to load Calendly:", error);
      }
    };

    loadCalendly();

    // Cleanup on unmount or when options change
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [options]);

  // Function to show popup widget
  const showPopup = () => {
    if (options && window.Calendly) {
      window.Calendly.showPopupWidget(options.url);
    }
  };

  return { showPopup };
};

// Add global type declarations for Calendly
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
      showPopupWidget: (url: string) => void;
      destroyBadgeWidget?: () => void;
    };
  }
}
