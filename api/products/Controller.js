const { connect } = require('mongoose')
const { Product } = require('./Model')
require('dotenv').config()

const createProducts = async (req, res) => {
    const { productName, price, brand, category, Images, description,  product_type } = req.body;
    console.log({ productName, price, brand, category, Images, description, product_type })

    try {
        await connect(process.env.MONGO_URI)
        // const existingProducts = await Product.exists({productName, price, brand, category, Images, description, rating, thumbnail, product_colors,product_type : productName, price, brand, category, Images, description, rating, thumbnail, product_colors,product_type})
        const existingProducts = await Product.exists({ productName: productName })
        if (existingProducts) {
            res.status(208).json({
                message: "Duplicate Product",
                Product: Product
            })
        }

        //   if (!existingProducts) {
        //         res.status(208).json({
        //             message: "Missing Required Product",
        //             message: req.body
        //         })
        //     }

        else {
            await Product.create({ productName, price, brand, category, Images, description,  product_type })
            const allProducts = await Product.find()
            res.status(201).json({
                message: "Product Created Successfully",
                Product: Product,
                Product: allProducts
            })
        }

    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
};

const getProduct = async (req, res) => {

    const { productName } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.findOne({ productName: productName })
        res.json(
            {
                message: "DONE",
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
};

const productByCategory = async (req, res) => {

    const { category } = req.params

    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.find({ category: category })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
};

const productByBrand = async (req, res) => {

    const { brand } = req.params
    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.find({ brand: brand })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
};

const productById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const product = await Product.findById(_id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        res.json({
            product: product
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllProducts = async (req, res) => {
    const { productName, price, brand, category, Images, description,  product_colors, product_type } = req.body;
    console.log({ productName, price, brand, category, Images, description, product_colors, product_type })
    try {
        await connect(process.env.MONGO_URI)
        const allProducts = await Product.find()
        res.json({
            message: "Products Geted Successfully",
            Products: allProducts
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { productName, price, brand, category, Images, description, rating, thumbnail, product_colors, product_type } = req.body;

    try {
        await connect(process.env.MONGO_URI);
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { productName, price, brand, category, Images, description, rating, thumbnail, product_colors, product_type },
            { new: true }
        );
        if (updatedProduct) {
            res.json({
                message: "Product updated successfully.",
                product: updatedProduct,
            });
        } else {
            res.json({
                message: "Product not found.",
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const deleteProductsByProduct = async (req, res) => {
    const { productName } = req.body;

    if (!productName) {
        res.status(400).json({
            message: "Plz give productName"
        })
    } else {
        try {
            await connect(process.env.MONGO_URI);
            const deletedProduct = await Product.deleteMany({ productName });
            const products = await Product.find()

            if (deletedProduct.deletedCount === 0) {
                return res.status(404).json({
                    message: 'No categoryName found for the specified category'
                });
            }

            res.json({
                message: `Deleted ${deletedProduct.deletedCount} categoryName with the category '${productName}'`,
                deletedProduct,
                products: products
            });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

};


module.exports = {
    getAllProducts, createProducts, getProduct, productByCategory, productByBrand, productById, updateProduct, deleteProductsByProduct,
}