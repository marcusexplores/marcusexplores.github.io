const SOURCE_PATH_ALIAS_SYMBOL = "@"
const SOURCE_PATH_RELATIVE_SYMBOL = ".."
const PLACEHOLDER_IMAGE_PATH = '../assets/placeholder.png'; 

const imageModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export const resolveImagePath = (path: string) => {
  const isExternal = path.startsWith('https://');

  // Replace the alias with the relative path
  const key = `${SOURCE_PATH_RELATIVE_SYMBOL}${path.substring(SOURCE_PATH_ALIAS_SYMBOL.length)}`;

  return isExternal ? path : (imageModules[key] ?? PLACEHOLDER_IMAGE_PATH) as string;
}