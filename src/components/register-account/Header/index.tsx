import { useRouter } from "next/router";
import { RegisterHeader } from "./styles";

interface Props {
  type?: "light" | "dark";
}

export function RegisterAccountHeader({ type = "light" }: Props) {
  const router = useRouter();

  return (
    <RegisterHeader>
      {type === "light" ? (
        <img src="/axionLogo.png" alt="" />
      ) : (
        <img security="/sidebar/axion-white.svg" alt="" />
      )}
      <button onClick={() => router.push("/login")}>
        Já é cliente? Acessar
      </button>
    </RegisterHeader>
  );
}
