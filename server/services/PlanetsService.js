import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async create(body) {
        return await dbContext.Planets.create(body)
    }
    async find(query = {}) {
        // return await dbContext.Planets.find(query).populate("classroom", "-description");
        return await dbContext.Planets.find(query).populate("star", "title");
    }
    async findById(id) {
        // let classroom = await dbContext.Planets.findById(id);
        // if (!classroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return classroom;
    }
}

export const planetsService = new PlanetsService();