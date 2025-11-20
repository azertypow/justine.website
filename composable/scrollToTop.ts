export function scrollToTop() {
  const appElement = document.querySelector('#app-element')

  console.log(appElement)
  console.log('coucou')

  if(!(appElement instanceof HTMLElement)) return
  appElement.scrollTo({
    top: 0,
    behavior: 'instant',
  })
}
