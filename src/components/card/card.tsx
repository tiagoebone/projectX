import Grid from "@mui/material/Grid";
import { useWindowSize } from "../../hooks/useWindowSize";
// import useElementSize from "../../hooks/useElementSize";
import { CardWrapper, IconVerified } from "./card.style";

const Card = () => {
  // const [cardRef, cardRefSize] = useElementSize();
  // const [descriptionRef, descriptionRefSize] = useElementSize();
  const size = useWindowSize();

  const width: number = size.width || 1920;

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
          <div
            style={{
              maxWidth: "30%",
              minWidth: "100px",
              borderRadius: "6px",
            }}
          >
            <img
              style={{
                width: "100%",
                borderRadius: "6px",
              }}
              src="https://i.redd.it/zipsd227ktx61.jpg"
              alt=""
            />
          </div>

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
              {width > 480 && (
                <div style={{ marginTop: "8px" }}>
                  <span className="description">
                    Football is not only an aggressive sport. It can be
                    beautiful. Design of the football arena can either boost the
                    mood of football players. So, go through and vote for the
                    most beautiful one.
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "4px",
              }}
            >
              <IconVerified />
              <span className="content_type">Official content</span>
            </div>
          </CardWrapper>
        </div>
      </Grid>
    </div>
  );
};

export default Card;
