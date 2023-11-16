import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Instruction = styled.div`
  background-color: white;
  padding: 1rem 0.75rem;
  border-radius: 48px;
  border: 1px solid #c3c3c3;
  font-weight: bold;
  font-size: 1.1rem;

  img {
    margin-right: 0.3rem;
  }

  @media (max-width: 1320px) {
    margin-right: calc(40vw - 17rem);
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: #232323;
  border-radius: 20px;

  strong {
    color: white;
    font-size: 0.75rem;
  }

  span {
    color: #5c5c5c;
    font-size: 0.5rem;
  }

  img.user {
    width: 2.625rem;
    height: 2.625rem;
    object-fit: cover;
  }

  .arrow {
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.3rem;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  position: relative;
  opacity: ${({ active }) => (active ? "1" : "0.4")};
  cursor: pointer;

  img {
    border-radius: 12px;
  }

  .title {
    position: absolute;
    top: 40%;
    left: 20%;
  }
`;
