import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

export const TextArea = styled.textarea`
  width: 70%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Result = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;
