import { TopContainer } from "@/components/container/container";
import { FilamuHeading } from "@/components/page/filamu/heading-filamu";
import PlaceholderFilamu from "@/components/page/filamu/placeholder-filamu";

export default function UserGuide(): JSX.Element {
  return (
    <>
      <TopContainer>
        <FilamuHeading title="User Guide" subTitle="User" />
      </TopContainer>
      <PlaceholderFilamu />
    </>
  );
}
