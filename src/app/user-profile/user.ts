
export class User{
    
    name: string;
    firstName: string;
    quote: string;
    age: number;
    photo: string;
    
    constructor(name: string, firstName: string, quote: string, age: number, photo: string){
        this.name = name;
        this.firstName = firstName;
        this.quote = quote;
        this.age = age;
        this.photo = photo;
    }
}