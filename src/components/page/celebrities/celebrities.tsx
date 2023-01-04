import TopContainerContents from "../shared/topcontainer-contents";
import { MainContainer } from "@/components/container/container";
import ContentsPage, {
  ContentsContainer,
  ContentsPageProps,
} from "../shared/page-contents";

export default function CelebritiesPage({
  contentType,
}: ContentsPageProps): JSX.Element {
  return (
    <ContentsContainer contentType={contentType}>
      <div className="flex gap-4 bg-main-blue-sec  text-main-gray">
        <div>
          <img
            src="/assets/celebrities/cl-1.jpg"
            alt=""
            className="h-auto w-full align-middle"
          />
        </div>
        <div className="w-full py-4">
          <h3 className="font-bold text-white">Dan stevens</h3>
          <p>Actor, US</p>
          <p className="">
            Dan Stevens was born at Croydon in Surrey on 10th October 1982. His
            parents are teachers. He was educated at Tonbridge School and
            trained in acting at the National Youth Theatre of Great Britain
          </p>
        </div>
      </div>
    </ContentsContainer>
  );
}
