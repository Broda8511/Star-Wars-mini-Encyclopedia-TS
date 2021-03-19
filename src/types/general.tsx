export type Movie = {
  title?: string;
  release_date?: string;
  director?: string;
  producer?: string;
  opening_crawl?: string;
  created?: string;
};

export type Person = {
  name?: string;
  gender?: string;
  birth_year?: string;
  eye_color?: string;
  hair_color?: string;
  mass?: number;
  height?: number;
  created?: string;
};

export type Planet = {
  name?: string;
  climate?: string;
  population?: number;
  terrain?: string;
  diameter?: string;
  gravity?: number;
  created?: string;
};

export type Spec = {
  name?: string;
  language?: string;
  classification?: string;
  average_lifespan?: number;
  eye_colors?: string;
  hair_colors?: string;
  created?: string;
};

export type Starship = {
  name?: string;
  length?: number;
  cargo_capacity?: number;
  consumables?: number;
  crew?: number;
  passengers?: number;
  manufacturer?: string;
  created?: string;
};

export type Vehicle = {
  name?: string;
  model?: string;
  length?: number;
  crew?: number;
  passengers?: number;
  manufacturer?: string;
  created?: string;
};
