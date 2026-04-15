export const navItems = [
  { href: "/", label: "Home" },
  { href: "/install", label: "Install" },
  { href: "/docs", label: "Docs" },
  { href: "https://github.com/elio-fm/elio", label: "GitHub", external: true },
];

export const installOptions = [
  {
    name: "Arch",
    icon: "archlinux",
    command: "paru -S elio",
    note: "Install from the AUR",
  },
  {
    name: "Fedora",
    icon: "fedora",
    command: "sudo dnf copr enable miguelregueiro/elio\nsudo dnf install elio",
    note: "Official COPR package",
  },
  {
    name: "Homebrew",
    icon: "homebrew",
    command: "brew install elio-fm/elio/elio",
    note: "Install from the Homebrew tap",
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
    icon: "panels",
    title: "Three panes",
    body: "Places, files, and preview stay visible together. No modal hopping.",
  },
  {
    icon: "preview",
    title: "Rich previews",
    body: "Text, code, documents, archives, and media stay inline.",
  },
  {
    icon: "image",
    title: "Inline images",
    body: "Supported terminals render images directly in the preview pane.",
  },
  {
    icon: "actions",
    title: "Quick actions",
    body: "Go-to, Open With, search, copy, and bulk actions stay close at hand.",
  },
  {
    icon: "trash",
    title: "Trash management",
    body: "Trash, restore, or permanently delete files on Linux, macOS, and BSD.",
  },
  {
    icon: "views",
    title: "Grid and list views",
    body: "Switch between list and grid views, then zoom the grid when you want more density.",
  },
];

export const themeShots = [
  {
    name: "Catppuccin Mocha",
    image: "/images/catppuccin-mocha.png",
    alt: "elio using the Catppuccin Mocha theme.",
  },
  {
    name: "Tokyo Night",
    image: "/images/tokyo-night.png",
    alt: "elio using the Tokyo Night theme.",
  },
  {
    name: "Blush Light",
    image: "/images/blush-light.png",
    alt: "elio using the Blush Light theme.",
  },
];
