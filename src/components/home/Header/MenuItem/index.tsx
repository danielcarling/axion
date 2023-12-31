import { useRouter } from "next/router";
import { MenuItem } from "./styles";

interface ItemProps {
  imgSrc: string;
  href: string;
  name: string;
  fadeOut: any;
}

export function MenuItemComponent({ imgSrc, href, name, fadeOut }: ItemProps) {
  const router = useRouter();

  const isActive = `/${router.asPath.split("/")[2]}` === href;

  const navigate = () => {
    fadeOut();
    router.push(`/home/${href}`);
  };

  return (
    <MenuItem active={isActive} imgSrc={imgSrc} onClick={navigate}>
      <div className="title">
        <strong>{name}</strong>
      </div>

      <img
        src="/sidebar/axion-white.svg"
        alt=""
        style={{
          position: "absolute",
          bottom: "13px",
          width: "4.7rem",
        }}
      />
    </MenuItem>
  );
}
