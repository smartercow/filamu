import cn from "clsx";
type YoutubeEmbedProps = {
  title: string;
  embedId: string;
  height: string;
  width: string;
  className?: string;
};

export default function YoutubeEmbed({
  title,
  embedId,
  height,
  width,
  className,
}: YoutubeEmbedProps): JSX.Element {
  return (
    <div className={className}>
      <iframe
        height={height}
        width={width}
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
