import SpeakerMapper from "../../../speakers/Domain/mappers/speaker.mapper";
import { Course } from "../models/course.model";
import PreferenceMapper from "./preference.mapper";

const CourseMapper = {
    /**
     * Function to transform from Course model to object 
     * @param {Course} course 
     * @returns {object}
     */
    toObject: course => {
        const { id, name, speakerId, speaker, categories, level, startDate, endDate, description } = course;

        return {
            id,
            name,
            speaker_id: speakerId,
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
        const { id, name, speaker_id, speaker, categories, level, start_date, end_date, description, preferences } = response;

        return new Course({
            id,
            name,
            speaker_id,
            speaker: speaker? SpeakerMapper.fromJson(speaker) : null,
            categories,
            level,
            startDate: start_date,
            endDate: end_date,
            preferences: preferences? PreferenceMapper.fromJson(preferences) : null,
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
        const speakerId = formData.get('speaker');
        const stringCategory = formData.get('category');
        const stringLevel = formData.get('level');
        const startDate = formData.get('startDate');
        const endDate = formData.get('endDate');
        const description = formData.get('description');

        const valueLevel = JSON.parse(stringLevel);
        const valueCategories = JSON.parse(stringCategory || "[]");

        return new Course({
            name,
            speaker_id: speakerId,
            categories: valueCategories.map(item => item.value),
            level: valueLevel[0].value,
            startDate,
            endDate,
            description,
        });
    },
};

export default CourseMapper;