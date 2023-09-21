const { CityServices } = require('../services/index')

const cityServices = new CityServices()


const create = async (req, res) => {
    try {                       

        const city = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Created succesfully",
            err: {}
        });       
    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: "Error while creating a city",
            err: error
        });
    };
}



const get = async (req, res) => {

    try {
        const city = await cityServices.getCity(req.params.id); //req.params.id is comming from usl /city/:id
        res.status(201).json({
            data: city,
            success: true,
            message: "succesfully retrieved the city ",
            err: {}
        });
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the city",
            err: error
        });

    };
}
const getAll = async (req, res) => {

    try {
        const city = await cityServices.getAllCity(req.params); //req.params is comming from usl /city
        res.status(201).json({
            data: city,
            success: true,
            message: "succesfully retrieved the city ",
            err: {}
        });
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the city",
            err: error
        });

    };
}


const update = async (req, res) => {

    try {
        const response = await cityServices.updateCity(req.params.id, req.body); //data will be fetched from req.body while updating
        res.status(201).json({
            data: response,
            success: true,
            message: "succesfully updated the city ",
            err: {}
        });
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Error while updating the city",
            err: error
        });

    };
}



const destroy = async (req, res) => {

    try {
        const response = await cityServices.deleteCity(req.params.id); //req.params.id is comming from usl /city/:id
        res.status(201).json({
            data: response,
            success: true,
            message: "succesfully deleted the city ",
            err: {}
        });
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Error while deleting the city",
            err: error
        });

    };
}

module.exports = { create, get, getAll, update, destroy };
