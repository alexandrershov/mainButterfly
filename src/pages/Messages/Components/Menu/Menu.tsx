import React, { FC, useEffect, useState } from "react";
import { MyAcc } from "../MyAcc/MyAcc";
import {
  StyledWrapper,
  StyledContact,
  StyledContactIcon,
  StyledMenu,
  StyledMenuBtn,
  StyledWrapperContact,
} from "./Menu.styled";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../../../store/slices/userSlice";

export const Menu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const [users, setUsers] = useState<any | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  const auth = getAuth();
  const userEmail = auth.currentUser?.email;
  const db = getDatabase();
  const postListRef = ref(db, 'users');

  useEffect(() => {
    if (users) return;
    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      setUsers(data)
      setLoading(false);
    });
  }, [postListRef, users]);

  const onOpenMessages = () => {
    setOpen(true);
  };

  const onOpenMyAcc = () => {
    setOpen(false);
  };

  const renderUsers = users
   && Object.keys(users).map( (key, index) => 
    userEmail !== users[key].email && <StyledContact key={index} onClick={() => dispatch(setCurrentChat(users[key].id))}>{users[key].email}</StyledContact>
   );
  return (
    <StyledWrapper>
      <StyledMenu>
        <StyledMenuBtn onClick={onOpenMyAcc}>My acc</StyledMenuBtn>
        <StyledMenuBtn onClick={onOpenMessages}>Messages</StyledMenuBtn>
      </StyledMenu>

      {!isOpen && <MyAcc />}


      {isOpen && (
        <>
        {isLoading ? (
          <>Loading</>
        ) : renderUsers}
        </>
      )}
    </StyledWrapper>
  );
};
