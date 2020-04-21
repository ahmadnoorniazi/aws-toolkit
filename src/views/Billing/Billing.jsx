import React, { useState, useContext, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import "./Billing.css";
import BillList from "./BillList";
import { getRecord } from "../../utils/index";
import { MyContext } from "../../stateContext";
import SearchInput from "./SearchInput";
import ScrollContainer from "./ScrollContainer";
import BillDetailTable from "./BillDetailTable";
import { Provider } from "./cartState";
import IconLabelButtons from "./SaveButtonList";

const useStyles = makeStyles(theme => ({
  space: {
    marginRight: "10px"
  },
  input: {
    width: "100%",
    marginBottom: "10px"
  },
  left: {
    float: "left",
    width: "60%"
  },
  right: {
    float: "left",
    width: "40%"
  },
  leftInner: {
    float: "left",
    width: "10%",
    height: "100%",
    paddingBottom: "100%",
    marginBottom: "-100%",
    background: "white"
  },
  rightInner: {
    float: "right",
    width: "100%",
    paddingBottom: "100%",
    marginBottom: "-100%"
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  inputs: {
    marginTop: -24,
    marginLeft: 47
  },
  main: {
    display: "flex"
  },
  root: {
    overflow: "hidden",
    marginTop: "10px"
  },
  active: {
    background: "#4CAF50"
  },
  itemText: {
    fontSize: "20px",
    fontWeight: "bold",
    maxWidth: "200px",
    overflow: "hidden",
    "text-overflow": "ellipsis"
  }
}));

function Billing() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [isInputClean, setIsInputClean] = useState(true);
  const { products, getProductData } = useContext(MyContext);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName] = React.useState("");
  const [taxName, setTaxName] = React.useState("");
  const [taxValue, setTaxValue] = React.useState("");

  const [width, setWidth] = useState(500);
  //eslint-disable-next-line
  useEffect(() => {
    getProductData();
    if (window.screen.width >= 992) {
      setWidth(450);
    }
  }, []);

  useEffect(() => {
    const total =
      cart &&
      cart.length > 0 &&
      cart.reduce(
        (acc, dec) => acc + Number(dec.sale_price) * Number(dec.quantity),
        0
      );

    if (typeof total === "number") {
      setTotal(total);
    }
  }, [cart]);

  const handleChange = e => {
    setInput(e.target.value);
    if (e.target.value) {
      setIsInputClean(false);
      getResult(e.target.value);
    } else {
      setIsInputClean(true);
    }
  };

  const getDefaultPrice = name => {
    return products.find(item => item.name === name);
  };

  const addItemtoCart = item => {
    const { name, sale_price, actual_price, _id } = item;
    const getIds = cart.map(item => item.name);
    if (getIds.includes(name)) {
      addItemCount(item, cart, setCart);
    } else {
      setCart([
        ...cart,
        {
          _id,
          name,
          actual_price,
          sale_price: Number(sale_price),
          quantity: 1,
          description: "",
          total_price: Number(sale_price)
        }
      ]);
    }
  };

  const addItemCount = (row, cart, setCart, isDec) => {
    const { name } = row;
    const getIds = cart.map(item => item.name);
    if (getIds.includes(name)) {
      const updateCart = cart.map(item => {
        if (item.name === name) {
          if (isDec) {
            item.quantity--;
          } else {
            item.quantity++;
          }
          const getData = getDefaultPrice(name);
          if (
            getData &&
            typeof Number(getData.sale_price) === "number" &&
            typeof Number(item.sale_price) === "number"
          ) {
            item["total_price"] =
              Number(item.total_price) + Number(getData.sale_price);
          }
          return item;
        }
        return item;
      });
      setCart([...updateCart]);
    }
  };

  const onKeyEnter = (e, item) => {
    e.preventDefault();
    addItemtoCart(item);
  };

  //   const handleItemCount = (count, row) => {
  //     const { name, sale_price } = row
  //     console.log('cartttttttt', cart)
  //     const getIds = cart.map(item => item.name)
  //     console.log('getidsssssssss', getIds)
  //     console.log('conditionnnn', getIds.includes(name))
  //     if (getIds.includes(name)) {
  //       console.log('notttttttttttt')
  //       const updateCart = cart.map(item => {
  //         if (item.name === name) {
  //           console.log('wholeeeee calling')

  //           item.quantity = count
  //           const getData = getDefaultPrice(name)
  //           if (getData && typeof getDefaultPrice(name).sale_price === 'number'){
  //             console.log('typeeee cond calling')
  //             item.sale_price += getData.sale_price

  //           }
  //           return item
  //         }
  //         return item
  //       })
  //       console.log('updateCart updateCart', updateCart)
  //       setCart([...updateCart])
  //   }
  // }

  const getResult = async input => {
    const result = await getRecord(`product/filter/${input}`);
    setData(result.data);
  };

  const classes = useStyles();
  const showProduct =
    products && Array.isArray(products) && products.length > 0 && isInputClean
      ? products
      : data;
  return (
    <Provider
      value={{
        cart,
        setCart,
        addItemCount,
        discount,
        setDiscount,
        errorMessage,
        setErrorMessage,
        total,
        setTotal,
        customerName,
        setCustomerName,
        taxName,
        taxValue,
        setTaxName,
        setTaxValue
      }}
    >
      <React.Fragment>
        <div id="top">
          <div className={classes.left}>
            <SearchInput value={input} handleFilter={handleChange} />
            <div className={classes.space}>
              <div className={classes.root}>
                <div className={classes.rightInner}>
                  <ScrollContainer setPosition={() => {}}>
                    <div className="grid-container">
                      {showProduct.length > 0 ? (
                        showProduct.map(item => (
                          <div
                            key={item.name}
                            onKeyPress={e => onKeyEnter(e, item)}
                            tabIndex={0}
                            onClick={() => addItemtoCart(item)}
                            style={{ width: "200px", position: "relative" }}
                          >
                            <div className={classes.itemText}>{item.name}</div>
                            <div className="second-under">
                              <p>Rs {item.sale_price}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div>No Data</div>
                      )}
                    </div>
                  </ScrollContainer>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div id="topTable">
              <BillList
                billData={cart}
                specificWidth={width}
                getCountItem={() => {}}
              />
            </div>
            <div id="bottomTable">
              <BillDetailTable />
            </div>
          </div>
        </div>
        <div id="bottom">
          <IconLabelButtons />
        </div>
      </React.Fragment>
    </Provider>
  );
}
export default Billing;
