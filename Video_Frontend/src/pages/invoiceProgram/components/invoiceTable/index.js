import Card from "@mui/material/Card";
import DataTable from "./DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useSelector } from "react-redux";
import Icon from "@mui/material/Icon";
import { Chip } from "@mui/material";
import payment_type from "utils/payment_type";
import moment from "moment";

const icon_type = {
  success: { name: 'check', color: 'success', label: 'Success' },
  pending: { name: 'access_time', color: 'info', label: 'Pending' },
  failed: { name: 'close', color: 'error', label: 'Failed' },
  expired: { name: 'running_with_errors', color: 'primary', label: 'Expired' },
}

const StatusComponent = ({ icon }) => {
  return <Chip color={icon.color} size={'small'} icon={<Icon fontSize={'medium'}>{icon.name}</Icon>} label={icon.label} />
}

const showStatus = (status) => {
  switch (status) {
    case payment_type.PENDING:
    case payment_type.APPROVED:
      return <StatusComponent icon={icon_type.pending} />
    case payment_type.COMPLETED:
      return <StatusComponent icon={icon_type.success} />
    case payment_type.CANCELED:
    case payment_type.VOIDED:
    case payment_type.REFUNDED:
    case payment_type.DECLINED:
    case payment_type.INSUFFCIENT_FUNDS:
    case payment_type.CARD_EXPIRED:
    case payment_type.CARD_DECLINED:
    case payment_type.INVALID_CARD:
    case payment_type.FRAUD_DETECTED:
    case payment_type.UNKNOWN:
      return <StatusComponent icon={icon_type.failed} />
    case payment_type.VERSION_EXPIRES:
      return <StatusComponent icon={icon_type.expired} />
    default:
      break;
  }
}

function InvoiceTable() {

  const invoiceData = useSelector((state) => state.invoiceReducer.invoiceData);
  const invoiceTableData = {
    columns: [
      { Header: "Client Name", accessor: "username", align: 'center' },
      { Header: "Email", accessor: "email", align: 'center' },
      { Header: "Phone Number", accessor: "phonenumber", align: 'center' },
      { Header: "Tour Place", accessor: "tourplace", align: 'center' },
      { Header: "Pay Amount", accessor: "amount", align: 'center' },
      { Header: "Pay Date", accessor: "date", align: 'center' },
      { Header: "Pay Status", accessor: "status", align: 'center' },
      { Header: "Comment", accessor: "comment", align: 'center' },
    ],
    rows: [],
  };
  invoiceTableData.rows = invoiceData.map((invoice) => {
    return {
      ...invoice,
      date: (moment(invoice.date).format('YYYY-MM-DD')),
      amount: (`$ ${invoice.amount}`),
      status: (showStatus(invoice.videoremain > 0 || invoice.snapshotremain > 0 ? invoice.status : payment_type.VERSION_EXPIRES)),
    };
  });

  return (
    <VuiBox pt={6} pb={3}>
      <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
          <VuiTypography variant="h5" fontWeight="medium" color="white">
            Invoice Table
          </VuiTypography>
        </VuiBox>
        <DataTable 
          table={invoiceTableData} 
          canSearch
          pagination={{ variant: "gradient", color: "info" }}
          entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
          showTotalEntries={true} />
      </Card>
    </VuiBox>
  );
}

export default InvoiceTable;
