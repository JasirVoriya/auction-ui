export function parseDateString(dateString: string): Date | null {
    const parts = dateString.split(" ");

    if (parts.length !== 2) {
        console.error("Invalid date string format");
        return null;
    }

    const datePart = parts[0];
    const timePart = parts[1];

    const [year, month, day] = datePart.split("-");
    const [hour, minute, second] = timePart.split(":");

    // 注意：在创建 Date 对象时，月份是从 0 开始计数的，所以需要将月份减 1
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));

    return isNaN(dateObject.getTime()) ? null : dateObject;
}