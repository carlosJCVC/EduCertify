export class Speaker {
    /**
     * Constructor
     * @param {String} first name 
     * @param {String} last name
     * @param {String} email 
     * @param {String} status
     * @param {String} phone number 
     * @param {String} avatar 
     * @param {String} linkedin profile 
     * @param {String} website 
     * @param {Array} expertise 
     * @param {String} biography 
     * @param {String} notes 
     */
    constructor({
        id = undefined,
        firstName,
        lastName,
        email,
        status,
        avatar,
        phoneNumber = undefined,
        linkedinProfile = undefined,
        website = undefined,
        expertises = [],
        biography = undefined,
        notes = undefined,
    }) {
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
        this.phoneNumber = phoneNumber;
        this.linkedinProfile = linkedinProfile;
        this.website = website;
        this.expertises = expertises;
        this.biography = biography;
        this.notes = notes;
    }
}
