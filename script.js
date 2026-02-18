document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    var header = document.getElementById('header');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        var icon = menuToggle.querySelector('i');
        icon.className = nav.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
    });

    document.querySelectorAll('#nav a').forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('open');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('#nav a');

    window.addEventListener('scroll', function() {
        var current = '';
        sections.forEach(function(section) {
            var top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .training-card, .nr-item, .doc-item, .law-block, .fisc-block, .consequence-card, .check-item').forEach(function(el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var nome = form.querySelector('input[type="text"]').value;
            var email = form.querySelector('input[type="email"]').value;
            var tel = form.querySelector('input[type="tel"]').value;
            var empresa = form.querySelectorAll('input[type="text"]')[1].value;
            var servico = form.querySelector('select').value;
            var msg = form.querySelector('textarea').value;

            var texto = 'Olá! Gostaria de solicitar um orçamento.%0A%0A' +
                'Nome: ' + nome + '%0A' +
                'E-mail: ' + email + '%0A' +
                'Telefone: ' + tel + '%0A' +
                'Empresa: ' + empresa + '%0A' +
                'Serviço: ' + servico + '%0A' +
                'Mensagem: ' + msg;

            window.open('https://wa.me/5533998004649?text=' + texto, '_blank');
        });
    }
});
