import dayjs from 'dayjs';

export const formatDateYMD = (date) => {
    if (!date) return "";
    return dayjs(date).format('YYYY-MM-DD')

}
