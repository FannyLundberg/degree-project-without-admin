# Degree project by Fanny Lundberg

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## About

This is a degree project as a part of my education at Medieinstitutet. It is built to use and increase my abilities in front end developing.

Project is built for a voluntary organization, **Julklappshjälpen Värmdö**. The organization is helping people that can’t afford Christmas gifts for their children. It is dependent of giving people and companies. Today they only have a Facebook group for communication, therefor this project is to give them a website so that more people can read about this amazing organization. 

**Please observe that this is a copy of the real project. This version/copy is without the admin section.**

&nbsp;

## Tech stack

- Next.js
- TypeScript
- Sass
- MongoDB
- Chart.js
- Formik
- Canvas
- React-loading-skeleton
- Figma
- Cypress
- Vercel

&nbsp;

## Run locally


1. Clone repo:
```
git clone https://github.com/FannyLundberg/degree-project-without-admin.git
```

2. Go to projects directory:
```
cd degree-project-without-admin
```

3. When opened the project:
```
npm install
```

4. When installation is done:
```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

&nbsp;

## Testing

Project is tested with Cypress.

### To run tests locally


1. Project needs to be running:
```
npm run dev
```

2. Start Cypress:
```
npm run cypress:open
```

3. Click "E2E Testing" 
4. Press "Start E2E Testing in Chrome"-button
5. Choose file "spec.cy.ts"

The tests will now run automatically

### Configured and passing tests

- Functionality for login
  - Able to login in with right credentials
  - Not able to login with wrong credentials
- Functionality for navigation
- Specific elements (each page should have...)
  - a header
  - one H1
  - a footer

&nbsp;

## Planning and design


The project is planned in Figma with wireframes and design sketches.

Logotype is not designed by me (owners are Julklappshjälpen Värmdö).

&nbsp;

## Deploy:


Deployed with Vercel. Check out the site live [here](https://julklappshjalpenvarmdo.se/).
