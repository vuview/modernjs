// 2.11: Literal template

const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${age > 31 ? 'Over 30' : 'Under 30'}
    </ul>
`;

document.body.innerHTML = html ;