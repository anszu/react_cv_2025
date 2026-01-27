import{j as e}from"./iframe-4AwdhyB0.js";import{D as c,L as l,a as o,S as p}from"./List-toHrcX-5.js";import{L as a}from"./LoadingSpinner-BGVkvD73.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Shared"},s={render:()=>e.jsx(c,{description:"This is an example description rendered in italics and small text."})},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{href:"https://example.com",children:"This is an example link."}),"  with optional classes:  ",e.jsx(l,{href:"https://example.com",optionalClasses:"text-blue-500",children:"This is an example link."})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx("li",{children:"First"}),e.jsx("li",{children:"Second"}),e.jsx("li",{children:"Third"})]}),"  with optional classes:  ",e.jsxs(o,{optionalClasses:"text-blue-500",children:[e.jsx("li",{children:"First"}),e.jsx("li",{children:"Second"}),e.jsx("li",{children:"Third"})]})]})},r={render:()=>e.jsxs(e.Fragment,{children:["  Small:  ",e.jsx(a,{size:"sm"}),"  Medium:  ",e.jsx(a,{size:"md"}),"  Large:  ",e.jsx(a,{size:"lg"})]})},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"This is an example subtitle."}),"  with optional classes:  ",e.jsx(p,{optionalClasses:"bg-yellow-200",children:"This is an example subtitle."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Description description="This is an example description rendered in italics and small text." />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Link href="https://example.com">This is an example link.</Link>
            &nbsp; with optional classes: &nbsp;
            <Link href="https://example.com" optionalClasses="text-blue-500">
                This is an example link.
            </Link>
        </>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <List>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </List>
            &nbsp; with optional classes: &nbsp;
            <List optionalClasses="text-blue-500">
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </List>
        </>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
            &nbsp; Small: &nbsp;
            <LoadingSpinner size="sm" />
            &nbsp; Medium: &nbsp;
            <LoadingSpinner size="md" />
            &nbsp; Large: &nbsp;
            <LoadingSpinner size="lg" />
        </>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Subtitle>This is an example subtitle.</Subtitle>
            &nbsp; with optional classes: &nbsp;
            <Subtitle optionalClasses="bg-yellow-200">
                This is an example subtitle.
            </Subtitle>
        </>
}`,...t.parameters?.docs?.source}}};const b=["DescriptionElement","LinkElement","ListElement","LoadingSpinnerElement","SubtitleElement"];export{s as DescriptionElement,n as LinkElement,i as ListElement,r as LoadingSpinnerElement,t as SubtitleElement,b as __namedExportsOrder,u as default};
