import { TopContainer } from "@/components/container/container";
import { FilamuHeading } from "@/components/page/filamu/heading-filamu";
import PlaceholderFilamu from "@/components/page/filamu/placeholder-filamu";

export default function Blog(): JSX.Element {
  return (
    <>
      <TopContainer>
        <FilamuHeading title="Filamu blog" subTitle="Blog" />
      </TopContainer>
      <PlaceholderFilamu />
    </>
  );
}
