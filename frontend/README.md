# This is a Verifiable Credential (VC) Gated Website

- In order to see the gated part of the website, you need a [MUJCollegeID Verifiable Credential](https://github.com/Sud0-AP/BUIDL-IRL-PolygonID/tree/master) with the enrolled property set to true , held in the Polygon ID Mobile wallet app.

<img width="1292" alt="Screenshot 2023-06-06 at 10 30 51 AM" src="https://i.imgur.com/LTTN8kb.png">

## About

This is an VC gated website for a college material sharing website with a restricted access 

- frontend library: [React](https://react.dev/)

## How to run locally

#### 0. Follow server setup instructions

Before starting the frontend, run the server by following [the server instructions](https://github.com/Sud0-AP/DID-Gated-College-Material/tree/main/server). You need the ngrok url from the server in order to start the frontend.

#### 1. Install frontend dependencies with --legacy-peer-deps

Make sure to run the install command with the --legacy-peer-deps flag.

```bash
npm i --legacy-peer-deps
```

Unfortunately some of the dependencies are mid migration and use different legacy versions of typescript, so you need to run the command and all other dependency installations with the flag or you'll see installation errors. When installing any other dependencies in this project, use the flag.

For example, here's how you could install react router:

```bash
npm install react-router-dom --legacy-peer-deps
```

#### 2. Create a .env file by copying my sample

```bash
cp .env.sample .env;
```

Update your .env with the REACT_APP_VERIFICATION_SERVER_PUBLIC_URL variable to your hosted server ngrok url. If you're hosting in production with render, use the render url for this variable.

Quick check: Make sure you've updated these values in .env, not .env.sample 🤠

#### 3. Start the frontend

```bash
npm start
```

Visit http://localhost:3000/


## Logic flow

This frontend interacts with the verifier server to

- Watch for events emitted by socket for the user's specific sessionId
  - frontend: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/frontend/src/PolygonIDVerifier.js#L48
  - backend:
    - getAuthQr in progress https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/index.js#L63
    - getAuthQr done: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/index.js#L86
    - handleVerification in progress: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/index.js#L100
    - handleVerification done: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/index.js#L135
- Request the QR code containing the birthday query (zk request) for display
  - frontend fetch: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/frontend/src/PolygonIDVerifier.js#L62
  - backend getAuthQr: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/index.js#L37
  - backend credential query: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/server/proofRequest.js
- Report verification result to the rest of the app: https://github.com/Sud0-AP/DID-Gated-College-Material/blob/main/frontend/src/App.js#L39
