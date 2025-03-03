// react-table components
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState, useContext } from "react";

import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
// Vision UI Dashboard PRO React example components
import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import Icon from "@mui/material/Icon";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiPagination from "components/VuiPagination";
import VuiSelect from "components/VuiSelect";
import VuiTypography from "components/VuiTypography";
import { getAllInvoice } from "redux/actions/invoice";
import DateRangePickerComponent from "examples/DateRangePicker";
import useDateRange from "hooks/useDateRange";
import { TourplaceContext } from "pages/invoiceProgram";

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
  canFilterDateRage,
}) {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userData);
  const tourplace = useContext(TourplaceContext);
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const columns = useMemo(() => table.columns, [table]);

  const {startDate, setStartDateFn, endDate, setEndDateFn} = useDateRange();
  const updateddata = table.rows.map((item, key) => {
    return item = {
      ...item
    }
  })
  const data = useMemo(() => updateddata, [table]);
  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;
  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  useEffect(() => {
    const start_row_index = pageIndex === 0 ? pageIndex : pageIndex * pageSize - 1;
    const end_row_index = start_row_index + pageSize - 1;
    
    const param = {
      start_row_index: start_row_index,
      end_row_index: end_row_index,
      start_date: startDate,
      end_date: endDate,
      tourplace: tourplace
    }
    dispatch(getAllInvoice(userdata.access, param));
  }, [pageSize, startDate, endDate])
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => setPageSize(value);

  // Render the paginations
  const renderPagination = pageOptions.map((option) => (
    <VuiPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </VuiPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }
  return (

    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <VuiBox
          display="flex"
          p={3}
          pl={0}
          sx={({ breakpoints }) => ({
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            [breakpoints.up("md")]: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          })}
        >
          {entriesPerPage && (
            <VuiBox
              display="flex"
              alignItems="center"
              sx={({ breakpoints }) => ({
                mb: "10px",
                [breakpoints.up("md")]: {
                  mb: "0px",
                },
              })}
            >
              <VuiSelect
                defaultValue={{ value: defaultValue, label: defaultValue }}
                options={entries.map((entry) => ({ value: entry, label: entry }))}
                onChange={setEntriesPerPage}
                size="small"
              />
              <VuiTypography variant="caption" color="text">
                &nbsp;&nbsp;entries per page
              </VuiTypography>
            </VuiBox>
          )}
          {canFilterDateRage && (
            <VuiBox width="12rem" ml={{ xs: "0px", md: "auto" }} mb={{ xs: "10px", md: "auto" }}>
              <DateRangePickerComponent setStartDateFn={setStartDateFn} setEndDateFn={setEndDateFn}/>
            </VuiBox>
          )}
          {canSearch && (
            <VuiBox width="12rem" ml={{ xs: "0px", md: "auto" }}>
              <VuiInput
                placeholder="Search..."
                value={search}
                onChange={({ currentTarget }) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
                sx={({ borders: { borderWidth }, palette: { inputColors } }) => ({
                  border: `${borderWidth[1]} solid`,
                  borderColor: inputColors.borderColor.main,
                })}
              />
            </VuiBox>
          )}
        </VuiBox>
      ) : null}
      <Table {...getTableProps()}>
        <VuiBox component="thead">
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </VuiBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <DataTableBodyCell
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <VuiBox
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <VuiBox mb={{ xs: 3, md: 0 }}>
            <VuiTypography variant="button" color="white" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </VuiTypography>
          </VuiBox>
        )}
        {pageOptions.length > 1 && (
          <VuiPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <VuiPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </VuiPagination>
            )}
            {renderPagination.length > 6 ? (
              <VuiBox width="5rem" mx={1}>
                <VuiInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </VuiBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <VuiPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </VuiPagination>
            )}
          </VuiPagination>
        )}
      </VuiBox>
    </TableContainer>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
  canFilterDateRage: true
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  canFilterDateRage: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
