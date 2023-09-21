const { City } = require('../models/index');

class CityRepository {

    async createCity(name) {
        try {
            const city = await City.create({ name })
            return city;
        } catch (error) {
            console.log("There is an issue with repository layer")
            throw (error);
        }
    };

    async getCity(cityId) {
        try {
            const city = await City.findByPK( cityId );
            return city;
        } catch (error) {
            console.log("There is an issue with repository layer")
            throw (error);
        }
    };


    async getAllCity(name) {
        try {

        } catch (error) {
            console.log("There is an issue with repository layer")
            throw (error);
        }
    };

    async updateCity(data, cityId) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("There is an issue with repository layer")
            throw (error);
        }
    };


    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("There is an issue with repository layer")
            throw (error);
        }
    };


}

module.exports = CityRepository;