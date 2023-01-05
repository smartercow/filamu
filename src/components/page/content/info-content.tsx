import { VideoQuality } from "../../elements/video-quality";
import type { Content } from "@/lib/data/content";

export function ContentInfo(props: Content): JSX.Element {
  return (
    <>
      {props && (
        <div className="grid w-full grid-cols-2 justify-between gap-6 pb-4 md:grid-cols-4">
          <div className="div-info-sec">
            <h6 className="heading-sec">Genre</h6>
            <p className="values-sec">
              {props.genres[0].title}
              {props.genres.length > 1 && `, ${props.genres[1].title}`}
            </p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">Actors</h6>
            <p className="values-sec">
              {props.actors[0]}, {props.actors[1]}, {props.actors[2]}
              {props.actors.length > 3 && `, ${props.actors[3]}`}
              {props.genres.length > 4 && `, ${props.actors[4]}`}
            </p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">Director</h6>
            <p className="values-sec">
              {props.directors[0]}
              {props.directors.length > 1 && `, ${props.directors[1]}`}
            </p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">
              {props.episodes ? "Episode duration" : "Duration"}
            </h6>
            <p className="values-sec">{props.duration} min</p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">Release</h6>
            <p className="values-sec">{props.release}</p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">
              {props.countries.length > 1 ? "Countries" : "Country"}
            </h6>
            <p className="values-sec">
              {props.countries[0]}
              {props.countries.length > 1 && `, ${props.countries[1]}`}
            </p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">
              Language{props.languages.length > 1 && "s"}
            </h6>
            <p className="values-sec">
              {props.languages[0]}
              {props.languages.length > 1 && `, ${props.languages[1]}`}
            </p>
          </div>
          <div className="div-info-sec">
            <h6 className="heading-sec">Quality</h6>
            <p className="values-sec">
              <VideoQuality value={props.quality} colored />
            </p>
          </div>
        </div>
      )}
    </>
  );
}
