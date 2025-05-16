document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form");

    formulario.addEventListener("submit", function (event) {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const entrada = document.getElementById("entrada").value;
        const salida = document.getElementById("salida").value;
        const habitacion = document.getElementById("habitacion").value;

        if (!nombre || !email || !entrada || !salida || !habitacion) {
            alert("Si us plau, omple tot el formulari");
            event.preventDefault();
            return;
        }

        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const fechaEntrada = new Date(entrada);
        const fechaSalida = new Date(salida);

        if (fechaEntrada < hoy) {
            alert("La data d'entrada no pot ser anterior a la d'avui");
            event.preventDefault();
            return;
        }

        if (fechaEntrada > fechaSalida) {
            alert("La data d'entrada no pot ser posterior a la de sortida");
            event.preventDefault();
            return;
        }

        const confirmar = confirm(` Vols confirmar la reserva a nom de ${nombre} del dia ${entrada} fins al ${salida}?`);
        if (!confirmar) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".fotos");
  const images = document.querySelectorAll(".fotos img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let index = 0;

  let totalWidth = 0;
  images.forEach(img => {
    totalWidth += img.clientWidth;
  });
  slides.style.width = totalWidth + "px";

  function getTranslateX(idx) {
    let offset = 0;
    for (let i = 0; i < idx; i++) {
      offset += images[i].clientWidth;
    }
    return offset;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${getTranslateX(index)}px)`;
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slides.style.transform = `translateX(-${getTranslateX(index)}px)`;
  });
});


