import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
    async create(body) {
        return await dbContext.Moons.create(body)
    }
    async find(query = {}) {
        // return await dbContext.Moons.find(query).populate("classroom", "-description");
        return await dbContext.Moons.find(query).populate("planet", "title");
    }
    async findById(id) {
        // let classroom = await dbContext.Moons.findById(id);
        // if (!classroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return classroom;
    }
}

export const moonsService = new MoonsService();