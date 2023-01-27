document.addEventListener("DOMContentLoaded", () => {
  fillTable();
});

function fillTable() {
  const rowsArr = [
    {
      imageName: "icon-r.png",
      isActive: true,
    },
    {
      imageName: "lvBet.png",
      isActive: false,
    },
    {
      imageName: "888.png",
      isActive: false,
    },
    {
      imageName: "friday.png",
      isActive: false,
    },
    {
      imageName: "redStar.png",
      isActive: false,
    },
  ];

  let trs = [];

  rowsArr.map((row, index) => {
    trs.push(getRow(index, row));
  });

  document.getElementById("t-body").innerHTML = trs.join("");
}

function tooggleActiveClass(row) {
  if (row.classList.contains("active")) {
    return;
  } else if (!row.classList.contains("active")) {
    document.querySelector('tr[class~="active"]').classList.remove("active");
    row.classList.add("active");
  }
}

function downloadRows() {
  const rowsArr = [
    {
      imageName: "icon-r.png",
      isActive: false,
    },
    {
      imageName: "lvBet.png",
      isActive: false,
    },
    {
      imageName: "888.png",
      isActive: false,
    },
  ];

  const tBody = document.getElementById("t-body");
  let start = tBody.children.length;

  let trs = [];

  rowsArr.map((row) => {
    trs.push(getRow(start, row));
    start++;
  });

  tBody.insertAdjacentHTML("beforeend", trs.join(""));
}

function getRow(index, row) {
  const activeClass = row.isActive ? "active" : "";

  return `
  <tr class="casino-list__item ${activeClass}" onclick="tooggleActiveClass(this)">
    <td class="casino-list__number">
      <div class="inner">${index + 1}</div></td>
    <td>
      <div class="inner">
        <img src="./assets/images/${row.imageName}" alt="casino R"/>
      </div>
    </td>
    <td>
      <div class="inner bonus">
        <span>100% up to</span>
        <span> €100+100 FS</span>
        <span>+300 bonus Spins</span>
      </div>
    </td>
    <td>
      <div class="inner rating">
        <span>
          <img src="./assets/images/stars.png" alt="stars" />
        </span>
        <span>8.45</span>
        <span><a href="">Read Review</a></span>
      </div>
    </td>
    <td>
      <div class="inner deposit">
        <img src="./assets/images/mastercard.png" alt="mastercard" />
        <img src="./assets/images/ecoPayz.png" alt="ecoPayz" />
        <img src="./assets/images/paysafecard.png" alt="paysafecard"/>
        <img src="./assets/images/PayPal.png" alt="PayPal" />
        <img src="./assets/images/neteller.png" alt="neteller" />
        <img src="./assets/images/trustly.png" alt="trustly" />
      </div>
    </td>
    <td>
    <div class="inner">
      <button type="button" class="casino-list__button">Get Bonus</button>
      <button type="button" class="casino-list__button mob">Visit Casino</button>
    </div>
    </td>
  </tr>
  `;
}
