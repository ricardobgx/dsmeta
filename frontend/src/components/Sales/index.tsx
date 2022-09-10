import SalesTable from "../SalesTable";
import DatePicker from "react-datepicker";
import React, { useEffect, useState } from "react";

import ApiUtil from "../../utils/apiUtil";

import "react-datepicker/dist/react-datepicker.css";
import FormatterUtil from "../../utils/formatterUtil";

const Sales: React.FC = (): JSX.Element => {
  const defaultMinDate = new Date(
    new Date().setDate(new Date().getDate() - 365)
  );
  const defaultMaxDate = new Date();

  const [minDate, setMinDate] = useState<Date>(defaultMinDate);
  const [maxDate, setMaxDate] = useState<Date>(defaultMaxDate);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    ApiUtil.getSales({
      minDate: FormatterUtil.getISOUTCDateString(minDate),
      maxDate: FormatterUtil.getISOUTCDateString(maxDate),
    }).then((data) => setSales(data.content));
  }, [minDate, maxDate]);

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
            <SalesTable sales={sales} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
