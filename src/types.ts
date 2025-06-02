export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  image: string;
}

export interface Resource {
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
}

export interface ExploreSection {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface User {
  email: string;
  password: string;
}