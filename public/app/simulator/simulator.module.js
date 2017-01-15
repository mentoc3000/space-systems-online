"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var simulator_routing_module_1 = require('./simulator-routing.module');
var simulator_component_1 = require('./simulator.component');
var SimulatorModule = (function () {
    function SimulatorModule() {
    }
    SimulatorModule = __decorate([
        core_1.NgModule({
            imports: [
                simulator_routing_module_1.SimulatorRoutingModule
            ],
            declarations: [
                simulator_component_1.SimulatorComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SimulatorModule);
    return SimulatorModule;
}());
exports.SimulatorModule = SimulatorModule;
