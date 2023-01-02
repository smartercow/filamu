import { VideoQuality } from "../../elements/video-quality";
import React from "react";

export default function MovieInfo(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-2 justify-between gap-6 md:grid-cols-4">
      <div className="div-info-sec">
        <h6 className="heading-sec">Genre</h6>
        <p className="values-sec">Comedy, Family</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Actors</h6>
        <p className="values-sec">
          Shannon Lawson, Kyle Gallner, Jessie T. Usher, Sosie Bacon
        </p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Director</h6>
        <p className="values-sec">Hannah Barlow, Kane Senes</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Duration</h6>
        <p className="values-sec">102 min</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Release</h6>
        <p className="values-sec">2022</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Country</h6>
        <p className="values-sec">Kenya</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Languages</h6>
        <p className="values-sec">English, Swahili</p>
      </div>
      <div className="div-info-sec">
        <h6 className="heading-sec">Quality</h6>
        <p className="values-sec">
          <VideoQuality colored />
        </p>
      </div>
    </div>
  );
}
