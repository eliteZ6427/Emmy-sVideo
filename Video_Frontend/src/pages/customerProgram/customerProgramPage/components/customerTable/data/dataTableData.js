export default {
  columns: [
    { Header: "User Name", accessor: "username", width: "7%" },
    { Header: "Email", accessor: "email", width: "10%" },
    { Header: "Phone Number", accessor: "phone_number", width: "10%" },
    { Header: "Address", accessor: "address", width: "20%" },
    { Header: "Contact Name", accessor: "contact_email" },
    { Header: "Contact Email", accessor: "contact_name" },
    { Header: "Contact Phone Number", accessor: "contact_phone_number" },
    { Header: "Action", accessor: "action", width: "10%" },
  ],

  rows: [
    {
      user_id: 1,
      username: "Steven Stence",
      email: "codemaster9428@gmail.com",
      phone_number: "+14798020192",
      address: "Generic Ottawa, On, Canada",
      contact_email: "jerrydurgin1@gmail.com",
      contact_name: "Jerry Durgin",
      contact_phone_number: "+123456789",
    },
    {
      user_id: 2,
      username: "Steven Stence",
      email: "codemaster9428@gmail.com",
      phone_number: "+14798020192",
      address: "Generic Ottawa, On, Canada",
      contact_email: "jerrydurgin1@gmail.com",
      contact_name: "Jerry Durgin",
      contact_phone_number: "+123456789",
    }
  ],
};
