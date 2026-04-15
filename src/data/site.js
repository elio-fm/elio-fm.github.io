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
