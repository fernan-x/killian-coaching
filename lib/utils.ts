import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAvatarContent = (user: string) => {
  const splitedUser = user.split(' ');
  return splitedUser.splice(0, Math.max(2, splitedUser.length)).reduce((acc, curr) => acc + curr.charAt(0).toUpperCase(), '');
}