import { TopContainer } from "@/components/container/container";
import { FilamuHeading } from "@/components/page/filamu/heading-filamu";
import PlaceholderFilamu from "@/components/page/filamu/placeholder-filamu";

export default function LegalNotices(): JSX.Element {
  return (
    <>
      <TopContainer>
        <FilamuHeading title="Legal notices" subTitle="Legal" />
      </TopContainer>
      <PlaceholderFilamu />
    </>
  );
}
