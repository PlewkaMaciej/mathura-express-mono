export type SubSectionType = {
  id: string;
  name: string;
  sectionId: string;
};

export type SectionType = {
  id: string;
  name: string;
  subsections: SubSectionType[];
};
