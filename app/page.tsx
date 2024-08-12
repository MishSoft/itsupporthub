import Image from "next/image";
import Hero from "../components/Hero";
import SearchBar from "@/components/SearchBar";
import FeatureHighlights from "@/components/FeatureHighlights";
import CTAButton from "@/components/CTAButton";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 mb-10 ">
      <Hero />
      <SearchBar />
      <FeatureHighlights />
      <NewsletterSignup />
    </main>
  );
}
