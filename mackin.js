function extractISBNS() {
  let rows = document.querySelectorAll(".htmlTable tbody .htmlTable-row");
  let isbns = Array.from(rows).map((row) =>
    row.querySelector(".htmlTable-cell:nth-child(6)").textContent.trim()
  );
  navigator.clipboard
    .writeText(isbns.join("\n"))
    .then(() => {
      statusModal(`${isbns.length} ISBNs copied to clipboard`);
    })
    .catch((error) => {
      statusModal("Failed to copy ISBNs to clipboard - " + error);
    });

  return isbns;
}

function statusModal(message) {
  let modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.zIndex = "1000";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.color = "white";
  modal.style.fontSize = "2em";
  modal.textContent = message;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
  }, 2000);
}

console.log(`
 ┏┓
 ┃┃╱╲ In this
 ┃╱╱╲╲ house
 ╱╱╭╮╲╲ we are kind
▔▏┗┛▕▔ & patient
╱▔▔▔▔▔▔▔▔▔▔╲
with Jason Allen who made this
and is just doing his best
 ╱╱┏┳┓╭╮┏┳┓ ╲╲
▔▏┗┻┛┃┃┗┻┛▕▔`);

// Bookmarklet:
// javascript:(function(){function extractISBNS(){let rows=document.querySelectorAll(".htmlTable tbody .htmlTable-row");let isbns=Array.from(rows).map(row=>row.querySelector(".htmlTable-cell:nth-child(6)").textContent.trim());navigator.clipboard.writeText(isbns.join("\n")).then(()=>{statusModal(`${isbns.length} ISBNs copied to clipboard`);}).catch(error=>{statusModal("Failed to copy ISBNs to clipboard - "+error);});return isbns;}function statusModal(message){let modal=document.createElement("div");modal.style.position="fixed";modal.style.zIndex="1000";modal.style.top="0";modal.style.left="0";modal.style.width="100%";modal.style.height="100%";modal.style.backgroundColor="rgba(0, 0, 0, 0.5)";modal.style.display="flex";modal.style.justifyContent="center";modal.style.alignItems="center";modal.style.color="white";modal.style.fontSize="2em";modal.textContent=message;document.body.appendChild(modal);setTimeout(()=>{modal.remove();},2000);}console.log(`%0A%20%E2%94%8F%E2%95%93%0A%20%E2%94%83%E2%94%83%E2%95%B1%E2%95%B2%20In%20this%0A%20%E2%94%83%E2%95%B1%E2%95%B1%E2%95%B2%E2%95%B2%20house%0A%20%E2%95%B1%E2%95%B1%E2%94%AD%E2%94%AE%E2%95%B2%E2%95%B2%20we%20are%20kind%0A%E2%96%94%E2%8F%8F%E2%94%97%E2%94%9B%E2%96%94%E2%8F%8F%20%26%20patient%0A%E2%95%B1%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%96%94%E2%95%B2%0Awith%20Jason%20Allen%20who%20made%20this%0Aand%20is%20just%20doing%20his%20best%0A%20%E2%95%B1%E2%95%B1%E2%94%8F%E2%94%B3%E2%94%93%E2%94%AD%E2%94%AE%E2%94%8F%E2%94%B3%E2%94%93%20%E2%95%B2%E2%95%B2%0A%E2%96%94%E2%8F%8F%E2%94%97%E2%95%BB%E2%94%9B%E2%94%97%E2%95%BB%E2%94%9B%E2%96%94%E2%8F%8F`);extractISBNS();})();
