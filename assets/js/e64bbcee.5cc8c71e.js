(self.webpackChunkcapialise_developer_portal=self.webpackChunkcapialise_developer_portal||[]).push([[18],{22601:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(93456),s=["components"],p={title:"Native funding search",tags:["API"],description:"Design your own native journey to help user find funding from over 100 lenders"},o=void 0,c={unversionedId:"native-funding-search",id:"native-funding-search",title:"Native funding search",description:"Design your own native journey to help user find funding from over 100 lenders",source:"@site/use-cases/native-funding-search.mdx",sourceDirName:".",slug:"/native-funding-search",permalink:"/use-cases/native-funding-search",draft:!1,editUrl:"https://github.com/Capitalise/developer-portal/edit/main/use-cases/native-funding-search.mdx",tags:[{label:"API",permalink:"/use-cases/tags/api"}],version:"current",lastUpdatedAt:1655479800,formattedLastUpdatedAt:"6/17/2022",frontMatter:{title:"Native funding search",tags:["API"],description:"Design your own native journey to help user find funding from over 100 lenders"},sidebar:"useCasesSideBar",previous:{title:"Embedded funding search",permalink:"/use-cases/embedded-funding-search"}},d={},u=[{value:"Environments",id:"environments",level:2},{value:"High-level sequence diagram",id:"high-level-sequence-diagram",level:2}],m={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Design your own native journey to help user find funding from over 100 lenders"),(0,i.kt)("h2",{id:"environments"},"Environments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment"),(0,i.kt)("th",{parentName:"tr",align:null},"Base URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Demo"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://demo.capitalise.com/api"},"https://demo.capitalise.com/api")),(0,i.kt)("td",{parentName:"tr",align:null},"Get started with test credentials and life-like data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Production"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://capitalise.com/api"},"https://capitalise.com/api")),(0,i.kt)("td",{parentName:"tr",align:null},"Launch your app with unlimited live credentials")))),(0,i.kt)("p",null,"For account setup, please contact our Commercial Director Olly Cummings at ",(0,i.kt)("a",{parentName:"p",href:"mailto:olly@capitalise.com"},"olly@capitalise.com"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Data CANNOT be moved between Production and Demo"),(0,i.kt)("li",{parentName:"ul"},"Credentials (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"Logins"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"API Key"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"API Token"),") are NOT sharable between Production and Demo"),(0,i.kt)("li",{parentName:"ul"},"Always double check if you've got the right credentials configured before production release")))),(0,i.kt)("p",null,"You will be using two suites of APIs to implement the native funding search journey at your end:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/platform"},"Platform V1")),(0,i.kt)("td",{parentName:"tr",align:null},"/api/platform/v1"),(0,i.kt)("td",{parentName:"tr",align:null},"Generating API Key that unique identifies your application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/marketplace/v1"},"Marketplace V1")),(0,i.kt)("td",{parentName:"tr",align:null},"/api/marketplace/v1"),(0,i.kt)("td",{parentName:"tr",align:null},"Create and submit funding searches to Capitalise")))),(0,i.kt)("h2",{id:"high-level-sequence-diagram"},"High-level sequence diagram"),(0,i.kt)(l.Mermaid,{config:{},chart:"sequenceDiagram\n    actor Applicant\n    participant API Partner\n    participant Capitalise Platform APIs\n    participant Capitalise Marketplace APIs\n    Note over API Partner, Capitalise Platform APIs: Step 1: Excange login for API key (one-off)\n    API Partner->>Capitalise Platform APIs: POST /platform/v1/auth/login\n    Capitalise Platform APIs->>API Partner: Access token\n    API Partner->>Capitalise Platform APIs: POST /platform/v1/api-key\n    Capitalise Platform APIs->>API Partner: key\n    Note over API Partner,Capitalise Marketplace APIs: Step 2: Excange API key for Marketplace API tokens\n    API Partner->>Capitalise Marketplace APIs: POST /marketplace/v1/auth/authorize?api_key={{key}}\n    Capitalise Marketplace APIs->>API Partner: Marketplace access token jwt and refresh token refreshToken\n    alt Getting new Marketplace access token using refresh_token when expired\n        API Partner->>Capitalise Marketplace APIs: POST /marketplace/v1/auth/refresh-token\n        Capitalise Marketplace APIs->>API Partner: New marketplace access token jwt and refresh token refreshToken\n    end\n    Note over API Partner,Capitalise Marketplace APIs: Step 3: Create funding search\n    Applicant->>API Partner: Complete the quesitonnaire\n    API Partner->>Capitalise Marketplace APIs: Create the company<br>POST /marketplace/v1/profiles/blank\n    Capitalise Marketplace APIs->>API Partner: Company UUID profileUUID\n    API Partner->>Capitalise Marketplace APIs: Update the company profile<br>PATCH /marketplace/v1/questionnaires/business-all-funding-products/profiles/:profileUUID/answers\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 204\n    API Partner->>Capitalise Marketplace APIs: Get lender matches<br>PATCH /marketplace/v1/profiles/:profileUUID/funding/matches/results\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 200 - Matches in matches[]\n    API Partner->>Applicant: Show all matches\n    Note over API Partner,Capitalise Marketplace APIs: Step 4: Submit funding search\n    Applicant->>API Partner: Select maximum<br>4 product matches\n    API Partner->>Capitalise Marketplace APIs: Submit the the profile with selected matches<br>POST /marketplace/v1/profiles/:profileUUID/funding/apply\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 200\n    API Partner->>Applicant: Funding search submitted\n",mdxType:"Mermaid"}))}k.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);