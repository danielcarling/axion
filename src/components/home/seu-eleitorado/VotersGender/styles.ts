import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 2rem 0 0 1.4rem;
`;

export const CellContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem 2rem 2rem 0;

  strong {
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 0;

    strong {
      margin-top: 0.25rem;
      font-size: 1rem;
    }
  }
`;

export const CellInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.7rem;

  strong {
    font-size: 0.875rem;
  }
`;
