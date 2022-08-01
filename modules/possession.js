export default class Possession
{
    constructor(name, element, price, rent, available)
    {
        // Possession information
        this.name = name;
        this.element = element;
        this.price = price;
        this.rent = rent;
        this.owner;
        this.available = available;
        // Possession coordinates
        this.rightSteps = 0;
        this.topSteps = 0;
    }

    buy(player)
    {
        player.possessions[this.name] = this;
        this.owner = player;
        player.balance -= this.price;
    }

    payRent(player)
    {
        player.balance -= this.rent;
        owner.balance += this.rent;
    }
};
