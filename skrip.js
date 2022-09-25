$(document).ready(function () {
    const mymodal = new bootstrap.Modal('#mymodal')
    const data = [
        {
            kategori : "Hewan Unggas",
            binatang : ["ayam", "kalkun", "angsa", "bebek"]
        },
        {
            kategori : "Hewan Ternak",
            binatang : ["sapi", "kambing", "domba", "kerbau"]
        },
        {
            kategori : "Hewan Buas",
            binatang : ["harimau", "buaya", "singa", "serigala"]
        },
    ];

    for (let i = 0; i < data.length; i++) {
       $('#accordionExample').append(`
       <div class="accordion-item">
            <h2 class="accordion-header" id="heading${i}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                ${data[i].kategori}
            </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse show" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <div class="row" id="accordionBody${i}"></div>
            </div>
            </div>
        </div>
       `);
       for (let j = 0; j < data[i].binatang.length; j++) {
            $(`#accordionBody${i}`).append(`
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 id="${data[i].binatang[j]}">${data[i].binatang[j]}</h3>
                    </div>
                </div>
            </div>
            `)
       }
    }
    $('.card').each(function () {
        $(this).click(function () {
            const binatang = $(this).find('h3').attr('id');
            $('#gambar').attr({
                src: `images/${binatang}.jpg` 
            });
            $('.audio').append(`
            <audio src="audio/${binatang}.mp3" autoplay id="suara"></audio>
            `);
            mymodal.show();
        });
        $('#mymodal').on('hidden.bs.modal', function () {
            $('#suara').remove();
        })
    });
})