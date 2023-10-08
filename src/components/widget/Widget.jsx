import "./widget.scss";
import {
  PersonAddAlt,
  CurrencyExchange,
  Flag,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  // Temporary
  // const amount = 100;
  const formatAmount = (amount) => {
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toString();
  };
  const diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonAddAlt className="icon" />,
        amount: 1350,
      };
      break;
    case "funds":
      data = {
        title: "funds",
        isMoney: true,
        link: "View all transactions",
        icon: <CurrencyExchange className="icon" />,
        amount: 20000,
      };
      break;
    case "reports":
      data = {
        title: "Reports",
        isMoney: false,
        link: "View all reports",
        icon: <Flag className="icon" />,
        amount: -15,
      };
      break;
    default:
      break;
  }

  const percentageClass = data.amount >= 0 ? "positive" : "negative";

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {formatAmount(data.amount)}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${percentageClass}`}>
          {data.amount >= 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
