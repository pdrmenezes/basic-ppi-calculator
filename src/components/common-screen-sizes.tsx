type CommonScreenSizesProps = {
  setInches: React.Dispatch<React.SetStateAction<string>>;
};

export function CommonScreenSizes({ setInches }: CommonScreenSizesProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Common screen sizes (inches)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-y-1">
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("6.1")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">6.7"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("13.3")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">13.3"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("14")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">14"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("15")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">15"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("15.6")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">15.6"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("17.3")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">17.3"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("23")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">23"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("24")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">24"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("27")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">27"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("28")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">28"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("32")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">32"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("37")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">37"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("43")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">43"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("47")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">47"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("49")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">49"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("50")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">50"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("65")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">65"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("75")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">75"</span>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <div
            onClick={() => setInches("85")}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer w-fit"
          >
            <span className="text-neutral-300">85"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
