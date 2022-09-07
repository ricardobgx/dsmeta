import React from "react";
import SalesTableBodyRow from "../SalesTableBodyRow";
import SalesTableHeaderRow from "../SalesTableHeaderRow";

const SalesTable: React.FC = (): JSX.Element => {
  return (
    <table className="dsmeta-sales-table">
      <thead>
        <SalesTableHeaderRow />
      </thead>
      <tbody>
        <SalesTableBodyRow
          id={341}
          date={new Date(2022, 7, 8)}
          seller={"Anakin"}
          visits={15}
          sales={11}
          total={55300}
        />
        <SalesTableBodyRow
          id={341}
          date={new Date(2022, 7, 8)}
          seller={"Anakin"}
          visits={15}
          sales={11}
          total={55300}
        />
        <SalesTableBodyRow
          id={341}
          date={new Date(2022, 7, 8)}
          seller={"Anakin"}
          visits={15}
          sales={11}
          total={55300}
        />
      </tbody>
    </table>
  );
};

export default SalesTable;
