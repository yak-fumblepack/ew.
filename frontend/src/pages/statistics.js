import { useLocation } from "react-router-dom";

const StatisticsPage = () => {

  const location = useLocation()
  const res_data = location.state.res_data

  return (
    <h1>{res_data}</h1>
  );
}

export default StatisticsPage;