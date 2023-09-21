const { CityRepository } = require('../repository/index')


class CityServices {


  async createCity(data) {
    try {
      const city = await CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error);
    }
  }


  async getCity(cityId) {
    try {
      const city = await CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error);
    }
  }

  async getAllCity(name) {
    try {
      const city = await CityRepository.getAllCity(name);
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await CityRepository.updateCity(cityId, data)
      return city;
    } catch (error) {
      console.log('Something is wrong with service layer');
      throw (error)
    }
  }


  async deleteCity(cityId) {
    try {
      const city = await CityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      throw (error)
    }
  }

}

module.exports = CityServices;