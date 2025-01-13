import { useEffect, useState } from "react";
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

const STORAGE_KEY = "basic-ppi-calculator";

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

  function getSavedDataFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsedData: { saved: SavedDataType[] } = data
      ? JSON.parse(data)
      : { saved: [] };

    return parsedData.saved;
  }

  function updateSavedDataOnLocalStorage(newData: SavedDataType[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ saved: newData }));
  }

  function removeSavedData(savedData: SavedDataType) {
    const filteredData = saved.filter((element) => element !== savedData);
    setSaved(filteredData);

    updateSavedDataOnLocalStorage(filteredData);
  }

  function handleCalculate() {
    setError("");
    if (!width || !height || !inches) {
      setError("Oops, forgot one field?");
      return;
    }

    const PPI = calculatePPI(Number(width), Number(height), Number(inches));
    setPPI(PPI);
  }

  function handleSave() {
    setError("");
    if (!width || !height || !inches) {
      setError("Oops, forgot one field?");
      return;
    }

    const newPPI = calculatePPI(Number(width), Number(height), Number(inches));
    setPPI(newPPI);
    const newSaved = [...saved, { width, height, inches, ppi: newPPI }];
    setSaved(newSaved);
    updateSavedDataOnLocalStorage(newSaved);
  }

  useEffect(() => {
    const storedData = getSavedDataFromLocalStorage();
    setSaved(storedData);
  }, []);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label htmlFor="width" className="p-2">
                Width
              </label>
              <input
                type="number"
                placeholder="1920"
                min="0"
                max="99999"
                name="width"
                id="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="height" className="p-2">
                Height
              </label>
              <input
                type="number"
                placeholder="1080"
                min="0"
                max="99999"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="inches" className="p-2">
                Inches
              </label>
              <input
                type="number"
                placeholder="27"
                lang="en-EN"
                min="0"
                max="120"
                name="inches"
                id="inches"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                className="text-neutral-200 p-2 h-10 bg-transparent border-b border-b-neutral-200 w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleCalculate}
              className="px-3 py-1.5 rounded-md border border-neutral-200 bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
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
          onClick={handleSave}
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
            In an attempt to simplify these wild information, some resolutions or
            specifics may be missing like (XGA, WXGA, HD+ or pixel formats,
            etc.)
          </p>
          <p>
            Companies shouldn't be able to advertise as they do, where everything
            is ULTRA HIGH DEFINITION IMPRESSIVE WOW 16 MILION PIXELS 16K
          </p>
        </small>
      </div> */}
    </>
  );
}
