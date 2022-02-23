import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";

export const IconVerified = styled(VerifiedIcon)`
  color: #b0b2ff;
  transition: 200ms;

  @media screen and (max-width: 1920px) {
    height: 18px;
  }
  @media screen and (max-width: 1366px) {
    height: 16px;
  }
  @media screen and (max-width: 480px) {
    height: 14px;
  }
`;

export const CardWrapper = styled.div`
  .content_type {
    color: #b0b2ff;
  }

  @media screen and (max-width: 1920px) {
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .description {
      font-size: 16px;
    }
    .content_type {
      font-size: 14px;
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
    .content_type {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .description {
      font-size: 12px;
    }
    .content_type {
      font-size: 12px;
    }
  }
`;
