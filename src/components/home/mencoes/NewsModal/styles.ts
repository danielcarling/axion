import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalContainer = styled(Modal)``;

export const Content = styled.main`
  padding: 1rem 1.5rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main``;

export const NewNameAndSentiment = styled.div`
  width: 80%;
  margin: 3.5rem auto 0;
`;

export const ScoreChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    font-size: 1.25rem;
  }
`;

export const NewContent = styled.article`
  font-size: 1.1rem;
  max-height: 8rem;
  text-align: justify;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 4rem auto 0;

  button {
    width: 14.5rem;
    height: 3.5rem;
    border-radius: 5px;
    border: 0;
    background-color: #0d123c;
    color: #fff;
    font-weight: 700;
    transition: 0.2s;

    &:hover {
      background-color: #141C5E;
    }
  }
`;
