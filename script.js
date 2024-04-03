
const data = [
    { id: 1, name: 'Nahvilee Anne', email: 'nashanne@gmail.com' },
    { id: 2, name: 'Leonah Grace', email: 'leonahgrace@gmail.com' },
    { id: 3, name: 'Ishem Amido', email: 'ishemamido@gmail.com' }
];

function populateTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>
                <button onclick="editEntry(${item.id})">Edit</button>
                <button onclick="deleteEntry(${item.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editEntry(id) {
    alert(`Editing entry with ID: ${id}`);
}

function deleteEntry(id) {
    alert(`Deleting entry with ID: ${id}`);
}

document.addEventListener('DOMContentLoaded', populateTable);
