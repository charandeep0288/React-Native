import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import GlobalStyles from "../constants/style";

import SaleCategoryList from "../components/Departments/SaleCategoryList/SaleCategoryList";
import SaleSubCategory from "../components/Departments/SaleSubCategoryList/SaleSubCategoryList";

import { SALECATEGORIES } from "../data/SaleCategory-data";

function Departments() {
  const [selectedSaleCategoryCode, setSelectedSaleCategoryCode] = useState(
    SALECATEGORIES[0].code
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState([
    {
      code: "000",
      name: "Shop all",
      appicon: {},
    },
    ...SALECATEGORIES[0].saleSubCategory,
  ]);

  function getSelectedSaleCategoryCode(code) {
    setSelectedSaleCategoryCode(code);
  }

  useEffect(() => {
    for (let i = 0; i < SALECATEGORIES.length; i++) {
      if (SALECATEGORIES[i].code === selectedSaleCategoryCode) {
        setSelectedSubCategories([
          {
            code: "000",
            name: "Shop all",
            appicon: {},
          },
          ...SALECATEGORIES[i].saleSubCategory,
        ]);
        break;
      }
    } // comparativative handler
  }, [selectedSaleCategoryCode]);

  return (
    <View style={styles.departmentsContainer}>
      <View style={styles.saleCategoryContainer}>
        <SaleCategoryList
          saleCategories={SALECATEGORIES}
          getSelectedSaleCategoryCode={getSelectedSaleCategoryCode}
          selectedCodeProp={selectedSaleCategoryCode}
        />
      </View>

      <View style={styles.saleSubCategoryContainer}>
        <SaleSubCategory selectedSubCategoriesProp={selectedSubCategories} />
      </View>
    </View>
  );
}

export default Departments;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  departmentsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.lightGrey70,
  },

  saleCategoryContainer: {
    // width: (WIDTH * 0.9) / 3, // 0.9 / 3
    flex: 0.3,
    height: HEIGHT - 128,
  },

  saleSubCategoryContainer: {
    // width: (WIDTH * 2.1) / 3, // 2.1 / 3
    flex: 0.7,
    height: HEIGHT - 128,
    backgroundColor: GlobalStyles.colors.white,
  },
});
