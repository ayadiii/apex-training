const pages = ['pull', 'push', 'legs', 'endurance', 'upper'];
const content = document.getElementById('content');

function load(page) {
    if (page === 'dashboard') {
        const prs = JSON.parse(
            localStorage.getItem('prs') ||
            '{"pull":20,"push":55,"dips":50}'
        );

        content.innerHTML = 
            <h1>Dashboard</h1>

            <div class="card">
                <h3>Pull-Up PR</h3>
                <p>${prs.pull}</p>
            </div>

            <div class="card">
                <h3>Push-Up PR</h3>
                <p>${prs.push}</p>
            </div>

            <div class="card">
                <h3>Dips PR</h3>
                <p>${prs.dips}</p>
            </div>
        ;
        return;
    }

    if (page === 'emom' || page === 'amrap') {
        content.innerHTML = 
            <h1>${page.toUpperCase()}</h1>

            <div class="card">
                <input id="result" placeholder="Enter result">
                <button class="action" onclick="saveSpecial('${page}')">
                    Save
                </button>
            </div>
        ;
        return;
    }

    let data = JSON.parse(localStorage.getItem(page) || '[]');

    content.innerHTML = 
        <h1>${page.toUpperCase()}</h1>

        <button class="action" onclick="addExercise('${page}')">
            Add Exercise
        </button>

        <div id="list"></div>
    ;

    renderList(page, data);
}

function renderList(page, data) {
    const list = document.getElementById('list');

    if (!list) return;

    list.innerHTML = data.map((exercise, index) => 
        <div class="card">

            <input
                value="${exercise.name}"
                onchange="updateEx('${page}', ${index}, 'name', this.value)"
            >

            <input
                value="${exercise.sets}"
                onchange="updateEx('${page}', ${index}, 'sets', this.value)"
            >

            <input
                value="${exercise.reps}"
                onchange="updateEx('${page}', ${index}, 'reps', this.value)"
            >

            <button onclick="removeEx('${page}', ${index})">
                Delete
            </button>

        </div>
    ).join('');
}

function addExercise(page) {
    let data = JSON.parse(localStorage.getItem(page) || '[]');

    data.push({
        name: 'New Exercise',
        sets: 3,
        reps: 10
    });

    localStorage.setItem(page, JSON.stringify(data));

    load(page);
}

function updateEx(page, index, key, value) {
    let data = JSON.parse(localStorage.getItem(page) || '[]');

    data[index][key] = value;

    localStorage.setItem(page, JSON.stringify(data));
}

function removeEx(page, index) {
    let data = JSON.parse(localStorage.getItem(page) || '[]');

    data.splice(index, 1);

    localStorage.setItem(page, JSON.stringify(data));

    load(page);
}

function saveSpecial(page) {
    const value = document.getElementById('result').value;

    localStorage.setItem(page + '_result', value);

    alert('Saved!');
}

document.querySelectorAll('.nav').forEach(button => {
    button.onclick = () => {

        document
            .querySelectorAll('.nav')
            .forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        load(button.dataset.page);
    };
});

load('dashboard');