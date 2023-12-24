import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div c>
          <LocationSelection />
          <DateSelection />
          <HoursSelection/>
          <div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
