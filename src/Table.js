import React, { useState } from "react";
import MaterialTable from "material-table";

export const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      fname: "Tony",
      lname: "Stark",
      sname: "Iron Man",
      email: "tony@avengers.com",
      gender: "M",
      age: 53
    },
    {
      id: 2,
      fname: "Natasha",
      lname: "Romanova",
      sname: "Black Widow",
      email: "natsha@avengers.com",
      gender: "F",
      age: 34
    },
    {
      id: 3,
      fname: "Steve",
      lname: "Rogers",
      sname: "Caption America",
      email: "steve@avengers.com",
      gender: "M",
      age: 99
    }
  ]);
  const columns = [
    {
      title: "#",
      field: "id"
    },
    {
      title: "First Name",
      field: "fname"
    },
    {
      title: "Last Name",
      field: "lname"
    },
    {
      title: "Superhero Name",
      field: "sname"
    },
    {
      title: "Email ",
      field: "email"
    },
    {
      title: "Gender",
      field: "gender"
    },
    {
      title: "Age",
      field: "age"
    }
  ];

  return (
    <div>
      <MaterialTable
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onBulkUpdate: changes =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            })
        }}
        title=""
        data={data}
        columns={columns}
        options={{
          paging: false,
          selection: true
        }}
      />
    </div>
  );
};
