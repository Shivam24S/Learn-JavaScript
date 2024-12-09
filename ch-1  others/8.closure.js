const a = () => {
  let b = 24;

  const c = () => {
    let d = 10;
    console.log(b);
  };
  return c;
};

const op = a();
op();
