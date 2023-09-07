const { connect } = require('mongoose')
const { Category } = require('./model')
require('dotenv').config()


//Categories

const createCategories = async (req, res) => {
    const { categoryName, categoryImages } = req.body;
    console.log({ categoryName, categoryImages })

    try {
        await connect(process.env.MONGO_URI)
        const existingCategories = await Category.exists({ categoryName: categoryName })
        if (existingCategories) {
            res.status(208).json({
                message: "Duplicate Category",
                Category: Category
            })
        }
        // if (!existingCategories) {
        //     res.status(404).json({
        //         message: "Missing Required Category"
        //         // message: req.body
        //     })
        // }

        else {
            await Category.create({ categoryName, categoryImages })
            const allCategories = await Category.find()
            res.json({
                message: "Category Added Successfully",
                Category: Category,
                Category: allCategories
            })
        }
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
};

const getCategoryByName = async (req, res) => {
    const { categoryName } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const categories = await Category.findOne({ categoryName: categoryName });

        if (!categories) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }

        res.json({
            categories: categories,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const getCategoryById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const category = await Category.findById(_id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }

        res.json({
            category: category,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

// const updateCategoryByName = async (req, res) => {
//     const productByName = req.params;
//     const { categoryName } = req.body;

//     try {
//         await connect(process.env.MONGO_URI);
//         const updateCategoryByName = await Category.findByIdAndUpdate(
//             productByName,
//             { categoryName },
//             { new: true }
//         );

//         if (updateCategoryByName) {
//             res.json({
//                 message: "category updated successfully.",
//                 category: updateCategoryByName,
//             });
//         } else {
//             res.json({
//                 message: "Category Not Found.",
//             });
//         }
//     } catch (error) {
//         res.json({
//             message: error.message,
//         });
//     }
// };

const updateCategoryById = async (req, res) => {
    const { _id, categoryName, categoryImages } = req.body
    const filter = { _id };
    const update = { categoryName, categoryImages };
    try {
        await connect(process.env.MONGO_URI)

        await Category.findOneAndUpdate(filter, update, {
            new: true
        });

        const category = await Category.find()

        res.json({
            message: "Success",
            category
        })

    }
    catch (error) {
        res.json({
            message: error.message,
        });
    }

};


const deleteProductsByCategory = async (req, res) => {
    const { categoryName } = req.body;

    if (!categoryName) {
        res.status(400).json({
            message: "Plz give CategoryName"
        })
    } else {
        try {
            await connect(process.env.MONGO_URI);
            const deletedCategory = await Category.deleteMany({ categoryName });
            const categories = await Category.find()

            if (deletedCategory.deletedCount === 0) {
                return res.status(404).json({
                    message: 'No categoryName found for the specified category'
                });
            }

            res.json({
                message: `Deleted ${deletedCategory.deletedCount} categoryName with the category '${categoryName}'`,
                deletedCategory,
                categories: categories
            });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

};

const getAllCategory = async (req, res) => {
    const { categoryName, categoryImages } = req.body;
    console.log({ categoryName, categoryImages })
    try {
        await connect(process.env.MONGO_URI)
        const allCategories = await Category.find()
        res.json({
            message: "Category Geted Successfully",
            Category: allCategories
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}
module.exports = { createCategories, getCategoryById, updateCategoryById, deleteProductsByCategory, getCategoryByName, getAllCategory }