import useGlobalStates from "../../contexts/globalStates/hook/useGlobalStates";
import * as styled from "./home.style";

const Home = () => {
  const { searchedState } = useGlobalStates();

  return (
    <styled.Spin>
      <span>{searchedState.searched || "Essa é a página inicial"}</span>
      <img
        alt=""
        src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRWTVjfUO2u0p2DAgQ7Jl1ovrWpJDhs0uHPdHMSvo_lw4Talqf2Y-OClTwIu8Qi3L_Apon02wDhrkA-YW70JIGTdAQ7fxiOrX6ALJHO/330x192"
      />
    </styled.Spin>
  );
};

export default Home;
