import React from "react";

type Item = { id: string; label: string };
type Props = {
  items: Item[];
  activeId: string;
  onJump: (id: string) => void;
};

export default function TOC({ items, activeId, onJump }: Props) {
  return (
    <nav className="hidden md:flex flex-col items-center fixed right-6 top-1/3 z-50">
  <ul className="space-y-4">
    {items.map((it) => {
      const active = it.id === activeId;
      return (
        <li key={it.id} className="group relative flex justify-center">
          <button
            onClick={() => onJump(it.id)}
            className={[
              "h-3 w-3 rounded-full transition-all",
              active
                ? "bg-amber-400 scale-125 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                : "bg-gray-400 hover:bg-gray-200",
            ].join(" ")}
          />
          <span className="absolute right-6 px-2 py-1 text-xs rounded bg-black/70 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
            {it.label}
          </span>
        </li>
      );
    })}
  </ul>
</nav>

  );
}
