import { useSearchParams } from "react-router-dom";
import { HomeWrapper } from "./home.style";

const Home = () => {
  const [searchParams] = useSearchParams();

  return (
    <HomeWrapper>
      <span>This topic is about {searchParams.get("topic")}</span>
    </HomeWrapper>
  );
};

export default Home;
