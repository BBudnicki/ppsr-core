(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(112)),o={id:"technical",title:"Technical",description:"How the PPSR website was built"},c={unversionedId:"technical",id:"technical",isDocsHomePage:!1,title:"Technical",description:"How the PPSR website was built",source:"@site/docs/technical.md",sourceDirName:".",slug:"/technical",permalink:"/ppsr-core/docs/technical",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/technical.md",version:"current",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1608314718,formattedLastUpdatedAt:"12/18/2020",frontMatter:{id:"technical",title:"Technical",description:"How the PPSR website was built"},sidebar:"coreSidebar",previous:{title:"History",permalink:"/ppsr-core/docs/history"}},s=[{value:"Main file types",id:"main-file-types",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Running Locally",id:"running-locally",children:[{value:"Prerequisite Software",id:"prerequisite-software",children:[]},{value:"Step by Step",id:"step-by-step",children:[]}]},{value:"Publishing Process",id:"publishing-process",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,Object(r.a)("img",{parentName:"p",src:"https://github.com/citizen-science-association/ppsr-core/workflows/publish/badge.svg?branch=master",alt:"publish"})),Object(r.a)("p",null,"This website is hosted for free by ",Object(r.a)("a",{parentName:"p",href:"https://docs.github.com/en/github/working-with-github-pages"},"GitHub Pages")," which is a static site hosting solution. The scaffolding for this site is based on ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/"},"Docusaurus Version 2.0")," which takes Markdown and JavaScript files and generates static HTML."),Object(r.a)("p",null,"Please direct questions about the technical underpinnings of this site to Brandon Budnicki."),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GIT Training")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"If you are not familiar with GIT we recommend playing ",Object(r.a)("a",{parentName:"p",href:"https://learngitbranching.js.org/"},"Learn Git Branching")," to learn the fundamentals in an interactive way (2 hours). Additionally the ",Object(r.a)("a",{parentName:"p",href:"https://github.github.com/training-kit/downloads/github-git-cheat-sheet/"},"The GitHub GIT Cheat Sheet")," covers common commands (20 minutes)"))),Object(r.a)("h3",{id:"main-file-types"},"Main file types"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Markdown - ",Object(r.a)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/"},"Docusaurus version"),Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},".md")," which is plain markdown"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},".mdx")," which is used for markdown and adds additional processing to allow importing JavaScript"))),Object(r.a)("li",{parentName:"ul"},"JavaScript ",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},".js")," used for ",Object(r.a)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"ReactJS")," components or special pages that require additional styling"))),Object(r.a)("li",{parentName:"ul"},"JSON",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},".json")," used to store raw data")))),Object(r.a)("h3",{id:"folder-structure"},"Folder Structure"),Object(r.a)("p",null,"The site follows the same standard ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/creating-pages/"},"Docusaurus")," structure."),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Commonly changed files"',title:'"Commonly',changed:!0,'files"':!0},"/root\n    /blog           - news & articles specific to PPSR core\n    /docs           - .md and .mdx pages that contain the standard. These get versioned!\n    /src\n        /pages      - special pages like the homepage\n        /components - ReactJS components\n    /static/json    - JSON Schema files\n\n")),Object(r.a)("hr",null),Object(r.a)("h2",{id:"running-locally"},"Running Locally"),Object(r.a)("p",null,"This software can be run locally on your machine for testing purposes or creating larger changes. This will work on Windows, OSX, or Linux. The process is described in Docusaurus ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/installation"},"Installation"),' except that you will be using an existing GitHub repository instead of "scaffolding" a new one.'),Object(r.a)("h3",{id:"prerequisite-software"},"Prerequisite Software"),Object(r.a)("h4",{id:"required"},"Required"),Object(r.a)("p",null,"These requirements are the same for all ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/installation"},"Docusaurus")," sites"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"GIT-SCM")," to clone, merge, and submit pull requests. To check for this software run this command from the terminal"),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",{parentName:"pre"},"  git --version\n"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"NPM"),"  Version > 10.15.1 to build the software and run locally. To check for this software run this command from the terminal"),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",{parentName:"pre"},"  node -v\n"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"A plaintext editor for exiting files. ",Object(r.a)("strong",{parentName:"p"},"Do not use Microsoft Word")," Ses below for recommendation"))),Object(r.a)("h4",{id:"recommended"},"Recommended"),Object(r.a)("p",null,"We recommend the following additional tools to aid in content editing & ease of use. Install these if you are not experienced with software development, they will make your life easier."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," a plain text editor and development environment available for free on Windows, OSx, or Linux"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"https://desktop.github.com/"},"GitHub Desktop")," a friendly user interface for GIT-SCM"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"GitLens")," a GitHub management extension for VS Code."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"},"Code Spell Checker")," extension for VS Code")),Object(r.a)("h3",{id:"step-by-step"},"Step by Step"),Object(r.a)("p",null,"After installing the Prerequisite Software:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Clone the repository from github.com/citizen-science-association/ppsr-core using the command line or GitHub Desktop"),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",{parentName:"pre"},"git clone https://github.com/citizen-science-association/ppsr-core.git\n"))),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Install dependencies: Open a terminal / command line in the root folder of your repository "),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",{parentName:"pre"},"npm install\n"))),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Run local build server: Open a terminal / command line in the root folder of your repository"),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",{parentName:"pre"},"npm run start\n"))),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Your browser should automatically open to http://localhost:3000/"))),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"Any changes you save will immediately cause the page to refresh and be visible"))),Object(r.a)("hr",null),Object(r.a)("h2",{id:"publishing-process"},"Publishing Process"),Object(r.a)("p",null,"After all changes have been merged into the master branch, the publishing process can being. This follows the ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment"},"standard deployment")," process for Docusaurus, specifically for the ",Object(r.a)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages"},"GitHub pages process"),"."),Object(r.a)("p",null,"Use this command to deploy to the live site. "),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-bash",metastring:'title="linux / OSx"',title:'"linux',"/":!0,'OSx"':!0},"GIT_USER=<GITHUB_USERNAME> npm run deploy\n")),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-sh",metastring:'title="windows"',title:'"windows"'},'cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"\n')),Object(r.a)("p",null,Object(r.a)("img",{parentName:"p",src:"https://github.com/citizen-science-association/ppsr-core/workflows/publish/badge.svg?branch=master",alt:"publish"})),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"Changes should appear within 2 minutes. Be sure to do a hard refresh of the page, locally cache files from the public site might show the old site."))))}p.isMDXComponent=!0}}]);