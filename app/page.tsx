import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Footer from "@/components/section/footer";
import Header from "@/components/section/header";
import Hero from "@/components/section/hero";
import Howitworks from "@/components/section/howitworks";
import Projects from "@/components/section/projects";
import Reviews from "@/components/section/reviews";
import Services from "@/components/section/services";
import { client } from "@/sanity/lib/client";

import { groq } from "next-sanity";

const query = groq`
  *[_type=="review"] {
    ...,
    "image": image.asset->url,
  } 
`;

const categoryQuery = groq`
  *[_type=="category"] {
    ...,
  } 
`;

const offerQuery = groq`
  *[_type=="offer"] {
    ...,
    "image": image.asset->url,
  } 
`;

const worksQuery = groq`
  *[_type=="works"] {
    ...,
    "image": image.asset->url,
  } 
`;
const fetchReviews = async () => {
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const fetchCategories = async () => {
  try {
    const posts = await client.fetch(categoryQuery);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const fetchOffer = async () => {
  try {
    const posts = await client.fetch(offerQuery);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const fetchWorks = async () => {
  try {
    const posts = await client.fetch(worksQuery);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

export default async function Home() {
  const reviews = await fetchReviews();
  const services = await fetchCategories();
  const offers = await fetchOffer();
  const works = await fetchWorks();

  return (
    <>
      <Header />
      <Hero />

      <section id="services">
        <Services items={services} />
      </section>
      <section id="about">
        <About />
      </section>
      <Howitworks items={offers} />
      <Projects works={works} />
      <Reviews items={reviews} />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
