import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Profile } from "../../components/Profile";
import "./homepage.sass";

export const Homepage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Profile/>
    </>
  );
};
