import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import Page from "./Page";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";

// const driveLink =
//   "https://drive.google.com/embeddedfolderview?id=11Gwak_UCH1FrJ7qhgKSrP1COm3lbmFCl#grid"; //https://drive.google.com/drive/folders/11Gwak_UCH1FrJ7qhgKSrP1COm3lbmFCl?usp=sharing
// const headingText = "College Study Material";

function App() {
  // if you're developing and just want to see the dapp without going through the Polygon ID flow,
  // temporarily set this to "true" to ignore the Polygon ID check and go straight to the dapp page
  const [provedAccess, setProvedAccess] = useState(false);
  return (
    <>
      {provedAccess ? (
        <Page driveLink={"https://drive.google.com/embeddedfolderview?id=11Gwak_UCH1FrJ7qhgKSrP1COm3lbmFCl#grid"} headingText={"College Study Material"} />
      ) : (
        <Center className="vc-check-page">
          <Container>
            <Card
              style={{
                border: "2px solid #805AD5",
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <p>
                  This is a Private College Website For the Students Of Manipal
                  University Jaipur you need to have a{" "}
                  <a href="https://0xpolygonid.github.io/tutorials/#core-concepts-of-polygon-id-verifiable-credentials-identity-holder-issuer-and-verifier-triangle-of-trust">
                    (Verifiable Credential)
                  </a>{" "}
                  to access this website. by prooving you are a current student
                  of Manipal University Jaipur.
                </p>

                <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  credentialType={"MUJCollegeID"}
                  issuerOrHowToLink={
                    "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                  }
                  onVerificationResult={setProvedAccess}
                />
                <Image
                  src="https://i.imgur.com/mTWGIhv.jpg"
                  alt="Manipal university Jaipur image"
                  borderRadius="lg"
                />
              </CardBody>
              <a
                href="https://twitter.com/0xSud0_"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "0",
                    fontSize: "8px",
                  }}
                >
                  Website built by Sud0_
                </p>
              </a>
            </Card>
          </Container>
        </Center>
      )}
    </>
  );
}

export default App;
