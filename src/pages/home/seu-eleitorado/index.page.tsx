import { Sidebar } from "@/components/Global/Sidebar";
import { HeaderComponent } from "@/components/home/Header";
import { SeuEleitoradoCards } from "@/components/home/seu-eleitorado/Cards";
import { useRouter } from "next/router";
import {
  AgeGroupLegend,
  ChartContainer,
  ChartsContainer,
  Content,
  Main,
} from "./styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { AgeGroupByGender } from "@/components/home/seu-eleitorado/AgeGroupByGender";
import { VotersInfo } from "@/components/home/seu-eleitorado/VoterInfo";
import { VotersInfoSelect } from "@/components/home/seu-eleitorado/VoterInfo/VotersInfoSelect";
import { VotersByGender } from "@/components/home/midias-sociais/TotalVotersByGender";
import RootLayout from "@/components/Layout";
import gsap from "gsap";

export default function SeuEleitorado() {
  const router = useRouter();

  const [selectedVoterOption, setSelectedVoterOption] = useState("education");
  const [selectedVoterLabels, setSelectedVoterLabels] = useState([""]);

  useEffect(() => {
    if (selectedVoterOption === "age") {
      setSelectedVoterLabels([
        "16-18",
        "19-29",
        "30-40",
        "41-50",
        "51-60",
        "61-70",
        "+70",
      ]);
    } else if (selectedVoterOption === "gender") {
      setSelectedVoterLabels(["Homens", "Mulheres"]);
    } else if (selectedVoterOption === "education") {
      setSelectedVoterLabels([
        "Ensino Médio Incompleto",
        "Não Informado",
        "Ensino Médio Completo",
        "Ensino Fundamental Completo",
        "Analfabeto",
        "Sabe Ler e Escrever",
        "Ensino Fundamental Incompleto",
      ]);
    }
  }, [selectedVoterOption]);

  const selectVotersValue = ["education", "gender", "age"];

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home/seu-eleitorado");
    }
  }, []);

  const groupGenderData = [
    {
      name: "16-18",
      Homens: 590,
      Mulheres: 800,
    },
    {
      name: "19-29",
      Homens: 868,
      Mulheres: 967,
    },
    {
      name: "30-40",
      Homens: 1397,
      Mulheres: 1098,
    },
    {
      name: "41-50",
      Homens: 1480,
      Mulheres: 1200,
    },
    {
      name: "51-60",
      Homens: 1520,
      Mulheres: 1108,
    },
    {
      name: "61-70",
      Homens: 1400,
      Mulheres: 680,
    },
    {
      name: "+70",
      Homens: 250,
      Mulheres: 500,
    },
  ];

  const total = {
    homens: groupGenderData.reduce((acc, curr) => acc + curr.Homens, 0),
    mulheres: groupGenderData.reduce((acc, curr) => acc + curr.Mulheres, 0),
  };

  const groupGenderConf = [
    {
      dataKey: "Homens",
      color: "#22C24F",
      total: total.homens,
    },
    {
      dataKey: "Mulheres",
      color: "#E73F3F",
      total: total.mulheres,
    },
  ];

  const votersInfoData = {
    education: [100, 100, 100, 100, 100, 100, 100],
    gender: [100, 250],
    age: [100, 100, 100, 100, 100, 100, 100],
  };

  const [selectedData, setSelectedData] = useState<any>([]);

  useEffect(() => {
    if (selectedVoterOption === "education") {
      setSelectedData(votersInfoData.education);
    } else if (selectedVoterOption === "gender") {
      setSelectedData(votersInfoData.gender);
    } else if (selectedVoterOption === "age") {
      setSelectedData(votersInfoData.age);
    }
  }, [selectedVoterOption]);

  const main = useRef(null);
  const content = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-114.5%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };

  return (
    <main ref={main}>
      <RootLayout>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <HeaderComponent fadeOut={() => fadeOut()} />
          <Main>
            <SeuEleitoradoCards />
            <ChartsContainer>
              <ChartContainer>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TitleWithBar
                    content="Faixa etária da População por gênero"
                    barColor="#2F5CFC"
                    width={"16rem"}
                  />
                  <AgeGroupLegend>
                    {groupGenderConf.map((item) => {
                      return (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div
                            key={item.dataKey}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <div
                              style={{
                                width: "0.625rem",
                                height: "0.625rem",
                                borderRadius: "50%",
                                backgroundColor: item.color,
                              }}
                            />
                            <strong style={{ lineHeight: 1 }}>
                              {item.total}
                            </strong>
                          </div>
                          <span
                            style={{ fontSize: "0.625rem", color: "#8790AB" }}
                          >
                            {item.dataKey}
                          </span>
                        </div>
                      );
                    })}
                  </AgeGroupLegend>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    width: "auto",
                    padding: "3rem 1rem 0 0",
                  }}
                >
                  <div style={{ width: "100%", height: "25rem" }}>
                    <AgeGroupByGender
                      data={groupGenderData}
                      conf={groupGenderConf}
                    />
                  </div>
                </div>
              </ChartContainer>
              <ChartContainer>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TitleWithBar
                    barColor="#2F5CFC"
                    content={
                      selectedVoterOption === "education"
                        ? "Escolaridade dos Eleitores"
                        : "Idade dos Eleitores"
                    }
                  />
                  <VotersInfoSelect
                    selectedValue={selectedVoterOption}
                    setSelectedValue={setSelectedVoterOption}
                    values={selectVotersValue}
                  />
                </div>
                <VotersInfo
                  chartData={selectedData}
                  labels={selectedVoterLabels}
                />
              </ChartContainer>
              <ChartContainer></ChartContainer>
              <ChartContainer>
                <TitleWithBar
                  content="Gêneros dos Eleitores"
                  barColor="#2F5CFC"
                />
                <div
                  style={{ width: "100%", height: "500px", paddingTop: "7rem" }}
                >
                  <VotersByGender />
                </div>
              </ChartContainer>
            </ChartsContainer>
          </Main>
        </Content>
      </RootLayout>
    </main>
  );
}
