/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import { useEffect, useMemo, useState } from "react";

import BasicLineChart from "../BasicLineChart";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";

// porp-types is a library for typechecking of props


// @mui material components


// Vision UI Dashboard PRO React components




// LineChart apex-chart


function ProgressLineChart({ color, icon, title, count, progress, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("lg")]: {
          maxHeight: "255px",
        },
      })}
    >
      <VuiBox display="flex" alignItems="center">
        <VuiBox
          width="45px"
          height="45px"
          display="grid"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          shadow="md"
          color="white"
          bgColor={color}
        >
          {icon}
        </VuiBox>
        <VuiBox ml={2} lineHeight={1} display="flex" flexDirection="column">
          <VuiTypography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
            color="white"
          >
            {title}
          </VuiTypography>
          {count ? (
            <VuiTypography variant="lg" color="white" fontWeight="bold">
              {count}
            </VuiTypography>
          ) : null}
        </VuiBox>
        <VuiBox width="25%" ml="auto">
          <VuiTypography display="block" variant="caption" fontWeight="medium" color="text">
            {progress}%
          </VuiTypography>
          <VuiBox mt={0.25}>
            <VuiProgress color={color} value={progress} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox sx={{maxHeight: "150px"}}>
        {
          useMemo(() => (
            <BasicLineChart lineChartData={chartData} lineChartOptions={chartOptions}/>
          ), [data, options])
        }
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of ProgressLineChart
ProgressLineChart.defaultProps = {
  color: "info",
  count: 0,
};

// Typechecking props for the ProgressLineChart
ProgressLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progress: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  object: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProgressLineChart;
