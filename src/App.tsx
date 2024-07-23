import { useState } from "react";
import { CommonDevices } from "./components/common-devices";
import { CommonResolutions } from "./components/common-resolutions";
import { CommonScreenSizes } from "./components/common-screen-sizes";
import { HeroCalculator } from "./components/hero-calculator";
// import { Resources } from "./components/resources";

type FilterType = "resolution" | "screen-size" | "device";

export function App() {
  const [filter, setFilter] = useState<FilterType | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [ppi, setPPI] = useState("");
  const [error, setError] = useState("");

  return (
    <main className="bg-neutral-900 text-neutral-200">
      <div className="flex flex-col space-y-5 max-w-screen-xl mx-auto min-h-screen pt-[30vh] pb-10 items-center">
        <HeroCalculator
          height={height}
          setHeight={setHeight}
          width={width}
          setWidth={setWidth}
          inches={inches}
          setInches={setInches}
          ppi={ppi}
          setPPI={setPPI}
          error={error}
          setError={setError}
        />
        <section className="flex gap-6 font-bold">
          <h3
            onClick={() => setFilter(null)}
            className={"cursor-pointer underline-offset-8 hover:underline"}
          >
            None
          </h3>
          <h3
            onClick={() => setFilter("resolution")}
            className={`cursor-pointer underline-offset-8 hover:underline ${
              filter === "resolution" ? "underline" : ""
            }`}
          >
            Resolution preset
          </h3>
          <h3
            onClick={() => setFilter("screen-size")}
            className={`cursor-pointer underline-offset-8 hover:underline ${
              filter === "screen-size" ? "underline" : ""
            }`}
          >
            Screen Size preset
          </h3>
          <h3
            onClick={() => setFilter("device")}
            className={`cursor-pointer underline-offset-8 hover:underline ${
              filter === "device" ? "underline" : ""
            }`}
          >
            Device preset
          </h3>
        </section>
        {filter === "resolution" && (
          <CommonResolutions setHeight={setHeight} setWidth={setWidth} />
        )}
        {filter === "screen-size" && (
          <CommonScreenSizes setInches={setInches} />
        )}
        {filter === "device" && (
          <CommonDevices
            setWidth={setWidth}
            setHeight={setHeight}
            setInches={setInches}
          />
        )}
        {/* <Resources /> */}
      </div>
    </main>
  );
}
