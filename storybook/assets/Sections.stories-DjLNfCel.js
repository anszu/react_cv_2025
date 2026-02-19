import{j as a,a as i,S as e}from"./iframe-07mXyKFn.js";import{S as n}from"./Sections-BXcyiTKt.js";import"./preload-helper-PPVm8Dsz.js";import"./Match-OmYLIXYJ.js";import"./InfoBox-BLPPcU98.js";import"./LoadingSpinner-BvP1JXqh.js";import"./Section-oIlZPM34.js";import"./Content-BtWPDizz.js";import"./List-0NABdXZF.js";const x={title:"Sections",component:n},s={contentData:{},contentError:null,contentLoading:!1,sectionData:[],sectionLoading:!1,sectionError:null},c=[{id:e.HEADING,title:"CV with empty content"},{id:e.CONTACT},{id:e.SUMMARY},{id:e.EDUCATION},{id:e.EXPERIENCE},{id:e.PROJECTS},{id:e.REFEREES},{id:e.SKILLS},{id:e.VOLUNTEERING}],t={},o={render:()=>a.jsx(i.Provider,{value:{...s,sectionLoading:!0},children:a.jsx(n,{})})},r={render:()=>a.jsx(i.Provider,{value:{...s,sectionData:[...c]},children:a.jsx(n,{})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DataContext.Provider value={{
    ...mockProviderValue,
    sectionLoading: true
  }}>
            <Sections />
        </DataContext.Provider>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DataContext.Provider value={{
    ...mockProviderValue,
    sectionData: [...mockSectionData]
  }}>
            <Sections />
        </DataContext.Provider>
}`,...r.parameters?.docs?.source}}};const C=["Default","Loading","EmptyContent"];export{t as Default,r as EmptyContent,o as Loading,C as __namedExportsOrder,x as default};
