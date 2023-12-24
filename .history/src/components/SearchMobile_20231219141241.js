import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div>
      <div className="container mx-auto">
        <div>
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
