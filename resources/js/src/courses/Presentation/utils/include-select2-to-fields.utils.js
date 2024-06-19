import $ from 'jquery';
import select2 from 'select2';
import 'select2/dist/css/select2.min.css';
import '/resources/sass/select2-bootstrap.scss';
import { ElementSelectors } from '../../config/selectors';

let speakerSelect2;

/**
 * include select2 in participant fields
 */
export const includeSelect2ToFields = async () => {
    getOrCreateSpeakerSelect2Field()
}

/**
 * Include or generate tagify field to level input 
 * @returns Tagify
 */
export const getOrCreateSpeakerSelect2Field = () => {    
    if (speakerSelect2) {
        return speakerSelect2;
    }

    select2($)
    const speakerSelector = '.select2-speaker';
    const options = {
        theme: 'bootstrap',
        dropdownParent: document.querySelector(ElementSelectors.CourseModal),
        placeholder: 'Select an option',
        width: '100%',
        debug: true,
        ajax: {
            type: 'POST',
            url: `${import.meta.env.VITE_APP_URL}/admin/search/courses`,
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            processResults: function ({ data: speakers }) {
                const data = speakers.map(item => ({id: item.id, text: `${item.last_name} ${item.first_name}`, ...item}));

                return {
                    results: data
                };
            },
            cache: false,
        }
    };
    speakerSelect2 = $(speakerSelector).select2(options);

    return speakerSelect2;
}


