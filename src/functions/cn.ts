import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cn is the abbreviation for class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * clsx: For handling conditional and dynamic class names.
 * Examples:
 * clsx('foo', true && 'bar', 'baz'); becomes 'foo bar baz'
 * clsx({ foo:true, bar:false, baz:isTrue() }); becomes 'foo baz'
 * 
 * tailwind-merge: For resolving conflicting Tailwind classes. 
 * When two or more utility classes conflict (e.g., p-4 and p-6 both control padding), 
 * tailwind-merge ensures the class that appears later in the list takes precedence, 
 * just like with standard CSS.
 * Example:
 * twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]') becomes 'hover:bg-dark-red p-3 bg-[#B91C1C]'
 */
