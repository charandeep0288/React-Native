class Product {
  constructor(
    code,
    name,
    url,
    description,
    stock,
    price,
    images,
    potentialPromotions,
    tags,
    mrp,
    margin,
    marginPercent,
    isProductAddedToWishlist,
    image,
    isProductNotified,
    isStoreOnly,
    isReturnable,
    promotionsCount,
    categoryL1,
    categoryL2,
    categoryL3,
    brand,
    giveAway,
    unitCode,
    variantValue
  ) {
    this.code = code;
    this.name = name;
    this.url = url;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.images = images;
    this.potentialPromotions = potentialPromotions;
    this.tags = tags;
    this.mrp = mrp;
    this.margin = margin;
    this.marginPercent = marginPercent;
    this.isProductAddedToWishlist = isProductAddedToWishlist;
    this.image = image;
    this.isProductNotified = isProductNotified;
    this.isStoreOnly = isStoreOnly;
    this.isReturnable = isReturnable;
    this.promotionsCount = promotionsCount;
    this.categoryL1 = categoryL1;
    this.categoryL2 = categoryL2;
    this.categoryL3 = categoryL3;
    this.brand = brand;
    this.giveAway = giveAway;
    this.unitCode = unitCode;
    this.variantValue = variantValue;
  }
}


export default Product;