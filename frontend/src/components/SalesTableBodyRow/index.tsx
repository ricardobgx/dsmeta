import React from "react";
import notificateIcon from "../../assets/images/notificate-icon.svg";
import ApiUtil from "../../utils/apiUtil";
import FormatterUtil from "../../utils/formatterUtil";

const SalesTableBodyRow: React.FC<Sale> = (props): JSX.Element => {
  const { id, sellerName, visited, deals, date, amount } = props;

  return (
    <tr>
      <td className="show992">{id}</td>
      <td className="show576">
        {FormatterUtil.getLocaleUTCDateString(new Date(date))}
      </td>
      <td>{sellerName}</td>
      <td className="show992">{visited}</td>
      <td className="show992">{deals}</td>
      <td>R$ {amount.toFixed(2)}</td>
      <td>
        <div className="dsmeta-red-btn-container">
          <button className="dsmeta-red-btn">
            <img src={notificateIcon} alt="Notificar" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SalesTableBodyRow;
