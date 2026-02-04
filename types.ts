
export interface TechItem {
  name: string;
  category: string;
  level: number;
  icon: string;
}

export interface Message {
  role: 'user' | 'bot';
  text: string;
}
