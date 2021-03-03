import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciePlanetsService {
    async delete(id) {
        return await dbContext.SpeciePlanets.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.SpeciePlanets.create(body)
    }
    async find(query = {}) {
        return await dbContext.SpeciePlanets.find(query).populate("specie planet");
    }
    async findById(id) {
        // let speciePlanet = await dbContext.SpeciePlanets.findById(id);
        // if (!speciePlanet) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return speciePlanet;
    }
}

export const speciePlanetsService = new SpeciePlanetsService();
