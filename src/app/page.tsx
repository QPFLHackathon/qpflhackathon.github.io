import { About } from "@/components/sections/About";
import { Challenges } from "@/components/sections/Challenges";
import { Committee } from "@/components/sections/Committee";
import { Hero } from "@/components/sections/Hero";
import { PastEdition } from "@/components/sections/PastEdition";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { Sponsors } from "@/components/sections/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Committee />
      <Sponsors />
      <Challenges />
      <PracticalInfo />
      <PastEdition />
    </>
  );
}
