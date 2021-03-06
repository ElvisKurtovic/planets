import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
    constructor() {
        super("api/moon");
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }
    // NOTE query is always api/moons?name=bob
    // NOTE params is always api/moons/:id
    async getAll(req, res, next) {
        try {
            return res.send(await moonsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send(201, await moonsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}