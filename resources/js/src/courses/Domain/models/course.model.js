export class Course {
    /**
     * Constructor
     * @param {String} name 
     * @param {String} speaker
     * @param {String} categories
     * @param {String} level 
     * @param {date} start_date 
     * @param {date} end_date 
     * @param {String} description 
     */
    constructor({ id = undefined, name, speaker, categories, level, startDate, endDate, description }) {
        if (!name) throw new Error('The name field is required.');
        if (!speaker) throw new Error('The speker field is required.');
        if (!categories) throw new Error('The categories field is required.');
        if (!level) throw new Error('The level field is required.');

        this.id = id;
        this.name = name;
        this.speaker = speaker;
        this.categories = categories;
        this.level = level;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description
    }
}