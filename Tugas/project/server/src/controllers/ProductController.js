import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (requestAnimationFrame, res) => {
    let { name, price, description, imageUrl } = requestAnimationFrame.body;
    try {
        const productCreate = await prisma.product.create({
            data: {
                name, price, description, imageUrl
            },
    })
    

        res.json({
            info: ProductCreate,
            message: "Product was Successfully Created",
            status: "Success",
});
return;
    } catch (err) {
    res.json({
        info: null,
        message: "Product was Unsuccessfully Created",
        status: "Unsuccess",
    });
}
};

export const readProduct = async (req, res) => {
    try {
        const productRead = await prisma.product.findMany();
        res.json({
            info: productRead,
            message: "Product was Successfully Fetch",
            status: "Success",
        });
        return;
    } catch (err) {
        res.status(404).json({
            data: err.message,
            message: "Product was Unsuccessfully Fetch",
            status: "Error",
        });
    }
}

export const readProductById = async (req, res) => {
    let { id } = req.params;
    try {
        const productRead = await prisma.product.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (productRead) {
            message = "Product was Successfully Fetch";
            stat = "Success";
            status = 200;
        } else {
            message = "Product was Successfully Fetch";
            stat = "Not Found";
            status = 404;
        }

        res.status(status).json({
            info: productRead,
            message,
            status: stat,
        });
        return;
    } catch (err) {
        res.json({
            info: productRead,
            message: err.message,
            status: "error",
        });
    }
    }

export const updateProduct = async (req, res) => {
    let { name } = req.body;
    let { id } = req.params;

    try {
        const productUpdate = await prisma.product.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
            },
        });

        res.json({
            info: productUpdate,
            message: "Category was Unsuccessfully Updated",
            status: "Success",
        });
        return;
    } catch (err) {
        res.json({
        info: null, 
        message: "Product was not Found",
        status: "not Found",
    });
}
}

export const deleteProduct = async (req, res) => {
    let { id } = req.params;
    try {
        await prisma.product.delete({
            where: {
                id: Number(id),
            },
        });

        res.json({
            info: null,
            message: "Movie was Successfully Deleted",
            status: "Success",
        });
    } catch (err) {
        res.json({
            info: null,
            message: err.message,
            status: "error",
        });
    }
};


console.log("test");