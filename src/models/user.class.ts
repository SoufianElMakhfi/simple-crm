export class User {
    [x: string]: any;
    firstName!: string;
    lastName!: string; 
    email!: string;
    birthDate!: number;
    street!: string;
    zipCode!: number;
    city!: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : 0; // Setze als Zahl
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : 0; // Setze als Zahl
        this.city = obj ? obj.city : '';
    }

    // Füge die toJSON-Methode hinzu
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}
