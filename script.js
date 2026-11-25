// SHOW EMPLOYEE FORM
function showEmployeeForm() {
    document.getElementById("employeeForm").hidden = false;
}
function hideEmployeeForm() {
    document.getElementById("employeeForm").hidden = true;
}
// ADD EMPLOYEE
document.getElementById("addEmployeeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("empName").value;
let email =  document.getElementById("empEmail").value;
let department = document.getElementById("empDepartment").value;
let position = document.getElementById("empPosition").value;
let table = document.getElementById("employeeTable");
let id = 101 + table.rows.length;
let row = table.insertRow();
row.innerHTML =  
updateEmployeeCount();
this.requestFullscreen();
hideEmployeeForm();
});
// SAFE TEXT DISPLAY
function escapeHTML(value) {
return value.replace(/[&<>""]/g,function(char) {
    return {
        "&": "&amp;",
        "<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#039;"
    }[char];
});
}
// DELETE EMPLOYEE
function deleteEmployee(button) {
    if(confirm("Are you sure you want to delete this employee?")) {
        button.closest("tr").remove();
        updateEmployeeCount();
    }
}
// UPDATE EMPLOYEE COUNT
function updateEmployeeCount() {
    let count = document.getElementById("employeeTable").rows.length;
    document.getElementById("totalEmployees").innerText = count;
}
// SEARCH EMPLOYEE
function searchEmployees() {
    let search = document.getElementById("searchEmployee")
    .value.toLowerCase();
    let rows = document.querySelectorAll("#employeeTable tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase() .includes(search) ? "" : "none";
    });
}
// MARK ATTENDANCE
document.getElementById("attendanceForm") .addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("attendanceName").value;
    let status = document.getElementById("attendanceStatus").value;
    let table=document.getElementById("attendanceTable");
    let row = table.insertRow();
    row.innerHTML =
    updatePresentCount();
    this.reset();
});
function updatePresentCount() {
    let rows = document.querySelectorAll("#attendanceTable tr");
    let count = [...rows].filtet(row =>
        row.cells[2]?.innerText === "Present"
    ).length;
    document.getElementById("presentCount").innerText = count;
}
// APPLY LEAVE
document.getElementById("leaveForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("leaveName").value;
    let type = document.getElementById("leaveType").value;
    let date = document.getElementById("leaveDate").value;
    let table = document.getElementById("leaveTable");
    let row = table.insertRow();
    updatePendingCount();
    this.reset();
});
// APPROVE LEAVE
function approveLeave(button) {
    let row = button.closest("tr");
    row.cells[3].innerText = "Approved";
    row.cells[4].innerHTML = "Completed";
    updatePendingCount();
}
// REJECT LEAVE
function rejectLeave(button) {
    let row = button.closest("tr");
    row.cells[3].innerText = "Rejected";
    row.cells[4].innerHTML = "Completed";
    updatePendingCount();
}
// UPDATE PENDING LEAVE COUNT
function updatePendingCount() {
    let rows = document.querySelectorAll("#leaveTable tr");
    let count = [...rows].filter(row =>
        row.cells[3]?.innerText === "Pending"
    ).length;
    document.getElementById("pendingCount").innerText = count;
}