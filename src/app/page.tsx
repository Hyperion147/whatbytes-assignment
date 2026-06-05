import Footer from "@/components/Footer"
import FilterSection from "@/components/FilterSection"
import ProductSection from "@/components/ProductSection"

const page = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="grid h-full min-h-0 w-full grid-cols-4 gap-6 bg-blue-50 px-12 pb-54 pt-24">
          <FilterSection className="col-span-1" />
          <ProductSection className="col-span-3" />
      </div>
      <Footer />
    </div>
  )
}

export default page
