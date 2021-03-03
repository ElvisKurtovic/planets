import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxysService {

    async create(body) {
        return await dbContext.Galaxys.create(body)
    }
    async find(query = {}) {
        return await dbContext.Galaxys.find(query);
    }

    // async find(query = {}) {
    //     let galaxys = await dbContext.Galaxys.find(query);
    //     return galaxys;
    // }
    // async findById(id) {
    //     let galaxy = await dbContext.Galaxys.findById(id);
    //     if (!galaxy) {
    //         throw new BadRequest("Invalid Id");
    //     }
    //     return galaxy;
    // }
}

export const galaxysService = new GalaxysService();