export function getMetaTags({ title, description, image }: { title: string; description: string; image?: string }) {
  return [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    image ? { property: 'og:image', content: image } : null,
  ].filter(Boolean);
}

export function getTitle(name: string, role: string) {
  return `${name} | ${role}`;
}
