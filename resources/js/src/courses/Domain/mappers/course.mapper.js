import { Course } from "../models/course.model";

const CourseMapper = {
    /**
     * Function to transform from Course model to object 
     * @param {Course} course 
     * @returns {object}
     */
    toObject: course => {
        const { id, name, speaker, categories, level, startDate, endDate, description } = course;

        return {
            id,
            name,
            speaker,
            categories,
            level,
            start_date: startDate,
            end_date: endDate,
            description
        };
    },

    /**
     * Function to transaform json to Course model
     * @param {*} response 
     * @returns 
     */
    fromJson: response => {
        const { id, name, speaker, categories, level, start_date, end_date, description } = response;

        return new Course({
            id,
            name,
            speaker,
            categories,
            level,
            startDate: start_date,
            endDate: end_date,
            description
        });
    },

    /**
     * Function to transaform FormData to Course model
     * @param {FormData} formData 
     * @returns 
     */
    fromFormData: formData => {
        const name = formData.get('name');
        const speaker = formData.get('speaker');
        const stringCategory = formData.get('category');
        const stringLevel = formData.get('level');
        const startDate = formData.get('startDate');
        const endDate = formData.get('endDate');
        const description = formData.get('description');

        const valueLevel = JSON.parse(stringLevel);
        const valueCategories = JSON.parse(stringCategory);

        return new Course({
            name,
            speaker,
            categories: valueCategories.map(item => item.value),
            level: valueLevel[0].value,
            startDate,
            endDate,
            description,
        });
    },
};

export default CourseMapper;