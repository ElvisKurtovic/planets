import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
    constructor() {
        super("api/specie");
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }
    // NOTE query is always api/species?name=bob
    // NOTE params is always api/species/:id
    async getAll(req, res, next) {
        try {
            return res.send(await speciesService.find(req.query));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send(201, await speciesService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}