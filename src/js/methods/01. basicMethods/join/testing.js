// @ts-check

const numbers = Object.keys(new Array(20).fill(null).map(Number));

console.log(numbers.join("--")); // 0--1--2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19
