/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// @mui material components
import { Grid, Table as MuiTable } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import VuiAvatar from "components/VuiAvatar";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import { action_type } from "redux/action_type";
import borders from "assets/theme/base/borders";
// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { useMemo } from "react";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

function Table({ columns, rows }) {
  const { light, grey } = colors;
  const { size, fontWeightMedium } = typography;
  const { borderWidth } = borders;

  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.cameraReducer.cameraAddModalStatus);

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 0;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <VuiBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightMedium}
        color="text"
        opacity={0.7}
        borderBottom={`${borderWidth[1]} solid ${grey[600]}`}
      >
        {name.split('_').join(" ").toUpperCase()}
      </VuiBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <VuiBox
            key={uuidv4()}
            component="td"
            py={1}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <VuiBox display="flex" alignItems="center" py={0.5}>
              <VuiBox mr={2}>
                <VuiAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </VuiBox>
              <VuiTypography
                variant="button"
                color="white"
                fontWeight="medium"
                sx={{ width: "max-content" }}
              >
                {row[name][1]}
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        );
      } else {
        template = (
          <VuiBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <VuiTypography
              variant="button"
              fontWeight="regular"
              color="white"
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[name]}
            </VuiTypography>
          </VuiBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });


  const openAddCameraModal = () => {
    dispatch({ type: action_type.CAMERA_ADD_MODAL_STATUS, status: !modalStatus });
  }

  return useMemo(
    () => (
      <Card
        sx={({ breakpoints }) => ({
          [breakpoints.down("xl")]: {
            overflowX: "scroll",
          },
        })}
      >
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={12}>
            <MuiTable>
              <VuiBox component="thead">
                <TableRow>{renderColumns}</TableRow>
              </VuiBox>
              <TableBody>{renderRows}</TableBody>
            </MuiTable>
          </Grid>
          <Grid item xs={12} sm={12}>
            <VuiBox ml="auto" mt="10px">
              <VuiButton variant="outlined" sx={{ width: '100%' }} color="info" size="small" onClick={openAddCameraModal}>
                Add New Camera
              </VuiButton>
            </VuiBox>
          </Grid>
        </Grid>
      </Card>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
