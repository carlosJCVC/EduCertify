export class User {
    /**
     * Constructor
     * @param {String} name 
     * @param {String} email 
     * @param {String} status 
     */
    constructor({ id = undefined, firstName, lastName, email, status, avatar }) {
        if (!firstName) throw new Error('The first name field is required.');
        if (!lastName) throw new Error('The last name field is required.');
        if (!email) throw new Error('The email field is required.');
        if (!status) throw new Error('The status field is required.');

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.avatar = avatar;
        // this.createdAt = created_at
    }
}