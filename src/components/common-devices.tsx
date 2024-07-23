type CommonDevicesProps = {
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  setInches: React.Dispatch<React.SetStateAction<string>>;
};

export function CommonDevices({
  setWidth,
  setHeight,
  setInches,
}: CommonDevicesProps) {
  function setResolution(width: string, height: string, inches: string) {
    setWidth(width);
    setHeight(height);
    setInches(inches);
  }

  // TEMPLATE: {screenSize} Inches / {width} x {height} / {brand} {model}
  // ORDER BY: screen size
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        Common Devices (resolution + screen size)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1">
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("272", "340", "1.337")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              272x340 @ 1.337 Apple watch 38mm
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("312", "390", "1.534")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              312x390 @ 1.534 Apple watch 42mm
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("368", "448", "1.757")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              368x448 @ 1.757 Apple watch 44mm
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("800", "240", "3.53")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              800x240 @ 3.53 Nintendo 3DS
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("960", "544", "5")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">960x544 @ 5 Sony PS Vita</span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("960", "640", "3.5")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              960x640 @ 3.5 Apple iPhone 4/4S
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2048", "1536", "7.9")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2048x1536 @ 7.9 Apple Retina iPad mini
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2340", "1080", "5.4")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2340x1080 @ 5.4 Apple iPhone 13 Mini
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2388", "1668", "11")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2388x1668 @ 11 Apple iPad Pro 11"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2532", "1170", "6.1")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2532x1170 @ 6.1 Apple iPhone 13
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2560", "1440", "27")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2560x1440 @ 27 Apple iMac 27
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2560", "1600", "13.3")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2560x1600 @ 13.3 Apple MacBook Air M1
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2560", "1664", "13.6")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2560x1664 @ 13.6 Apple MacBook Air M2
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2778", "1284", "6.7")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2778x1284 @ 6.7 Apple iPhone 13 Pro Max
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2880", "1800", "15.4")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2880x1800 @ 15.4 Apple Retina MacBook Pro 15"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("2880", "1864", "15.3")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              2880x1864 @ 15.3 Apple Macbook Air 15"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("3024", "1964", "14.2")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              3024x1964 @ 14.2 Apple MacBook Pro 14"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("3456", "2160", "13.4")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              3456x2160 @ 13.4 Dell XPS 13 9310 OLED
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("3456", "2234", "16.2")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              3456x2234 @ 16.2 Apple MacBook Pro 16"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("4096", "2304", "21.5")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              4096x2304 @ 21.5 Retina iMac 21.5"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("4480", "2520", "23.5")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              4480x2520 @ 23.5 Apple 24" iMac M1 (4.5k)
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("5120", "1440", "49")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              5120x1440 @ 49 LG 49WL95C-W
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("5120", "2160", "34")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              5120x2160 @ 34 LG UltraWide 34WK95U
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("5120", "2880", "27")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              5120x2880 @ 27 Dell UP2715K
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("5120", "2880", "27")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              5120x2880 @ 27 Retina iMac 27"
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("6016", "3384", "32")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              6016x3384 @ 32 Apple Pro Display XDR
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setResolution("6144", "3456", "31.5")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">
              6144x3456 @ 31.5 Dell U3224KB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
