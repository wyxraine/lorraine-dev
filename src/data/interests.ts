import { Music, Shirt, Smartphone, BookOpen, type LucideIcon } from 'lucide-react';

export interface InterestItem {
  id: string;
  filename: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  type: 'document' | 'image';
  metaCategory: string;
  metaType: string;
  imageUrl?: string;
}

export const interestsData: InterestItem[] = [
  {
    id: 'keyboard',
    filename: 'keyboard.ts',
    title: 'Keyboard',
    category: 'MUSIC',
    description: "I enjoy playing keyboard and spending time with music, whether I'm practicing, learning songs, or simply enjoying the moment.",
    icon: Music,
    type: 'document',
    metaCategory: 'PERSONAL INTEREST',
    metaType: 'MUSIC'
  },
  {
    id: 'style',
    filename: 'style.md',
    title: 'Fashion & Style',
    category: 'STYLE',
    description: 'I enjoy exploring different styles, discovering pieces I like, and experimenting with how fashion reflects personality.',
    icon: Shirt,
    type: 'document',
    metaCategory: 'PERSONAL INTEREST',
    metaType: 'STYLE'
  },
  {
    id: 'creator',
    filename: 'creator.log',
    title: 'Content Creation',
    category: 'CREATOR',
    description: "I'm exploring short-form content, photography, and product-focused content while learning how to create posts that feel natural and engaging.",
    icon: Smartphone,
    type: 'document',
    metaCategory: 'CREATIVE EXPLORATION',
    metaType: 'CREATOR'
  },
  {
    id: 'learning',
    filename: 'learning.txt',
    title: 'Learning',
    category: 'GROWTH',
    description: 'I enjoy exploring new technologies, tools, and ideas that help me grow both personally and as a developer.',
    icon: BookOpen,
    type: 'document',
    metaCategory: 'PERSONAL GROWTH',
    metaType: 'LEARNING'
  }
];
