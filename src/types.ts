import type { ComponentType } from 'react';

export type IconComponent = ComponentType;

export type Tool = IconComponent | string;

export interface TitleData {
    title: string;
    b: string;
    p: string;
}

export interface Skill {
    Icon: IconComponent;
    title: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Project {
    key: number;
    title: string;
    tag?: string;
    disc: string;
    highlights?: string[];
    cover: string;
    tools: Tool[];
    link?: string;
    repo?: string;
}

export interface Experience {
    company: string;
    logo: string;
    role: string;
    location: string;
    period: string;
    points: string[];
}
