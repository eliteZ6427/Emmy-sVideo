import { useState } from "react";

const useDateRange = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const setStartDateFn = (date) => setStartDate(date);
    const setEndDateFn = (date) => setEndDate(date);

    return{startDate, setStartDateFn, endDate, setEndDateFn};
}

export default useDateRange