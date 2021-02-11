import moment from 'moment';

const Helpers = {
    formattedCedis(amount) {
        return `GHC ${Number(amount).toFixed(2)}`;
    },

    formattedDateString(date) {
        if (Array.isArray(date)) {
            const date_array = [];

            date.forEach(date => {
                date_array.push(moment(date).format('YYYY-MM-DD'));
            });

            return date_array;
        }
        return moment(date).format('YYYY-MM-DD');
    },

    formattedDate(date) {
        if (!date) {
            return 'N/A';
        }
        return moment(date).format('Do MMMM YYYY');
    },

    formattedDateTime(date) {
        if (!date) {
            return moment().format('Do MMMM YYYY, h:mm:ss a');
        }
        return moment(date).format('Do MMMM YYYY, h:mm:ss a');
    },

    formattedDateWithoutYear(date) {
        return moment(date).format('Do MMMM');
    },

    capitalize(word) {
        if (typeof word !== 'string') {
            return '';
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    },
}

export default Helpers;