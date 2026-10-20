import { Pill, Dumbbell, Activity, Microscope, Sun, Brain, Moon, Leaf, Sparkles, HeartPulse, type LucideIcon } from 'lucide-react';

export function getCategoryIcon(iconName: string): LucideIcon {
  switch (iconName) {
    case 'Dumbbell':
      return Dumbbell;
    case 'Infinity':
      return Activity;
    case 'Microscope':
      return Microscope;
    case 'Sun':
      return Sun;
    case 'Brain':
      return Brain;
    case 'Moon':
      return Moon;
    case 'Pill':
      return Pill;
    case 'Leaf':
      return Leaf;
    case 'Sparkles':
      return Sparkles;
    case 'HeartPulse':
      return HeartPulse;
    default:
      return Pill;
  }
}
