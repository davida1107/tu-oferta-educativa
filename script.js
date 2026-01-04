const programas = [
    { id: 1, nombre: "Auxiliar Administrativo en Salud", cat: "Salud", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 1200000, ini: 150000, c: 5, v: 220000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 1100000, ini: 100000, c: 5, v: 210000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 830000, ini: 100000, c: 5, v: 210000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 1200000, ini: 150000, c: 5, v: 220000 }, { t: "Sábados 7 am a 5 pm", total: 1590000, ini: 250000, c: 5, v: 278000 }, { t: "Domingos 7 am a 5 pm", total: 1300000, ini: 150000, c: 5, v: 240000 }] },
    { id: 2, nombre: "Atención Integral a la Primera Infancia", cat: "Salud", horarios: [{ t: "Lunes a Viernes 8 am a 12 pm", total: 920000, ini: 120000, c: 5, v: 170000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 700000, ini: 50000, c: 5, v: 140000 }, { t: "Sábados 7 am a 5 pm", total: 1000000, ini: 150000, c: 5, v: 180000 }, { t: "Domingos 7 am a 5 pm", total: 950000, ini: 100000, c: 5, v: 180000 }] },
    { id: 3, nombre: "Auxiliar en Enfermería", cat: "Salud", horarios: [{ t: "Lunes a Viernes 2 pm a 5:30 pm", total: 2650000, ini: 600000, c: 5, v: 430000 }]},
    { id: 4, nombre: "Auxiliar en Salud Pública", cat: "Salud", horarios: [{ t: "Lunes a Viernes 8 am a 12 pm", total: 1400000, ini: 230000, c: 5, v: 254000 }]},
    { id: 5, nombre: "Auxiliar en Salud Oral", cat: "Salud", horarios: [{ t: "Lunes a Viernes 6 am a 10 am", total: 1700000, ini: 300000, c: 4, v: 280000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 1700000, ini: 300000, c: 4, v: 280000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 1700000, ini: 300000, c: 4, v: 280000 }] },
    { id: 6, nombre: "Auxiliar en Servicios Farmacéuticos", cat: "Salud", horarios: [{ t: "Lunes a Viernes 6 am a 10 am", total: 1600000, ini: 300000, c: 4, v: 260000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 1600000, ini: 300000, c: 4, v: 260000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 1600000, ini: 300000, c: 4, v: 260000 }] },
    { id: 19, nombre: "Acondicionamiento Físico y Entrenamiento Deportivo", cat: "Salud", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 600000, ini: 50000, c: 5, v: 110000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },

    { id: 10, nombre: "Secretariado", cat: "Administracion", horarios: [{ t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }] },
    { id: 12, nombre: "Asistente de Mercadeo", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }] },
    { id: 13, nombre: "Operación de Servicios Turísticos y Hoteleros", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }] },
    { id: 14, nombre: "Asistente de Comercio Exterior", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }] },
    { id: 15, nombre: "Asistente en Logística en Centros de Distribución", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },
    { id: 16, nombre: "Asistente en Contabilidad y Finanzas", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 600000, ini: 50000, c: 5, v: 110000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },
    { id: 17, nombre: "Asistente en Gestión Humana", cat: "Administracion", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 600000, ini: 50000, c: 5, v: 110000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },

    { id: 11, nombre: "Auxiliar en Comunicación Empresarial", cat: "Comunicacion e Informatica", horarios: [{ t: "Sábados 7 am a 5 pm", total: 780000, ini: 130000, c: 5, v: 140000 }] },
    { id: 18, nombre: "Asistente en Servicios Administrativos", cat: "Comunicacion e Informatica", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 600000, ini: 50000, c: 5, v: 110000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },
    { id: 31, nombre: "Asistente en Diseño Gráfico", cat: "Comunicacion e Informatica", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 850000, ini: 100000, c: 5, v: 160000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 800000, ini: 100000, c: 5, v: 150000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 880000, ini: 100000, c: 5, v: 166000 }, { t: "Sábados 7 am a 5 pm", total: 1000000, ini: 170000, c: 5, v: 176000 }] },
    { id: 32, nombre: "Asistente en Sistemas", cat: "Comunicacion e Informatica", horarios: [{ t: "Lunes a Viernes 6 am a 8 am", total: 800000, ini: 120000, c: 5, v: 146000 }, { t: "Lunes a Viernes 8 am a 12 pm", total: 720000, ini: 70000, c: 5, v: 140000 }, { t: "Lunes a Viernes 2 pm a 5:30 pm", total: 600000, ini: 50000, c: 5, v: 110000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 780000, ini: 100000, c: 5, v: 146000 }, { t: "Sábados 7 am a 5 pm", total: 900000, ini: 100000, c: 5, v: 170000 }, { t: "Domingos 7 am a 5 pm", total: 800000, ini: 100000, c: 5, v: 150000 }] },

    { id: 40, nombre: "Bachillerato", cat: "Bachillerato", horarios: [{ t: "Lunes a Viernes 9 am a 11:15 am", total: 500000, ini: 100000, c: 5, v: 90000 }, { t: "Lunes a Viernes 6 pm a 8 pm", total: 500000, ini: 100000, c: 5, v: 90000 }, { t: "Sábados 7 am a 5 pm", total: 500000, ini: 100000, c: 5, v: 90000 }, { t: "Domingos 7 am a 5 pm", total: 500000, ini: 100000, c: 5, v: 90000 }] }
];

function buildCards(data) {
    const main = document.getElementById('contenedor-programas');
    if(!main) return;
    main.innerHTML = data.map(prog => `
        <article class="card">
            <h2 style="text-align: center; margin-bottom: 15px;">${prog.nombre}</h2>
            
            <p class="label-info">Elige tu horario:</p>
            <select class="select-horario" onchange="updateUI(this, ${prog.id})">
                ${prog.horarios.map((h, i) => `<option value="${i}">${h.t}</option>`).join('')}
            </select>
            
            <div id="price-ctx-${prog.id}" class="caja-pago"></div>
            
            <button class="btn-whatsapp" onclick="handleContact('${prog.nombre}', ${prog.id})" 
                style="font-size: 1.1rem; font-weight: bold; display: flex; align-items: center; justify-content: center; width: 100%; margin-top: 15px;">
                <i class="fab fa-whatsapp" style="margin-right: 10px; font-size: 1.4rem;"></i>
                Consulta por WhatsApp
            </button>
        </article>
    `).join('');
    data.forEach(p => updateUI(null, p.id));
}

function updateUI(el, id) {
    const prog = programas.find(x => x.id === id);
    if(!prog) return;
    const index = el ? el.value : 0;
    const h = prog.horarios[index];
    const ctx = document.getElementById(`price-ctx-${id}`);
    if(!ctx) return;
    
    ctx.innerHTML = `
        <div style="text-align: center;">
            <div class="monto-inicial">Inicial: $${h.ini.toLocaleString()}</div>
            <div class="monto-cuotas">+ ${h.c} cuotas de $${h.v.toLocaleString()}</div>
            <p class="contado-secundario">Pago contado: $${h.total.toLocaleString()} el semestre</p>
        </div>
    `;
}

function filtrarProgramas() {
    const query = document.getElementById('buscador').value.toLowerCase();
    const cat = document.getElementById('filtro-categoria').value;
    const filtered = programas.filter(p => {
        const coincideNombre = p.nombre.toLowerCase().includes(query);
        const coincideCat = (cat === 'todos' || p.cat === cat);
        return coincideNombre && coincideCat;
    });
    buildCards(filtered);
}

function handleContact(name, id) {
    const sel = document.querySelector(`#price-ctx-${id}`).closest('article').querySelector('select');
    const h = sel.options[sel.selectedIndex].text;
    const num = "573052495483"; 
    window.open(`https://wa.me/${num}?text=Hola, me interesa ${name} en el horario ${h}`);
}


document.addEventListener('DOMContentLoaded', () => buildCards(programas));
