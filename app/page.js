import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import CodeHeading from "@/components/CodeHeading";
import Code from "@/components/Code";
import CodeHeading2 from "@/components/CodeHeading2";
import FullCode from "@/components/FullCode";
import Footer from "@/components/Footer";
import "./globals.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Workflow />
      <CodeHeading />
      <Code />
      <CodeHeading2 />
      <FullCode />
      <Footer />
    </>
  );
}
