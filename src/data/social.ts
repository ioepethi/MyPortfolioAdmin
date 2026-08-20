import { profile } from "./profile";

export type SocialLink = {
  key: "linkedin" | "github" | "facebook";
  label: string;
  href: string;
  /** Shown only when href is non-empty. */
  enabled: boolean;
};

/**
 * Single source of truth for social links.
 * Facebook is hidden automatically when its URL is empty — never invent one.
 */
export const socialLinks: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    enabled: Boolean(profile.linkedin),
  },
  {
    key: "github",
    label: "GitHub",
    href: profile.github,
    enabled: Boolean(profile.github),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: profile.facebook,
    enabled: Boolean(profile.facebook),
  },
];

export const visibleSocialLinks = socialLinks.filter((s) => s.enabled);
