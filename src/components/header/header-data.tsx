export type DropdownDataProps = {
  id: string;
  title: string;
  description: string;
  href: string;
  hasCategoryName?: boolean;
};

export const DropdownData: Readonly<DropdownDataProps[]> = [
  {
    id: "1",
    title: "All categories",
    description: "Check the latest updates on your favorite movies and series",
    href: "/categories",
  },
  {
    id: "2",
    title: "Check the latest",
    description: "Check the latest updates on your favorite movies and series.",
    href: "/latest",
    hasCategoryName: true,
  },
  {
    id: "3",
    title: "See upcoming",
    description: "Check the latest updates on your favorite movies and series",
    href: "/upcoming",
    hasCategoryName: true,
  },
];
