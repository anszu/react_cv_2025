import{j as t}from"./iframe-CHu4phye.js";import{I as s}from"./InfoBox-CgKm1DDl.js";import"./preload-helper-PPVm8Dsz.js";import"./LoadingSpinner-Cs92SuE7.js";const m={title:"Match/InfoBox",component:s},r={},e={render:()=>t.jsx(s,{loading:!0})},o={render:()=>t.jsx(s,{validationError:"Please provide text!"})},a={render:()=>t.jsx(s,{serverError:"An error occured on the server!"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <InfoBox loading />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <InfoBox validationError="Please provide text!" />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <InfoBox serverError="An error occured on the server!" />
}`,...a.parameters?.docs?.source}}};const p=["Default","Loading","ValidationError","ServerError"];export{r as Default,e as Loading,a as ServerError,o as ValidationError,p as __namedExportsOrder,m as default};
