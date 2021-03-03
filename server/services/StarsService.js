import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
    async create(body) {
        return await dbContext.Stars.create(body)
    }
    async find(query = {}) {
        // return await dbContext.Stars.find(query).populate("classroom", "-description");
        return await dbContext.Stars.find(query).populate("galaxy", "title");
    }
    async findById(id) {
        // let classroom = await dbContext.Stars.findById(id);
        // if (!classroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return classroom;
    }
}

export const starsService = new StarsService();