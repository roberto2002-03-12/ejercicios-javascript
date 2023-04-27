/*
crea una promesa para que se solucione con el parametro
*/

async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
};

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t));
