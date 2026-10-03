// Category keys stay in English in the MDX frontmatter; readers see the Polish label.
const categories: Record<string, { label: string; color: string }> = {
  Guides: { label: "Poradniki", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  Beginners: { label: "Dla początkujących", color: "bg-green-500/15 text-green-400 border-green-500/20" },
  Troubleshooting: { label: "Rozwiązywanie problemów", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
  Sports: { label: "Sport", color: "bg-brand-400/15 text-brand-400 border-brand-400/20" },
  Comparisons: { label: "Porównania", color: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
  Reviews: { label: "Rankingi", color: "bg-rose-500/15 text-rose-400 border-rose-500/20" },
};

const fallbackColor = "bg-card-2 text-slate-400 border-white/10";

export function categoryLabel(category: string) {
  return categories[category]?.label ?? category;
}

export function categoryColor(category: string) {
  return categories[category]?.color ?? fallbackColor;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
