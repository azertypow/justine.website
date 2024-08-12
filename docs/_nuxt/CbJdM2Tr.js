const e="https://justine.sdrvl.ch";async function n(){return(await fetch(`${e}/site-info`)).json()}async function o(s){return(await fetch(`${e}/project-by-slug/${s}`)).json()}export{o as a,n as f};
