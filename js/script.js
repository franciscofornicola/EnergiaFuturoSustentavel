document.addEventListener('DOMContentLoaded', () => {

});


const solutions = [
    { title: "Energia Solar", description: "Aproveite a energia do sol para um futuro sustentável.", img: "img/solar.png" },
    { title: "Energia Eólica", description: "Use o poder dos ventos para gerar eletricidade limpa.", img: "img/eolica.png" },
    { title: "Hidrelétrica", description: "Produção de energia a partir de recursos hídricos renováveis.", img: "img/hidreletrica.png" },
    { title: "Geotérmica", description: "Exploração do calor da Terra para geração sustentável.", img: "img/geotermica.png" },
];

const solutionsContainer = document.getElementById("solucoes-cards");

solutions.forEach((solution) => {
    const card = `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${solution.img}" class="card-img-top" alt="${solution.title}">
                <div class="card-body">
                    <h5 class="card-title">${solution.title}</h5>
                    <p class="card-text">${solution.description}</p>
                </div>
            </div>
        </div>
    `;
    solutionsContainer.innerHTML += card;
});


const tecnologias = [
    { title: "Smart Grids", description: "Redes inteligentes para distribuição eficiente de energia." },
    { title: "Armazenamento de Energia", description: "Baterias de alta capacidade para energia limpa." },
    { title: "Energia Solar Avançada", description: "Painéis solares de alta eficiência." },
];

const sliderContainer = document.querySelector(".carousel-inner");
tecnologias.forEach((tech, index) => {
    const slide = `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="d-flex justify-content-center align-items-center">
                <div class="text-center">
                    <h5>${tech.title}</h5>
                    <p>${tech.description}</p>
                </div>
            </div>
        </div>
    `;
    sliderContainer.innerHTML += slide;
});


const ctx = document.getElementById('graficoDesafios').getContext('2d');
const graficoImpactos = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Redução de CO2', 'Empregos Criados', 'Capacidade Instalada'],
        datasets: [{
            label: 'Impactos das Energias Renováveis',
            data: [7000, 12, 3000], 
            backgroundColor: ['#1a7b84', '#1a7b84', '#1a7b84'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 16
                    }
                }
            },
            title: {
                display: true,
                text: 'Impactos das Energias Renováveis',
                font: {
                    size: 20,
                    family: 'Poppins'
                },
                color: '#1a7b84'
            }
        },
        scales: {
            y: {
                type: 'logarithmic',
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Impacto em Escala Global',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    font: {
                        size: 14
                    },
                    color: '#000'
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 14
                    },
                    color: '#000'
                }
            }
        },
        layout: {
            padding: {
                top: 20,
                bottom: 10
            }
        }
    }
});






document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});



