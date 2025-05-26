export type ThemeName =
  | "dark"
  | "light"
  | "monokai"
  | "dracula"
  | "nord"
  | "solarized-dark"
  | "github-dark";

export interface Theme {
  name: string;
  value: ThemeName;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    sidebarBackground: string;
    sidebarForeground: string;
    sidebarPrimary: string;
    sidebarPrimaryForeground: string;
    sidebarAccent: string;
    sidebarAccentForeground: string;
    sidebarBorder: string;
    sidebarRing: string;
  };
}

export const themes: Theme[] = [
  {
    name: "Dark",
    value: "dark",
    colors: {
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      card: "222.2 84% 4.9%",
      cardForeground: "210 40% 98%",
      primary: "225 73% 57%",
      primaryForeground: "222.2 47.4% 11.2%",
      secondary: "25 95% 53%",
      secondaryForeground: "222.2 47.4% 11.2%",
      muted: "217.2 32.6% 17.5%",
      mutedForeground: "215 20.2% 65.1%",
      accent: "225 73% 57%",
      accentForeground: "210 40% 98%",
      border: "217.2 32.6% 17.5%",
      input: "217.2 32.6% 17.5%",
      ring: "212.7 26.8% 83.9%",
      sidebarBackground: "222.2 84% 4.9%",
      sidebarForeground: "210 40% 98%",
      sidebarPrimary: "225 73% 57%",
      sidebarPrimaryForeground: "0 0% 100%",
      sidebarAccent: "217.2 32.6% 17.5%",
      sidebarAccentForeground: "210 40% 98%",
      sidebarBorder: "217.2 32.6% 17.5%",
      sidebarRing: "212.7 26.8% 83.9%",
    },
  },
  {
    name: "Light",
    value: "light",
    colors: {
      background: "210 40% 96.1%",
      foreground: "222.2 47.4% 11.2%",
      card: "0 0% 100%",
      cardForeground: "222.2 47.4% 11.2%",
      primary: "225 73% 57%",
      primaryForeground: "210 40% 98%",
      secondary: "25 95% 53%",
      secondaryForeground: "222.2 47.4% 11.2%",
      muted: "210 40% 96.1%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "225 73% 57%",
      accentForeground: "222.2 47.4% 11.2%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "222.2 84% 4.9%",
      sidebarBackground: "0 0% 100%",
      sidebarForeground: "222.2 84% 4.9%",
      sidebarPrimary: "225 73% 57%",
      sidebarPrimaryForeground: "210 40% 98%",
      sidebarAccent: "210 40% 96.1%",
      sidebarAccentForeground: "222.2 47.4% 11.2%",
      sidebarBorder: "214.3 31.8% 91.4%",
      sidebarRing: "222.2 84% 4.9%",
    },
  },
  {
    name: "Monokai",
    value: "monokai",
    colors: {
      background: "0 0% 15%",
      foreground: "60 9% 98%",
      card: "0 0% 15%",
      cardForeground: "60 9% 98%",
      primary: "135 94% 65%",
      primaryForeground: "0 0% 15%",
      secondary: "326 100% 74%",
      secondaryForeground: "0 0% 15%",
      muted: "0 0% 22%",
      mutedForeground: "60 9% 78%",
      accent: "54 100% 68%",
      accentForeground: "0 0% 15%",
      border: "0 0% 22%",
      input: "0 0% 22%",
      ring: "135 94% 65%",
      sidebarBackground: "0 0% 15%",
      sidebarForeground: "60 9% 98%",
      sidebarPrimary: "135 94% 65%",
      sidebarPrimaryForeground: "0 0% 15%",
      sidebarAccent: "0 0% 22%",
      sidebarAccentForeground: "60 9% 98%",
      sidebarBorder: "0 0% 22%",
      sidebarRing: "135 94% 65%",
    },
  },
  {
    name: "Dracula",
    value: "dracula",
    colors: {
      background: "231 15% 18%",
      foreground: "60 30% 96%",
      card: "231 15% 18%",
      cardForeground: "60 30% 96%",
      primary: "265 89% 78%",
      primaryForeground: "231 15% 18%",
      secondary: "326 100% 74%",
      secondaryForeground: "231 15% 18%",
      muted: "232 14% 31%",
      mutedForeground: "60 30% 76%",
      accent: "191 97% 77%",
      accentForeground: "231 15% 18%",
      border: "232 14% 31%",
      input: "232 14% 31%",
      ring: "265 89% 78%",
      sidebarBackground: "231 15% 18%",
      sidebarForeground: "60 30% 96%",
      sidebarPrimary: "265 89% 78%",
      sidebarPrimaryForeground: "231 15% 18%",
      sidebarAccent: "232 14% 31%",
      sidebarAccentForeground: "60 30% 96%",
      sidebarBorder: "232 14% 31%",
      sidebarRing: "265 89% 78%",
    },
  },
  {
    name: "Nord",
    value: "nord",
    colors: {
      background: "220 16% 22%",
      foreground: "218 27% 94%",
      card: "220 16% 22%",
      cardForeground: "218 27% 94%",
      primary: "213 32% 52%",
      primaryForeground: "218 27% 94%",
      secondary: "179 25% 65%",
      secondaryForeground: "220 16% 22%",
      muted: "220 16% 36%",
      mutedForeground: "218 27% 74%",
      accent: "354 42% 56%",
      accentForeground: "218 27% 94%",
      border: "220 16% 36%",
      input: "220 16% 36%",
      ring: "213 32% 52%",
      sidebarBackground: "220 16% 22%",
      sidebarForeground: "218 27% 94%",
      sidebarPrimary: "213 32% 52%",
      sidebarPrimaryForeground: "218 27% 94%",
      sidebarAccent: "220 16% 36%",
      sidebarAccentForeground: "218 27% 94%",
      sidebarBorder: "220 16% 36%",
      sidebarRing: "213 32% 52%",
    },
  },
  {
    name: "Solarized Dark",
    value: "solarized-dark",
    colors: {
      background: "192 100% 11%",
      foreground: "44 87% 94%",
      card: "192 100% 11%",
      cardForeground: "44 87% 94%",
      primary: "205 69% 98%",
      primaryForeground: "192 100% 11%",
      secondary: "68 100% 30%",
      secondaryForeground: "44 87% 94%",
      muted: "194 14% 40%",
      mutedForeground: "186 8% 55%",
      accent: "33 100% 50%",
      accentForeground: "192 100% 11%",
      border: "194 14% 40%",
      input: "194 14% 40%",
      ring: "205 69% 98%",
      sidebarBackground: "192 100% 11%",
      sidebarForeground: "44 87% 94%",
      sidebarPrimary: "205 69% 98%",
      sidebarPrimaryForeground: "192 100% 11%",
      sidebarAccent: "194 14% 40%",
      sidebarAccentForeground: "44 87% 94%",
      sidebarBorder: "194 14% 40%",
      sidebarRing: "205 69% 98%",
    },
  },
  {
    name: "GitHub Dark",
    value: "github-dark",
    colors: {
      background: "220 13% 9%",
      foreground: "220 14% 93%",
      card: "220 13% 9%",
      cardForeground: "220 14% 93%",
      primary: "212 92% 45%",
      primaryForeground: "220 14% 93%",
      secondary: "134 61% 41%",
      secondaryForeground: "220 14% 93%",
      muted: "215 14% 34%",
      mutedForeground: "217 10% 64%",
      accent: "42 93% 55%",
      accentForeground: "220 13% 9%",
      border: "215 14% 34%",
      input: "215 14% 34%",
      ring: "212 92% 45%",
      sidebarBackground: "220 13% 9%",
      sidebarForeground: "220 14% 93%",
      sidebarPrimary: "212 92% 45%",
      sidebarPrimaryForeground: "220 14% 93%",
      sidebarAccent: "215 14% 34%",
      sidebarAccentForeground: "220 14% 93%",
      sidebarBorder: "215 14% 34%",
      sidebarRing: "212 92% 45%",
    },
  },
];
