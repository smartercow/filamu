import { TopContainer } from "@/components/container/container";
import { FilamuHeading } from "@/components/page/filamu/heading-filamu";
import PlaceholderFilamu from "@/components/page/filamu/placeholder-filamu";

export default function About(): JSX.Element {
  return (
    <>
      <TopContainer>
        <FilamuHeading title="Contact Us" subTitle="Contact" />
      </TopContainer>
      <PlaceholderFilamu />
    </>
  );
}
