/* eslint-disable react/prop-types */
import React from "react";
import ReactToPrint from "react-to-print";
import "./print.css";
import CartState from "./cartState";
import Image from "./shoplogo.png";

class ComponentToPrint extends React.Component {
  static contextType = CartState;
  render() {
    const {
      cart,
      total,
      discount,
      customerName,
      taxName,
      taxValue
    } = this.props;
    const getCustomerName = () => {
      if (customerName && typeof customerName === "object") {
        return customerName.name;
      } else if (customerName && typeof customerName === "string") {
        return customerName;
      }
      return "";
    };

    const getTotalAfterDiscount = () => {
      const dis = Number(discount);
      const tot = Number(total);
      if (dis === 0) {
        return total;
      }

      if (
        !isNaN(dis) &&
        !isNaN(tot) &&
        typeof dis === "number" &&
        typeof tot === "number"
      ) {
        return tot - dis;
      } else if (!isNaN(tot)) {
        return tot;
      }
      return 0;
    };

    const getTotalAfterTax = () => {
      if (getTotalAfterDiscount() && taxValue) {
        return ((taxValue / 100) * getTotalAfterDiscount()).toFixed();
      }
      return 0;
    };

    const getTotalPlusTax = () => {
      const tot = Number(total);
      if (taxName && taxValue && getTotalAfterTax() && !isNaN(tot)) {
        return getTotalAfterDiscount() + Number(getTotalAfterTax());
      }
      return getTotalAfterDiscount();
    };
    return (
      <div className="invoice-box">
        <img
          alt="profile"
          src={Image}
          style={{ width: "100%", maxWidth: "300px", marginTop: "-100px" }}
        />
        <table cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr className="top">
              <td colSpan={2}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {getCustomerName() && `Customer : ${getCustomerName()}`}
                        <br />
                        {`Date: ${new Date().toDateString()}`}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="information">
              <td colSpan={2}></td>
            </tr>
            <tr className="heading">
              <td>Item</td>
              <td>Rate</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
            {cart &&
              cart.map(item => (
                <tr className="item" key={item.name}>
                  <td className="items-detail">{item.name}</td>
                  <td className="price-detail">{item.sale_price}</td>
                  <td className="price-detail">{item.quantity}</td>
                  <td className="price-detail">
                    {item.quantity * item.sale_price}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="balance">
          <tr>
            <th>
              <span contentEditable>Total</span>
            </th>
            <td style={{ textAlign: "left" }}>
              <span data-prefix>Rs </span>
              <span>{total}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span contentEditable>Discount</span>
            </th>
            <td style={{ textAlign: "left" }}>
              <span data-prefix>Rs </span>
              <span contentEditable>{discount ? discount : 0}</span>
            </td>
          </tr>
          {taxName && getTotalAfterTax() && (
            <tr>
              <th>
                <span contentEditable>{taxName}</span>
              </th>
              <td style={{ textAlign: "left" }}>
                <span data-prefix>Rs </span>
                <span contentEditable>{getTotalAfterTax()}</span>
              </td>
            </tr>
          )}
          <tr>
            <th>
              <span contentEditable>Amount Paid</span>
            </th>
            <td style={{ textAlign: "left" }}>
              <span data-prefix>Rs </span>
              <span>
                {taxName && taxValue
                  ? `${getTotalPlusTax()}`
                  : `${getTotalAfterDiscount()}`}
              </span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    const { ButtonProp } = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a href="#">
              <ButtonProp />
            </a>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          ref={el => (this.componentRef = el)}
          {...this.props}
        />
      </div>
    );
  }
}

export default Example;
