import { Hero, SearchBar, CustomFilter, CustomButton } from "@/components";
import { fetchCars, updateSearchParams } from "@/utils";
import { CarCard } from "@/components";
import { FilterProps } from "@/types";
import { fuels, yearsOfProduction } from "../constants/index";
import ShowMore from "@/components/ShowMore";

interface HomeProps {
  searchParams: FilterProps;
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 6,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore The cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 6) / 6}
              isNext={(searchParams.limit || 6) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, No result found!
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
        <div className="flex justify-center items-center"></div>
      </div>
    </main>
  );
}
