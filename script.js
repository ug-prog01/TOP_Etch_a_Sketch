const container = document.querySelector("#container");
const PADDING_SIZE = 600;
let value = document.querySelector("#value");
let update = document.querySelector("#update");

let gridSize = 54;

renderGrid();

update.addEventListener("click", () => {
	let updateValue = parseInt(value.value);
	if (typeof parseInt(value.value) == "number" && updateValue !== "") {
		gridSize = parseInt(value.value);
		renderGrid();
	}
});

function renderGrid() {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	for (let i = 0; i < gridSize; i++) {
		let row = document.createElement("div");
		row.id = `${i}`;
		row.style.display = "flex";
		row.style.justifyContent = "center";
		row.style.flexDirection = "row";
		for (let j = 0; j < gridSize; j++) {
			let box = document.createElement("div");
			box.id = `[${i}, ${j}]`;
			box.style.height = `${(PADDING_SIZE / (gridSize)) / 2}px`;
			box.style.width = `${(PADDING_SIZE / (gridSize)) / 2}px`;
			box.style.backgroundColor = "yellow";
			box.style.outline = "1px solid";
			box.style.opacity = "0.1";

			box.addEventListener("mouseover", () => {
				box.style.opacity = parseFloat(box.style.opacity) + 0.1;
				box.style.outline = "";
			})

			row.appendChild(box);
		}
		container.appendChild(row);
	}
}