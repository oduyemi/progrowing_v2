import { Box } from "@mui/material";
import { Header } from "@/components/navigation/Header";
import { Banner } from "@/components/Banner";
import { Brands } from "@/components/Brands";

export default function Home() {
  return (
    <main className="">
      <Box>
        <Header />
        <Banner />
        <Brands />
      {/* </Box>
      <Box>
        <ProductCat1 />
      </Box>
      <Box className="my-8">
        <TopCategory />
      </Box>
        <ProductCat2 />
      <Box>
      </Box>
      <Box className="my-8">
        <Promotions />
      </Box>
        <ProductCat3 />
      <Box>
      </Box>
      <Box className="my-8">
        <Brands />
      </Box>
      <Box>
        <Footer /> */}
      </Box>
    </main>
  )
}
