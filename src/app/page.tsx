import { About } from "@/components/sections/About";
import { Challenges } from "@/components/sections/Challenges";
import { Committee } from "@/components/sections/Committee";
import { Hero } from "@/components/sections/Hero";
import { PastEdition } from "@/components/sections/PastEdition";
import { PracticalInfo } from "@/components/sections/PracticalInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Committee />
      <Challenges />
      <PracticalInfo />
      <PastEdition />
    </>
  );
}
