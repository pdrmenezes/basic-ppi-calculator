type CommonResolutionsProps = {
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
};

export function CommonResolutions({
  setHeight,
  setWidth,
}: CommonResolutionsProps) {
  function setWidthAndHeight(width: string, height: string) {
    setWidth(width);
    setHeight(height);
  }

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        Common resolutions (width x height)
      </h2>

      <div className="grid gap-y-1">
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setWidthAndHeight("1280", "720")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">HD / 720p (1280 x 720)</span>
          </div>
          <span className="text-xs">4x less total pixels than Full HD</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setWidthAndHeight("1920", "1080")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              Full HD / FHD / 1080p (1920 x 1080)
            </span>
          </div>
          <span className="text-xs">2x less total pixels than Full HD</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setWidthAndHeight("2048", "1080")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">2k (2048 x 1080)</span>
          </div>

          <span className="text-xs">
            often confuesd with Quad HD but just a wider Full HD over 2000
            pixels in width
          </span>
        </div>
        <div
          onClick={() => setWidthAndHeight("2560", "1440")}
          className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
        >
          <span className="text-neutral-300">
            Quad HD / QHD / WQHD / 1440p (2560 x 1440)
          </span>
        </div>
        <div
          onClick={() => setWidthAndHeight("3840", "2160")}
          className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
        >
          <span className="text-neutral-300">
            Market 4k / Ultra UHD / UHD (3840 x 2160)
          </span>
        </div>
        <div
          onClick={() => setWidthAndHeight("4096", "2160")}
          className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
        >
          <span className="text-neutral-300">
            Real (cinema) 4k / Ultra UHD / UHD (4096 x 2160)
          </span>
        </div>

        <div
          onClick={() => setWidthAndHeight("5120", "2880")}
          className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
        >
          <span className="text-neutral-300">5k (5120 x 2880)</span>
        </div>
        <div
          onClick={() => setWidthAndHeight("7680", "4320")}
          className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
        >
          <span className="text-neutral-300">8k (7680 x 4320)</span>
        </div>
      </div>
    </section>
  );
}
