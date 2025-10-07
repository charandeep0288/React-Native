import { FlatList } from "react-native";

import { HOMEPRODUCTS } from "../data/HomeProducts-data";

import Address from "../components/Home/TopCategories/Address";
import TopCategoriesList from "../components/Home/TopCategories/TopCategoriesList";
import Banners from "../components/Home/Banners/Banners";
import AllProducts from "../components/Home/Products/AllProducts";
import FeaturedFavourites from "../components/Home/Favourites/FeaturedFavourites";
import WhyChooseGame from "../components/Home/WhyChooseGame/WhyChooseGame";

function Home() {
  function renderHomScreenComponent(itemData) {
    const item = itemData.item;

    if (item.slotId === "Slot001") {
      return (
        <TopCategoriesList
          topCategoriesdata={item.component[0].topCategoreies}
        />
      );
    }

    if (item.slotId === "Slot002") {
      return <Banners images={item.component[0].bannerImages} />;
    }

    if (item.slotId === "Slot003") {
      return <AllProducts products={item.component[0].products} />;
    }

    if (item.slotId === "Slot004") {
      return (
        <FeaturedFavourites topDiscountsdata={item.component[0].topDiscounts} />
      );
    }

    if (item.slotId === "Slot005") {
      return (
        <WhyChooseGame whyChooseGamedata={item.component[0].whyChooseGame} />
      );
    }
  }

  return (
    <>
      <Address />
      <FlatList
        data={HOMEPRODUCTS}
        keyExtractor={(item) => item.slotId}
        renderItem={renderHomScreenComponent}
      />
    </>
  );
}

export default Home;
