import Image from "next/image";
import {Header} from "./Componets/Header";
import { SectionH1 } from "./Sections/SectionH1";
import { SectionH2 } from "./Sections/SectionH2";
import { SectionH3 } from "./Sections/SectionH3";
import { Footer } from "./Componets/Footer";
import { SectionH4 } from "./Sections/SectionH4";
import { SectionH5 } from "./Sections/SectionH5";

export default function Home() {
  return (
   <>
   <Header/>
   <SectionH1/>
   <SectionH3/>
   <SectionH2/>
   <SectionH4/>
   <SectionH5/>
   <Footer/>
   </>
  );
}
