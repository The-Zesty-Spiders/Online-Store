export class User {
    Email: string;
    Bulstat: string;
    Password: string;
    ConfirmPassword: string;
    CompanyName: string;

    constructor(email: string, bulstat: string, password: string, confirmPassword: string, companyName: string) {
        this.Email = email;
        this.Bulstat = bulstat;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.CompanyName = companyName;
    }
}
