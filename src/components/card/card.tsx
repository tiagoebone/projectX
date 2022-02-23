import Grid from "@mui/material/Grid";
// import useElementSize from "../../hooks/useElementSize";
import { CardWrapper, IconVerified } from "./card.style";

const Card = () => {
  // const [cardRef, cardRefSize] = useElementSize();
  // const [descriptionRef, descriptionRefSize] = useElementSize();

  return (
    <div
      style={{
        minHeight: "96px",
        backgroundColor: "#fff",
        borderRadius: "6px",
        boxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
      }}
    >
      <Grid container style={{ height: "100%", padding: "16px" }}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              width: "200px",
              borderRadius: "6px",
              height: "auto",
              maxHeight: "100%",
            }}
            src="https://i.redd.it/zipsd227ktx61.jpg"
            alt=""
          />
          <CardWrapper
            style={{
              marginLeft: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>
                <span className="title">
                  Which of this stadiums are the most beautiful in the world?
                </span>
              </div>
              <div style={{ marginTop: "8px" }}>
                <span className="description">
                  Football is not only an aggressive sport. It can be beautiful.
                  Design of the football arena can either boost the mood of
                  football players. So, go through and vote for the most
                  beautiful one.
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "4px",
              }}
            >
              <IconVerified />
              <span
                style={{
                  fontSize: "14px",
                  lineBreak: "auto",
                  color: "#b0b2ff",
                }}
              >
                Official content
              </span>
            </div>
          </CardWrapper>
        </div>
      </Grid>
    </div>
  );
};

export default Card;
