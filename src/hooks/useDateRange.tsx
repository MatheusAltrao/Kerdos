'use client'
import { useEffect } from 'react';

function useDateRange(startDate: Date | undefined, endDate: Date | undefined, setEndDate: (v: Date) => void) {

    useEffect(() => {
        if (startDate && (!endDate || startDate >= endDate)) {
            const minDate = new Date(startDate.getTime());
            minDate.setDate(minDate.getDate() + 1);
            setEndDate(minDate);
        }
    }, [startDate, endDate, setEndDate]);

}

export default useDateRange;