(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(91)),i={id:"icpc-contests",title:"A Typical ICPC Styled Contest",sidebar_label:"0.2 ICPC Contests"},c={unversionedId:"00-introduction/icpc-contests",id:"00-introduction/icpc-contests",isDocsHomePage:!1,title:"A Typical ICPC Styled Contest",description:"Unlike Code Jam or Hackercup, ICPC is a team competition.",source:"@site/docs/00-introduction/icpc-styled-contest.md",slug:"/00-introduction/icpc-contests",permalink:"/training/docs/00-introduction/icpc-contests",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/00-introduction/icpc-styled-contest.md",version:"current",sidebar_label:"0.2 ICPC Contests",sidebar:"docs",previous:{title:"About Competitive Programming and ICPC",permalink:"/training/docs/00-introduction/about-icpc"},next:{title:"An Example ICPC Problem",permalink:"/training/docs/00-introduction/example-problem"}},s=[{value:"Scoring",id:"scoring",children:[]},{value:"Submission Feedbacks",id:"submission-feedbacks",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Unlike Code Jam or Hackercup, ICPC is a team competition.\nEach team typically have ",Object(a.b)("strong",{parentName:"p"},"3 members"),", and each team has access to only ",Object(a.b)("strong",{parentName:"p"},"1 computer")," during a contest.\nThey will have to write programs solve 10 to 14 problems within a ",Object(a.b)("strong",{parentName:"p"},"5 hours-long contest"),".\nUsually the judge system allows you to solve problems using various programming languages such as C++ and Java. In the ICPC world finals, the allowed programming languages are C++17, Java, Python3 and Kotlin."),Object(a.b)("h2",{id:"scoring"},"Scoring"),Object(a.b)("p",null,"A problem is solved when it is accepted by the judges.\nThere is no partial score in a ICPC contest.\nThe more problems your team solve, the higher rank your team is placed.\nFor each problem your team solved, there is an associated penalty,\ncalculated by adding the number of minutes from the beginning of the contest until a correct solution is submitted, along with the number of incorrect attempts multiplied by 20."),Object(a.b)("p",null,"Thus, the teams are ranked first by the higher number of solved problems,\nand then the lower total penalty from each solved problems."),Object(a.b)("h2",{id:"submission-feedbacks"},"Submission Feedbacks"),Object(a.b)("p",null,"For each problem you submit, your program will be tested on different test cases.\nIn most of the ICPC style contests, you solved the problem if all test cases are passed. In this case you'll see ",Object(a.b)("strong",{parentName:"p"},"Accepted"),". Otherwise, your program fails to produce correct output in time on some test cases. In this situation, you will only be able to see very brief message such as ",Object(a.b)("strong",{parentName:"p"},"Wrong Answer")," or ",Object(a.b)("strong",{parentName:"p"},"Runtime Error"),". You team will have to debug on your own."))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);