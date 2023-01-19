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
    title: "See all ",
    description: "See all ",
    href: "/categories",
  },
  {
    id: "2",
    title: "All categories ",
    description: "Browse all ",
    href: "/latest",
    hasCategoryName: true,
  },
  {
    id: "3",
    title: "News of Filamu ",
    description: "Read the latest ",
    href: "/upcoming",
    hasCategoryName: true,
  },
];
