const ATMDeposit = ({ onChange }) => {
  return (
    <label>
      Deposit
      <input
        className="bg-light mx-2"
        type="number"
        onChange={onChange}
      ></input>
      <input type="submit"></input>
    </label>
  );
};

const ATMWithdraw = ({ onChange }) => {
  return (
    <label>
      Withdraw
      <input
        className="bg-light mx-2"
        type="number"
        onChange={onChange}
      ></input>
      <input type="submit"></input>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  var deposit = 0;
  var withdraw = 0;
  const handleDeposit = (event) => {
    // let val = event.target.value;
    // val = Number(val);
    // if (val < 0) return;

    let val = 0;
    try {
      val = validateInput(event.target.value);
    } catch (error) {
      return;
    }
    console.log(`handleDeposit: ${val}`);
    deposit = val;
  };
  const handleWithdraw = (event) => {
    let val = 0;
    try {
      val = validateInput(event.target.value);
    } catch (error) {
      return;
    }

    console.log(`handleWithdraw: ${val}`);
    withdraw = val;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let newTotal = accountState + deposit - withdraw;
    if (newTotal < 0) {
      alert("cannot have a negative account balance");
      return;
    }
    deposit = withdraw = 0;
    // event.target.value = 0;
    setAccountState(newTotal);
  };
  const validateInput = (value) => {
    let val = Number(value);
    if (val < 0) {
      alert("please enter a positive number");
      throw new Error("value cannot be negative");
    }
    return val;
  };

  return (
    <>
      <h2>Account Balance: ${accountState}</h2>
      <form onSubmit={handleSubmit}>
        <ATMDeposit onChange={handleDeposit}>Deposit</ATMDeposit>
      </form>
      <form onSubmit={handleSubmit}>
        <ATMWithdraw onChange={handleWithdraw}>Deposit</ATMWithdraw>
      </form>
    </>
  );
};

ReactDOM.render(<Account />, document.querySelector(`#root`));
