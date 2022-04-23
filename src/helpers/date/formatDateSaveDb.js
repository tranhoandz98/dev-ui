import dayjs from 'dayjs';

export const formatDateSaveDb = (date) => {
    if (!date) return "";
    return dayjs(date).format('YYYY-MM-DD')

}

export const formatDateSaveDbYMDHms = (date) => {
    if (!date) {
        return "";
    }
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss")

}
