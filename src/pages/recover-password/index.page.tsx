import { Footer } from "@/components/Global/Footer";
import Theme from "@/styles/themes";
import {
  ArtSection,
  AxionLogo,
  Container,
  FormGroup,
  Guide,
  LoginForm,
  LoginFormHeader,
  Main,
  RecoveryButton,
} from "./styles";
import { useRouter } from "next/router";

export default function RecoverPassword() {
  const router = useRouter();
  return (
    <Container>
      <Main>
        <LoginForm>
          <AxionLogo>
            <img src="/axionLogo.svg" alt="" />
          </AxionLogo>
          <LoginFormHeader>
            <strong>Esqueceu sua senha?</strong>
            <span>Digite seu email e receba um novo acesso por email.</span>
          </LoginFormHeader>

          <FormGroup>
            <label htmlFor="email">Digite o e-mail cadastrado</label>
            <input type="email" />
          </FormGroup>

          <RecoveryButton>Recuperar Senha</RecoveryButton>

          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Lembrou a senha?{" "}
            <span
              onClick={() => {
                router.push("/login");
              }}
              style={{
                textDecoration: "none",
                color: Theme.color.brand_blue,
                cursor: "pointer",
              }}
            >
              Faça o login agora.
            </span>
          </p>

          <Guide>
            <strong>Veja o passo a passo:</strong>
            <span>
              O vídeo abaixo vai te ajudar a resolver em poucos minutos.
            </span>
          </Guide>
        </LoginForm>
        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
