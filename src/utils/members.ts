export function memberInitials(name: string): string {
  return name
    .split(/\s+/)
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function normalizeMemberPhoto(
  photo: string | null | undefined
): string | undefined {
  if (!photo) return undefined;
  const trimmed = photo.trim();
  return trimmed || undefined;
}
