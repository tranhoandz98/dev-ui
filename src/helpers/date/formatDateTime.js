import dayjs from 'dayjs';

export const formatDateTime = (date) => {
    if (!date) {
        return "";
    }
    return dayjs(date).format("DD/MM/YYYY H:mm:ss")

}



