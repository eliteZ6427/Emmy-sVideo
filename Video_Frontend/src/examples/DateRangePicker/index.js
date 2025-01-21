import React, { useEffect, useRef, useState } from 'react';
import Litepicker from 'litepicker';
import 'litepicker/dist/css/litepicker.css';
import VuiBox from 'components/VuiBox';
import { styled } from '@mui/material';

const CustomInput = styled('input')(({ theme, primary }) => ({
    fontSize: 'small',
    padding: '0.7rem',
    borderRadius: '13px',
    border: '0.0625rem solid rgba(226, 232, 240, 0.3)',
    backgroundColor: 'rgb(15, 21, 53) !important',
    color: 'rgb(255, 255, 255) !important',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: primary ? theme.palette.primary.dark : theme.palette.grey[700],
    },
}));

const DateRangePickerComponent = ({ setStartDateFn, setEndDateFn }) => {
    const pickerRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const picker = new Litepicker({
            element: pickerRef.current,
            singleMode: false,
            format: 'YYYY-MM-DD',
            setup: (picker) => {
                picker.on('selected', (date1, date2) => {
                    setStartDateFn(date1.format('YYYY-MM-DD'))
                    setEndDateFn(date2.format('YYYY-MM-DD'))
                    setSelectedDate(`${date1.format('YYYY-MM-DD')} to ${date2.format('YYYY-MM-DD')}`);
                });
            },
        });

        return () => {
            picker.destroy();
        };
    }, []);

    return (
        <VuiBox>
            <CustomInput ref={pickerRef} type="text" placeholder="Select Date" value={selectedDate} readOnly />
        </VuiBox>
    );
};

export default DateRangePickerComponent;
