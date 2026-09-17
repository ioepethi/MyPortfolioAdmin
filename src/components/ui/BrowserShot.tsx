import { cn } from "@/lib/utils";

/**
 * Browser-chrome frame for REAL screenshots only — never used to fake UI.
 */
export function BrowserShot({
  src,
  alt,
  label,
  url,
  fit = "cover",
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  label?: string;
  url?: string;
  fit?: "cover" | "contain";
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)]", className)}>
      <div className="browser-bar">
        <span className="browser-dot" aria-hidden />
        <span className="browser-dot" aria-hidden />
        <span className="browser-dot" aria-hidden />
        {url && (
          <span className="label ml-3 truncate !normal-case !tracking-normal !text-[10px] text-[var(--sub)]">
            {url}
          </span>
        )}
      </div>
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full transition-transform duration-700 ease-out",
            fit === "contain" ? "object-contain" : "object-cover object-top",
            imgClassName
          )}
        />
      </div>
      {label && (
        <figcaption className="hairline-t flex items-center justify-between px-4 py-2.5">
          <span className="label">{label}</span>
          <span className="label label-green">Real screenshot</span>
        </figcaption>
      )}
    </figure>
  );
}
