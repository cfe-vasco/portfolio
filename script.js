let visibleMenu = false;

function showHideMenu() {
  // Funcion que oculta o muestra el menú
  if (visibleMenu) {
    document.getElementById('nav').classList = '';
    visibleMenu = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    visibleMenu = true;
  }
}

function select() {
  // Oculta el menú una vez se selecciona una opción
  document.getElementById('nav').classList = '';
  visibleMenu = false;
}

// Funcion que aplica las animaciones de las habilidades
function skillsEfect() {
  var skills = document.getElementById('skills');
  var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
  if (skills_distance >= 300) {
    let skills = document.getElementsByClassName('progress');
    skills[0].classList.add('javascript');
    skills[1].classList.add('htmlcss');
    skills[2].classList.add('typescript');
    skills[3].classList.add('dart');
    skills[4].classList.add('php');
    skills[5].classList.add('csharp');
    skills[6].classList.add('angular');
    skills[7].classList.add('flutter');
    skills[8].classList.add('git');
    skills[9].classList.add('react');
    skills[10].classList.add('postgresql');
    skills[11].classList.add('firebase');
    skills[12].classList.add('figma');
    skills[13].classList.add('comunication');
    skills[14].classList.add('teamWork');
    skills[15].classList.add('creativity');
    skills[16].classList.add('dedication');
    skills[17].classList.add('project');
    skills[18].classList.add('adaptation');
    skills[19].classList.add('responsability');
    skills[20].classList.add('punctuality');
  }
}

// Detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  skillsEfect();
};

// Descargar el Curriculum

function downloadPDF() {
  var url = 'CV/CV APRIL 2023 CHRISTOPHER VASCO.pdf';

  // Crear enlace temporal con el atributo href apuntando al archivo PDF
  var enlaceTemporal = document.createElement('a');
  enlaceTemporal.setAttribute('href', url);
  enlaceTemporal.setAttribute('target', '_blank');
  enlaceTemporal.style.display = 'none';
  document.body.appendChild(enlaceTemporal);

  // Simular clic en el enlace temporal
  enlaceTemporal.click();

  // Eliminar el enlace temporal
  document.body.removeChild(enlaceTemporal);
}

// Libreria de mensajeria
const btn = document.getElementById('button');
const alertContainer = document.getElementById('alert-container');

btn.addEventListener('click', function (event) {
  event.preventDefault();

  // Validar campos
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  if (
    name.value === '' ||
    phone.value === '' ||
    email.value === '' ||
    subject.value === '' ||
    message.value === ''
  ) {
    showAlert('danger', 'Please fill in all fields');
    return;
  }

  btn.innerHTML = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_n3qks4q';

  emailjs.sendForm(serviceID, templateID, document.getElementById('form')).then(
    () => {
      btn.innerHTML = 'Send Email <i class="fa-solid fa-paper-plane"></i>';
      showAlert(
        'success',
        'Message sent! Thank you very much for contacting me.'
      );
    },
    (err) => {
      btn.innerHTML = 'Send Email <i class="fa-solid fa-paper-plane"></i>';
      showAlert('danger', JSON.stringify(err));
    }
  );

  name.value = '';
  phone.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
});

function showAlert(type, message) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.appendChild(document.createTextNode(message));
  alertContainer.appendChild(alert);

  // Desaparecer la alerta después de 3 segundos
  setTimeout(() => alert.remove(), 3000);
}
