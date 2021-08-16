import "./styles/style.scss"

const windowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const $ = document.querySelector("#app")

const navBar = `
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-active">
      <button class="button">Inicio</button>
      <button class="button">Proyectos</button>
      <button class="button">Contacto</button>
    </div>
  </nav>
`
const showSize = () => {
  console.log(windowSize.width)
}

const init = () => {
  const html = `${navBar}`

  $.innerHTML = html
  window.addEventListener("resize", showSize)
}

init()
