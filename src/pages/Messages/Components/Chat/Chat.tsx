import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  StyledWrapper,
  StyledContainerWriter,
  StyledContainerMessages,
  StyledInputChat,
  StyledWrapperForm,
  StyledMessage,
  StyledWrapperMessage
} from "./Chat.styled";
import { Button, Form } from "antd";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { useSelector } from "react-redux";

export const Chat: FC = () => {
  const [mainMessage, setMessage] = useState<any | null>(null);
  const [text, setText] = useState<string | null>(null);

  const { currentChat } = useSelector<any, any>(state => state.user);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const dataBase = getFirestore()

  // Прокручиваем скролл вниз при монтировании компонента
  const scrollMessage = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }

  // функция на получения сообщений
  const getMessages = useCallback(async (userId: string | undefined) => {
    try {
      const messagesCollection = collection(dataBase, 'messages');
      const q = query(
        messagesCollection,
        where('userId', '==', userId),
      );
  
      const querySnapshot = await getDocs(q);
      const sentMessages = querySnapshot.docs.map(doc => doc.data());
  
      const qReceived = query(
        messagesCollection,
        where('userCountId', '==', userId),
      );
  
      const receivedQuerySnapshot = await getDocs(qReceived);
      const receivedMessages = receivedQuerySnapshot.docs.map(doc => doc.data());
  
      const allMessages = [...sentMessages, ...receivedMessages].sort((a, b) => a.timestamp.seconds - b.timestamp.seconds);;
      setMessage(allMessages);
    } catch (error) {
      console.error('Error getting messages:', error);
    }
  }, [dataBase])

  // отправка сообщения
  const onSendMessage = async (text: any) => {
    try {
      const messagesCollection = collection(dataBase, 'messages');
      await addDoc(messagesCollection, {
        userId,
        userCountId: currentChat,
        text,
        timestamp: new Date(),
      });
      console.log('Message sent successfully');
      getMessages(userId)
    } catch (error) {
      console.error('Error sending message:');
    }
  }

  // получение сообщений
  useEffect(() => {
    getMessages(userId)
  }, [userId, dataBase, getMessages])

  const onClickSubmit = (e: any) => {
    e.preventDefault();
    let resultText;
    if (text != null && typeof text !== "undefined") {
      resultText = text.trim();
   }
   
   if (!resultText) { 
      return;
   }
    onSendMessage(text);
    setText("");
  };

  const renderMEssages = mainMessage && mainMessage.map((val: any, index: number) => {
    return ( val.userId === currentChat || ( val.userId === userId && val.userCountId === currentChat) ) &&
    <StyledWrapperMessage key={index} $user={val.userId === userId}><StyledMessage>{val.text}</StyledMessage></StyledWrapperMessage>
  })

  return (
    <StyledWrapper>
      <StyledContainerMessages ref={messagesContainerRef}>
      {renderMEssages}
      </StyledContainerMessages>
      <StyledContainerWriter>
        <Form>
          <StyledWrapperForm>
            <StyledInputChat
              type="text"
              value={text || ''}
              onChange={(e) => setText(e.target.value)}
            />
            <Button style={{width: "auto", height: "60px"}} type="primary" htmlType="submit" onClick={onClickSubmit}>
              Send
            </Button>
          </StyledWrapperForm>
        </Form>
      </StyledContainerWriter>
    </StyledWrapper>
  );
};
