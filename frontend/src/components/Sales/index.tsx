import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SalesTable from "../SalesTable";

const Sales: React.FC = (): JSX.Element => {
  const defaultStartDate = new Date(
    new Date().setDate(new Date().getDate() - 15)
  );
  const defaultEndDate = new Date();

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  return (
    <section id="sales">
      <div className="dsmeta-container">
        <div className="dsmeta-card">
          <h2 className="dsmeta-sales-title">Vendas</h2>
          <div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => {
                  if (date <= endDate) setStartDate(date);
                }}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => {
                  setEndDate(date);
                }}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div>
            <SalesTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
