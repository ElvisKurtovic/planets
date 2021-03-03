import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { speciePlanetsService } from "../services/SpeciePlanetsService";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planet");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id/specie", this.getAllSpeciesByPlanetId)
    }
    // NOTE query is always api/planets?name=bob
    // NOTE params is always api/planets/:id
    async getAll(req, res, next) {
        try {
            return res.send(await planetsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send(201, await planetsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async getAllSpeciesByPlanetId(req, res, next) {
        try {
            res.send(await speciePlanetsService.find({ planet: req.params.id }));
        } catch (error) {
            next(error);
        }
    }
}