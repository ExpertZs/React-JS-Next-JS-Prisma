import Menu from "../components/menu";

const HomePage = () => {
  return (
    <div
      style={{
        display: "Grid",
        minHeight: "100vh",
        minWidth: "w-full",
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Menu />
      </div>

      <h1>Please click Income for entering income</h1>
      <h1>Please click Expense for entering expense</h1>

      {/* Add your Home transaction form here */}
    </div>
  );
};

export default HomePage;
