document.getElementById("idheader").innerHTML = `
<nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#"
    ><img src="imágenes/logo MP2.png" alt="Logo DMP" width="50"
  /></a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Productos</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Por marca
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Absorsol</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Wincat</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Poopy pets</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Rubicat</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Por tipo
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Piedras sanitarias</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Orejas</a></li>
            <li><a class="dropdown-item" href="#">Galletitas</a></li>
            <li><a class="dropdown-item" href="#">Huesos</a></li>
            <li><a class="dropdown-item" href="#">Donas</a></li>
            <li><a class="dropdown-item" href="#">Rolls</a></li>
            <li><a class="dropdown-item" href="#">Palitos</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">Bolsitas recolectoras</a>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex mt-3" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Escribí acá"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    </div>
  </div>
</div>
</nav>
<!-- <nav class="container">
        <a href="index.html"
          ><img src="imágenes/logo MP2.png" alt="Logo DMP" width="100"
        /></a>
        <a href="higiene_gatos.html">HIGIENE GATOS</a>
        <a href="higiene_perros.html">HIGIENE PERROS</a>
        <a href="huesos_golosinas.html">VARIEDAD DE HUESOS Y GOLOSINAS</a>
        <a href="contacto.html">CONTACTO</a>
      </nav> -->
<div class="titulo">
  <h1>DISTRIBUIDORA MASCOTAS PUEYRREDÓN</h1>
        <h3>Distribuidores directos de piedras sanitarias</h3>
      </div>`;
