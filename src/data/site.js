export const navItems = [
  { href: "/", label: "Home" },
  { href: "/install", label: "Install" },
  { href: "/docs", label: "Docs" },
  { href: "https://github.com/elio-fm/elio", label: "GitHub", external: true },
];

export const installOptions = [
  {
    name: "Homebrew",
    icon: "homebrew",
    command: "brew install elio-fm/elio/elio",
    note: "macOS and Linux Homebrew users",
  },
  {
    name: "Arch / AUR",
    icon: "archlinux",
    command: "paru -S elio",
    note: "Fastest path on Arch Linux",
  },
  {
    name: "Fedora",
    icon: "fedora",
    command: "sudo dnf copr enable miguelregueiro/elio\nsudo dnf install elio",
    note: "Official COPR package",
  },
  {
    name: "Cargo",
    icon: "rust",
    command: "cargo install elio",
    note: "Cross-platform install from crates.io",
  },
];

export const features = [
  {
    title: "Three panes, less friction",
    body: "Places, files, and preview stay visible together. No modal hopping.",
  },
  {
    title: "Rich previews",
    body: "Text, code, documents, archives, and media stay inline.",
  },
  {
    title: "Inline images",
    body: "Supported terminals render images directly in the preview pane.",
  },
  {
    title: "Themes that actually change the mood",
    body: "Bundled themes and palette control keep the interface flexible.",
  },
];

export const themeShots = [
  {
    name: "Catppuccin Mocha",
    image: "/images/catppuccin-mocha.png",
    alt: "Elio using the Catppuccin Mocha theme.",
  },
  {
    name: "Tokyo Night",
    image: "/images/tokyo-night.png",
    alt: "Elio using the Tokyo Night theme.",
  },
  {
    name: "Blush Light",
    image: "/images/blush-light.png",
    alt: "Elio using the Blush Light theme.",
  },
];
