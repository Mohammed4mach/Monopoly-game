export default class Player
{
    constructor(name, car, color)
    {
        // Player information
        this.name = name;
        this.car = car;
        this.color = color;
        this.possessions = {};
        this.balance = 1500;
        // Player coordinates
        this.rightSteps = 0;
        this.topSteps = 0;
        this.rightPos = Number(car.style.right.split(`px`)[0]);
    }

    move(steps)
    {
        for(let i = 0; i < steps; i++)
        {
                if(this.rightSteps == 10 && this.topSteps != 10)
                this.car.style.bottom = `calc(10px + 59px * ${++this.topSteps})`;

                else if(this.rightSteps != 0 && this.topSteps == 10)
                    this.car.style.right = `calc(${this.rightPos}px + 81.5px * ${--this.rightSteps})`;

                else if(this.rightSteps == 0 && this.topSteps != 0)
                    this.car.style.bottom = `calc(10px + 59px * ${--this.topSteps})`;

                else
                    this.car.style.right = `calc(${this.rightPos}px + 81.5px * ${++this.rightSteps})`;
        }
    }
};
