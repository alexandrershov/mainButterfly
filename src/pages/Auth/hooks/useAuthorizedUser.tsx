import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuthorizedUser = () => {
  const { id } = useSelector<any, any>((state) => state.user.data);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setIsLogin(true);
    }
  }, [id]);

  return { isLogin };
};
