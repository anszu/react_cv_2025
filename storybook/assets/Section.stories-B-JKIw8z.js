import{S as n,j as o,a}from"./iframe-BgOUhMhG.js";import{S as r}from"./Section-DQXiHvod.js";import"./preload-helper-PPVm8Dsz.js";import"./Content-B2huI64Y.js";const m={title:"Sections/Section",component:r},i={contentData:[],contentError:null,contentLoading:!1,sectionData:[],sectionLoading:!1,sectionError:null},e={args:{id:n.HEADING,title:"Header",icon:"📚"}},t={render:()=>o.jsx(a.Provider,{value:{...i,contentLoading:!0},children:o.jsx(r,{id:n.EXPERIENCE,title:"Experience",icon:"😎"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const p=["Default","LoadingContent"];export{e as Default,t as LoadingContent,p as __namedExportsOrder,m as default};
