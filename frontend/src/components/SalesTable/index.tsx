import React from "react";
import SalesTableBodyRow from "../SalesTableBodyRow";
import SalesTableHeaderRow from "../SalesTableHeaderRow";

const SalesTable: React.FC<SalesTableProps> = ({ sales }): JSX.Element => {
  return (
    <table className="dsmeta-sales-table">
      <thead>
        <SalesTableHeaderRow />
      </thead>
      <tbody>
        {sales.map((sale) => (
          <SalesTableBodyRow key={sale.id} {...sale} />
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
