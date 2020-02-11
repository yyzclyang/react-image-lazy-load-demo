import * as React from "react";

interface LazyImageProps {
  src: string;
}

const LazyImage: React.FC<LazyImageProps> = (props: LazyImageProps) => {
  const { src } = props;
  const imgEl = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { target } = entry;
          if (entry.intersectionRatio > 0) {
            if (!target.attributes.getNamedItem("src")!.value) {
              target.attributes.getNamedItem(
                "src"
              )!.value = target.attributes.getNamedItem("data-src")!.value;
            }
          }
        });
      },
      { threshold: [0.01] }
    );
    intersectionObserver.observe(imgEl.current as Element);
    return () => {
      intersectionObserver.unobserve(imgEl.current as Element);
    };
  }, []);

  return (
    <img src="" data-src={src} ref={imgEl} alt="lazyImg" className="lazy-img" />
  );
};

export default LazyImage;
