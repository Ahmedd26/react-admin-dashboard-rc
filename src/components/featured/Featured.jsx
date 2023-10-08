import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const numbers = [8700, -12400, 7500];
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Revenues</h3>
        <TrendingUpIcon />
      </div>
      <div className="middle">
        <CircularProgressbar
          value={70}
          text="70%"
          strokeWidth={5}
          className="circularProgress"
        />
        <h3>Total sales made today</h3>
        <span>$420</span>
        <p>
          Previous transaction processing. Last payments may not be included
        </p>
      </div>
      <div class="bottom">
        <div className="item">
          <span className="title">
            <h1>Subs</h1>
            <span className="arrow">
              {numbers[0] >= 0 ? (
                <KeyboardArrowUpIcon
                  fontSize="small"
                  className="positiveArrow"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  className="negativeArrow"
                />
              )}
            </span>
          </span>
          <h1 className="numberValue">${Math.abs(numbers[0]).toFixed(1)}K</h1>
        </div>
        <div className="item">
          <span className="title">
            <h1>Promotions</h1>
            <span className="arrow">
              {numbers[1] >= 0 ? (
                <KeyboardArrowUpIcon
                  fontSize="small"
                  className="positiveArrow"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  className="negativeArrow"
                />
              )}
            </span>
          </span>
          <h1 className="numberValue">${Math.abs(numbers[1]).toFixed(1)}K</h1>
        </div>
        <div className="item">
          <span className="title">
            <h1>Challenges</h1>
            <span className="arrow">
              {numbers[2] >= 0 ? (
                <KeyboardArrowUpIcon
                  fontSize="small"
                  className="positiveArrow"
                />
              ) : (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  className="negativeArrow"
                />
              )}
            </span>
          </span>
          <h1 className="numberValue">${Math.abs(numbers[2]).toFixed(1)}K</h1>
        </div>
      </div>
    </div>
  );
};
export default Featured;
