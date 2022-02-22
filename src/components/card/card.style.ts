import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";

export const IconVerified = styled(VerifiedIcon)`
  color: #b0b2ff;
  transition: 200ms;
  height: 18px;
`;

export const CardWrapper = styled.div`
  @media screen and (max-width: 1920px) {
    .title {
      font-size: 24px;
      font-weight: bold;
    }

    .description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1366px) {
    .title {
      font-size: 20px;
      font-weight: bold;
    }

    .description {
      font-size: 14px;
    }
  }
`;
