import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
    async create(body) {
        return await dbContext.Species.create(body)
    }
    async find(query = {}) {
        // return await dbContext.Species.find(query).populate("classroom", "-description");
        return await dbContext.Species.find(query)
        // .populate("planet", "title");
    }
    async findById(id) {
        // let classroom = await dbContext.Species.findById(id);
        // if (!classroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return classroom;
    }
}

export const speciesService = new SpeciesService();