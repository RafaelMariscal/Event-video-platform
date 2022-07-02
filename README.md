
<p align="center"> 
  <a href="#Sreenshots">Sreenshots</a>  | |  
  <a href="#About">About</a>  | |  
  <a href="#Techs">Techs, Libs and Plugins</a>  | |  
  <a href="#Functionalities">Functionalities</a> | |
  <a href="#GettingStarted">GettingStarted</a> | |
  <a href="#Contributing">Contributing</a>
</p>

</br>

<h1> Video Platform for Events </h1>

A <strong>ReactJs</strong> + <strong>GraphQL</strong> + <strong>Tailwind</strong> project built during the Ignite Lab Bootcamp, provided by <a href="https://www.rocketseat.com.br/">Rocketseat Programming School</a>, the largest programming school in Brazil.

</br>

> Project deployed using <a href="https://vercel.com/docs">vercel</a>. To access this project, follow the link: | > <a href="https://event-video-platform.vercel.app/"><strong>event-video-platform.vercel.app/</strong></a> < |

</br>

<h2 id="Sreenshots">Screenshots</h2>

<p align="center">
 <img src="https://github.com/RafaelMariscal/Event-video-platform/blob/main/src/assets/Login-Page-Screenshot.png" width="400px"/>
 <img src="https://github.com/RafaelMariscal/Event-video-platform/blob/main/src/assets/Event-Page-Screenshot.png" width="400px"/>
</p>

<h2 id="About">About</h2>

A <strong>ReactJs</strong> and <strong>GraphQL</strong> project built during the Ignite Lab Bootcamp. It's important to mention that, when using <strong>GraphCMS</strong> to subscribe data, its crucial <strong>to set a backend to intermediate the mutations requests</strong>, for safety reasons and also to handle the request data.

<strong>Tailwind</strong> was used in this project for productivity reasons, making it easier to build the frontend, just like the <strong>GraphCMS</strong> and <strong>GraphQL Code Generator</strong>, but to make it easier to code the graphQL requests.

Just beacause this project idea is to <strong>build a mockup web application for video events</strong>, the frontend will deal with all the mutations requisitions. With that said, feel free to use this repo as you wish.

<h2 id="Techs">Techs, Libs and Plugins</h2>

In this project, it was used Techs, Libs and Plugins to provide a better understanding of how a web application is actually built. Follow the list bellow to access all the techs/libs/plugins documantations:

<p align="center">
  <a href="https://pt-br.reactjs.org/docs/getting-started.html">React</a> | | 
  <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">Typescript</a> | | 
  <a href="https://graphcms.com/docs/guides/getting-started/create-a-project">GraphQL</a> | |
  <a href="https://graphcms.com/docs/guides/getting-started/create-a-project">GraphCMS</a> | |
  <a href="https://www.graphql-code-generator.com/docs/getting-started">GraphQL-Code-Generator</a> | |
  <a href="https://www.apollographql.com/docs/react">Apollo Client</a> | | 
  <a href="https://vimejs.com/getting-started/installation">VimeJS</a> | | 
  <a href="https://date-fns.org/docs/Getting-Started">Date-fns</a> | | 
  <a href="https://tailwindcss.com/docs/installation">Tailwind</a> | | 
  <a href="https://phosphoricons.com/">Phosphor-react</a> 
</p>

<h2 id="Functionalities">Functionalities</h2>

- The web aplication consists in 2 pages: Subscribe and Event.
- Subscribe Page:
  - Subscribe Form
  - GraphQL mutation request
  - Only access to video content if subscribed
 
- Dashboard Page:
  - Video Section
		- Video Card
		- Video Description
		- Tow Actions Buttons 
		- Teacher Info Section
		- Action Cards Section with there own description.
  - Video Controller
		  - Video Access Cards 
		  - Video published Date info
		  - Video Title
		  - Video Published Info
		  - Video Type Info ( Class / Live )

<h2 id="GettingStarted">GettingStarted</h2>

    git clone git@github.com:RafaelMariscal/Event-video-platform.git
    cd Event-video-platform
    npm i
<p>
When this project was built, vimejs still didn't support 100% react 18.0.0. Because this project didn't used any of the new functionalities of react 18.0.0, if there is an error installing this dependency, just force the installation by using:

    npm i @vime/core @vime/react --force


There may be some WARNING like:  

    The above dynamic import cannot be analyzed by vite.

This is related to @vimejs, and <strong>it will not break the application</strong>. There is an issue on @vimejs github related to this error, to know more about it access this link:  <a href="https://github.com/vitejs/vite/issues?q=The+above+dynamic+import+cannot+be+analyzed+by+vite.+">github.com/vitejs/vite/issues</a> .

Clone the GraphCMS database schema in the link : 

[![Clone project](https://graphcms.com/button)](https://app.graphcms.com/clone/31d3a300b4ff4936a6629512015b2f6b?name=Ignite%20Lab%20-%20Rafael%20Mariscal)

At projet root diretory, you need to create a .env.local file with these environment variables:
- VITE_API_URL={GraphCMS Content API URL}
- VITE_API_ACCESS_TOKEN={GraphCMS Permanent Auth Token Value}

Also at project root diretory, at the file <strong>codegen.yml</strong>, you need to set the <strong>schema</strong> to the GraphCMS Content API URL, like this:
    
    schema: {GaphCMS Content API URL}

    documents: './src/graphql/**/*.graphql'

    generates:
      ./src/graphql/generated.ts:
        plugins:
          - typescript
          - typescript-operations
          - typescript-react-apollo
        config:
          reactApolloVersion: 3
          withHooks: true
          withHOC: false
          withComponent: false


At first run, and also every time that changes were made at GraphCMS Project run:

    npm run codegen

Finaly, to run the development version just run this command line:

    npm run dev

</br>

> The deploy was made using <a href="https://vercel.com/docs">Vercel</a>. So, if you want to deploy your project, just follow the instructions to link your github repository to vercel, then cofigure the deploy and run it. Follow the link bellow to access <a href="https://vercel.com/docs">Vercel Documentation</a>.

</p>


<h2 id="Contributing">Contributing</h2>

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: <a href="mailto: rafael_mariscal_@outlook.com">rafael_mariscal_@outlook.com</a>

Connect with me at  <a href="https://www.linkedin.com/in/rafael-mariscal/">LinkedIn</a>

Thank you!
