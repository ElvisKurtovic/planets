import express from "express";
import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";

export class GalaxysController extends BaseController {
    constructor() {
        super("api/galaxy");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            res.send(await galaxysService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await galaxysService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
