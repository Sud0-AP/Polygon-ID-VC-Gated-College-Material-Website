# Polygon ID Based VC Gated Website For College Study Material

This repository spins up a Website that is 

-   ✅ Built with the popular [React JS](https://react.dev/) library
-   ✅ VC Gated with a [Polygon ID MUJCollegeID](https://github.com/Sud0-AP/BUIDL-IRL-PolygonID/tree/master)

## Getting started

Node requirement: **node v20.2.0**

Here's how to check your node version. 

```bash
node -v
```

If you're not running this version, you can switch your version with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

#### Setup

1. Get a MUJ College ID Verifiable Credential - [Schema here](https://github.com/Sud0-AP/BUIDL-IRL-PolygonID/tree/master)

2. Follow server setup instructions

[here](https://github.com/Sud0-AP/DID-Gated-College-Material/tree/main/server)

3. Follow frontend setup instructions

[here](https://github.com/Sud0-AP/DID-Gated-College-Material/tree/main/frontend)

## Default localhosts

- Frontend: localhost:3000
- Server: localhost:8080

## Here's what the website looks like

Welcome page: In order to see the dapp, you need to prove your access rights. Click the "Prove access rights" button

<img width="1135" alt="Screenshot 2023-06-23 at 10 51 19 AM" src="https://i.imgur.com/LTTN8kb.png">

A modal with a QR code appears. Scan this QR code with your Polygon ID mobile app. Note: you must hold a MUJCollegeID with the enrolled equal to true . [Here's the KYCAgeCredential VC Schema](https://github.com/Sud0-AP/DID-Gated-College-Material/tree/main/frontend)

<img width="1134" alt="Screenshot 2023-06-23 at 10 51 30 AM" src="https://i.imgur.com/AZUwsh2.png">

If you successfully complete age verification, you'll see a success message, then be redirected to the dapp.

<img width="1133" alt="Screenshot 2023-06-23 at 10 51 57 AM" src="https://i.imgur.com/lG8tyJK.png">

This is the Web page that you see once you've proved access rights. Follow the process to see behind the blur!.

<img width="1134" alt="Screenshot 2023-06-23 at 10 52 19 AM" src="https://i.imgur.com/3cMp4hd.jpg">
