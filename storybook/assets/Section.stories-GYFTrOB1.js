import{S as n,j as o,a}from"./iframe-M0XSngIW.js";import{S as r}from"./Section-CutEoqgv.js";import"./preload-helper-PPVm8Dsz.js";import"./Content-DGaGK9nr.js";import"./List-Dq3P29CY.js";import"./Match-CD4lwBMA.js";import"./InfoBox-B6J4qu3W.js";import"./LoadingSpinner-ClgmGqyW.js";const x={title:"Sections/Section",component:r},i={contentData:[],contentError:null,contentLoading:!1,sectionData:[],sectionLoading:!1,sectionError:null},e={args:{id:n.HEADING,title:"Header",icon:"📚"}},t={render:()=>o.jsx(a.Provider,{value:{...i,contentLoading:!0},children:o.jsx(r,{id:n.EXPERIENCE,title:"Experience",icon:"😎"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: SectionId.HEADING,
    title: 'Header',
    icon: '📚'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <DataContext.Provider value={{
    ...mockProviderValue,
    contentLoading: true
  }}>
            <Section id={SectionId.EXPERIENCE} title="Experience" icon="😎" />
        </DataContext.Provider>
}`,...t.parameters?.docs?.source}}};const S=["Default","LoadingContent"];export{e as Default,t as LoadingContent,S as __namedExportsOrder,x as default};
