import React from "react";

const SalesTableHeaderRow: React.FC = (): JSX.Element => {
  return (
    <tr>
      <th className="show992">ID</th>
      <th className="show576">Data</th>
      <th>Vendedor</th>
      <th className="show992">Visitas</th>
      <th className="show992">Vendas</th>
      <th>Total</th>
      <th>Notificar</th>
    </tr>
  );
};

export default SalesTableHeaderRow;
