const { connect } = require('mongoose')
const { Brands } = require('./model')
require('dotenv').config()

//brands

const getBrand = async (req, res) => {

    const { brand } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const brands = await Brands.findOne({ brand: brand })
        res.json(
            {
                brands: brands
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

const createBrands = async (req, res) => {
    const { brand, Images } = req.body;
    console.log({ brand, Images })


    try {
        await connect(process.env.MONGO_URI)
        const existingBrands = await Brands.exists({ brand: brand })

        if (existingBrands) {
            res.status(208).json({
                message: "Duplicate Brand",
                Product: Product
            })
        }

        // if (!existingBrands) {
        //     res.status(208).json({
        //         message: "Missing Required brand",
        //         message: req.body
        //     })
        // }

        else {
            await Brands.create({ brand, Images })
            const allBrands = await Brands.find()
            res.json({
                message: "Brand Created Successfully",
                Brands: Brands,
                Brands: allBrands
            })

        }
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
};

const deleteProductsByBrand = async (req, res) => {
    const { brand } = req.body;

    try {
        await connect(process.env.MONGO_URI);
        const deletedBrands = await Brands.deleteMany({ brand });
        const brands = await Brands.find()

        if (deletedBrands.deletedCount === 0) {
            return res.status(404).json({
                message: 'Brand Not Found'
            });
        }

        res.json({
            message: `Deleted ${deletedBrands.deletedCount} products with the brand '${brand}'`,
            deletedBrands,
            brands : brands
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateBrandById = async (req, res) => {
    const { _id, brand, Images } = req.body
    const filter = { _id };
    const update = { brand, Images };
    try {
        await connect(process.env.MONGO_URI)

        await Brands.findOneAndUpdate(filter, update, {
            new: true
        });

        const brands = await Brands.find()

        res.json({
            message: "Success",
            brands
        })

    }
    catch (error) {
        res.json({
            message: error.message,
        });
    }

};

const getBrandById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const brand = await Brands.findById(_id);

        if (!brand) {
            return res.status(404).json({
                message: 'Brand not found'
            });
        }

        res.json({
            brand: brand
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllBrands = async (req, res) => {
    const { brand, Images } = req.body;
    console.log({ brand, Images })
   try {
    await connect(process.env.MONGO_URI)
    const allBrands = await Brands.find()
    res.json({
        message: "Brands Geted Successfully",
        Brands : allBrands
    })
   } catch (error) {
    res.json({
        message: error.message
    })
   }
};

module.exports = {
    createBrands, getBrand, getBrandById, updateBrandById, deleteProductsByBrand,getAllBrands
}





