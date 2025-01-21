/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// Custom styles for Calendar
import CalendarRoot from "examples/Calendar/CalendarRoot";
// @mui material components
import Card from "@mui/material/Card";
// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

function Calendar({ header, isWidgets, ...rest }) {
  const validClassNames = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const events = rest.events
    ? rest.events.map((el) => ({
        ...el,
        className: validClassNames.find((item) => item === el.className)
          ? `event-${el.className}`
          : "event-info",
      }))
    : [];

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("lg")]: {
          height: "100%",
          // minHeight: !isWidgets ? "560px" : "100%",
        },
      })}
    >
      <VuiBox lineHeight={1} mb="12px">
        {header.title ? (
          <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
            {header.title}
          </VuiTypography>
        ) : null}
        {header.date ? (
          <VuiTypography component="p" variant="button" color="text" fontWeight="medium">
            {header.date}
          </VuiTypography>
        ) : null}
      </VuiBox>
      <VuiBox height="100%">
        <CalendarRoot>
          <FullCalendar
            {...rest}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            height="100%"
          />
        </CalendarRoot>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of Calendar
Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
  isWidgets: PropTypes.bool,
};

export default Calendar;
