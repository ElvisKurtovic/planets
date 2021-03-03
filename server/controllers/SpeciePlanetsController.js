
import express from "express";
import BaseController from "../utils/BaseController";
import { speciePlanetsService } from "../services/SpeciePlanetsService";

export class SpeciePlanetsController extends BaseController {
    constructor() {
        super("api/specieplanet");
        this.router
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(201, await speciePlanetsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await speciePlanetsService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}