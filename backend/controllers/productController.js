import Product from "../models/Product.js";

export const getProducts=async(req,res)=>{
    const products=await Product.find();
    res.send(products);
}
export const getProductById=async(req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    if(product)
        res.send(product);
    else{
        res.status(401).send({message:"product was not found"});
    }
}
export const getProductByToken=async(req,res)=>{
    const token=req.params.token;
    const product=await Product.findOne({token:token});
    if(product)
        res.send(product);
    else{
        res.status(401).send({message:"product was not found"});
    }
}
export const getCategories=async(req,res)=>{
    const categories=await Product.find().distinct("category");
    res.send(categories);
}


export const getProductsByQuery = async (req, res) => {
    //Most complicated Function EVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const { query } = req;
    const page = query.page || 1;
    const order = query.order || "";
    const category = query.category || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const searchQuery = query.query || "";
    const pageSize = query.pageSize || 6;
  
    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            title: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const categoryFilter =
      category && category !== "all"
        ? {
            category,
          }
        : {};
    const priceFilter =
      price && price !== "all"
        ? {
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};
    const ratingFilter =
      rating && rating !== "all"
        ? {
            "rating.rate": {
              $gte: Number(rating),
            },
          }
        : {};
    const sortOrderFilter =
      order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };
  
    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrderFilter)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

      const countProduct=await Product.countDocuments({
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        ...ratingFilter,
      })
      res.send({products,countProduct,page,pages:Math.ceil(countProduct/pageSize)})
  };



