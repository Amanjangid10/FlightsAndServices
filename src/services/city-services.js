const { CityRepository } = require('../repository/index')


class CityServices {


  constructor() {
    this.cityRepository = new CityRepository();
  }


  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      console.log(error)
      throw (error);
    }
  }


  async getCity(cityId) {
    try {
        const city = await this.cityRepository.getCity(cityId);
        return city;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
}

  async getAllCity(filter) {
    try {
      const cities = await this.cityRepository.getAllCity({name : filter.name});
      return cities;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data)
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error)
    }
  }


  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      throw (error)
    }
  }

}

module.exports = CityServices;