import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAccount } from "../features/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.data);
  const loggedUser = useAppSelector((state) => state.user);
  const user = accounts.find((acc) => acc.accountNo === loggedUser.accountNo);
  const { username, movements } = user || {};
  const totalBalance = movements?.reduce((acc, mov) => acc + mov.amount, 0);
  const todaysDate = new Date().toDateString();

  function logout() {
    dispatch(
      setAccount({
        accountNo: "",
        username: "",
        movements: [],
        interestRate: 0,
        password: "",
      })
    );
    navigate("/");
  }

  return (
    <nav className="xl:max-w-screen lg:w-5/6 lg:mx-auto w-full my-2 bg-gray px-8 py-4 rounded-lg">
      <div className="flex items-center text-3xl font-bold">
        <h2 className="">Welcome Back {username}</h2>
        <button
          className="ml-auto bg-white p-2 rounded-full hover:text-red"
          onClick={logout}
        >
          <AiOutlineLogout />
        </button>
      </div>

      <div className="flex items-center mt-4">
        <div>
          <h3 className="text-2xl">Current Balance</h3>
          <p className="text-md">As of {todaysDate}</p>
        </div>
        <h1 className="text-6xl ml-auto">{totalBalance}</h1>
      </div>
    </nav>
  );
}

export default Header;
