import{j as u,S as e,a as E}from"./iframe-1kp_sixH.js";import{C as I}from"./Content-BtN6wswr.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"Content",component:I},g={contentData:[],contentError:null,contentLoading:!1,sectionData:[],sectionLoading:!1,sectionError:null},r={render:()=>u.jsx(E.Provider,{value:{...g,contentLoading:!0},children:u.jsx(I,{sectionId:e.EXPERIENCE})})},s={args:{sectionId:e.HEADING}},o={args:{sectionId:e.CONTACT}},n={args:{sectionId:e.SUMMARY}},a={args:{sectionId:e.SKILLS}},t={args:{sectionId:e.EXPERIENCE}},c={args:{sectionId:e.EDUCATION}},i={args:{sectionId:e.PROJECTS}},d={args:{sectionId:e.VOLUNTEERING}},m={args:{sectionId:e.REFEREES}},p={args:{sectionId:"non_existent_section"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DataContext.Provider value={{
    ...mockProviderValue,
    contentLoading: true
  }}>
            <Content sectionId={SectionId.EXPERIENCE} />
        </DataContext.Provider>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.HEADING
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.CONTACT
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.SUMMARY
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.SKILLS
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.EXPERIENCE
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.EDUCATION
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.PROJECTS
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.VOLUNTEERING
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: SectionId.REFEREES
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sectionId: 'non_existent_section' as unknown as SectionId
  }
}`,...p.parameters?.docs?.source}}};const N=["Loading","Heading","Contact","Summary","Skills","Experience","Education","Projects","Volunteering","Referees","NonExistentSectionId"];export{o as Contact,c as Education,t as Experience,s as Heading,r as Loading,p as NonExistentSectionId,i as Projects,m as Referees,a as Skills,n as Summary,d as Volunteering,N as __namedExportsOrder,R as default};
