import {
  FileCode2,
  Image as ImageIcon,
  Keyboard,
  ListChecks,
  Palette,
  Shell,
  Wrench,
} from "lucide-static";

export const docsNav = [
  {
    label: "Optional tools",
    href: "/docs/optional-tools/",
    description: "Preview tools, Nerd Font, and zoxide jumps.",
  },
  {
    label: "Shell integration",
    href: "/docs/shell-integration/",
    description: "cd-on-exit wrappers for bash, zsh, fish, and Nu.",
  },
  {
    label: "Workflow",
    href: "/docs/workflow/",
    description: "Opening files, clipboard, go-to, Trash, search, zoxide, and shell.",
  },
  {
    label: "Default controls",
    href: "/docs/controls/",
    description: "Default controls, file actions, rebinding, and help overlay.",
  },
  {
    label: "Previews",
    href: "/docs/previews/",
    description: "Preview coverage, image protocols, and SSH notes.",
  },
  {
    label: "Configuration",
    href: "/docs/configuration/",
    description: "Startup behavior, Places, layout, and keys.",
  },
  {
    label: "Themes",
    href: "/docs/themes/",
    description: "Palette, file classes, and matching rules.",
  },
];

export const docsPagerNav = docsNav.filter((item) => item.docsPage !== false);

export const formatPath = (path) =>
  path
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\\", "\\<wbr>")
    .replaceAll("/", "/<wbr>");

export const configPaths = [
  {
    platform: "Linux / BSD",
    primary: "~/.config/elio/config.toml",
    secondary: "$XDG_CONFIG_HOME/elio/config.toml",
  },
  {
    platform: "macOS",
    primary: "~/Library/Application Support/elio/config.toml",
  },
  {
    platform: "Windows",
    primary: "%APPDATA%\\elio\\config.toml",
  },
];

export const themePaths = [
  {
    platform: "Linux / BSD",
    primary: "~/.config/elio/theme.toml",
    secondary: "$XDG_CONFIG_HOME/elio/theme.toml",
  },
  {
    platform: "macOS",
    primary: "~/Library/Application Support/elio/theme.toml",
  },
  {
    platform: "Windows",
    primary: "%APPDATA%\\elio\\theme.toml",
  },
];

export const configSections = [
  {
    name: "[ui]",
    body: "Startup options like top bar, hidden files, grid view, and grid zoom.",
  },
  {
    name: "[places]",
    body: "Pinned sidebar entries and whether the Devices section stays visible.",
  },
  {
    name: "[layout.panes]",
    body: "Relative pane widths/heights for Places, Files, and Preview.",
  },
  {
    name: "[keys]",
    body: "Browser action bindings: single keys, lists, named keys, modifiers, and unbound actions.",
  },
];

export const themeSections = [
  {
    name: "[palette]",
    body: "App-wide colors for chrome, panels, borders, text, and selection.",
  },
  {
    name: "[preview.code]",
    body: "Syntax colors for code previews.",
  },
  {
    name: "[classes.<name>]",
    body: "Default icon and color for a file class.",
  },
  {
    name: "[extensions.<ext>]",
    body: "Overrides by file extension.",
  },
  {
    name: '[files."name"]',
    body: "Overrides by exact filename.",
  },
  {
    name: '[directories."name"]',
    body: "Overrides by exact directory name.",
  },
];

export const builtInClasses = [
  "directory",
  "symlink_directory",
  "broken_symlink",
  "code",
  "config",
  "document",
  "license",
  "image",
  "audio",
  "video",
  "archive",
  "font",
  "data",
  "file",
];

export const previewCoverage = [
  {
    title: "Text and code",
    body: "Plain text, source code with syntax highlighting, Markdown, logs, and source-like HTML.",
  },
  {
    title: "Structured data",
    body: "JSON, JSONC, JSON5, YAML, TOML, .env files, CSV/TSV, and SQLite metadata.",
  },
  {
    title: "Documents",
    body: "PDF, EPUB, MOBI, AZW3, Office/OpenDocument files, and Apple Pages metadata where supported.",
  },
  {
    title: "Media",
    body: "Image metadata and inline previews, audio metadata and covers, and video metadata and thumbnails.",
  },
  {
    title: "Folders and archives",
    body: "Directories, ZIP/TAR/RAR/7z archives, CBZ/CBR comics, torrents, ISO images, and similar containers.",
  },
  {
    title: "Binary files",
    body: "Metadata-focused previews for non-text files when richer previewers do not apply.",
  },
];

export const optionalPreviewTools = [
  { name: "Poppler", commands: "pdfinfo, pdftocairo", enables: "PDF metadata and rendered page previews" },
  { name: "FFmpeg", commands: "ffprobe, ffmpeg", enables: "Audio/video metadata, album art, video thumbnails, and wider image support" },
  { name: "resvg", commands: "resvg", enables: "SVG inline previews" },
  { name: "7-Zip", commands: "7z", enables: "Archive previews, fallback archive listings, additional archive formats, and comic book archives" },
];

export const fallbackPreviewTools = [
  { name: "ImageMagick", command: "magick", usedFor: "SVG fallback when resvg is unavailable" },
  { name: "libarchive", command: "bsdtar", usedFor: "Rare archive formats and ISO fallback" },
  { name: "cdrtools / cdrkit", command: "isoinfo", usedFor: "Additional ISO listing fallback" },
  { name: "unrar", command: "unrar", usedFor: "RAR/CBR fallback for 7-Zip builds without RAR support" },
];

export const imagePreviewSupport = [
  {
    terminal: "Kitty",
    protocol: "Kitty Graphics Protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "Ghostty",
    protocol: "Kitty Graphics Protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "Warp",
    protocol: "Kitty direct-placement protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "WezTerm",
    protocol: "iTerm2 Inline Protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "iTerm2",
    protocol: "iTerm2 Inline Protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "Konsole",
    protocol: "Kitty direct-placement protocol",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "foot",
    protocol: "Sixel",
    status: "Auto-detected",
    tone: "auto",
  },
  {
    terminal: "Windows Terminal",
    protocol: "Sixel",
    status: "Auto-detected",
    tone: "auto",
  },
];

export const environmentVariables = [
  { name: "ELIO_IMAGE_PREVIEWS=1", effect: "Force-enable Kitty Graphics Protocol on unrecognized compatible terminals." },
  { name: "ELIO_ZOXIDE_OPTS", effect: "Extra options appended to the zoxide interactive picker options." },
  { name: "ELIO_DEBUG_PREVIEW", effect: "Log image preview activity to elio-preview.log in the system temp directory." },
  { name: "ELIO_LOG_MOUSE", effect: "Log raw mouse events to elio-mouse.log in the system temp directory." },
];

export const overviewCards = [
  {
    title: "Optional tools",
    body: "Understand preview tools, Nerd Fonts, and zoxide.",
    href: "/docs/optional-tools/",
    icon: Wrench,
    tone: "mint",
  },
  {
    title: "Shell integration",
    body: "Install cd-on-exit wrappers and learn q/Q behavior.",
    href: "/docs/shell-integration/",
    icon: Shell,
    tone: "mint",
  },
  {
    title: "Workflow",
    body: "Opening files, clipboard, go-to, Trash, fuzzy search, zoxide, and shell-here behavior.",
    href: "/docs/workflow/",
    icon: Keyboard,
    tone: "amber",
  },
  {
    title: "Controls",
    body: "Default bindings, file actions, rebindable keys, mouse behavior, and the help overlay.",
    href: "/docs/controls/",
    icon: Keyboard,
    tone: "amber",
  },
  {
    title: "Previews",
    body: "See what elio can preview, which terminals support inline images, and how previews behave over SSH.",
    href: "/docs/previews/",
    icon: ImageIcon,
    tone: "violet",
  },
  {
    title: "Configuration",
    body: "Startup behavior, Places, pane layout, and key overrides.",
    href: "/docs/configuration/",
    icon: FileCode2,
    tone: "blue",
  },
  {
    title: "Themes",
    body: "Palette, syntax colors, file classes, and exact-name overrides.",
    href: "/docs/themes/",
    icon: Palette,
    tone: "violet",
  },
  {
    title: "Install elio",
    body: "Package-manager commands and optional preview tool setup.",
    href: "/install/",
    icon: ListChecks,
    tone: "slate",
  },
];
