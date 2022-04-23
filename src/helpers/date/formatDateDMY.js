import dayjs from 'dayjs';

export const formatDateDMY = (date) => {
    if (!date) return "";
    return dayjs(date).format('DD/MM/YYYY')

}
