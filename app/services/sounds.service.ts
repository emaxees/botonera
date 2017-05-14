import { Routes } from '../routes/routes';
import {Injectable} from '@angular/core';
var sound = require("nativescript-sound");


@Injectable()
export class SoundService {

    getAnimalRoutesSounds(){
        return Routes.animalsSoundsRoutes;
    };

    getScreamsRoutesSound(){
        return Routes.screamSoundsRoutes;
    };

    getLaughsRoutesSounds(){
        return Routes.laughsSoundsRoutes;
    };

    getSpecialsRoutesSounds(){
        return Routes.specialsSoundsRoutes;
    };

    getAnimalNames():string[]{
        return Routes.animalsSoundsRoutes.map((ele)=>{ return ele.name});
    };
    
    getScreamNames():string[]{
        return Routes.screamSoundsRoutes.map((ele)=>{ return ele.name});
    };
    
    getLaughsNames():string[]{
        return Routes.laughsSoundsRoutes.map((ele)=>{ return ele.name});
    };

    getSpecialsNames():string[]{
        return Routes.specialsSoundsRoutes.map((ele)=>{ return ele.name});
    };
}