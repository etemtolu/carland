import Brands from "./Brands";

export default function Cars() {
  return (
    <section className="h-screen flex items-center bg-yellow-200" id="cars">
      <div className="container mx-auto">
        <Brands/>
      </div>
    </section>
  )
}
