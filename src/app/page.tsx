import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FilterSection from "@/components/FilterSection"
import ProductSection from "@/components/ProductSection"

const page = () => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="w-full h-full grid grid-cols-4 pt-24 px-12 bg-blue-50">
          <FilterSection className="col-span-1" />
          <ProductSection className="col-span-2" />
      </div>
      <Footer />
    </div>
  )
}

export default page