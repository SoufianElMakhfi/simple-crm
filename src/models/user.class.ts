export class User {
    firstName!: string;
    lastName!: string; 
    birthDate!: number;
    street!: string;
    zipCode!: number;
    city!: string;
     // Das Ausrufezeichen (!) teilt TypeScript mit, dass diese Eigenschaften 
    // definitiv initialisiert werden, auch wenn TypeScript dies nicht direkt sehen kann, ein Wert wird also definitiv gegeben.

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
                // Wenn obj definiert ist und obj.street existiert, wird this.street auf obj.street gesetzt. Andernfalls wird this.street auf einen leeren String gesetzt.

    }
}