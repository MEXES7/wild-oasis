import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/Button";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default LogOut;
