import Herosection from "../components/Herosection";
import Layout from "../components/Layout";
import Vision from "../components/Vision";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <>
      <Layout>
        <Herosection />
        <Welcome />
        <Vision />
      </Layout>
    </>
  );
}
