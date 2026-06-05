import Footer from "@/components/Footer"
import Catalog from "@/components/home/Catalog"

const page = () => {
  return (
    <div className="relative h-screen overflow-hidden">
          <Catalog />
      <Footer />
    </div>
  )
}

export default page
