import { ClassValue } from "class-variance-authority/types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

//for conditional class names we need to install clsx 
//and for merging the tailwind classes we need tailwind-merge it makes the code cleaner and removes any redundant classes
