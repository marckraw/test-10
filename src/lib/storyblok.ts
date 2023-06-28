export interface StoryblokLink {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  parent_id: number;
  published: boolean;
  path: string | null;
  position: number;
  uuid: string;
  is_startpage: boolean;
  real_path: string;
}