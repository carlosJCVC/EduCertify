export class User {
    /**
     * Constructor
     * @param {String} name 
     * @param {String} email 
     * @param {String} status 
     */
    constructor({ id = undefined, name, email, status }) {
        if (!name) throw new Error('The name field is required.');
        if (!email) throw new Error('The email field is required.');
        if (!status) throw new Error('The status field is required.');

        this.id = id;
        this.name = name;
        this.email = email;
        this.status = status;
        // this.createdAt = created_at
    }
}