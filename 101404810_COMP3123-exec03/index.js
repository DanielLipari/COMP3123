var http = require("http");
const employeeModule = require('./Employee');  // Importing Employee Module

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        return;  // Stop further execution
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
        return;  // Stop further execution
    }

    if (req.url === '/employee') {
        const employees = employeeModule.getAllEmployees();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employees));
        return;  // Stop further execution
    }

    if (req.url === '/employee/names') {
        const employeeNames = employeeModule.getEmployeeNames();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employeeNames));
        return;  // Stop further execution
    }

    if (req.url === '/employee/totalsalary') {
        const totalSalary = employeeModule.getTotalSalary();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ total_salary: totalSalary }));
        return;  // Stop further execution
    }

    // If no matching route is found, return 404
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

// Start server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});