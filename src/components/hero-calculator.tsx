import { useState } from "react";
import { calculatePPI } from "../utils/calculatePPI";
import { X } from "lucide-react";

type HeroCalculatorProps = {
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  inches: string;
  setInches: React.Dispatch<React.SetStateAction<string>>;
  ppi: string;
  setPPI: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

type SavedDataType = {
  width: string;
  height: string;
  inches: string;
  ppi: string;
};

export function HeroCalculator({
  height,
  setHeight,
  inches,
  setInches,
  width,
  setWidth,
  ppi,
  setPPI,
  error,
  setError,
}: HeroCalculatorProps) {
  const [saved, setSaved] = useState<SavedDataType[]>([]);

  function removeSavedData(savedData: SavedDataType) {
    const filteredData = saved.filter((element) => element !== savedData);
    setSaved(filteredData);
  }

  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="text-5xl font-semibold">PPI Calculator</h1>
        <span className="text-sm font-light">
          - the screen's pixel density -
        </span>
      </div>

      <form className="grid grid-cols-[100px,10px,100px,60px,110px] grid-rows-2 gap-x-4 w-full justify-center items-baseline">
        <label htmlFor="width">Width</label>
        <span></span>
        <label htmlFor="height">Height</label>
        <label htmlFor="inches">Inches</label>
        <span></span>
        <input
          className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200"
          type="number"
          placeholder="1920"
          min="0"
          max="99999"
          name="width"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <p>x</p>
        <input
          className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200"
          type="number"
          placeholder="1080"
          min="0"
          max="99999"
          name="height"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200"
          type="number"
          placeholder="27"
          lang="en-EN"
          min="0"
          max="120"
          name="inches"
          id="inches"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setError("");
            if (!width || !height || !inches) {
              setError("Oops, forgot one field?");
              return;
            }

            const PPI = calculatePPI(
              Number(width),
              Number(height),
              Number(inches)
            );
            setPPI(PPI);
          }}
          className="px-3 py-1.5 rounded-md border border-neutral-200 bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
        >
          Calculate
        </button>
      </form>
      {error.length > 0 && (
        <small className="text-amber-500 mx-auto my-2">{error}</small>
      )}
      <div id="result-container" className="flex items-center gap-5">
        <div className="flex flex-col w-full">
          <p className="font-bold">
            PPI: {ppi}
            <span id="result"></span>
          </p>
        </div>
        <button
          type="button"
          onClick={async () => {
            setError("");
            if (!width || !height || !inches) {
              setError("Oops, forgot one field?");
              return;
            }

            const newPPI = calculatePPI(
              Number(width),
              Number(height),
              Number(inches)
            );
            setPPI(newPPI);
            setSaved([...saved, { width, height, inches, ppi: newPPI }]);
          }}
          className="px-3 py-1.5 w-24 h-10 rounded-md border border-neutral-200 bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
        >
          Save
        </button>
      </div>
      <p className="text-xs">Non-Retina: ±110 ppi / Retina: ±218 ppi</p>
      <div className="flex flex-wrap gap-2 max-w-prose">
        {saved.length > 0 &&
          saved.map((savedResolution) => (
            <div
              key={savedResolution.ppi}
              className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800"
            >
              <span className="text-neutral-300">
                {savedResolution.width} x {savedResolution.height} /{" "}
                {savedResolution.inches} Inches / PPI: {savedResolution.ppi}
              </span>
              <button type="button">
                <X
                  onClick={() => removeSavedData(savedResolution)}
                  className="size-4 text-neutral-400 hover:text-neutral-300"
                />
              </button>
            </div>
          ))}
      </div>
      {/* <div className="my-5">
        <small>
          <p>
            In an attempt to simplify this wild information, some resolutions or
            specifics may be missing like (XGA, WXGA, HD+ or pixel formats,
            etc.)
          </p>
          <p>
            Companies shouldn't be able to advertise as they do, wher everything
            is ULTRA HIGH DEFINITION IMPRESSIVE WOW 16 MILION PIXELS 16K
          </p>
        </small>
      </div> */}
    </>
  );
}
