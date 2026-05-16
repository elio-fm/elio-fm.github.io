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
    optionalToolsCommand: "sudo pacman -S poppler ffmpeg resvg 7zip",
    note: "Install from the AUR",
  },
  {
    name: "Fedora",
    icon: "fedora",
    command: "sudo dnf copr enable miguelregueiro/elio\nsudo dnf install elio",
    optionalToolsCommand: "sudo dnf install poppler-utils ffmpeg resvg 7zip",
    optionalToolsNote: "Full FFmpeg may require RPM Fusion on Fedora.",
    note: "Official COPR package",
  },
  {
    name: "Debian and Ubuntu-based Linux",
    quickStartLabel: "Debian",
    icon: "debian",
    command: "curl -fsSL https://elio-fm.github.io/elio-apt/install.sh | sudo sh\nsudo apt install elio",
    note: "Official apt repository for Debian, Ubuntu, Mint, LMDE, Pop!_OS, and compatible distributions",
  },
  {
    name: "Homebrew",
    icon: "homebrew",
    command: "brew install elio-fm/elio/elio",
    optionalToolsCommand: "brew install poppler ffmpeg resvg sevenzip",
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
    body: "Browse places, files, and previews in one flow.",
  },
  {
    icon: "preview",
    title: "Rich previews",
    body: "Text, code, data, docs, media, archives, and more.",
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
    image: "/images/catppuccin-mocha.webp",
  },
  {
    name: "Amber Dusk",
    image: "/images/amber-dusk.webp",
  },
  {
    name: "Transparent",
    image: "/images/transparent.webp",
  },
  {
    name: "Blush Light",
    image: "/images/blush-light.webp",
  },
  {
    name: "Navi",
    image: "/images/navi.webp",
  },
  {
    name: "Tokyo Night",
    image: "/images/tokyo-night.webp",
  },
  {
    name: "Neon Cherry",
    image: "/images/neon-cherry.webp",
  },
  {
    name: "Default Light",
    image: "/images/default-light.webp",
  },
];

export const actionPreviews = [
  {
    id: "bulk-add",
    eyebrow: "Bulk add",
    label: "Bulk add",
    title: "Create files in bulk",
    body: "A short real workflow capture from inside elio.",
    video: "/videos/bulk-add.webm",
    note: "",
    chips: ["Keyboard-first", "Batch workflow", "Preview stays visible"],
    highlights: [
      "Build up a selection quickly without modal hopping.",
      "Keep spatial context while you decide what to do next.",
      "Stay inside the same keyboard loop from selection to action.",
    ],
  },
  {
    id: "previews",
    eyebrow: "Previews",
    label: "Previews",
    title: "Instant file previews",
    body: "A short real workflow capture from inside elio.",
    video: "/videos/previews.webm",
    note: "",
    chips: ["Inline preview", "Fast browsing", "Single flow"],
    highlights: [],
  },
  {
    id: "copy-cut-paste",
    eyebrow: "Copy / cut / paste",
    label: "Copy / cut / paste",
    title: "Copy, cut, paste",
    body: "A short real workflow capture from inside elio.",
    video: "/videos/copy-cut-paste.webm",
    note: "",
    chips: ["Move files", "Keyboard-first", "Fast operations"],
    highlights: [],
  },
];
