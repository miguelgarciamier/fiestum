export async function uploadImage(file: File): Promise<string> {
  // Phase 1 stub: pretend upload and return a fake URL
  await new Promise((r) => setTimeout(r, 700));
  const safeName = encodeURIComponent(file.name.replace(/\s+/g, "-"));
  return `https://example.com/uploads/${safeName}`;
}
