(this.webpackJsonpIdleReact=this.webpackJsonpIdleReact||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){},,function(e,n,o){"use strict";o.r(n);var s=o(0),a=o(1),t=o(4),c=o.n(t),l=(o(14),o(2)),i=o(5),p=o(6),d=o(8),r=o(7),m=(o(15),function(e){var n=e.upgradeId,o=e.name,a=e.cost,t=e.effect,c=e.owned,l=e.happinessCost,i=e.numberWithCommas,p=i(a),d=i(l);return!1===c?Object(s.jsxs)("div",{id:"upgrade"+n,className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(s.jsx)("img",{alt:"roboimg",src:"https://robohash.org/".concat(n,"?set=set4")}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"ph2",children:o}),Object(s.jsx)("p",{className:"ph2",children:t}),Object(s.jsx)("h5",{children:"Price"}),Object(s.jsxs)("h2",{className:"ph2",children:["\ud83d\udcb0$",p," \ud83d\ude04 ",d]})]})]}):Object(s.jsxs)("div",{id:"upgrade"+n,className:"tc bg-light-yellow dib br3 ma2 grow bw2 shadow-5",children:[Object(s.jsx)("img",{alt:"roboimg",src:"https://robohash.org/".concat(n,"?set=set4")}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"ph2",children:o}),Object(s.jsx)("p",{className:"ph2",children:t}),Object(s.jsx)("h2",{className:"ph2",children:"OWNED"})]})]})}),u=function(e){var n=e.upgrades,o=e.numberWithCommas;return Object(s.jsx)("div",{children:n.map((function(e,a){return Object(s.jsx)(m,{upgradeId:n[a].id,name:n[a].name,cost:n[a].cost,happinessCost:n[a].happinessCost,effect:n[a].effect,dollarIncome:n[a].dollarIncome,clickIncome:n[a].clickIncome,owned:n[a].owned,numberWithCommas:o},a)}))})},h=(o(16),function(e){var n=e.resetButton;return Object(s.jsx)("div",{id:"buttonReset",children:Object(s.jsx)("button",{className:"",onClick:n,children:"RESET Progress"})})}),I=(o(17),function(e){var n=e.onTypeChange,o=(e.searchChange,e.dollarTypeInvoice),a=e.dollarTypeIncome,t=e.cashOut;return Object(s.jsxs)("div",{className:"pa2",children:[Object(s.jsx)("h1",{children:"Type for cashOut"}),Object(s.jsxs)("label",{className:"yellow",htmlFor:"inputText",children:["Income per character = $ ",a]}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{id:"inputText",className:"pa3 ba b--green bg-lightest-blue",type:"text",maxLength:"500",placeholder:"write a book",onChange:n}),Object(s.jsx)("br",{}),Object(s.jsxs)("button",{className:"pa1 f2 grow bw2 shadow-5",id:"cashOut",onClick:t,children:["Sell text for $",o]})]})}),f=(o(18),function(e){var n=e.clickIncome,o=e.clickCashOut;return Object(s.jsxs)("div",{className:"bg-navy pb2",children:[Object(s.jsx)("h1",{className:"mb0",children:"Click for Cash!"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"yellow",children:"Buck a Click"}),Object(s.jsx)("br",{}),Object(s.jsxs)("button",{id:"buckaclick",className:"pa1 f2 grow bw2 shadow-5",onClick:o,children:["$",n]})]})}),y=(o(19),function(e){var n=e.dollarIncome,o=e.hoursPassed,a=e.daysPassed,t=e.yearsPassed,c=e.mainHappiness,l=e.happinessIncome,i=e.spending,p=e.annualBonus;return Object(s.jsxs)("div",{id:"statbox",className:"statbox light-gray",children:[Object(s.jsxs)("p",{className:"statincome light-green",children:["Your Current Income is $",n," / hour. \xa0\xa0\xa0\xa0Annual Bonus = $",p]}),Object(s.jsxs)("p",{className:"costliving",children:["Cost of living: $",i," / day"]}),Object(s.jsxs)("p",{className:"stathappy",children:["Total \ud83d\ude04: ",c,". \xa0\xa0\xa0\xa0\xa0 You earn \ud83d\ude04 per day: ",l]}),Object(s.jsx)("p",{className:"stathappy"}),Object(s.jsxs)("p",{className:"light-yellow",children:[Math.round(t)," years / ",Math.round(a)," days / ",o," hours passed"]})]})}),B=(o(20),function(e){var n=e.mainCounter,o=(0,e.numberWithCommas)(n);return Object(s.jsxs)("div",{className:"washed-green dib br3 ma1 bw2 shadow-5 ph2 pv1",children:["Bank Account:",Object(s.jsxs)("div",{className:"green f2",children:["$",o]})]})}),g=(o(21),function(e){return Object(s.jsx)("div",{className:"scrollDiv",style:{overflowY:"scroll",border:"2px solid black",height:"65vh",boxsizing:"border-box"},children:e.children})}),C=[{id:0,name:"Meal Plan",cost:1,happinessCost:0,effect:"+1 happiness/day, +$5 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:5,annualBonus:0,owned:!1},{id:1,name:"Birthday Gift",cost:0,happinessCost:1,effect:"$10 each year!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:10,owned:!1},{id:2,name:"Click for Cash",cost:0,happinessCost:5,effect:"+$5 per Buck a Click",clickIncome:5,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:4,name:"Learn to Write",cost:100,happinessCost:1,effect:"+$5 per character sold",clickIncome:0,dollarIncome:0,dollarTypeIncome:5,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:5,name:"Eyes open for dropped coins",cost:0,happinessCost:10,effect:"+$1 per hour",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:6,name:"Buy a bike",cost:500,happinessCost:0,effect:"+ 2 Happiness / day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:2,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:7,name:"Low risk stocks",cost:1e3,happinessCost:0,effect:"+$200 annually",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:200,owned:!1},{id:8,name:"Buy a computer",cost:1200,happinessCost:0,effect:"+1 happiness/day, +1$/hour",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:9,name:"Buy Happiness",cost:200,happinessCost:0,effect:"+10 Happy times",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:50,spending:0,annualBonus:0,owned:!1},{id:10,name:"Take a Vacation",cost:5e3,happinessCost:0,effect:"+1000 Happy Joy",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e3,spending:0,annualBonus:0,owned:!1},{id:11,name:"Drinking Habbit",cost:0,happinessCost:0,effect:"-$25/day, +3 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:3,happinessBoost:0,spending:25,annualBonus:0,owned:!1},{id:12,name:"Super Click",cost:1e3,happinessCost:10,effect:"+$10 per Buck a Click",clickIncome:10,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:13,name:"Reduce spending",cost:0,happinessCost:15,effect:"-$5/day cost of living ",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:-5,annualBonus:0,owned:!1},{id:14,name:"Part Time Job",cost:0,happinessCost:1,effect:"+$2/hour, -2 happy/day",clickIncome:0,dollarIncome:2,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-2,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:15,name:"Start Selling Art",cost:1800,happinessCost:0,effect:"+$1/hour, +1 happy/day",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:16,name:"Irresponsible spending",cost:0,happinessCost:0,effect:"-$200/day, +30 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:30,happinessBoost:0,spending:200,annualBonus:0,owned:!1},{id:17,name:"A real Saver",cost:0,happinessCost:50,effect:"-$50 cost of living, -10 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-10,happinessBoost:0,spending:-50,annualBonus:0,owned:!1},{id:18,name:"Full Time Job",cost:0,happinessCost:100,effect:"+$10/hour, -5 happy/day",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-5,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:19,name:"Selling Smiles",cost:0,happinessCost:0,effect:"+$5/hour, -25 happy/day",clickIncome:0,dollarIncome:5,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-25,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:20,name:"Buy a Dividend Fund",cost:5e3,happinessCost:0,effect:"returns $2500 a year!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:2500,owned:!1},{id:21,name:"Netflix Subscription",cost:0,happinessCost:50,effect:"+$2 cost of living, +10 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:10,happinessBoost:0,spending:2,annualBonus:0,owned:!1},{id:22,name:"Inheritance of the dead",cost:0,happinessCost:500,effect:"+$1000 but you are sad",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:1e3,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:22,name:"Overly Generous",cost:4e3,happinessCost:0,effect:"500 happiness boost!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:500,spending:0,annualBonus:0,owned:!1},{id:23,name:"Greed for Life",cost:1e3,happinessCost:500,effect:"+$10/hour, -20 Happiness/day",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-20,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:24,name:"Hard Work pays off",cost:1e3,happinessCost:200,effect:"+$4/hour",clickIncome:0,dollarIncome:4,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:25,name:"Financial Education",cost:6e3,happinessCost:400,effect:"-$20 cost of living, +$3000/year",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:-20,annualBonus:3e3,owned:!1},{id:26,name:"Joys of Wealth",cost:7500,happinessCost:50,effect:"+$1000 cost of livng, + 100 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:100,happinessBoost:0,spending:1e3,annualBonus:0,owned:!1},{id:27,name:"Buy a Car",cost:2e4,happinessCost:10,effect:"+$10 cost of living, +20 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:20,happinessBoost:0,spending:10,annualBonus:0,owned:!1},{id:28,name:"High School Diploma",cost:800,happinessCost:400,effect:"+$2/hour",clickIncome:0,dollarIncome:2,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:29,name:"A Big night Out",cost:5500,happinessCost:0,effect:"+1000 happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e3,spending:0,annualBonus:0,owned:!1},{id:30,name:"Your joy attracts a Lover",cost:0,happinessCost:2e3,effect:"+100 happiness/day, +$40 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:100,happinessBoost:0,spending:40,annualBonus:0,owned:!1},{id:31,name:"Buy a Kitten",cost:0,happinessCost:100,effect:"+10 happiness/day, +$4 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:10,happinessBoost:0,spending:4,annualBonus:0,owned:!1},{id:32,name:"Lottery tickets every Week!",cost:100,happinessCost:10,effect:"+10 happiness/day, +$10 cost of living, $1000 annual prize",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:10,happinessBoost:0,spending:10,annualBonus:1e3,owned:!1},{id:33,name:"Travel Bug",cost:1e4,happinessCost:0,effect:"+1000 happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e3,spending:0,annualBonus:0,owned:!1},{id:34,name:"Big Loan",cost:0,happinessCost:80,effect:"+$20,000,  +$20 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:2e4,happinessIncome:0,happinessBoost:0,spending:20,annualBonus:0,owned:!1},{id:35,name:"Passion Project",cost:2500,happinessCost:500,effect:"+14 happiness/day, +$10/hour",clickIncome:0,dollarIncome:4,dollarTypeIncome:0,dollarBoost:0,happinessIncome:14,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:36,name:"Crazy Rich Click",cost:1e3,happinessCost:5e3,effect:"+$100 per Buck a Click",clickIncome:100,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:37,name:"#1 best selling Book",cost:0,happinessCost:5e3,effect:"+$99 per character typed",clickIncome:0,dollarIncome:0,dollarTypeIncome:99,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:38,name:"Start a Gambling Ring",cost:8e3,happinessCost:1e3,effect:"-100 happiness/day, +$8/hour",clickIncome:0,dollarIncome:8,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-100,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:39,name:"Buy a Cannabis Shop",cost:42e3,happinessCost:420,effect:"+40 happiness/day, +$15/hour",clickIncome:0,dollarIncome:40,dollarTypeIncome:0,dollarBoost:0,happinessIncome:40,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:40,name:"Annual Christmas Heist",cost:550,happinessCost:750,effect:"+$3500 each Christmas",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:3500,owned:!1},{id:41,name:"Go Dancing",cost:550,happinessCost:0,effect:"+$500 Happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:500,spending:0,annualBonus:0,owned:!1},{id:42,name:"Hire a Maid",cost:0,happinessCost:0,effect:"+20 Happiness/day, +$100 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:20,happinessBoost:0,spending:100,annualBonus:0,owned:!1},{id:43,name:"Invest in a sure thing",cost:1e5,happinessCost:50,effect:"+$35 / hour",clickIncome:0,dollarIncome:35,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:44,name:"Therapy",cost:200,happinessCost:300,effect:"+$40 cost of living, +5 happiness/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:5,happinessBoost:0,spending:40,annualBonus:0,owned:!1},{id:45,name:"A nice necklace",cost:25e3,happinessCost:750,effect:"+5000 Happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:5e3,spending:0,annualBonus:0,owned:!1},{id:46,name:"Sell your dignity",cost:0,happinessCost:15e3,effect:"+$50000, +$2 cost of living.",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:5e4,happinessIncome:0,happinessBoost:0,spending:2,annualBonus:0,owned:!1},{id:47,name:"Internet Fame",cost:5500,happinessCost:7500,effect:"+$10/hour",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:48,name:"Have beatiful Children",cost:550,happinessCost:0,effect:"+$100 cost of living, + 30 happiness/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:30,happinessBoost:0,spending:100,annualBonus:0,owned:!1},{id:49,name:"Start a Farm",cost:75e3,happinessCost:1200,effect:"+$15000 each Harvest, -10 happiness / day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-10,happinessBoost:0,spending:0,annualBonus:15e3,owned:!1},{id:50,name:"Luxury cruise",cost:3700,happinessCost:0,effect:"+$3500 happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:3500,spending:0,annualBonus:0,owned:!1},{id:51,name:"Buy a Yacht",cost:1e6,happinessCost:0,effect:"+$500 happiness/Day, +$1000 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:500,happinessBoost:0,spending:1e3,annualBonus:0,owned:!1},{id:52,name:"Dirty Money, But good Money",cost:0,happinessCost:0,effect:"+$10/hour, +$20,000 annually, -100 Happiness / day",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-100,happinessBoost:0,spending:0,annualBonus:2e4,owned:!1},{id:53,name:"Wealthy Man Investment Plan",cost:6e3,happinessCost:10,effect:"+$100,000 annually, +$240 cost of living",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:240,annualBonus:1e5,owned:!1},{id:54,name:"Buy starter House",cost:6e5,happinessCost:0,effect:"+$100 happiness/day, +$5000 annually",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:100,happinessBoost:0,spending:0,annualBonus:5e3,owned:!1},{id:55,name:"Buy a Vinyard",cost:2e6,happinessCost:4e3,effect:"+$80 / hour",clickIncome:0,dollarIncome:80,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:56,name:"Buy new Friends",cost:15e5,happinessCost:0,effect:"+90 happiness / Day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:90,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:57,name:"WTF Clicker",cost:5e6,happinessCost:450,effect:"+$2000 per Buck a Click",clickIncome:2e3,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:58,name:"Legendary Author",cost:65e5,happinessCost:900,effect:"+$3000 per character sold",clickIncome:0,dollarIncome:0,dollarTypeIncome:3e3,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:59,name:"Start a Space Agency",cost:1e7,happinessCost:0,effect:"+$400,000 annually, +$100/hour",clickIncome:0,dollarIncome:100,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:3500,spending:0,annualBonus:4e5,owned:!1},{id:60,name:"Only Money, Love Money",cost:0,happinessCost:1e4,effect:"+$9000 Annually, +$20/hour -100 happiness/ day",clickIncome:0,dollarIncome:20,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-100,happinessBoost:3500,spending:0,annualBonus:9e3,owned:!1},{id:61,name:"Screw Happiness",cost:0,happinessCost:500,effect:"+$1/hour -10 happiness/ day",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-10,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:62,name:"Trade Time for money",cost:0,happinessCost:2e3,effect:"+$2000",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:2e3,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:63,name:"Make a Record",cost:12e4,happinessCost:200,effect:"+$11,000 Annually, +80 happiness/ day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:80,happinessBoost:0,spending:0,annualBonus:11e3,owned:!1},{id:64,name:"Expensive Habbits",cost:0,happinessCost:0,effect:"+$3400 cost of living, +3000 happiness/ day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:3e3,happinessBoost:0,spending:3400,annualBonus:0,owned:!1},{id:65,name:"End World Hunger",cost:0,happinessCost:1e4,effect:"+$20,000 cost of living +1,000,000 Happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e6,spending:2e4,annualBonus:0,owned:!1}],b=(o(22),function(e){Object(d.a)(o,e);var n=Object(r.a)(o);function o(){var e,s,a;if(Object(i.a)(this,o),(e=n.call(this)).onTypeChange=function(n){e.setState((function(e){return{dollarTypeInvoice:e.dollarTypeInvoice+e.dollarTypeIncome}}))},e.onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.saveGame=function(){var n;n={hoursPassed:e.state.hoursPassed,daysPassed:e.state.daysPassed,yearsPassed:e.state.yearsPassed,mainCounter:e.state.mainCounter,mainHappiness:e.state.mainHappiness,dollarTypeIncome:e.state.dollarTypeIncome,dollarTypeInvoice:e.state.dollarTypeInvoice,dollarIncome:e.state.dollarIncome,clickIncome:e.state.clickIncome,happinessIncome:e.state.happinessIncome,spending:e.state.spending,annualBonus:e.state.annualBonus};var o,s=JSON.stringify(n);localStorage.setItem("localSaveFile",s),o={};for(var a=0,t=Object.entries(e.state.upgrades);a<t.length;a++){var c=Object(l.a)(t[a],2),i=c[0],p=c[1];o[i]={value:p}}var d=JSON.stringify(o);localStorage.setItem("localUpgrades",d)},e.payout=function(n){e.setState((function(e){return{mainCounter:e.mainCounter+n}}))},e.cashOut=function(){e.payout(e.state.dollarTypeInvoice),e.setState((function(e){return{dollarTypeInvoice:0}})),document.getElementById("inputText").value="Type for money"},e.clickCashOut=function(){e.payout(e.state.clickIncome)},e.resetButton=function(){clearInterval(e.mainticker),console.log("reset"),e.setState((function(e){return{mainCounter:0}})),e.setState((function(e){return{mainHappiness:0}})),e.setState((function(e){return{hoursPassed:0}})),e.setState((function(e){return{daysPassed:0}})),e.setState((function(e){return{yearsPassed:0}})),e.setState((function(e){return{dollarTypeIncome:1}})),e.setState((function(e){return{dollarTypeInvoice:0}})),e.setState((function(e){return{dollarIncome:0}})),e.setState((function(e){return{clickIncome:1}})),e.setState((function(e){return{happinessIncome:0}})),e.setState((function(e){return{spending:0}})),e.setState((function(e){return{annualBonus:0}}));for(var n=function(){var n=Object(l.a)(s[o],1)[0],a=e.state.upgrades;a[n].owned=!1,e.setState((function(e){return{upgrades:a}}))},o=0,s=Object.entries(e.state.upgrades);o<s.length;o++)n();for(var a=0,t=Object.entries(e.state.upgrades);a<t.length;a++){var c=Object(l.a)(t[a],1)[0],i="upgrade"+e.state.upgrades[c].id;document.getElementById(i).classList.add("bg-light-green"),document.getElementById(i).classList.remove("bg-light-yellow")}localStorage.removeItem("localUpgrades"),localStorage.removeItem("localSaveFile"),window.location.reload()},e.state={tickerInterval:200,upgrades:C,searchfield:"",mainCounter:0,mainHappiness:0,hoursPassed:0,daysPassed:0,yearsPassed:0,dollarTypeIncome:1,dollarTypeInvoice:0,dollarIncome:0,clickIncome:1,happinessIncome:0,spending:0,annualBonus:0},s=localStorage.getItem("localSaveFile"),null!=(a=JSON.parse(s))){console.log("save file detected"),e.state.mainCounter=a.mainCounter,e.state.mainHappiness=a.mainHappiness,e.state.hoursPassed=a.hoursPassed,e.state.daysPassed=a.daysPassed,e.state.yearsPassed=a.yearsPassed,e.state.dollarTypeIncome=a.dollarTypeIncome,e.state.dollarTypeInvoice=a.dollarTypeInvoice,e.state.dollarIncome=a.dollarIncome,e.state.clickIncome=a.clickIncome,e.state.happinessIncome=a.happinessIncome,e.state.spending=a.spending,e.state.annualBonus=a.annualBonus;for(var t=localStorage.getItem("localUpgrades"),c=JSON.parse(t),p=0,d=Object.entries(c);p<d.length;p++){var r=Object(l.a)(d[p],1)[0],m=c[r].value.owned;e.state.upgrades[r].owned=m}}else console.log("no save file detected");return e}return Object(p.a)(o,[{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"componentDidMount",value:function(){for(var e=this,n=setInterval((function(){var o=e.state,s=o.hoursPassed,a=o.daysPassed;s<24?e.setState((function(e){return{hoursPassed:e.hoursPassed+1}})):(e.setState((function(e){return{daysPassed:e.daysPassed+1}})),e.setState((function(e){return{hoursPassed:0}})),e.setState((function(e){return{mainCounter:e.mainCounter-e.spending}})),e.setState((function(e){return{mainHappiness:e.mainHappiness+e.happinessIncome}})),365===a&&(e.setState((function(e){return{daysPassed:0}})),e.setState((function(e){return{yearsPassed:e.yearsPassed+1}})))),e.setState((function(e){return{mainCounter:e.mainCounter+e.dollarIncome}})),e.saveGame(),e.state.mainHappiness<=-1e3&&(clearInterval(n),alert("Oh no.. -1000 HAPPINESS... SUICIDE. you lose, Reset button at bottom to start again"),setInterval(n)),e.state.mainCounter<=-1e5&&(clearInterval(n),alert("Oh no..your in debt for -$100,000... SUICIDE. you lose, Reset button at bottom to start again"),setInterval(n))}),this.state.tickerInterval),o=function(){var n=Object(l.a)(a[s],1)[0],o="upgrade"+e.state.upgrades[n].id,t=e.state.upgrades[n].cost,c=e.state.upgrades[n].dollarIncome,i=e.state.upgrades[n].clickIncome,p=e.state.upgrades[n].dollarTypeIncome,d=e.state.upgrades[n].happinessIncome,r=e.state.upgrades[n].spending,m=e.state.upgrades[n].annualBonus,u=e.state.upgrades[n].happinessCost,h=e.state.upgrades[n].happinessBoost,I=e.state.upgrades[n].dollarBoost;document.getElementById(o).addEventListener("click",(function(o,s,a,l,f,y,B,g,C,b,k,v){!function(n,o,s,a,t,c,l,i,p,d,r,m){if(console.log("click"),e.state.mainCounter>=s&&e.state.mainHappiness>=d&&!1===e.state.upgrades[o].owned||0===s&&e.state.mainHappiness>=d&&!1===e.state.upgrades[o].owned||0===d&&e.state.mainCounter>=s&&!1===e.state.upgrades[o].owned){console.log("can afford"),e.setState((function(e){return{dollarIncome:e.dollarIncome+a}})),e.setState((function(e){return{clickIncome:e.clickIncome+t}})),e.setState((function(e){return{mainCounter:e.mainCounter-s}})),e.setState((function(e){return{dollarTypeIncome:e.dollarTypeIncome+c}})),e.setState((function(e){return{happinessIncome:e.happinessIncome+l}})),e.setState((function(e){return{spending:e.spending+i}})),e.setState((function(e){return{annualBonus:e.annualBonus+p}})),e.setState((function(e){return{mainHappiness:e.mainHappiness-d}})),e.setState((function(e){return{mainHappiness:e.mainHappiness+r}})),e.setState((function(e){return{mainCounter:e.mainCounter+m}})),e.state.spending<0&&e.setState((function(e){return{spending:0}}));var u=e.state.upgrades;u[o].owned=!0,e.setState((function(e){return{upgrades:u}}))}else e.state.mainCounter}(0,n,t,c,i,p,d,r,m,u,h,I)}),!1)},s=0,a=Object.entries(this.state.upgrades);s<a.length;s++)o()}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){var e=this.state,n=e.upgrades,o=e.searchfield,a=e.mainCounter,t=e.mainHappiness,c=e.dollarIncome,l=e.clickIncome,i=e.happinessIncome,p=e.spending,d=e.hoursPassed,r=e.daysPassed,m=e.yearsPassed,C=e.dollarTypeInvoice,b=e.dollarTypeIncome,k=e.annualBonus,v=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(s.jsxs)("div",{className:"tc",children:[Object(s.jsx)("h1",{className:"ma1",children:"Billionaire!"}),Object(s.jsx)(B,{mainCounter:a,numberWithCommas:this.numberWithCommas}),Object(s.jsx)(y,{dollarIncome:c,hoursPassed:d,daysPassed:r,yearsPassed:m,mainHappiness:t,happinessIncome:i,spending:p,annualBonus:k}),Object(s.jsxs)(g,{children:[Object(s.jsx)(I,{onTypeChange:this.onTypeChange,dollarTypeInvoice:C,dollarTypeIncome:b,cashOut:this.cashOut}),Object(s.jsx)(f,{clickIncome:l,clickCashOut:this.clickCashOut}),Object(s.jsx)(u,{upgrades:v,numberWithCommas:this.numberWithCommas})]}),Object(s.jsx)(h,{resetButton:this.resetButton})]})}}]),o}(a.Component)),k=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,25)).then((function(n){var o=n.getCLS,s=n.getFID,a=n.getFCP,t=n.getLCP,c=n.getTTFB;o(e),s(e),a(e),t(e),c(e)}))};o(23);c.a.render(Object(s.jsx)(b,{}),document.getElementById("root")),k()}],[[24,1,2]]]);
//# sourceMappingURL=main.5e2f0389.chunk.js.map