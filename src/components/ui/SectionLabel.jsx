export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
      {children}
    </span>
  );
}
