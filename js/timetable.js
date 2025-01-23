const timetableData = [
    { day: "Thứ 2", time: "08:00 - 09:30", subject: "Toán Cao cấp", room: "P101", teacher: "ThS. Nguyễn Văn A" },
    { day: "Thứ 3", time: "10:00 - 11:30", subject: "Lý thuyết Mạng", room: "P102", teacher: "TS. Trần Minh B" },
    { day: "Thứ 4", time: "13:00 - 14:30", subject: "Lập trình Web", room: "P103", teacher: "ThS. Hoàng Trung C" },
    { day: "Thứ 5", time: "08:00 - 09:30", subject: "Cơ sở Dữ liệu", room: "P104", teacher: "ThS. Lê Thị D" },
    { day: "Thứ 6", time: "10:00 - 11:30", subject: "Kỹ năng mềm", room: "P105", teacher: "TS. Phan Văn E" },
    { day: "Thứ 7", time: "08:00 - 09:30", subject: "Kỹ thuật phần mềm", room: "P106", teacher: "GV. Vũ Văn G" }
];

function loadTodayTimetable() {
    const today = new Date();
    const currentDay = today.getDay(); 
    const todayTable = document.getElementById('todayTimetableContent');

    const weekdays = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    document.getElementById('todayDate').textContent = weekdays[currentDay];

    todayTable.innerHTML = '';
    timetableData.filter(entry => entry.day === weekdays[currentDay])
        .forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.day}</td>
                <td>Chiều</td>
                <td>1-3</td>
                <td>${entry.room}</td>
                <td>${entry.subject}</td>
                <td>${entry.teacher}</td>
            `;
            todayTable.appendChild(row);
        });
}

function loadFullWeekTimetable() {
    const fullWeekTable = document.querySelector('#fullWeekTimetable tbody');
    fullWeekTable.innerHTML = '';

    timetableData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>Chiều</td>
            <td>1-3</td>
            <td>${entry.room}</td>
            <td>${entry.subject}</td>
            <td>${entry.teacher}</td>
        `;
        fullWeekTable.appendChild(row);
    });
}

function toggleTimetable() {
    const todayTimetable = document.getElementById('todayTimetable');
    const fullWeekTimetable = document.getElementById('fullWeekTimetable');
    const toggleBtn = document.getElementById('toggleBtn');

    if (todayTimetable.style.display === 'none') {
        todayTimetable.style.display = 'block';
        fullWeekTimetable.style.display = 'none';
        toggleBtn.textContent = 'Hiển thị thời khóa biểu cả tuần';
    } else {
        todayTimetable.style.display = 'none';
        fullWeekTimetable.style.display = 'block';
        toggleBtn.textContent = 'Hiển thị thời khóa biểu hôm nay';
    }
}

window.onload = function() {
    loadTodayTimetable();
    loadFullWeekTimetable();
};
