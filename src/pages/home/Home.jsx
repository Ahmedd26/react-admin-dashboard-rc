import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import Table from "../../components/table/Table";
export default function Home() {
  return (
    <div className="home">
      <div className="widgets">
        <Widget type="users" />
        <Widget type="funds" />
        <Widget type="reports" />
      </div>
      <div className="charts">
        <Featured />
        <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
      </div>
      <div className="list-container">
        <div className="list-title">Latest Transaction</div>
        <Table />
      </div>
    </div>
  );
}
