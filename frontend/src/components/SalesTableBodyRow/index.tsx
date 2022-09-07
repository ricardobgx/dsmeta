import React from "react";
import notificateIcon from "../../assets/images/notificate-icon.svg";

const SalesTableBodyRow: React.FC<SalesTableBodyRowProps> = (props): JSX.Element => {
  const { id, date, seller, visits, sales, total } = props;

  return (
    <tr>
      <td className="show992">{id}</td>
      <td className="show576">{date.toLocaleDateString()}</td>
      <td>{seller}</td>
      <td className="show992">{visits}</td>
      <td className="show992">{sales}</td>
      <td>R$ {total.toFixed(2)}</td>
      <td>
        <div className="dsmeta-red-btn-container">
          <div className="dsmeta-red-btn">
            <img src={notificateIcon} alt="Notificar" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SalesTableBodyRow;
