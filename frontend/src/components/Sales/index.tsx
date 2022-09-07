import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SalesTable from "../SalesTable";

const Sales: React.FC = (): JSX.Element => {
  const defaultMinDate = new Date(
    new Date().setDate(new Date().getDate() - 15)
  );
  const defaultMaxDate = new Date();

  const [minDate, setMinDate] = useState(defaultMinDate);
  const [maxDate, setMaxDate] = useState(defaultMaxDate);

  return (
    <section id="sales">
      <div className="dsmeta-container">
        <div className="dsmeta-card">
          <h2 className="dsmeta-sales-title">Vendas</h2>
          <div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={minDate}
                onChange={(date: Date) => {
                  if (date <= maxDate) setMinDate(date);
                }}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={maxDate}
                onChange={(date: Date) => {
                  setMaxDate(date);
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
